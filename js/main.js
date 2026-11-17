/* ═══════════════════════════════════════════════════════════
   Fongang Cabrel — portfolio scripts
   - i18n (copy in translations.js, data here, matched by id)
   - rendering of every dynamic section
   - motion: GSAP + ScrollTrigger, with a no-motion fallback
   ═══════════════════════════════════════════════════════════ */
(() => {
'use strict';

/* ─────────────────────────── helpers ─────────────────────────── */
const $  = (s, c = document) => c.querySelector(s);
const $$ = (s, c = document) => Array.from(c.querySelectorAll(s));
const esc = s => String(s).replace(/[&<>"]/g, ch => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[ch]));
const store = {
    get: (k, s = localStorage) => { try { return s.getItem(k); } catch (e) { return null; } },
    set: (k, v, s = localStorage) => { try { s.setItem(k, v); } catch (e) { /* storage blocked */ } }
};
const getPath = (obj, path) => path.split('.').reduce((o, k) => (o && o[k] !== undefined ? o[k] : null), obj);

const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const hasGSAP = typeof window.gsap !== 'undefined' && typeof window.ScrollTrigger !== 'undefined';
const MOTION  = hasGSAP && !prefersReduced;
const isTouch = window.matchMedia('(hover: none)').matches;
if (MOTION) gsap.registerPlugin(ScrollTrigger);
else document.documentElement.classList.add('no-motion');

/* ─────────────────────────── config ──────────────────────────── */
/* Paste a Formspree (or similar) endpoint here to receive messages
   directly. Left empty, the form opens the visitor's email app with
   the message pre-filled — it never pretends to send. */
const FORM_ENDPOINT = '';
const EMAIL = 'fongangcabrel2007@gmail.com';

/* ─────────────────────────── data ────────────────────────────── */
const PROJECTS = [
    { id: 'kpiflow',   featured: true, cat: 'web', status: 'production',
      shot: { w: 1400, h: 672, slides: [
          { src: 'assets/img/kpiflow-login.jpg', bar: 'kpiflow / login' },
          { src: 'assets/img/kpiflow.jpg', bar: 'kpiflow / performance' } ] },
      stack: ['FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Jinja2', 'Docker', 'Debian 13', 'Nginx', 'GitHub Actions', 'Grafana', 'SSH'], links: {} },
    { id: 'bhhaccess', featured: true, cat: 'web', status: 'mvp',
      stack: ['MVC', 'SOLID', 'QR badges', 'RBAC', 'Audit log', 'Excel import'], links: {} },
    { id: 'vyntix',       cat: 'infra', stack: ['FastAPI', 'SQL Server', 'SQLite', 'WebSockets', 'Redis', 'Chart.js'], links: {} },
    { id: 'smarty',       cat: 'web',   stack: ['React Native', 'TypeScript', 'FastAPI', 'SQLAlchemy', 'PostgreSQL', 'Redis'], links: {} },
    { id: 'ssas',         cat: 'data',  stack: ['Python', 'SQL Server', 'SQL Server Agent', 'T-SQL', 'ETL', 'Power BI'], links: {} },
    { id: 'flowi',        cat: 'data',  stack: ['Python', 'FastAPI', 'React.js', 'AsyncIO', 'REST API'], links: {} },
    { id: 'cocosecret', featured: true, cat: 'web', status: 'live',
      shot: { w: 1400, h: 689, slides: [{ src: 'assets/img/cocosecret.jpg', bar: 'cocosecret.shop' }] },
      stack: ['PHP', 'MySQL', 'Notchpay', 'Flutterwave', 'WhatsApp'], links: { live: 'https://cocosecret.shop/landing.php' } },
    { id: 'cocoitalia',   cat: 'web',   stack: ['PHP', 'Stripe', 'JavaScript', 'MySQL'], links: { live: 'https://www.cocoitaliabeach.com' } },
    { id: 'hospiconnect', cat: 'web',   stack: ['PHP 8', 'Laravel', 'MySQL', 'WebSocket / SSE', 'PHPMailer', 'Bootstrap'], links: {} },
    { id: 'scripx',       cat: 'infra', stack: ['PowerShell', 'Networking', 'Automation'], links: {} }
];

/* Per-job structure; text comes from translations (same order). */
const JOBS = [
    { current: true, side: 6, tags: ['FastAPI', 'PostgreSQL', 'Docker', 'Debian 13', 'Grafana', 'CI/CD', 'PowerShell', 'Python'] },
    { tags: ['Python', 'Automation', 'Dashboards', 'BI', 'Process design'] },
    { tags: ['PHP', 'MySQL', 'JavaScript', 'Git'] }
];

/* 3 = daily driver · 2 = comfortable · 1 = learning */
const SKILLS = {
    backend:  [['Python', 3], ['PHP', 2], ['FastAPI', 2], ['Laravel', 2], ['SQLAlchemy', 2], ['REST APIs', 2], ['WebSockets', 2], ['AsyncIO', 2]],
    frontend: [['HTML5 / CSS3', 3], ['JavaScript', 2], ['TypeScript', 2], ['React.js', 2], ['React Native', 2], ['Chart.js', 2], ['PWA / Ajax', 2]],
    data:     [['SQL Server', 3], ['T-SQL', 2], ['SQL Server Agent', 2], ['PostgreSQL', 2], ['MySQL', 2], ['SQLite (WAL)', 2], ['Redis', 2], ['Pandas / ETL', 2]],
    microsoft: [['Power BI', 2], ['Power Apps', 2], ['Power Automate', 2], ['Microsoft 365', 2], ['SharePoint', 2], ['Teams', 2]],
    infra:    [['Debian admin', 2], ['Linux CLI', 2], ['GitHub Actions', 2], ['SSH', 2], ['Nginx', 2], ['PowerShell', 2], ['Docker', 2], ['Grafana', 2], ['Zabbix', 1], ['VMware', 1], ['Cisco Packet Tracer', 1], ['SAP BTP', 1], ['AWS', 1]],
    methods:  [['Notion', 3], ['Payment APIs', 2], ['MVC · SOLID', 2], ['Scrum / Kanban', 2], ['SDLC', 2], ['UML', 2]]
};

/* Digital transformation is the "mother concept": full-width card first,
   every other service is an illustrated card below it. */
const SERVICE_HERO  = 'transformation';
const SERVICES_ART  = ['powerplatform', 'web', 'devops', 'devsecops', 'payment', 'cloud', 'automation', 'mobile', 'data', 'sql', 'saas', 'monitoring', 'pm', 'maintenance'];
const SERVICES_WIDE = ['powerplatform', 'web', 'data', 'monitoring'];

/* [label, icon in assets/icons — name of a Devicon SVG (MIT), or a file with extension] */
const MARQUEE_A = [
    ['Python', 'python'], ['PHP', 'php'], ['FastAPI', 'fastapi'], ['Laravel', 'laravel'],
    ['PostgreSQL', 'postgresql'], ['MySQL', 'mysql'], ['SQL Server', 'sqlserver.png'],
    ['Power BI', 'powerbi'], ['Power Apps', 'powerapps'], ['Power Automate', 'powerautomate'],
    ['Microsoft 365', 'microsoft365'], ['SharePoint', 'sharepoint'], ['Teams', 'teams'],
    ['React', 'react'], ['TypeScript', 'typescript'], ['Docker', 'docker'], ['Grafana', 'grafana'],
    ['GitHub Actions', 'githubactions'], ['Debian', 'debian'], ['Nginx', 'nginx'], ['Redis', 'redis']
];
const MARQUEE_B = ['KPIFlow', 'BHHaccess', 'VYNTIX', 'SMARTY', 'cocosecret.shop', 'Coco Italia Beach', 'HospiConnect', 'FlowI', 'SSAS', 'SCRIPX'];

/* Labels used inside the illustrative mock-ups */
const MOCK = {
    en: { illus: 'Illustrative mock-up', log: 'access log', live: 'live',
          granted: 'granted', denied: 'denied', badge: 'Staff badge', role: 'Zones A · C · Server room',
          zones: ['Main gate', 'Server room', 'Warehouse', 'Admin office', 'Lab', 'Car park'] },
    fr: { illus: 'Maquette illustrative', log: 'journal d’accès', live: 'en direct',
          granted: 'autorisé', denied: 'refusé', badge: 'Badge personnel', role: 'Zones A · C · Salle serveur',
          zones: ['Entrée principale', 'Salle serveur', 'Entrepôt', 'Direction', 'Labo', 'Parking'] }
};

/* ─────────────────────── illustrations (SVG) ─────────────────── */
function hexPath(cx, cy, r) {
    let d = '';
    for (let k = 0; k < 6; k++) {
        const a = Math.PI / 180 * (60 * k - 30);
        d += (k ? 'L' : 'M') + (cx + r * Math.cos(a)).toFixed(1) + ' ' + (cy + r * Math.sin(a)).toFixed(1);
    }
    return d + 'Z';
}

const CURSOR = 'l0 18 l5 -5 l4 8 l3 -1.5 l-4 -8 l7 0 z';

const ART = {
    web: `<svg class="ill ill-web" viewBox="0 0 260 160" aria-hidden="true">
        <rect class="st" x="20" y="14" width="220" height="132" rx="12"/>
        <line class="st" x1="20" y1="38" x2="240" y2="38"/>
        <circle class="fl" cx="36" cy="26" r="4"/><circle class="fl" cx="50" cy="26" r="4"/><circle class="fl" cx="64" cy="26" r="4"/>
        <rect class="ln fl-a"  style="--i:0" x="36" y="54"  width="44"  height="7" rx="3.5"/>
        <rect class="ln fl"    style="--i:1" x="86" y="54"  width="90"  height="7" rx="3.5"/>
        <rect class="ln fl"    style="--i:2" x="52" y="70"  width="120" height="7" rx="3.5"/>
        <rect class="ln fl-a2" style="--i:3" x="52" y="86"  width="60"  height="7" rx="3.5"/>
        <rect class="ln fl"    style="--i:4" x="118" y="86" width="70"  height="7" rx="3.5"/>
        <rect class="ln fl"    style="--i:5" x="52" y="102" width="100" height="7" rx="3.5"/>
        <rect class="ln fl-a"  style="--i:6" x="36" y="118" width="30"  height="7" rx="3.5"/>
        <rect class="caret fl-w" x="72" y="116" width="2" height="11"/>
        <path class="cursor fl-w" d="M206 112 ${CURSOR}"/>
    </svg>`,

    devops: `<svg class="ill ill-devops" viewBox="0 0 260 160" aria-hidden="true">
        <path d="M130 80 C110 48 58 44 58 80 C58 116 110 112 130 80 C150 48 202 44 202 80 C202 116 150 112 130 80 Z" style="fill:none;stroke:rgba(255,255,255,.07);stroke-width:14"/>
        <path class="st-a run"   pathLength="100" d="M130 80 C110 48 58 44 58 80 C58 116 110 112 130 80 C150 48 202 44 202 80 C202 116 150 112 130 80 Z" style="stroke-width:5"/>
        <path class="st-a run b" pathLength="100" d="M130 80 C110 48 58 44 58 80 C58 116 110 112 130 80 C150 48 202 44 202 80 C202 116 150 112 130 80 Z" style="stroke-width:3"/>
        <text class="stage" style="--i:0" x="74"  y="34"  text-anchor="middle">CODE</text>
        <text class="stage" style="--i:1" x="74"  y="138" text-anchor="middle">BUILD</text>
        <text class="stage" style="--i:2" x="186" y="34"  text-anchor="middle">DEPLOY</text>
        <text class="stage" style="--i:3" x="186" y="138" text-anchor="middle">MONITOR</text>
        <circle class="fl-a2" cx="130" cy="80" r="5"/>
    </svg>`,

    devsecops: `<svg class="ill ill-sec" viewBox="0 0 260 160" aria-hidden="true">
        <defs><clipPath id="shieldClip"><path d="M130 22 L176 38 V78 C176 108 156 128 130 138 C104 128 84 108 84 78 V38 Z"/></clipPath></defs>
        <circle class="ring st"   cx="130" cy="80" r="58"/>
        <circle class="ring b st" cx="130" cy="80" r="58"/>
        <path d="M130 22 L176 38 V78 C176 108 156 128 130 138 C104 128 84 108 84 78 V38 Z" style="fill:rgba(47,107,255,.12);stroke:var(--accent-hi);stroke-width:2"/>
        <g clip-path="url(#shieldClip)"><rect class="scanline" x="84" y="26" width="92" height="3" style="fill:var(--accent-hi);opacity:.85"/></g>
        <path class="shackle st-a" d="M119 78 V68 a11 11 0 0 1 22 0 V78" style="stroke:var(--text)"/>
        <rect x="112" y="76" width="36" height="30" rx="6" class="fl-a2"/>
        <circle cx="130" cy="88" r="4" style="fill:#0b0b0c"/><rect x="128.5" y="89" width="3" height="9" rx="1.5" style="fill:#0b0b0c"/>
    </svg>`,

    payment: `<svg class="ill ill-pay" viewBox="0 0 260 160" aria-hidden="true">
        <rect x="46" y="70" width="66" height="42" rx="7" class="fl-a" transform="rotate(-14 79 91)" style="opacity:.55"/>
        <g class="phone">
            <rect x="98" y="14" width="64" height="132" rx="12" style="fill:#1c1c20;stroke:var(--line-2);stroke-width:1.5"/>
            <rect x="104" y="26" width="52" height="104" rx="6" style="fill:#f4f3ef"/>
            <circle class="ok-bg" cx="130" cy="64" r="15" style="fill:#16a34a"/>
            <path class="check" d="M123 64 l5 5 l9 -10" style="fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round"/>
            <text x="130" y="102" text-anchor="middle" style="fill:#131313;font-size:11px;font-weight:600;font-family:Inter,sans-serif;letter-spacing:.1em">PAY</text>
            <rect x="114" y="110" width="32" height="5" rx="2.5" style="fill:#d6d3ca"/>
        </g>
        <path class="wave st-a" style="--i:0" d="M172 42 a10 10 0 0 1 10 10"/>
        <path class="wave st-a" style="--i:1" d="M172 32 a20 20 0 0 1 20 20"/>
        <path class="wave st-a" style="--i:2" d="M172 22 a30 30 0 0 1 30 30"/>
    </svg>`,

    cloud: `<svg class="ill ill-cloud" viewBox="0 0 260 160" aria-hidden="true">
        <g class="cloud">
            <g style="fill:var(--accent-hi);opacity:.32">
                <circle cx="104" cy="70" r="24"/><circle cx="134" cy="56" r="32"/><circle cx="164" cy="74" r="20"/>
                <rect x="80" y="70" width="104" height="26" rx="13"/>
            </g>
        </g>
        <path class="wire st-a" d="M110 96 V122 H96 V136"/><circle cx="96" cy="140" r="4" class="fl-a2"/>
        <path class="wire st-a" d="M132 96 V136"/><circle cx="132" cy="140" r="4" class="fl-a2"/>
        <path class="wire st-a" d="M154 96 V122 H168 V136"/><circle cx="168" cy="140" r="4" class="fl-a2"/>
        ${[[188, 70], [198, 82], [210, 64], [204, 96], [220, 80], [214, 54], [228, 92], [192, 50]].map(([x, y], i) =>
            `<rect class="px fl-a2" style="--i:${i};opacity:.8" x="${x}" y="${y}" width="${i % 3 ? 6 : 8}" height="${i % 3 ? 6 : 8}" rx="1"/>`).join('')}
    </svg>`,

    automation: `<svg class="ill ill-auto" viewBox="0 0 260 160" aria-hidden="true">
        <g class="orbit">
            <circle cx="130" cy="80" r="64" class="st" style="stroke-dasharray:3 6"/>
            <circle class="fl-a2" cx="194" cy="80" r="5"/><circle class="fl-w" cx="66" cy="80" r="4"/>
            <circle class="fl-w" cx="130" cy="16" r="4"/><circle class="fl-a2" cx="130" cy="144" r="5"/>
        </g>
        <g class="gear">
            <circle cx="116" cy="74" r="24" style="fill:none;stroke:var(--accent-hi);stroke-width:9;stroke-dasharray:6.28 6.28"/>
            <circle cx="116" cy="74" r="18" style="fill:var(--accent)"/><circle cx="116" cy="74" r="6" style="fill:#131418"/>
        </g>
        <g class="gear b">
            <circle cx="152" cy="104" r="15" style="fill:none;stroke:var(--text);stroke-width:7;stroke-dasharray:4.71 4.71"/>
            <circle cx="152" cy="104" r="11" style="fill:#c9c8c4"/><circle cx="152" cy="104" r="4" style="fill:#131418"/>
        </g>
    </svg>`,

    powerplatform: `<svg class="ill ill-pp" viewBox="0 0 260 160" aria-hidden="true">
        <path class="pp-wire" style="--i:0" d="M130 80 L56 42"/>
        <path class="pp-wire" style="--i:1" d="M130 80 L56 118"/>
        <path class="pp-wire" style="--i:2" d="M130 80 L204 80"/>
        <g class="tile" style="--i:0"><rect x="34" y="20" width="44" height="44" rx="10" style="fill:#F2C811"/>
            ${[[43, 46, 10], [53, 38, 18], [63, 30, 26]].map(([x, y, h], i) => `<rect class="bibar" style="--i:${i}" x="${x}" y="${y}" width="7" height="${h}" rx="1.5" fill="#3a3a3a"/>`).join('')}</g>
        <g class="tile" style="--i:1"><rect x="34" y="96" width="44" height="44" rx="10" style="fill:#742774"/>
            <rect x="48" y="104" width="16" height="28" rx="3.5" style="fill:none;stroke:#fff;stroke-width:2"/><circle cx="56" cy="127" r="1.6" fill="#fff"/></g>
        <g class="tile" style="--i:2"><rect x="182" y="58" width="44" height="44" rx="10" style="fill:#0066FF"/>
            <path class="chev" d="M193 72 l9 8 l-9 8 M204 72 l9 8 l-9 8" style="fill:none;stroke:#fff;stroke-width:3;stroke-linecap:round;stroke-linejoin:round"/></g>
        <g class="hub"><circle cx="130" cy="80" r="26" style="fill:#f4f3ef"/>
            <rect x="119" y="69" width="10" height="10" fill="#F25022"/><rect x="130" y="69" width="10" height="10" fill="#7FBA00"/>
            <rect x="119" y="80" width="10" height="10" fill="#00A4EF"/><rect x="130" y="80" width="10" height="10" fill="#FFB900"/></g>
        <text x="56" y="76" text-anchor="middle">POWER BI</text>
        <text x="56" y="152" text-anchor="middle">POWER APPS</text>
        <text x="204" y="114" text-anchor="middle">AUTOMATE</text>
        <text x="130" y="122" text-anchor="middle">M365</text>
    </svg>`,

    mobile: `<svg class="ill ill-mobile" viewBox="0 0 260 160" aria-hidden="true">
        <rect x="66" y="30" width="54" height="110" rx="10" transform="rotate(-10 93 85)" style="fill:#18181c;stroke:var(--line-2);stroke-width:1.5"/>
        <rect x="74" y="44" width="38" height="8" rx="4" transform="rotate(-10 93 85)" class="fl"/>
        <rect x="74" y="58" width="28" height="8" rx="4" transform="rotate(-10 93 85)" class="fl"/>
        <rect x="112" y="16" width="64" height="130" rx="12" style="fill:#1c1c20;stroke:var(--line-2);stroke-width:1.5"/>
        <rect x="118" y="28" width="52" height="106" rx="6" style="fill:#121318"/>
        ${[0, 1, 2, 3].map(i => `<g class="item" style="--i:${i}"><rect x="123" y="${36 + i * 23}" width="42" height="17" rx="4" style="fill:rgba(93,141,255,.18)"/><circle cx="131" cy="${44.5 + i * 23}" r="4" class="fl-a2"/><rect x="139" y="${42 + i * 23}" width="20" height="5" rx="2.5" class="fl"/></g>`).join('')}
        <g class="notif"><rect x="150" y="8" width="78" height="24" rx="8" style="fill:var(--text)"/><circle cx="162" cy="20" r="5" class="fl-ok"/><rect x="172" y="15" width="44" height="4" rx="2" style="fill:#9a9aa0"/><rect x="172" y="22" width="30" height="4" rx="2" style="fill:#c9c8c4"/></g>
    </svg>`,

    data: `<svg class="ill ill-data" viewBox="0 0 260 160" aria-hidden="true">
        <path class="st" d="M40 132 H226 M40 132 V22"/>
        ${[[56, 118], [74, 110], [88, 114], [102, 96], [118, 100], [134, 84], [148, 88], [164, 70], [178, 74], [194, 56], [208, 60]].map(([x, y], i) =>
            `<circle class="dot" style="--i:${i}" cx="${x}" cy="${y}" r="4"/>`).join('')}
        <path class="trend st-a" pathLength="100" d="M48 124 C100 108 150 82 214 50"/>
        <path class="forecast" d="M214 50 L236 38" style="fill:none;stroke:var(--accent-hi);stroke-width:2;stroke-dasharray:4 4"/>
        <g class="ai"><rect x="188" y="92" width="44" height="26" rx="7" style="fill:rgba(93,141,255,.16);stroke:var(--accent-hi);stroke-width:1.2"/><text x="210" y="109" text-anchor="middle" style="fill:var(--text);font-size:10px">AI</text></g>
    </svg>`,

    sql: `<svg class="ill ill-sql" viewBox="0 0 260 160" aria-hidden="true">
        <path d="M80 44 V118 A44 13 0 0 0 168 118 V44" style="fill:rgba(47,107,255,.14);stroke:var(--accent-hi);stroke-width:1.5"/>
        <path class="seg" style="--i:0" d="M80 69 A44 13 0 0 0 168 69"/>
        <path class="seg" style="--i:1" d="M80 94 A44 13 0 0 0 168 94"/>
        <ellipse cx="124" cy="44" rx="44" ry="13" style="fill:rgba(93,141,255,.35);stroke:var(--accent-hi);stroke-width:1.5"/>
        ${[0, 1, 2].map(i => `<rect class="row" style="--i:${i}" x="176" y="54" width="26" height="5" rx="2.5"/>`).join('')}
        <g><rect x="172" y="18" width="68" height="24" rx="6" style="fill:#1c1c20;stroke:var(--line-2)"/><text x="182" y="34" style="fill:var(--accent-hi);font-size:10px">SELECT *</text><rect class="caret fl-w" x="232" y="25" width="2" height="11"/></g>
    </svg>`,

    saas: `<svg class="ill ill-saas" viewBox="0 0 260 160" aria-hidden="true">
        ${[[44, 34], [44, 126], [216, 34], [216, 126]].map(([x, y], i) =>
            `<path class="wire st-a" style="--i:${i}" d="M130 80 L${x} ${y}"/>`).join('')}
        ${[[44, 34], [44, 126], [216, 34], [216, 126]].map(([x, y], i) =>
            `<g class="tenant" style="--i:${i}"><rect x="${x - 22}" y="${y - 15}" width="44" height="30" rx="7" style="fill:#1c1c20;stroke:var(--line-2)"/><circle cx="${x - 9}" cy="${y}" r="6" class="${i % 2 ? 'fl-a2' : 'fl-ok'}"/><rect x="${x}" y="${y - 4}" width="14" height="3.5" rx="1.75" class="fl"/><rect x="${x}" y="${y + 2}" width="10" height="3.5" rx="1.75" class="fl"/></g>`).join('')}
        <rect class="core" x="100" y="58" width="60" height="44" rx="10" style="fill:var(--accent)"/>
        <text x="130" y="84" text-anchor="middle" style="fill:#fff;font-size:11px;font-weight:600">API</text>
    </svg>`,

    monitoring: `<svg class="ill ill-mon" viewBox="0 0 260 160" aria-hidden="true">
        <rect x="24" y="18" width="212" height="124" rx="12" class="st" style="fill:rgba(255,255,255,.02)"/>
        <text x="38" y="40">UPTIME</text><text x="38" y="58" style="fill:var(--text);font-size:15px;font-family:var(--f-display);font-weight:600">99.9%</text>
        <circle cx="186" cy="36" r="4" class="fl-ok"/><circle cx="200" cy="36" r="4" class="fl-ok"/><circle class="warn" cx="214" cy="36" r="4" style="fill:var(--warn)"/>
        <path class="st" d="M36 98 H224" style="stroke-dasharray:2 4"/>
        <path class="pulse" pathLength="100" d="M36 98 H86 L96 80 L106 120 L118 62 L130 112 L138 98 H224" style="fill:none;stroke:var(--ok);stroke-width:2.5;stroke-linecap:round;stroke-linejoin:round"/>
    </svg>`,

    pm: `<svg class="ill ill-pm" viewBox="0 0 260 160" aria-hidden="true">
        ${[['TODO', 30], ['DOING', 102], ['DONE', 174]].map(([h, x]) =>
            `<rect x="${x}" y="22" width="60" height="118" rx="8" style="fill:rgba(255,255,255,.03);stroke:var(--line)"/><text x="${x + 8}" y="38">${h}</text>`).join('')}
        <rect x="38" y="70" width="44" height="18" rx="4" class="fl"/><rect x="38" y="94" width="44" height="18" rx="4" class="fl"/>
        <rect x="110" y="70" width="44" height="18" rx="4" class="fl"/>
        <rect x="182" y="70" width="44" height="18" rx="4" style="fill:rgba(61,220,151,.25)"/>
        <g class="mover"><rect x="38" y="46" width="44" height="18" rx="4" class="fl-a"/><rect x="44" y="53" width="24" height="4" rx="2" style="fill:#fff;opacity:.8"/></g>
    </svg>`,

    maintenance: `<svg class="ill ill-maint" viewBox="0 0 260 160" aria-hidden="true">
        <rect x="58" y="20" width="132" height="90" rx="10" style="fill:#18181c;stroke:var(--line-2);stroke-width:1.5"/>
        <path d="M108 110 L102 132 H146 L140 110" style="fill:#1c1c20;stroke:var(--line-2)"/>
        <g class="gear"><circle cx="124" cy="56" r="16" style="fill:none;stroke:var(--accent-hi);stroke-width:7;stroke-dasharray:4.2 4.2"/><circle cx="124" cy="56" r="9" style="fill:var(--accent)"/><circle cx="124" cy="56" r="3.5" style="fill:#18181c"/></g>
        <rect x="76" y="88" width="96" height="6" rx="3" class="fl"/>
        <rect class="bar" x="76" y="88" width="96" height="6" rx="3" style="fill:var(--ok)"/>
        <g class="wrench"><rect x="196" y="62" width="10" height="54" rx="5" style="fill:#c9c8c4"/><circle cx="201" cy="58" r="12" style="fill:#c9c8c4"/><rect x="196" y="44" width="10" height="14" style="fill:#131418"/></g>
    </svg>`,

    transformation: (() => {
        const cells = [[95, 50], [130, 50], [165, 50], [77.7, 80], [112.4, 80], [147.1, 80], [181.8, 80], [95, 110], [130, 110], [165, 110]];
        const order = [3, 0, 6, 1, 8, 4, 2, 9, 5, 7];
        const labels = { 1: '</>', 4: 'DB', 6: 'AI', 8: 'API' };
        const hexes = cells.map(([x, y], i) =>
            `<path class="hex" style="--i:${order[i]}" d="${hexPath(x, y, 18)}"/>` +
            (labels[i] ? `<text x="${x}" y="${y + 3}" text-anchor="middle" style="fill:var(--text)">${esc(labels[i])}</text>` : '')
        ).join('');
        return `<svg class="ill ill-dt" viewBox="0 0 260 160" aria-hidden="true">${hexes}
            <path class="finger fl-w" d="M150 86 ${CURSOR}"/></svg>`;
    })()
};


/* ─────────────────────────── state ───────────────────────────── */
let LANG = store.get('fc_lang') || ((navigator.language || 'en').toLowerCase().startsWith('fr') ? 'fr' : 'en');
if (!window.T[LANG]) LANG = 'en';
let currentFilter = 'all';
let statementTween = null;
const T = () => window.T[LANG];

/* ─────────────────────────── renderers ───────────────────────── */
function renderHeroTitle() {
    const { text, accent } = T().hero.title;
    const words = (str, cls) => str.split(/\s+/).map(w => `<span class="word"><span${cls ? ` class="${cls}"` : ''}>${esc(w)}</span></span>`).join(' ');
    $('#heroTitle').innerHTML = words(text) + ' ' + words(accent, 'serif');
}

function splitWords(el) {
    el.innerHTML = el.textContent.trim().split(/\s+/).map(w => `<span class="w"><span>${esc(w)}</span></span>`).join(' ');
}

function renderStatement() {
    const el = $('#statement');
    el.innerHTML = T().about.statement.split(/\s+/).map(w => `<span class="sw">${esc(w)}</span>`).join(' ');
}

function renderPillars() {
    $('#pillars').innerHTML = T().about.pillars.map(p => `<li class="pillar"><h3>${p.t}</h3><p>${p.d}</p></li>`).join('');
}

function linksHTML(p, tw, cls) {
    const out = [];
    if (p.links.live) out.push(`<a href="${p.links.live}" target="_blank" rel="noopener noreferrer" class="link-u"><i class="fas fa-arrow-up-right-from-square"></i>${tw.live}</a>`);
    if (p.links.code) out.push(`<a href="${p.links.code}" target="_blank" rel="noopener noreferrer" class="link-u"><i class="fab fa-github"></i>${tw.code}</a>`);
    return out.length ? `<div class="${cls}">${out.join('')}</div>` : `<p class="feat-note">${tw.private}</p>`;
}

function shotHTML(p, it) {
    const sh = p.shot, many = sh.slides.length > 1;
    const alt = esc(it.name + ' — ' + it.sub);
    const dots = many ? `<span class="shot-dots">${sh.slides.map((_, k) => `<b${k ? '' : ' class="is-active"'}></b>`).join('')}</span>` : '';
    const imgs = sh.slides.map((s, k) =>
        `<img src="${s.src}" data-bar="${s.bar}" width="${sh.w}" height="${sh.h}" loading="lazy" alt="${alt}"${k ? '' : ' class="is-active"'}>`).join('');
    return `<div class="feat-tilt wide"><div class="shot"${many ? ' data-slides' : ''}>
        <div class="mock-bar"><i></i><i></i><i></i><span class="shot-url">${sh.slides[0].bar}</span>${dots}</div>
        <div class="shot-stage" style="aspect-ratio:${sh.w} / ${sh.h}">${imgs}</div>
    </div></div>`;
}

function logEntry(m, i) {
    const zone = m.zones[i % m.zones.length];
    const ok = (i * 7) % 5 !== 2;
    const h = 8 + Math.floor((i * 3) / 60), min = (i * 3) % 60;
    return `<li><span>${String(h).padStart(2, '0')}:${String(min).padStart(2, '0')}</span><b>${zone}</b><span class="${ok ? 'ok' : 'no'}">${ok ? m.granted : m.denied}</span></li>`;
}

function mockQR(m) {
    return `<div class="feat-tilt"><div class="qr-mock">
        <div class="badge-card">
            <div class="badge-qr"><img src="assets/img/bhh-badge.png" width="420" height="420" loading="lazy" alt="BHHaccess QR badge EMPL001"><span class="scan"></span></div>
            <div class="badge-name">${m.badge} · EMPL001</div>
            <div class="badge-role">${m.role}</div>
        </div>
        <div class="access-log">
            <header><span>${m.log}</span><span style="color:var(--ok)">● ${m.live}</span></header>
            <ul id="accessLog">${[4, 3, 2, 1, 0].map(i => logEntry(m, i)).join('')}</ul>
        </div>
    </div></div>`;
}

function renderFeatured() {
    const tw = T().work, m = MOCK[LANG];
    $('#featured').innerHTML = PROJECTS.filter(p => p.featured).map(p => {
        const it = tw.items[p.id];
        return `<article class="feat${p.shot ? ' is-shot' : ''}">
            <div class="feat-visual" data-observe>${p.shot ? shotHTML(p, it) : mockQR(m) + `<span class="mock-caption">${m.illus}</span>`}</div>
            <div class="feat-body">
                <div class="feat-col">
                    <div class="feat-meta"><span class="status status-${p.status}">${tw.status[p.status]}</span><span>${it.kicker}</span></div>
                    <h3>${it.name}</h3>
                    <p class="feat-sub">${it.sub}</p>
                    <p class="feat-desc">${it.desc}</p>
                </div>
                <div class="feat-col">
                    <ul class="feat-points">${it.points.map(x => `<li>${x}</li>`).join('')}</ul>
                    <ul class="chips">${p.stack.map(s => `<li>${s}</li>`).join('')}</ul>
                    ${linksHTML(p, tw, 'feat-links')}
                </div>
            </div>
        </article>`;
    }).join('');
}

function renderProjects() {
    const tw = T().work;
    $('#projList').innerHTML = PROJECTS.map((p, i) => ({ p, i })).filter(({ p }) => !p.featured).map(({ p, i }) => {
        const it = tw.items[p.id];
        const hidden = currentFilter !== 'all' && p.cat !== currentFilter ? ' is-hidden' : '';
        return `<li class="prow${hidden}" data-cat="${p.cat}">
            <button class="prow-head" type="button" aria-expanded="false">
                <span class="prow-num">${String(i + 1).padStart(2, '0')}</span>
                <span class="prow-name">${it.name}<small>${it.sub}</small></span>
                <span class="prow-cat">${it.cat}</span>
                <span class="prow-icon" aria-hidden="true"></span>
            </button>
            <div class="prow-body"><div><div class="prow-inner">
                <p>${it.desc}</p>
                <div><ul class="chips">${p.stack.map(s => `<li>${s}</li>`).join('')}</ul>${linksHTML(p, tw, 'prow-links')}</div>
            </div></div></div>
        </li>`;
    }).join('');
}

function renderJobs() {
    const te = T().exp;
    $('#jobs').innerHTML = te.jobs.map((j, n) => {
        const m = JOBS[n] || { tags: [] };
        const tasks = j.tasks.map((x, k) => {
            const hl = k === 0 || k === m.side;
            const tag = k === m.side ? ` <span class="tag-new">${te.new_tag}</span>` : '';
            return `<li${hl ? ' class="highlight"' : ''}>${x}${tag}</li>`;
        }).join('');
        return `<article class="job${m.current ? ' is-current' : ''}">
            <div class="job-side"><span class="job-date">${j.date}</span>${m.current ? `<span class="job-now">${te.current}</span>` : ''}</div>
            <div class="job-main">
                <h3 class="job-role">${j.role}</h3>
                <p class="job-company">${j.company}</p>
                <ul class="job-tasks">${tasks}</ul>
                <ul class="chips">${m.tags.map(t => `<li>${t}</li>`).join('')}</ul>
                <button class="story-toggle" type="button" aria-expanded="false"><span class="plus" aria-hidden="true"></span><span class="story-label">${te.read}</span></button>
                <div class="story"><div><p>${j.story}</p></div></div>
            </div>
        </article>`;
    }).join('');
}

function renderEdu() {
    $('#eduGrid').innerHTML = T().exp.edu.map(e => `<div class="edu-card"><span class="edu-year">${e.year}</span><h4>${e.title}</h4><p>${e.school}</p></div>`).join('');
}

const dots = l => `<span class="lvl" data-l="${l}" aria-hidden="true"><i></i><i></i><i></i></span>`;

function renderStack() {
    const ts = T().stack;
    $('#legend').innerHTML = [3, 2, 1].map(l => `<span>${dots(l)}${ts.legend[l]}</span>`).join('');
    $('#stackGrid').innerHTML = Object.keys(SKILLS).map(g => `
        <div class="stack-group">
            <h3>${ts.groups[g]}</h3>
            <ul>${SKILLS[g].map(([name, l]) => `<li><span>${name}</span>${dots(l)}<span class="sr-only">${ts.legend[l]}</span></li>`).join('')}</ul>
        </div>`).join('');
}

function renderServices() {
    const sv = T().startup.svcs, h = sv[SERVICE_HERO];
    const hero = `
        <article class="svc hero-svc">
            <div class="svc-art" data-observe>${ART[SERVICE_HERO]}</div>
            <div class="svc-body"><span class="svc-badge">${h.badge}</span><span class="svc-num">01</span><h3>${h.t}</h3><p>${h.d}</p></div>
        </article>`;
    $('#bento').innerHTML = hero + SERVICES_ART.map((id, i) => `
        <article class="svc${SERVICES_WIDE.includes(id) ? ' wide' : ''}">
            <div class="svc-art" data-observe>${ART[id]}</div>
            <div class="svc-body"><span class="svc-num">${String(i + 2).padStart(2, '0')}</span><h3>${sv[id].t}</h3><p>${sv[id].d}</p></div>
        </article>`).join('');
}

function renderMarquee() {
    const row = list => { const one = list.map(x => `<span class="marquee-item">${x}</span>`).join(''); return one + one; };
    $('#marqueeA').innerHTML = row(MARQUEE_A.map(([label, icon]) =>
        `<img src="assets/icons/${icon.includes('.') ? icon : icon + '.svg'}" width="28" height="28" alt="" loading="lazy">${label}`));
    $('#marqueeB').innerHTML = row(MARQUEE_B);
}

function splitStartupTitle() {
    const st = $('.startup-title');
    const node = st && st.firstChild;
    if (!node || node.nodeType !== 3) return;
    const wrap = document.createElement('span');
    wrap.className = 'chars';
    wrap.setAttribute('aria-label', node.textContent.trim());
    wrap.innerHTML = node.textContent.trim().split('').map(c => `<span aria-hidden="true">${esc(c)}</span>`).join('');
    st.replaceChild(wrap, node);
}

/* ─────────────────────────── i18n ────────────────────────────── */
/* Hero: one word of the intro keeps changing (digital platforms → business
   apps → automations…). Restarted on every language switch. */
let rotTimer = null;
function startRotator() {
    clearInterval(rotTimer);
    const el = $('.hero-desc .rot');
    const words = T().hero.rotate;
    if (!el || !words || prefersReduced) return;
    let i = 0;
    rotTimer = setInterval(() => {
        i = (i + 1) % words.length;
        if (!MOTION) { el.textContent = words[i]; return; }
        gsap.to(el, { yPercent: -70, opacity: 0, filter: 'blur(4px)', duration: .35, ease: 'power2.in', onComplete: () => {
            el.textContent = words[i];
            gsap.fromTo(el, { yPercent: 70, opacity: 0, filter: 'blur(4px)' }, { yPercent: 0, opacity: 1, filter: 'blur(0px)', duration: .5, ease: 'power3.out' });
        } });
    }, 2600);
}

function setLang(code, first) {
    if (!window.T[code]) code = 'en';
    LANG = code;
    store.set('fc_lang', code);
    const t = T();

    document.documentElement.lang = code;
    document.title = t.meta.title;

    $$('[data-i18n]').forEach(el => { const v = getPath(t, el.dataset.i18n); if (v !== null) el.textContent = v; });
    $$('[data-i18n-html]').forEach(el => { const v = getPath(t, el.dataset.i18nHtml); if (v !== null) el.innerHTML = v; });
    $$('[data-i18n-ph]').forEach(el => { const v = getPath(t, el.dataset.i18nPh); if (v !== null) el.placeholder = v; });
    $$('.lang button').forEach(b => {
        const on = b.dataset.lang === code;
        b.classList.toggle('is-active', on);
        b.setAttribute('aria-pressed', on);
    });

    renderHeroTitle();
    $$('[data-split]').forEach(splitWords);
    renderStatement();
    renderPillars();
    renderFeatured();
    renderProjects();
    renderJobs();
    renderEdu();
    renderStack();
    renderServices();
    observeVisible();
    startRotator();

    if (!first && MOTION) {
        buildStatementScrub();
        ScrollTrigger.refresh();
    }
}

$$('.lang button').forEach(b => b.addEventListener('click', () => { if (b.dataset.lang !== LANG) setLang(b.dataset.lang); }));

/* ─────────────────────── visibility observer ─────────────────── */
/* Adds .is-visible to [data-observe] while on screen — CSS uses it to
   run (and pause) the looping illustrations. */
const visIO = 'IntersectionObserver' in window
    ? new IntersectionObserver(entries => entries.forEach(e => e.target.classList.toggle('is-visible', e.isIntersecting)), { rootMargin: '0px 0px -8% 0px' })
    : null;

function observeVisible() {
    const els = $$('[data-observe]');
    if (!visIO) { els.forEach(el => el.classList.add('is-visible')); return; }
    visIO.disconnect();
    els.forEach(el => visIO.observe(el));
}

/* ─────────────────────────── interactions ────────────────────── */
// Project filter
$('#filters').addEventListener('click', e => {
    const btn = e.target.closest('button[data-filter]');
    if (!btn) return;
    currentFilter = btn.dataset.filter;
    $$('#filters button').forEach(b => b.classList.toggle('is-active', b === btn));
    const rows = $$('#projList .prow');
    rows.forEach(r => r.classList.toggle('is-hidden', currentFilter !== 'all' && r.dataset.cat !== currentFilter));
    if (MOTION) {
        gsap.fromTo(rows.filter(r => !r.classList.contains('is-hidden')),
            { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: .6, stagger: .06, ease: 'power3.out', clearProps: 'transform,opacity' });
        ScrollTrigger.refresh();
    }
});

// Project rows (accordion)
$('#projList').addEventListener('click', e => {
    const head = e.target.closest('.prow-head');
    if (!head) return;
    const row = head.parentElement;
    const open = !row.classList.contains('is-open');
    row.classList.toggle('is-open', open);
    head.setAttribute('aria-expanded', open);
    refreshSoon();
});

// Experience stories
$('#jobs').addEventListener('click', e => {
    const btn = e.target.closest('.story-toggle');
    if (!btn) return;
    const story = btn.nextElementSibling;
    const open = !story.classList.contains('is-open');
    story.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open);
    $('.story-label', btn).textContent = open ? T().exp.hide : T().exp.read;
    refreshSoon();
});

function refreshSoon() {
    if (MOTION) setTimeout(() => ScrollTrigger.refresh(), 600);
}

// Featured mock tilt
if (!isTouch && !prefersReduced) {
    $('#featured').addEventListener('mousemove', e => {
        const vis = e.target.closest('.feat-visual');
        if (!vis) return;
        const r = vis.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
        const tilt = $('.feat-tilt', vis);
        tilt.style.setProperty('--ry', (nx * 10).toFixed(2) + 'deg');
        tilt.style.setProperty('--rx', (-ny * 8).toFixed(2) + 'deg');
    });
    $('#featured').addEventListener('mouseout', e => {
        const vis = e.target.closest('.feat-visual');
        if (vis && !vis.contains(e.relatedTarget)) {
            const tilt = $('.feat-tilt', vis);
            tilt.style.setProperty('--ry', '0deg');
            tilt.style.setProperty('--rx', '0deg');
        }
    });
}

// Screenshot slideshow (KPIFlow): every 3 s the current image zooms out of
// the frame while the next one settles in. Pauses while hovered.
setInterval(() => {
    if (prefersReduced) return;
    $$('.shot[data-slides]').forEach(shot => {
        if (!shot.closest('.is-visible') || shot.matches(':hover')) return;
        const imgs = $$('.shot-stage img', shot);
        const cur = imgs.findIndex(i => i.classList.contains('is-active'));
        const next = (cur + 1) % imgs.length;
        const leaving = imgs[cur];
        leaving.classList.replace('is-active', 'is-leaving');
        setTimeout(() => leaving.classList.remove('is-leaving'), 1100);
        imgs[next].classList.add('is-active');
        $$('.shot-dots b', shot).forEach((d, k) => d.classList.toggle('is-active', k === next));
        $('.shot-url', shot).textContent = imgs[next].dataset.bar;
    });
}, 3000);

// Live access log in the BHHaccess mock
let logTick = 5;
setInterval(() => {
    const list = $('#accessLog');
    if (!list || prefersReduced || !list.closest('.is-visible')) return;
    list.insertAdjacentHTML('afterbegin', logEntry(MOCK[LANG], logTick++));
    list.firstElementChild.classList.add('is-new');
    while (list.children.length > 5) list.lastElementChild.remove();
}, 2200);

// Navigation: hide on scroll down, active link, mobile menu
const nav = $('#nav');
const progress = $('#progress');
let lastY = window.scrollY;
window.addEventListener('scroll', () => {
    const y = window.scrollY;
    nav.classList.toggle('is-scrolled', y > 20);
    nav.classList.toggle('is-hidden', y > lastY && y > 400 && !document.body.classList.contains('menu-open'));
    lastY = y;
    if (!MOTION) {
        const max = document.documentElement.scrollHeight - window.innerHeight;
        progress.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    }
}, { passive: true });

if ('IntersectionObserver' in window) {
    const links = $$('#navLinks a');
    const secIO = new IntersectionObserver(entries => entries.forEach(e => {
        if (e.isIntersecting) links.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + e.target.id));
    }), { rootMargin: '-45% 0px -50% 0px' });
    $$('main section[id]').forEach(s => secIO.observe(s));
}

const burger = $('#burger'), navLinks = $('#navLinks');
function setMenu(open) {
    burger.setAttribute('aria-expanded', open);
    navLinks.classList.toggle('is-open', open);
    document.body.classList.toggle('menu-open', open);
}
burger.addEventListener('click', () => setMenu(burger.getAttribute('aria-expanded') !== 'true'));
$$('#navLinks a').forEach(a => a.addEventListener('click', () => setMenu(false)));
document.addEventListener('keydown', e => { if (e.key === 'Escape') setMenu(false); });

// Contact form — real delivery (endpoint) or honest mailto fallback
const form = $('#contactForm');
const note = $('#formNote');
const sayNote = (msg, kind) => { note.textContent = msg; note.className = 'form-note ' + kind; };
form.addEventListener('submit', async e => {
    e.preventDefault();
    const tc = T().contact;
    const data = Object.fromEntries(new FormData(form));
    if (data._gotcha) return;
    if (!form.checkValidity() || !data.name.trim() || !data.message.trim()) { sayNote(tc.invalid, 'err'); return; }

    const btn = $('button[type="submit"]', form);
    const label = $('[data-i18n="contact.send"]', btn);
    btn.disabled = true;
    label.textContent = tc.sending;
    try {
        if (FORM_ENDPOINT) {
            const res = await fetch(FORM_ENDPOINT, { method: 'POST', headers: { Accept: 'application/json' }, body: new FormData(form) });
            if (!res.ok) throw new Error('HTTP ' + res.status);
            sayNote(tc.success, 'ok');
            form.reset();
        } else {
            const body = `${data.message}\n\n— ${data.name} (${data.email})`;
            window.location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(data.subject)}&body=${encodeURIComponent(body)}`;
            sayNote(tc.mailto, 'ok');
        }
    } catch (err) {
        sayNote(tc.error, 'err');
    } finally {
        btn.disabled = false;
        label.textContent = tc.send;
    }
});

// Back to top links
$$('a[href="#home"]').forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: prefersReduced ? 'auto' : 'smooth' });
}));

$('#year').textContent = new Date().getFullYear();

/* ─────────────────────────── terminal ────────────────────────── */
function startTerminal() {
    const el = $('#term');
    const script = [
        { prompt: true, text: 'git push origin main' },
        { text: '→ running tests ......... ', ok: 'ok' },
        { text: '→ building release ...... ', ok: 'ok' },
        { text: '→ ssh deploy@debian-13' },
        { text: '→ migrating database .... ', ok: 'ok' },
        { done: '✓ kpiflow is live' }
    ];
    const html = (l, n) => l.prompt ? `<span class="p">$</span> <span class="hl">${esc(l.text.slice(0, n))}</span>`
        : l.done ? `<span class="ok">${esc(l.done)}</span>`
        : esc(l.text) + (l.ok ? `<span class="ok">${l.ok}</span>` : '');
    const caret = '<span class="term-caret"></span>';

    if (prefersReduced) { el.innerHTML = script.map(l => html(l, l.text ? l.text.length : 0)).join('\n'); return; }

    let done = [], li = 0, ci = 0;
    (function step() {
        const l = script[li];
        if (!l) { setTimeout(() => { done = []; li = 0; ci = 0; step(); }, 3600); return; }
        if (l.prompt && ci < l.text.length) {
            ci++;
            el.innerHTML = [...done, html(l, ci) + caret].join('\n');
            return setTimeout(step, 45 + Math.random() * 60);
        }
        done.push(html(l, ci));
        li++; ci = 0;
        el.innerHTML = done.join('\n') + (script[li] ? '\n' + caret : ' ' + caret);
        setTimeout(step, script[li] && script[li].done ? 700 : 420);
    })();
}

/* ─────────────────────────── motion ──────────────────────────── */
/* Odometer counters: every digit is a strip 0-9 twice over; it spins one
   full turn and lands on its value, digits settling one after another. */
const CELLS = 20;
const odoTarget = d => -(10 + d) * (100 / CELLS);

function buildOdometers() {
    $$('[data-count]').forEach(el => {
        const value = el.dataset.count;
        el.setAttribute('aria-label', value);
        const cells = Array.from({ length: CELLS }, (_, n) => `<span>${n % 10}</span>`).join('');
        el.innerHTML = value.split('').map(d =>
            `<span class="odo" aria-hidden="true"><span class="odo-strip" data-d="${d}" style="transform:translateY(${odoTarget(+d)}%)">${cells}</span></span>`
        ).join('');
    });
}

function rollOdometers() {
    const strips = $$('.odo-strip');
    gsap.fromTo(strips, { yPercent: 0, y: 0 }, {
        yPercent: i => odoTarget(+strips[i].dataset.d), duration: 2, stagger: .14, ease: 'power4.out', overwrite: true
    });
}

function heroTimeline(delay) {
    const tl = gsap.timeline({ delay, defaults: { ease: 'power4.out' }, onComplete: heroParallax });
    tl.from('#nav', { yPercent: -100, duration: 1, clearProps: 'transform' }, 0)
      .from('.hero-title .word > span', { yPercent: 115, duration: 1.1, stagger: .045 }, 0)
      .fromTo('#heroPhoto', { clipPath: 'inset(100% 0% 0% 0% round 20px)' }, { clipPath: 'inset(0% 0% 0% 0% round 20px)', duration: 1.4, ease: 'expo.inOut' }, 0)
      .fromTo('#heroPhoto img', { scale: 1.3 }, { scale: 1.06, duration: 1.8, ease: 'expo.out' }, .1)
      .from('.h-in', { y: 28, opacity: 0, duration: 1, stagger: .08, ease: 'power3.out' }, .35)
      .from('#heroTerm', { x: -50, y: 20, opacity: 0, duration: 1, ease: 'power3.out' }, .8)
      .from('#heroChip', { y: -16, opacity: 0, duration: .8, ease: 'back.out(2)' }, 1)
      .from('#heroRing', { scale: 0, rotate: -120, duration: 1, ease: 'back.out(1.6)' }, 1.05)
      .from('.scroll-hint', { opacity: 0, duration: .8 }, 1.3);

    // counters start at 0 behind the loader, then roll in
    gsap.set('.odo-strip', { yPercent: 0, y: 0 });
    tl.add(rollOdometers, .6);
    return tl;
}

function intro() {
    const loader = $('#loader');
    if (!MOTION) { loader.remove(); return; }

    // Build the hero intro now (paused) so its start state is applied
    // while the loader still covers the page — no flash of content.
    const hero = heroTimeline(0).pause();
    const L = T().loader || window.T.en.loader;
    let finished = false;

    $('#loaderHello').innerHTML = L.hello.split('').map(c => `<span>${c === ' ' ? '&nbsp;' : esc(c)}</span>`).join('');
    $('#loaderLine').textContent = L.line;
    $('#loaderSub').textContent = L.sub;
    $('#loaderSkip').textContent = L.enter;

    // ring centre = where the reveal circle opens from
    const ring = $('.loader-ring').getBoundingClientRect();
    loader.style.setProperty('--cy', (ring.top + ring.height / 2) + 'px');

    const count = $('#loaderCount');
    const o = { v: 0 };
    const tl = gsap.timeline();
    tl.from('.loader-ring', { scale: .6, opacity: 0, duration: 1, ease: 'expo.out' }, .1)
      .to(o, { v: 100, duration: 3, ease: 'power1.inOut', onUpdate: () => {
          count.textContent = Math.round(o.v);
          $('#loaderRing').style.strokeDashoffset = 100 - o.v;
      } }, .3)
      .from('#loaderHello span', { opacity: 0, y: 30, filter: 'blur(14px)', duration: 1, stagger: .06, ease: 'power3.out' }, .5)
      .from('#loaderLine', { opacity: 0, y: 16, filter: 'blur(10px)', duration: 1, ease: 'power3.out' }, 1.3)
      .from('#loaderSub', { opacity: 0, y: 10, duration: .9, ease: 'power3.out' }, 1.9)
      .from('.loader-skip', { opacity: 0, duration: .8 }, 1.2)
      .to('.loader-ring', { scale: 1.08, duration: .25, yoyo: true, repeat: 1, ease: 'power2.out' }, 3.3)
      .add(finish, 3.6);

    function finish() {
        if (finished) return;
        finished = true;
        tl.pause();
        const max = Math.hypot(window.innerWidth, window.innerHeight);
        gsap.timeline()
            .to('.loader-inner, .loader-skip', { opacity: 0, scale: 1.04, filter: 'blur(6px)', duration: .5, ease: 'power2.in' })
            .to(loader, { '--hole': max + 'px', duration: 1.3, ease: 'expo.inOut' }, '-=.25')
            .add(() => hero.play(), '-=.9')
            .add(() => loader.remove());
    }
    loader.addEventListener('click', finish);
}

function heroParallax() {
    if (!MOTION || isTouch) return;
    const hero = $('.hero');
    const items = [['#heroPhoto img', 16], ['#heroTerm', -26], ['#heroChip', 18], ['#heroRing', -32]].map(([sel, f]) => {
        const el = $(sel);
        return { f, x: gsap.quickTo(el, 'x', { duration: .9, ease: 'power3' }), y: gsap.quickTo(el, 'y', { duration: .9, ease: 'power3' }) };
    });
    hero.addEventListener('mousemove', e => {
        const r = hero.getBoundingClientRect();
        const nx = (e.clientX - r.left) / r.width - .5, ny = (e.clientY - r.top) / r.height - .5;
        items.forEach(i => { i.x(nx * i.f); i.y(ny * i.f); });
    });
    hero.addEventListener('mouseleave', () => items.forEach(i => { i.x(0); i.y(0); }));
}

function magnetic() {
    if (!MOTION || isTouch) return;
    $$('.magnetic').forEach(el => {
        const xTo = gsap.quickTo(el, 'x', { duration: .5, ease: 'power3' });
        const yTo = gsap.quickTo(el, 'y', { duration: .5, ease: 'power3' });
        el.addEventListener('mousemove', e => {
            const r = el.getBoundingClientRect();
            xTo((e.clientX - r.left - r.width / 2) * .3);
            yTo((e.clientY - r.top - r.height / 2) * .4);
        });
        el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
    });
}

function buildStatementScrub() {
    if (statementTween) { if (statementTween.scrollTrigger) statementTween.scrollTrigger.kill(); statementTween.kill(); }
    statementTween = gsap.fromTo('#statement .sw', { opacity: .14 }, {
        opacity: 1, stagger: .1, ease: 'none',
        scrollTrigger: { trigger: '#statement', start: 'top 80%', end: 'bottom 45%', scrub: true }
    });
}

function initScroll() {
    // counters roll again whenever you scroll back up to them
    ScrollTrigger.create({ trigger: '.hero-stats', start: 'top bottom', end: 'bottom top', onEnterBack: rollOdometers });

    // progress bar
    gsap.to('#progress', { scaleX: 1, ease: 'none', scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: .3 } });

    // hero drifts away as you scroll
    gsap.to('#heroPhoto', { y: 80, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });
    gsap.to('.hero-copy', { y: -50, ease: 'none', scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: true } });

    // marquee leans with scroll velocity
    const skewTo = gsap.quickTo('.marquee', 'skewX', { duration: .5, ease: 'power3' });
    ScrollTrigger.create({ onUpdate: self => skewTo(gsap.utils.clamp(-6, 6, self.getVelocity() / 300)) });
    ScrollTrigger.addEventListener('scrollEnd', () => skewTo(0));

    // section labels + split titles
    $$('.sec-head').forEach(el => gsap.from(el, { opacity: 0, x: -24, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));
    $$('[data-split]').forEach(el => gsap.from($$('.w > span', el), {
        yPercent: 110, duration: 1.1, stagger: .07, ease: 'power4.out', scrollTrigger: { trigger: el, start: 'top 88%' }
    }));
    $$('.sec-intro').forEach(el => gsap.from(el, { opacity: 0, y: 24, duration: 1, delay: .2, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 90%' } }));

    // about statement: words light up while scrolling
    buildStatementScrub();

    // generic reveals
    $$('[data-reveal]').forEach(el => gsap.from(el, { y: 50, opacity: 0, duration: 1.1, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 86%' } }));

    // staggered groups
    ['.pillar', '.prow', '.job', '.edu-card', '.stack-group', '.cmethods a'].forEach(sel => {
        const els = $$(sel);
        if (!els.length) return;
        gsap.set(els, { y: 50, opacity: 0 });
        ScrollTrigger.batch(els, {
            start: 'top 90%', once: true,
            onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, duration: 1, stagger: .09, ease: 'power3.out', clearProps: 'transform,opacity' })
        });
    });

    // featured cards slide in alternately from the left and the right
    $$('.feat').forEach((el, i) => gsap.from(el, {
        x: i % 2 ? 160 : -160, opacity: 0, duration: 1.4, ease: 'power4.out', clearProps: 'transform,opacity',
        scrollTrigger: { trigger: el, start: 'top 82%' }
    }));

    // featured mock-ups rise in with a slight rotation
    $$('.feat-visual .feat-tilt').forEach(el => gsap.from(el, {
        y: 60, rotate: -2, opacity: 0, duration: 1.3, delay: .25, ease: 'power3.out', clearProps: 'transform,opacity',
        scrollTrigger: { trigger: el, start: 'top 85%' }
    }));

    // project visuals grow from 80% to full size as they scroll into view
    $$('.feat-visual .shot, .feat-visual .qr-mock').forEach(el => gsap.fromTo(el, { scale: .8 }, {
        scale: 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top bottom', end: 'top 35%', scrub: .6 }
    }));

    // service cards appear one by one: rise, unblur and settle
    const svcs = $$('.svc');
    gsap.set(svcs, { y: 80, opacity: 0, scale: .92, filter: 'blur(6px)' });
    ScrollTrigger.batch(svcs, {
        start: 'top 90%', once: true,
        onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, scale: 1, filter: 'blur(0px)', duration: 1.1, stagger: .14, ease: 'power4.out', clearProps: 'transform,opacity,filter' })
    });

    // background images drift slower than the page
    gsap.fromTo('.more-bg', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.more-wrap', start: 'top bottom', end: 'bottom top', scrub: true } });
    gsap.fromTo('.contact-think', { opacity: 0 }, { opacity: .3, duration: 1.6, ease: 'power3.out', scrollTrigger: { trigger: '#contact', start: 'top 70%' } });

    gsap.fromTo('.edu-bg', { yPercent: -8 }, { yPercent: 8, ease: 'none', scrollTrigger: { trigger: '.edu', start: 'top bottom', end: 'bottom top', scrub: true } });

    // experience timeline draws itself
    gsap.to('#tlProgress', { scaleY: 1, ease: 'none', scrollTrigger: { trigger: '#timeline', start: 'top 70%', end: 'bottom 60%', scrub: true } });

    // HellooTech letters + contact title
    gsap.from('.startup-title .chars span', { yPercent: 105, duration: 1, stagger: .04, ease: 'power4.out', scrollTrigger: { trigger: '.startup-title', start: 'top 85%' } });
    gsap.from('.startup-title .serif', { opacity: 0, y: 20, duration: 1, delay: .4, ease: 'power3.out', scrollTrigger: { trigger: '.startup-title', start: 'top 85%' } });
    gsap.from('.contact-title', { y: 90, opacity: 0, duration: 1.3, ease: 'power4.out', scrollTrigger: { trigger: '.contact-title', start: 'top 88%' } });
}

/* ─────────────────────────── boot ────────────────────────────── */
renderMarquee();
splitStartupTitle();
buildOdometers();
setLang(LANG, true);
startTerminal();

if (MOTION) {
    initScroll();
    magnetic();
    window.addEventListener('load', () => ScrollTrigger.refresh());
}
intro();

})();
