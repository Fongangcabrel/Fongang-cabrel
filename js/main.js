/* ═══════════════════════════════════════════
   FONGANG CABREL — PORTFOLIO SCRIPTS
   ═══════════════════════════════════════════ */

/* ── AOS Init ── */
AOS.init({ duration: 700, easing: 'ease-out-cubic', once: true, offset: 60 });

/* ══════════════════════════════════════
   i18n ENGINE
══════════════════════════════════════ */
function getVal(obj, path) {
    return path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);
}

function setLang(code) {
    const t = window.T[code];
    if (!t) return;
    window.LANG = code;
    localStorage.setItem('fc_lang', code);

    /* ── simple textContent ── */
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const val = getVal(t, el.dataset.i18n);
        if (val !== null) el.textContent = val;
    });

    /* ── innerHTML (paragraphs with <strong>/<em>) ── */
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
        const val = getVal(t, el.dataset.i18nHtml);
        if (val !== null) el.innerHTML = val;
    });

    /* ── placeholders ── */
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
        const val = getVal(t, el.dataset.i18nPh);
        if (val !== null) el.placeholder = val;
    });

    /* ── Timeline task lists ── */
    [1, 2, 3].forEach(n => {
        const ul = document.getElementById('tasks' + n);
        const tasks = t.exp['tasks' + n];
        if (ul && tasks) {
            ul.innerHTML = tasks.map(task => `<li>${task}</li>`).join('');
        }
    });

    /* ── Startup services grid ── */
    const sgrid = document.querySelector('.services-grid');
    if (sgrid && t.startup.svcs) {
        const icons = ['fa-globe','fa-mobile-alt','fa-brain','fa-rocket','fa-database','fa-tasks','fa-server','fa-cloud','fa-tools'];
        const tagSets = [
            ['Frontend','Backend'],['Android','iOS','Flutter'],['Python','ML','Analytics'],
            ['Strategy','SI'],['SQL Server','MySQL'],['Agile','SDLC','PMO'],
            ['Alerting','Uptime'],['SaaS','API','Cloud'],['Support','Maintenance']
        ];
        sgrid.innerHTML = t.startup.svcs.map((svc, i) => `
            <div class="scard">
                <div class="scard-num">0${i + 1}</div>
                <div class="scard-icon"><i class="fas ${icons[i]}"></i></div>
                <h3>${svc.title}</h3>
                <p>${svc.desc}</p>
                <div class="scard-tags">${tagSets[i].map(tag => `<span>${tag}</span>`).join('')}</div>
            </div>
        `).join('');
    }

    /* ── VPS banner ── */
    const vpsTitle = document.querySelector('.vps-text h3');
    const vpsDesc  = document.querySelector('.vps-text p');
    if (vpsTitle) vpsTitle.textContent = t.startup.vps_title;
    if (vpsDesc)  vpsDesc.textContent  = t.startup.vps_desc;

    /* ── Lang switcher UI ── */
    document.getElementById('langFlag').textContent = t.lang_flag;
    document.getElementById('langCode').textContent = t.lang_label;
    document.querySelectorAll('.lang-opt').forEach(btn => {
        btn.classList.toggle('active', btn.dataset.lang === code);
    });

    /* ── Page <title> ── */
    const titles = {
        en: 'FONGANG CABREL | Software Engineer | Aspiring Data Scientist',
        fr: 'FONGANG CABREL | Ingénieur Logiciel | Data Scientist en devenir'
    };
    document.title = titles[code] || document.title;

    /* ── <html lang> attribute ── */
    document.documentElement.lang = code;

    /* ── Re-render dynamic sections ── */
    const activeTab    = document.querySelector('.tab-btn.active');
    const activeFilter = document.querySelector('.filter-btn.active');
    renderSkills(activeTab    ? activeTab.dataset.tab       : 'all');
    renderProjects(activeFilter ? activeFilter.dataset.filter : 'all');

    /* ── Restart typed animation ── */
    if (window._typedRestart) window._typedRestart(t.hero.roles);
}

