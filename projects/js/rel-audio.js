/**
 * THE REL WORKS // AUDIO SYNTHESIS ENGINE
 * Procedural Web Audio API sound generator.
 * Zero external audio files, 100% offline, zero latency.
 */
(function(window) {
    'use strict';

    let ctx = null;
    let muted = localStorage.getItem('rel_audio_muted') === 'true';

    function getContext() {
        if (!ctx) {
            const AudioCtx = window.AudioContext || window.webkitAudioContext;
            if (AudioCtx) {
                ctx = new AudioCtx();
            }
        }
        if (ctx && ctx.state === 'suspended') {
            ctx.resume();
        }
        return ctx;
    }

    // Auto-resume on first interaction
    function initUserGesture() {
        const unlock = () => {
            getContext();
            window.removeEventListener('pointerdown', unlock);
            window.removeEventListener('keydown', unlock);
        };
        window.addEventListener('pointerdown', unlock, { once: true });
        window.addEventListener('keydown', unlock, { once: true });
    }
    initUserGesture();

    const RelAudio = {
        isMuted: () => muted,

        setMuted: (isMuted) => {
            muted = !!isMuted;
            localStorage.setItem('rel_audio_muted', muted ? 'true' : 'false');
            window.dispatchEvent(new CustomEvent('rel-audio-mute-changed', { detail: { muted } }));
            return muted;
        },

        toggleMute: () => {
            return RelAudio.setMuted(!muted);
        },

        // Crisp tactile mechanical micro-click (satisfying button push)
        click: (pitch = 1) => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            const t = c.currentTime;
            const osc = c.createOscillator();
            const gain = c.createGain();
            const filter = c.createBiquadFilter();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(1400 * pitch, t);
            osc.frequency.exponentialRampToValueAtTime(300 * pitch, t + 0.018);

            filter.type = 'lowpass';
            filter.frequency.setValueAtTime(3200, t);

            gain.gain.setValueAtTime(0.12, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.02);

            osc.connect(filter);
            filter.connect(gain);
            gain.connect(c.destination);

            osc.start(t);
            osc.stop(t + 0.025);
        },

        // Heavy mechanical snap / toggle switch
        snap: () => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            const t = c.currentTime;
            const osc = c.createOscillator();
            const gain = c.createGain();

            osc.type = 'triangle';
            osc.frequency.setValueAtTime(440, t);
            osc.frequency.exponentialRampToValueAtTime(80, t + 0.035);

            gain.gain.setValueAtTime(0.18, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.04);

            osc.connect(gain);
            gain.connect(c.destination);

            osc.start(t);
            osc.stop(t + 0.045);
        },

        // High-tech digital chirp / notification
        chirp: (freq = 900) => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            const t = c.currentTime;
            const osc = c.createOscillator();
            const gain = c.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(freq, t);
            osc.frequency.exponentialRampToValueAtTime(freq * 1.6, t + 0.06);

            gain.gain.setValueAtTime(0.08, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.07);

            osc.connect(gain);
            gain.connect(c.destination);

            osc.start(t);
            osc.stop(t + 0.08);
        },

        // Ascending confirmation / success chime
        success: () => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            const notes = [523.25, 659.25, 783.99, 1046.50]; // C5, E5, G5, C6
            notes.forEach((freq, idx) => {
                const t = c.currentTime + idx * 0.05;
                const osc = c.createOscillator();
                const gain = c.createGain();

                osc.type = 'sine';
                osc.frequency.setValueAtTime(freq, t);

                gain.gain.setValueAtTime(0.09, t);
                gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);

                osc.connect(gain);
                gain.connect(c.destination);

                osc.start(t);
                osc.stop(t + 0.18);
            });
        },

        // Cyber warning / error buzz
        error: () => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            const t = c.currentTime;
            const osc1 = c.createOscillator();
            const osc2 = c.createOscillator();
            const gain = c.createGain();

            osc1.type = 'sawtooth';
            osc2.type = 'sawtooth';

            osc1.frequency.setValueAtTime(140, t);
            osc2.frequency.setValueAtTime(146, t);

            gain.gain.setValueAtTime(0.14, t);
            gain.gain.exponentialRampToValueAtTime(0.001, t + 0.15);

            osc1.connect(gain);
            osc2.connect(gain);
            gain.connect(c.destination);

            osc1.start(t);
            osc2.start(t);
            osc1.stop(t + 0.16);
            osc2.stop(t + 0.16);
        },

        // Clock tick
        tick: () => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            const t = c.currentTime;
            const osc = c.createOscillator();
            const gain = c.createGain();

            osc.type = 'sine';
            osc.frequency.setValueAtTime(2600, t);
            osc.frequency.exponentialRampToValueAtTime(800, t + 0.008);

            gain.gain.setValueAtTime(0.05, t);
            gain.gain.exponentialRampToValueAtTime(0.0001, t + 0.01);

            osc.connect(gain);
            gain.connect(c.destination);

            osc.start(t);
            osc.stop(t + 0.012);
        },

        // Pulsing alert alarm (for timers / complete states)
        alarm: (repeats = 3) => {
            if (muted) return;
            const c = getContext();
            if (!c) return;

            for (let i = 0; i < repeats; i++) {
                const t = c.currentTime + i * 0.22;
                const osc = c.createOscillator();
                const gain = c.createGain();

                osc.type = 'square';
                osc.frequency.setValueAtTime(987.77, t); // B5
                osc.frequency.setValueAtTime(1318.51, t + 0.08); // E6

                gain.gain.setValueAtTime(0.12, t);
                gain.gain.exponentialRampToValueAtTime(0.001, t + 0.18);

                osc.connect(gain);
                gain.connect(c.destination);

                osc.start(t);
                osc.stop(t + 0.2);
            }
        }
    };

    // Auto-delegate sounds for interactive elements
    document.addEventListener('click', (e) => {
        const target = e.target.closest('button, a, input[type="button"], input[type="submit"], input[type="checkbox"], input[type="radio"], select, .clickable');
        if (!target) return;
        if (target.hasAttribute('data-no-sound')) return;

        if (target.matches('input[type="checkbox"], input[type="radio"]')) {
            RelAudio.snap();
        } else if (target.classList.contains('btn-danger') || target.id === 'delete-btn' || target.classList.contains('btn-delete') || target.classList.contains('stop')) {
            RelAudio.error();
        } else if (target.classList.contains('btn-calc') || target.id === 'save-btn' || target.classList.contains('btn-generate') || target.classList.contains('btn-equals')) {
            RelAudio.chirp(1100);
        } else {
            RelAudio.click();
        }
    }, { capture: true, passive: true });

    window.RelAudio = RelAudio;
})(window);
