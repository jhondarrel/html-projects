/**
 * THE REL WORKS // QUANTUM HUD & NAVIGATION SYSTEM
 * High-tech telemetry dock, application switcher, interactive physical lighting, and ambient grid.
 */
(function(window) {
    'use strict';

    const APPS = [
        { name: "Creative Workshop Hub", file: "index.html", icon: "❖", category: "Studio Hub", color: "#00f3ff", desc: "Your central launchpad for all 30 handcrafted tools." },
        { name: "Calculator", file: "Calculator.html", icon: "🖩", category: "Math & Money", color: "#ff4757", desc: "Akihabara-inspired tactile math console with mechanical keys and history." },
        { name: "Binary to Decimal", file: "Binary to Decimal.html", icon: "⌗", category: "Code & Logic", color: "#2ed573", desc: "Fiddle with interactive 8-bit switches to translate binary into decimal, hex, and octal." },
        { name: "Calendar", file: "Calendar.html", icon: "📅", category: "Daily Life", color: "#ffa502", desc: "A sunny, cheerful monthly planner with smooth drag-and-drop event reordering." },
        { name: "Christmas Light Simulator", file: "Christmas Light.html", icon: "✦", category: "Fun & Play", color: "#ff3838", desc: "A cozy, luminous festive holiday light show with wave and twinkle physics." },
        { name: "Color Cycle", file: "Color Cycle.html", icon: "◐", category: "Design Lab", color: "#a55eea", desc: "Hypnotic chromatic wave generator to explore smooth RGB and HSL spectrums." },
        { name: "Correlation Analyzer", file: "Correlation Analyzer.html", icon: "📈", category: "Data Science", color: "#ff007f", desc: "Synthwave scatter plot studio to test relationships between data pairs." },
        { name: "Countdown Timer", file: "Countdown Timer.html", icon: "⏳", category: "Time & Goals", color: "#ff9f1a", desc: "Supernova rocket launchpad countdown for your big moments and deadlines." },
        { name: "Flip Image", file: "Flip Image.html", icon: "🪞", category: "Photo Studio", color: "#2d98da", desc: "A creative 4-quadrant photo studio to mirror, flip, and experiment with images." },
        { name: "Notes App", file: "Notes App.html", icon: "📝", category: "Productivity", color: "#0be881", desc: "A distraction-free markdown notebook with typewriter audio and instant local saving." },
        { name: "Palette Generator", file: "Palette Generator.html", icon: "🎨", category: "Art & Colors", color: "#f368e0", desc: "Spit out gorgeous color palettes with one click or spacebar tap." },
        { name: "Pomodoro Timer", file: "Pomodoro Timer.html", icon: "⏱", category: "Deep Work", color: "#ff6348", desc: "Warm mid-century focus companion designed to get you in the zone." },
        { name: "Dev Quiz", file: "Quiz App.html", icon: "⚡", category: "Brain Teaser", color: "#9b59b6", desc: "Arcade-style developer quiz to test your web dev reflexes and knowledge." },
        { name: "Random Meal Generator", file: "Random Meal Generator.html", icon: "🍳", category: "Food & Cooking", color: "#ff5252", desc: "Hungry and indecisive? Generate delicious recipes and ingredient lists instantly." },
        { name: "Random Number Generator", file: "Random Number Generator.html", icon: "🎲", category: "Luck & Games", color: "#00b894", desc: "Vegas-style quantum dice and lottery roller with satisfying spin animation." },
        { name: "Roman Numeral Converter", file: "Roman Numeral Converter.html", icon: "🏛", category: "History & Ciphers", color: "#f1c40f", desc: "Turn modern numbers into grand Imperial Roman inscriptions and back again." },
        { name: "Password Generator", file: "Password Generator.html", icon: "🔑", category: "Security & Keys", color: "#00f3ff", desc: "Cyberpunk cryptographic keyforge with entropy analysis and Diceware passphrases." },
        { name: "Unit Converter", file: "Unit Converter.html", icon: "📏", category: "Math & Units", color: "#f39c12", desc: "Dimensional transmuter for length, mass, data, temperature, speed, and energy." },
        { name: "Audio Visualizer", file: "Audio Visualizer.html", icon: "〰️", category: "Sound Lab", color: "#00ff66", desc: "Analog modular synth and oscilloscope with live microphone and keyboard input." },
        { name: "Kanban Board", file: "Kanban Board.html", icon: "📋", category: "Productivity", color: "#00f2fe", desc: "Cyberpunk taskforge with drag-and-drop workflow columns and progress telemetry." },
        { name: "Markdown Studio", file: "Markdown Studio.html", icon: "📑", category: "Writing & Docs", color: "#fbc531", desc: "Split-pane live markdown studio with word analytics, quick toolbar, and exports." },
        { name: "QR Code Forge", file: "QR Code Forge.html", icon: "❖", category: "Code & Matrix", color: "#00f3ff", desc: "Holographic 2D matrix transmitter for URLs, WiFi networks, and vCards with laser scanning." },
        { name: "Typing Speed Test", file: "Typing Speed Test.html", icon: "🏎️", category: "Benchmark", color: "#ff3838", desc: "Mechanical keyboard typing benchmark with real-time WPM tachometer and Cherry-MX sound." },
        { name: "Regex Tester", file: "Regex Tester.html", icon: "🔍", category: "Code & Logic", color: "#8854d0", desc: "Quantum pattern collider with live token highlighting, capture groups, and replacement lab." },
        { name: "Aerospace Chronograph", file: "Stopwatch & Lap Studio.html", icon: "⏱️", category: "Time & Goals", color: "#0be881", desc: "Precision split-second stopwatch with analog sweep hand, delta timing, and CSV lap export." },
        { name: "Neural Memory Deck", file: "Memory Match Game.html", icon: "🧠", category: "Brain Teaser", color: "#ff71ce", desc: "3D holographic memory card matrix with ascending pitch harmonic combo streaks." },
        { name: "Box Shadow Studio", file: "CSS Box Shadow Studio.html", icon: "💡", category: "Design Lab", color: "#575fcf", desc: "Interactive 2D light source casting realistic multi-layer CSS elevation shadows." },
        { name: "Base64 & Hash Studio", file: "Base64 & Hash Studio.html", icon: "🔐", category: "Security & Keys", color: "#fbc531", desc: "Espionage cipher console for Base64 data URIs and live SHA cryptographic hashing." },
        { name: "Pixel Painter", file: "Pixel Painter.html", icon: "🎨", category: "Art & Colors", color: "#e056fd", desc: "Retro CRT arcade canvas for 8-bit sprite art with symmetrical mirroring and 512px export." },
        { name: "Cyber Beat Matrix", file: "Soundboard & Synth Pad.html", icon: "🎛️", category: "Sound Lab", color: "#a3cb38", desc: "16-pad procedural groovebox with rubber MPC pads and 16-step rhythm sequencer." },
        { name: "Flashcard Studio", file: "Flashcard Studio.html", icon: "🗂️", category: "Deep Work", color: "#12cbc4", desc: "Tactile 3D Leitner memory cards with developer decks, progress telemetry, and deck editor." }
    ];

    function getCurrentFileName() {
        const path = window.location.pathname;
        const decoded = decodeURIComponent(path.substring(path.lastIndexOf('/') + 1));
        return decoded || 'index.html';
    }

    function initHUD() {
        const currentFile = getCurrentFileName();

        // 1. Inject Background Canvas if not already present
        if (!document.getElementById('rel-bg-canvas')) {
            const canvas = document.createElement('canvas');
            canvas.id = 'rel-bg-canvas';
            document.body.prepend(canvas);
            setupBackgroundCanvas(canvas);
        }

        // 2. Build HUD Top Bar
        const hudBar = document.createElement('div');
        hudBar.id = 'rel-hud-bar';
        hudBar.innerHTML = `
            <div class="rel-hud-left">
                <a href="index.html" class="rel-hud-brand" title="The Rel Works Quantum Suite">
                    <img src="logo.png" alt="Logo" class="rel-hud-logo" onerror="this.style.display='none'">
                    <span class="rel-hud-brand-text">THE REL WORKS <span class="rel-hud-badge">QUANTUM OS</span></span>
                </a>
                <span class="rel-hud-status"><span class="rel-hud-led"></span> SYS ONLINE</span>
            </div>

            <div class="rel-hud-center">
                <button id="rel-launcher-btn" class="rel-hud-btn rel-launcher-trigger" title="Quick App Launcher (Ctrl+K)">
                    <span class="rel-hud-icon">❖</span>
                    <span class="rel-launcher-label">NAVIGATE SUITE</span>
                    <kbd>Ctrl+K</kbd>
                </button>
            </div>

            <div class="rel-hud-right">
                <button id="rel-audio-toggle" class="rel-hud-btn" title="Toggle Synthesized Audio Feedback">
                    <span id="rel-audio-icon">${window.RelAudio && window.RelAudio.isMuted() ? '🔇' : '🔊'}</span>
                    <span class="rel-hud-btn-text">SFX</span>
                </button>
                <button id="rel-fullscreen-btn" class="rel-hud-btn" title="Toggle Fullscreen">
                    <span>⛶</span>
                </button>
                <div class="rel-hud-telemetry" id="rel-telemetry-clock">00:00:00.000</div>
            </div>
        `;
        document.body.prepend(hudBar);

        // 3. Build Modal App Switcher Drawer
        const modal = document.createElement('div');
        modal.id = 'rel-launcher-modal';
        modal.innerHTML = `
            <div class="rel-launcher-overlay" id="rel-launcher-backdrop"></div>
            <div class="rel-launcher-dialog">
                <div class="rel-launcher-header">
                    <div class="rel-launcher-title-group">
                        <span class="rel-hud-icon">❖</span>
                        <h2>THE REL WORKS // QUANTUM APPLICATION SUITE</h2>
                    </div>
                    <button class="rel-launcher-close" id="rel-launcher-close-btn">&times;</button>
                </div>

                <div class="rel-launcher-search-box">
                    <span class="rel-search-icon">🔍</span>
                    <input type="text" id="rel-app-search" placeholder="Search systems... (Type to filter, ESC to exit)" autocomplete="off">
                </div>

                <div class="rel-launcher-grid" id="rel-launcher-grid">
                    ${APPS.map(app => {
                        const isCurrent = app.file.toLowerCase() === currentFile.toLowerCase();
                        return `
                            <a href="${encodeURI(app.file)}" class="rel-app-card ${isCurrent ? 'active-app' : ''}" style="border-left: 3px solid ${app.color};" data-name="${app.name.toLowerCase()} ${app.category.toLowerCase()} ${app.desc.toLowerCase()}">
                                <div class="rel-app-card-header">
                                    <span class="rel-app-icon">${app.icon}</span>
                                    <span class="rel-app-cat" style="color: ${app.color}; background: ${app.color}15; border: 1px solid ${app.color}40;">${app.category}</span>
                                    ${isCurrent ? '<span class="rel-app-current-tag">ACTIVE</span>' : ''}
                                </div>
                                <div class="rel-app-title">${app.name}</div>
                                <div class="rel-app-desc">${app.desc}</div>
                                <div class="rel-app-arrow" style="color: ${app.color};">OPEN APP →</div>
                            </a>
                        `;
                    }).join('')}
                </div>

                <div class="rel-launcher-footer">
                    <span>${APPS.length} Quantum Modules Loaded</span>
                    <span>Press <kbd>ESC</kbd> to close</span>
                </div>
            </div>
        `;
        document.body.appendChild(modal);

        // 4. Hook up Events
        setupHUDEvents(modal);
        setupPrecisionClock();
        setupTactileCardInteractions();
    }

    function setupHUDEvents(modal) {
        const launcherBtn = document.getElementById('rel-launcher-btn');
        const closeBtn = document.getElementById('rel-launcher-close-btn');
        const backdrop = document.getElementById('rel-launcher-backdrop');
        const searchInput = document.getElementById('rel-app-search');
        const audioBtn = document.getElementById('rel-audio-toggle');
        const audioIcon = document.getElementById('rel-audio-icon');
        const fsBtn = document.getElementById('rel-fullscreen-btn');

        function openLauncher() {
            modal.classList.add('open');
            searchInput.value = '';
            filterApps('');
            setTimeout(() => searchInput.focus(), 50);
            if (window.RelAudio) window.RelAudio.chirp(1050);
        }

        function closeLauncher() {
            modal.classList.remove('open');
            if (window.RelAudio) window.RelAudio.click();
        }

        function filterApps(query) {
            const q = query.trim().toLowerCase();
            const cards = modal.querySelectorAll('.rel-app-card');
            cards.forEach(card => {
                const text = card.getAttribute('data-name');
                if (!q || text.includes(q)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        }

        if (launcherBtn) launcherBtn.addEventListener('click', openLauncher);
        if (closeBtn) closeBtn.addEventListener('click', closeLauncher);
        if (backdrop) backdrop.addEventListener('click', closeLauncher);

        if (searchInput) {
            searchInput.addEventListener('input', (e) => filterApps(e.target.value));
        }

        // Global Keyboard Shortcut: Ctrl+K or backslash
        window.addEventListener('keydown', (e) => {
            if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
                e.preventDefault();
                if (modal.classList.contains('open')) closeLauncher();
                else openLauncher();
            } else if (e.key === 'Escape' && modal.classList.contains('open')) {
                closeLauncher();
            }
        });

        // Audio toggle
        if (audioBtn) {
            audioBtn.addEventListener('click', () => {
                if (window.RelAudio) {
                    const isMuted = window.RelAudio.toggleMute();
                    audioIcon.textContent = isMuted ? '🔇' : '🔊';
                    if (!isMuted) window.RelAudio.chirp(1200);
                }
            });
        }

        window.addEventListener('rel-audio-mute-changed', (e) => {
            if (audioIcon) {
                audioIcon.textContent = e.detail.muted ? '🔇' : '🔊';
            }
        });

        // Fullscreen toggle
        if (fsBtn) {
            fsBtn.addEventListener('click', () => {
                if (!document.fullscreenElement) {
                    document.documentElement.requestFullscreen().catch(() => {});
                } else {
                    document.exitFullscreen().catch(() => {});
                }
            });
        }
    }

    function setupPrecisionClock() {
        const clockEl = document.getElementById('rel-telemetry-clock');
        if (!clockEl) return;

        function update() {
            const now = new Date();
            const h = String(now.getHours()).padStart(2, '0');
            const m = String(now.getMinutes()).padStart(2, '0');
            const s = String(now.getSeconds()).padStart(2, '0');
            const ms = String(Math.floor(now.getMilliseconds() / 10)).padStart(2, '0');
            clockEl.textContent = `${h}:${m}:${s}.${ms}`;
            requestAnimationFrame(update);
        }
        requestAnimationFrame(update);
    }

    // Realistic hardware card 3D tilt & dynamic specular reflection
    function setupTactileCardInteractions() {
        const cards = document.querySelectorAll('.calculator, .converter-card, #calendar-container, .simulator-card, .app-card, .input-card, .card');
        
        cards.forEach(card => {
            card.classList.add('rel-tactile-surface');

            card.addEventListener('mousemove', (e) => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);

                // Subtle hardware tilt
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const tiltX = (y - centerY) / centerY * -1.5; // max 1.5 deg tilt
                const tiltY = (x - centerX) / centerX * 1.5;
                card.style.transform = `perspective(1000px) rotateX(${tiltX.toFixed(2)}deg) rotateY(${tiltY.toFixed(2)}deg)`;
            });

            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg)';
            });
        });
    }

    // High performance cybernetic grid canvas in background
    function setupBackgroundCanvas(canvas) {
        const ctx = canvas.getContext('2d');
        let width = canvas.width = window.innerWidth;
        let height = canvas.height = window.innerHeight;

        window.addEventListener('resize', () => {
            width = canvas.width = window.innerWidth;
            height = canvas.height = window.innerHeight;
        });

        // Subtle drifting cyber particles
        const particles = [];
        const count = Math.min(35, Math.floor(width / 45));
        for (let i = 0; i < count; i++) {
            particles.push({
                x: Math.random() * width,
                y: Math.random() * height,
                vx: (Math.random() - 0.5) * 0.3,
                vy: (Math.random() - 0.5) * 0.3,
                size: Math.random() * 1.5 + 0.5,
                alpha: Math.random() * 0.3 + 0.1
            });
        }

        let mouseX = width / 2;
        let mouseY = height / 2;
        window.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        }, { passive: true });

        function draw() {
            ctx.clearRect(0, 0, width, height);

            // Draw micro grid
            const gridSize = 48;
            ctx.strokeStyle = 'rgba(255, 255, 255, 0.018)';
            ctx.lineWidth = 1;

            ctx.beginPath();
            for (let x = 0; x <= width; x += gridSize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, height);
            }
            for (let y = 0; y <= height; y += gridSize) {
                ctx.moveTo(0, y);
                ctx.lineTo(width, y);
            }
            ctx.stroke();

            // Draw dynamic cursor glow
            const radGrad = ctx.createRadialGradient(mouseX, mouseY, 0, mouseX, mouseY, 320);
            radGrad.addColorStop(0, 'rgba(0, 229, 255, 0.04)');
            radGrad.addColorStop(1, 'transparent');
            ctx.fillStyle = radGrad;
            ctx.fillRect(0, 0, width, height);

            // Draw particles with faint connecting lines
            ctx.fillStyle = 'rgba(0, 229, 255, 0.4)';
            for (let i = 0; i < particles.length; i++) {
                const p = particles[i];
                p.x += p.vx;
                p.y += p.vy;

                if (p.x < 0) p.x = width;
                if (p.x > width) p.x = 0;
                if (p.y < 0) p.y = height;
                if (p.y > height) p.y = 0;

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fill();

                // Faint connections
                for (let j = i + 1; j < particles.length; j++) {
                    const p2 = particles[j];
                    const dx = p.x - p2.x;
                    const dy = p.y - p2.y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 110) {
                        ctx.strokeStyle = `rgba(0, 229, 255, ${(1 - dist / 110) * 0.06})`;
                        ctx.beginPath();
                        ctx.moveTo(p.x, p.y);
                        ctx.lineTo(p2.x, p2.y);
                        ctx.stroke();
                    }
                }
            }

            requestAnimationFrame(draw);
        }

        requestAnimationFrame(draw);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initHUD);
    } else {
        initHUD();
    }

    window.RelHUD = {
        openLauncher: () => {
            const modal = document.getElementById('rel-launcher-modal');
            if (modal) modal.classList.add('open');
        },
        APPS
    };
})(window);