/* ── Lang switcher events ── */
document.getElementById('langBtn').addEventListener('click', e => {
    e.stopPropagation();
    document.getElementById('langSwitcher').classList.toggle('open');
});
document.querySelectorAll('.lang-opt').forEach(btn => {
    btn.addEventListener('click', () => {
        setLang(btn.dataset.lang);
        document.getElementById('langSwitcher').classList.remove('open');
    });
});
document.addEventListener('click', () => {
    document.getElementById('langSwitcher').classList.remove('open');
});

/* ── Navbar scroll ── */
const navbar   = document.getElementById('navbar');
const backTop  = document.getElementById('backTop');
const navLinks = document.querySelectorAll('.nav-link');
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const y = window.scrollY;
    navbar.classList.toggle('scrolled', y > 20);
    backTop.classList.toggle('visible', y > 500);

    // Active nav highlight
    let current = '';
    sections.forEach(sec => {
        if (y >= sec.offsetTop - 100) current = sec.id;
    });
    navLinks.forEach(a => {
        a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
});

/* ── Mobile nav toggle ── */
const navToggle  = document.getElementById('navToggle');
const navLinksEl = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('open');
    navLinksEl.classList.toggle('open');
});
navLinksEl.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
        navToggle.classList.remove('open');
        navLinksEl.classList.remove('open');
    });
});

/* ── Hero canvas particle dots ── */
(function () {
    const canvas = document.getElementById('heroCanvas');
    const ctx    = canvas.getContext('2d');
    let W, H, dots = [];

    function resize() {
        W = canvas.width  = canvas.offsetWidth;
        H = canvas.height = canvas.offsetHeight;
        initDots();
    }

    function initDots() {
        dots = [];
        const n = Math.floor((W * H) / 14000);
        for (let i = 0; i < n; i++) {
            dots.push({
                x:  Math.random() * W,
                y:  Math.random() * H,
                r:  Math.random() * 1.4 + 0.4,
                vx: (Math.random() - 0.5) * 0.18,
                vy: (Math.random() - 0.5) * 0.18,
                a:  Math.random()
            });
        }
    }

    function draw() {
        ctx.clearRect(0, 0, W, H);
        dots.forEach(d => {
            d.x += d.vx;
            d.y += d.vy;
            if (d.x < 0) d.x = W;
            if (d.x > W) d.x = 0;
            if (d.y < 0) d.y = H;
            if (d.y > H) d.y = 0;

            const alpha = 0.15 + Math.abs(Math.sin(Date.now() * 0.001 + d.a)) * 0.35;
            ctx.beginPath();
            ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(0,200,255,${alpha})`;
            ctx.fill();
        });

        // Connect nearby dots
        for (let i = 0; i < dots.length; i++) {
            for (let j = i + 1; j < dots.length; j++) {
                const dx = dots[i].x - dots[j].x;
                const dy = dots[i].y - dots[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < 100) {
                    ctx.beginPath();
                    ctx.moveTo(dots[i].x, dots[i].y);
                    ctx.lineTo(dots[j].x, dots[j].y);
                    ctx.strokeStyle = `rgba(0,200,255,${0.06 * (1 - dist / 100)})`;
                    ctx.lineWidth = 0.5;
                    ctx.stroke();
                }
            }
        }
        requestAnimationFrame(draw);
    }

    window.addEventListener('resize', resize);
    resize();
    draw();
})();

/* ── Typing animation (language-aware) ── */
(function () {
    const el = document.getElementById('typedText');
    let roles = [], ri = 0, ci = 0, deleting = false, timer = null;

    function type() {
        if (!roles.length) return;
        const word = roles[ri];
        if (!deleting) {
            el.textContent = word.slice(0, ++ci);
            if (ci === word.length) {
                timer = setTimeout(() => { deleting = true; tick(); }, 1800);
                return;
            }
        } else {
            el.textContent = word.slice(0, --ci);
            if (ci === 0) {
                deleting = false;
                ri = (ri + 1) % roles.length;
            }
        }
        tick();
    }

    function tick() {
        timer = setTimeout(type, deleting ? 45 : 80);
    }

    /* Exposed so setLang() can restart with new roles */
    window._typedRestart = function (newRoles) {
        clearTimeout(timer);
        roles = newRoles;
        ri = 0; ci = 0; deleting = false;
        el.textContent = '';
        tick();
    };

    /* Initial start with a small delay */
    setTimeout(() => {
        const initRoles = window.T[window.LANG].hero.roles;
        window._typedRestart(initRoles);
    }, 800);
})();

/* ── Skills data & rendering ── */
const skills = [
    /* ─ Back-end ─ */
    { name: 'Python',       level: 'Advanced',      pct: 85, cat: 'dev', icon: 'fab fa-python',         color: '#3776AB' },
    { name: 'PHP',          level: 'Intermediate',   pct: 65, cat: 'dev', icon: 'fab fa-php',            color: '#8892BF' },
    { name: 'FastAPI',      level: 'Intermediate',   pct: 70, cat: 'dev', icon: 'fas fa-bolt',           color: '#059669' },
    { name: 'SQLAlchemy',   level: 'Intermediate',   pct: 62, cat: 'dev', icon: 'fas fa-layer-group',    color: '#CC2927' },
    { name: 'REST API',     level: 'Intermediate',   pct: 72, cat: 'dev', icon: 'fas fa-plug',           color: '#6366F1' },
    { name: 'WebSockets',   level: 'Intermediate',   pct: 62, cat: 'dev', icon: 'fas fa-satellite-dish', color: '#8B5CF6' },
    { name: 'AsyncIO',      level: 'Intermediate',   pct: 58, cat: 'dev', icon: 'fas fa-rotate',         color: '#0EA5E9' },
    /* ─ Front-end ─ */
    { name: 'HTML5 / CSS3', level: 'Advanced',       pct: 82, cat: 'dev', icon: 'fab fa-html5',          color: '#E34F26' },
    { name: 'JavaScript',   level: 'Intermediate',   pct: 70, cat: 'dev', icon: 'fab fa-js',             color: '#F7DF1E' },
    { name: 'TypeScript',   level: 'Intermediate',   pct: 62, cat: 'dev', icon: 'fab fa-js',             color: '#3178C6' },
    { name: 'React.js',     level: 'Intermediate',   pct: 64, cat: 'dev', icon: 'fab fa-react',          color: '#61DAFB' },
    { name: 'React Native', level: 'Intermediate',   pct: 58, cat: 'dev', icon: 'fab fa-react',          color: '#00D8FF' },
    { name: 'Chart.js',     level: 'Intermediate',   pct: 62, cat: 'dev', icon: 'fas fa-chart-line',     color: '#FF6384' },
    { name: 'PWA / Ajax',   level: 'Intermediate',   pct: 68, cat: 'dev', icon: 'fas fa-mobile-screen',  color: '#10B981' },
    /* ─ Databases ─ */
    { name: 'SQL Server',        level: 'Advanced',      pct: 82, cat: 'data', icon: 'fas fa-database',   color: '#CC2927' },
    { name: 'PostgreSQL',        level: 'Intermediate',   pct: 65, cat: 'data', icon: 'fas fa-database',   color: '#336791' },
    { name: 'MySQL',             level: 'Intermediate',   pct: 72, cat: 'data', icon: 'fas fa-database',   color: '#4479A1' },
    { name: 'SQLite WAL',        level: 'Intermediate',   pct: 68, cat: 'data', icon: 'fas fa-database',   color: '#003B57' },
    { name: 'Redis',             level: 'Intermediate',   pct: 58, cat: 'data', icon: 'fas fa-memory',     color: '#DC382D' },
    { name: 'T-SQL',             level: 'Intermediate',   pct: 68, cat: 'data', icon: 'fas fa-code',       color: '#CC2927' },
    { name: 'SQL Server Agent',  level: 'Intermediate',   pct: 62, cat: 'data', icon: 'fas fa-robot',      color: '#CC2927' },
    { name: 'Power BI',          level: 'Intermediate',   pct: 64, cat: 'data', icon: 'fas fa-chart-pie',  color: '#F2C811' },
    { name: 'Pandas / ETL',      level: 'Intermediate',   pct: 68, cat: 'data', icon: 'fas fa-filter',     color: '#150458' },
    /* ─ DevOps & Infrastructure ─ */
    { name: 'GitHub Actions',    level: 'Intermediate',   pct: 60, cat: 'infra', icon: 'fab fa-github',         color: '#F0F6FC' },
    { name: 'SSH · RSA 4096',    level: 'Intermediate',   pct: 62, cat: 'infra', icon: 'fas fa-key',            color: '#F59E0B' },
    { name: 'Linux CLI',         level: 'Intermediate',   pct: 65, cat: 'infra', icon: 'fab fa-linux',          color: '#FCC624' },
    { name: 'VPS · Hostinger',   level: 'Intermediate',   pct: 62, cat: 'infra', icon: 'fas fa-server',         color: '#FF6C2C' },
    { name: 'PowerShell',        level: 'Intermediate',   pct: 70, cat: 'infra', icon: 'fas fa-terminal',       color: '#5391FE' },
    { name: 'VMware',            level: 'Basic',           pct: 45, cat: 'infra', icon: 'fas fa-server',         color: '#607078' },
    { name: 'Cisco Packet Tracer', level: 'Basic',         pct: 42, cat: 'infra', icon: 'fas fa-network-wired', color: '#1BA0D7' },
    /* ─ Payment Integrations ─ */
    { name: 'Notchpay',      level: 'Intermediate',  pct: 68, cat: 'payment', icon: 'fas fa-credit-card', color: '#00C896' },
    { name: 'Flutterwave',   level: 'Intermediate',  pct: 68, cat: 'payment', icon: 'fas fa-bolt',        color: '#F5A623' },
    { name: 'CamPay',        level: 'Intermediate',  pct: 62, cat: 'payment', icon: 'fas fa-mobile-alt',  color: '#FF6B35' },
    { name: 'MTN MoMo',      level: 'Intermediate',  pct: 62, cat: 'payment', icon: 'fas fa-mobile-alt',  color: '#FFCC02' },
    { name: 'Orange Money',  level: 'Intermediate',  pct: 62, cat: 'payment', icon: 'fas fa-mobile-alt',  color: '#FF7900' },
    { name: 'Monero (XMR)',  level: 'Basic',          pct: 40, cat: 'payment', icon: 'fas fa-coins',       color: '#FF6600' },
    /* ─ Methods ─ */
    { name: 'Scrum / Kanban', level: 'Intermediate',  pct: 72, cat: 'methods', icon: 'fas fa-columns',          color: '#0052CC' },
    { name: 'SDLC',           level: 'Intermediate',  pct: 74, cat: 'methods', icon: 'fas fa-diagram-project',  color: '#8B5CF6' },
    { name: 'UML',            level: 'Intermediate',  pct: 66, cat: 'methods', icon: 'fas fa-sitemap',          color: '#7C3AED' },
    { name: 'DevOps',         level: 'Intermediate',  pct: 58, cat: 'methods', icon: 'fas fa-infinity',         color: '#6366F1' },
    { name: 'Notion (PM)',    level: 'Advanced',       pct: 80, cat: 'methods', icon: 'fas fa-book',             color: '#FFFFFF' },
];

function renderSkills(tab) {
    const grid = document.getElementById('skillsGrid');
    const t    = window.T[window.LANG].skills;
    const lvlMap = { Advanced: t.lvl_advanced, Intermediate: t.lvl_intermediate, Basic: t.lvl_basic };
    const list = tab === 'all' ? skills : skills.filter(s => s.cat === tab);
    grid.innerHTML = list.map((s, i) => `
        <div class="skill-item" style="animation-delay:${i * 40}ms">
            <div class="skill-icon" style="background:${s.color}22; color:${s.color}">
                <i class="${s.icon}"></i>
            </div>
            <div class="skill-info">
                <div class="skill-name">${s.name}</div>
                <div class="skill-level">${lvlMap[s.level] || s.level}</div>
                <div class="skill-bar">
                    <div class="skill-fill" data-pct="${s.pct}" style="width:0%"></div>
                </div>
            </div>
        </div>
    `).join('');
    setTimeout(() => {
        grid.querySelectorAll('.skill-fill').forEach(el => {
            el.style.width = el.dataset.pct + '%';
        });
    }, 100);
}

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderSkills(btn.dataset.tab);
    });
});

/* Initial language applied after all render functions are defined */
/* (called at bottom of file) */

/* ── Projects data & rendering ── */
const projects = [
    {
        name:     'VYNTIX — IT Infrastructure Monitor',
        cat:      'infra',
        catLabel: 'Infrastructure',
        icon:     'fas fa-server',
        color:    '#00c8ff',
        desc:     'Hybrid real-time network monitoring — FastAPI, SQL Server, SQLite, WebSockets, Redis, Chart.js. Live infrastructure visibility with zero-downtime writes and TTL-based device health scoring.',
        stack:    ['FastAPI', 'SQL Server', 'SQLite', 'WebSockets', 'Redis', 'Chart.js'],
        github:   '#',
        demo:     '#'
    },
    {
        name:     'SMARTY — Ride-Hailing Platform',
        cat:      'web',
        catLabel: 'Web App · Mobile',
        icon:     'fas fa-car',
        color:    '#ec4899',
        desc:     'Complete ride-hailing app: Web Admin + Mobile Android/iOS. React Native, TypeScript, FastAPI async backend, SQLAlchemy ORM, PostgreSQL + Redis for real-time driver tracking.',
        stack:    ['React Native', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis'],
        github:   '#',
        demo:     '#'
    },
    {
        name:     'SSAS — Smart Stock Alert System',
        cat:      'data',
        catLabel: 'Data & Automation',
        icon:     'fas fa-boxes-stacked',
        color:    '#059669',
        desc:     'Python ETL pipeline + SQL Server consolidation to monitor stock levels, detect critical items automatically and generate scheduled alerts & Power BI reports based on configurable thresholds. SQL Server Agent jobs handle nightly processing.',
        stack:    ['Python', 'SQL Server', 'SQL Server Agent', 'T-SQL', 'ETL', 'Power BI'],
        github:   '#',
        demo:     '#'
    },
    {
        name:     'FlowI — Business Process Automation',
        cat:      'data',
        catLabel: 'Automation · SaaS',
        icon:     'fas fa-diagram-project',
        color:    '#8b5cf6',
        desc:     'Modular business-process automation framework that maps, schedules, and chains custom workflows via a visual React.js UI. FastAPI async orchestration engine with plug-and-play Python modules for enterprise workflows.',
        stack:    ['Python', 'FastAPI', 'React.js', 'AsyncIO', 'REST API'],
        github:   '#',
        demo:     '#'
    },
    {
        name:     'cocosecret.store — E-commerce Web App',
        cat:      'web',
        catLabel: 'Web App · Live',
        icon:     'fas fa-shopping-bag',
        color:    '#f59e0b',
        desc:     'Commercially deployed e-commerce platform with a hybrid sales funnel: direct WhatsApp ordering + multi-gateway checkout. Notchpay and Flutterwave payment integration with real-time webhook confirmation.',
        stack:    ['PHP', 'MySQL', 'Notchpay', 'Flutterwave', 'WhatsApp API'],
        github:   '#',
        demo:     'https://cocosecret.store/landing.php'
    },
    {
        name:     'Coco Italia Beach — Event Ticketing',
        cat:      'web',
        catLabel: 'Web App · Live',
        icon:     'fas fa-umbrella-beach',
        color:    '#f97316',
        desc:     'Full event ticketing platform for a summer beach festival in Parma, Italy. Three-tier ticket system (Day €10 / Full €20 / Evening €15), Stripe payment integration, real-time booking with attendee management, and a responsive tropical-themed UI. <strong>Handling real transactions for a live 2026 event.</strong>',
        stack:    ['PHP', 'Stripe API', 'JavaScript', 'HTML5/CSS3', 'MySQL'],
        github:   '#',
        demo:     'https://www.cocoitaliabeach.com'
    },
    {
        name:     'LovIT — Dating Platform',
        cat:      'web',
        catLabel: 'Web App',
        icon:     'fas fa-heart',
        color:    '#ef4444',
        desc:     'Digital matchmaking platform with complete user authentication, profile management, and a recommendation engine. Lightweight Python backend with MySQL persistence and a responsive vanilla-JS front-end.',
        stack:    ['Python', 'MySQL', 'JavaScript', 'HTML5/CSS3'],
        github:   '#',
        demo:     '#'
    },
    {
        name:     'Scripx — Network Monitoring Ping',
        cat:      'infra',
        catLabel: 'Infrastructure',
        icon:     'fas fa-network-wired',
        color:    '#6366f1',
        desc:     'PowerShell-based solution to simultaneously ping multiple network devices and display real-time latency — improving infrastructure visibility and eliminating manual pinging across the BROLI production network.',
        stack:    ['PowerShell', 'SSH', 'BROLI Network', 'Automation'],
        github:   '#',
        demo:     '#'
    }
];

function renderProjects(filter) {
    const grid = document.getElementById('projectsGrid');
    const tProj = window.T[window.LANG].projects;
    /* Merge translated labels & descriptions into projects array */
    const enriched = projects.map((p, i) => ({
        ...p,
        name:     tProj.items[i] ? tProj.items[i].name     : p.name,
        catLabel: tProj.items[i] ? tProj.items[i].catLabel  : p.catLabel,
        desc:     tProj.items[i] ? tProj.items[i].desc      : p.desc
    }));
    const list = filter === 'all' ? enriched : enriched.filter(p => p.cat === filter);
    grid.innerHTML = list.map(p => `
        <div class="pcard" data-aos="fade-up">
            <div class="pcard-top">
                <div class="pcard-icon" style="background:${p.color}22; color:${p.color}">
                    <i class="${p.icon}"></i>
                </div>
                <div class="pcard-links">
                    <a href="${p.github}" title="GitHub" aria-label="GitHub"><i class="fab fa-github"></i></a>
                    <a href="${p.demo}"   title="Demo"   aria-label="Demo"><i class="fas fa-arrow-up-right-from-square"></i></a>
                </div>
            </div>
            <div class="pcard-body">
                <div class="pcard-category">${p.catLabel}</div>
                <h3>${p.name}</h3>
                <p>${p.desc}</p>
                ${p.demo !== '#' ? `<a href="${p.demo}" target="_blank" class="pcard-live"><i class="fas fa-circle-dot"></i> ${window.T[window.LANG].projects.live_label}</a>` : ''}
                <div class="pcard-stack">
                    ${p.stack.map(t => `<span>${t}</span>`).join('')}
                </div>
            </div>
        </div>
    `).join('');
    AOS.refresh();
}

document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        renderProjects(btn.dataset.filter);
    });
});

renderProjects('all');

/* ── Contact form ── */
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const note = document.getElementById('formNote');
    const btn  = this.querySelector('button[type="submit"]');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
    setTimeout(() => {
        note.textContent = window.T[window.LANG].contact.success;
        note.style.color = '#10b981';
        btn.disabled = false;
        btn.innerHTML = '<i class="fas fa-paper-plane"></i> Send Message';
        this.reset();
        setTimeout(() => { note.textContent = ''; }, 5000);
    }, 1200);
});

/* ── Boot: apply saved / detected language ── */
setLang(window.LANG);

/* ── Smooth back to top ── */
document.getElementById('backTop').addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
