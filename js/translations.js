/* ═══════════════════════════════════════════════════════════
   Copy — EN / FR
   All visible text lives here. Structural data (stacks, links,
   levels, icons) lives in main.js and is matched by `id`, never
   by array position.
   ═══════════════════════════════════════════════════════════ */

window.T = {

/* ─────────────────────────── ENGLISH ─────────────────────────── */
en: {
  meta: { title: 'Fongang Cabrel Kamara — Software Engineer, Full-Stack & DevOps' },

  nav: { about: 'About', work: 'Work', experience: 'Experience', stack: 'Stack', startup: 'HellooTech', contact: 'Contact', cta: 'Let’s talk' },

  hero: {
    eyebrow: 'Software engineer · Full-stack & DevSecOps',
    title: { text: 'I build software that', accent: 'businesses run on.' },
    desc: 'I’m FONGANG Cabrel, a developer based in Douala, Cameroon. I design, ship and run web platforms end to end — from the FastAPI back-end to the Debian server it lives on. My KPI platform, <strong>KPIFlow</strong>, is used company-wide at BEETLE HERITAGE HOLDING.',
    btn_work: 'See my work',
    btn_contact: 'Get in touch',
    stat1: 'projects shipped',
    stat2: 'running in production',
    stat3: 'professional roles',
    available: 'Open to opportunities',
    ring: 'Open to work · Douala · Remote · ',
    scroll: 'Scroll'
  },

  about: {
    label: 'About',
    statement: 'I didn’t get into this to write code for its own sake. What I enjoy is taking a messy, manual process — an Excel file passed around by email, someone pinging servers by hand — and replacing it with a system people actually trust.',
    p1: 'Every project starts with the same question: <em>what decision does this need to enable?</em> At BEETLE that meant replacing a company-wide Excel KPI cycle with <strong>KPIFlow</strong>. For a beach festival in Italy it meant a ticketing site that takes real payments. For a network team it meant a script that ends manual pinging.',
    p2: 'My profile sits between <strong>back-end development</strong>, data and infrastructure, so I can follow a problem from the database schema to the deployment pipeline. Right now I’m building my AWS skills from the ground up, with one goal: becoming a <strong>Platform Engineer</strong> (full-stack + DevOps).',
    f_location: 'Based in', v_location: 'Douala-Yassa, Cameroon · open to remote',
    f_edu: 'Studying', v_edu: 'Bachelor in Software Engineering (Data Science), IME',
    f_lang: 'Languages', v_lang: 'French (fluent) · English (technical)',
    f_mail: 'Email',
    pillars: [
      { t: 'Full-stack development', d: 'Web apps and PWAs, back to front — Python/FastAPI, PHP, React.' },
      { t: 'Data & automation', d: 'ETL pipelines, SQL Server consolidation, scheduled jobs that replace manual reporting.' },
      { t: 'Infrastructure & monitoring', d: 'Linux servers, VPS setup, network visibility and alerting.' },
      { t: 'DevOps & CI/CD', d: 'GitHub Actions, SSH deployments, Docker — from commit to production.' },
      { t: 'Clean architecture', d: 'MVC, SOLID, code written for the next developer, not just the machine.' }
    ]
  },

  work: {
    label: 'Selected work',
    title: 'Things I’ve built',
    intro: 'The projects I’m proudest of, then the rest. Most of them are internal tools, so the code isn’t public — happy to walk you through any of them in a call.',
    more_title: 'More projects',
    f_all: 'All', f_web: 'Web apps', f_data: 'Data & automation', f_infra: 'Infrastructure',
    live: 'Visit live site',
    code: 'Source code',
    private: 'Internal tool — demo available on request.',
    status: { production: 'In production', mvp: 'MVP · in progress', live: 'Live' },
    items: {
      kpiflow: {
        name: 'KPIFlow',
        sub: 'Internal KPI platform, used company-wide',
        kicker: 'BEETLE HERITAGE HOLDING · 2026',
        desc: 'Every department at BEETLE tracked its KPIs in static Excel files. KPIFlow replaced the whole cycle with one platform, which I designed, built, deployed and still run.',
        points: [
          'Full KPI lifecycle: definition → assignment → submission → automatic scoring → multi-level validation',
          'Sandboxed formula engine (Python <code>ast</code>, strict node whitelist): each department writes its own scoring rule, safely',
          'Dual-mode IAM: local accounts or CSV/AD import, with a guided first-login flow',
          'Dockerised and deployed on the company’s Debian 13 server — CI/CD over SSH, monitored with Grafana'
        ]
      },
      bhhaccess: {
        name: 'BHHaccess',
        sub: 'QR-badge access control',
        kicker: 'Personal initiative · 2026',
        desc: 'A side project I started on my own initiative: an access-control MVP built around QR-code badges. Admins decide who can go where; agents at the door scan a badge and get an answer in a second.',
        points: [
          'Zones, roles and flexible permission rules — no hard-coded access logic',
          'Full audit log: every scan and every admin change is traced',
          'Bulk import of staff and badges from Excel',
          'Web app for security agents to scan and verify badges on the spot',
          'MVC architecture following SOLID principles, written to stay readable and maintainable'
        ]
      },
      vyntix: { name: 'VYNTIX', sub: 'IT infrastructure monitor', cat: 'Infrastructure',
        desc: 'Hybrid real-time network monitoring built on FastAPI, SQL Server, SQLite, WebSockets, Redis and Chart.js. Live visibility on every device, zero-downtime writes and TTL-based health scoring.' },
      smarty: { name: 'SMARTY', sub: 'Ride-hailing platform', cat: 'Web · Mobile',
        desc: 'A complete ride-hailing product: web admin plus Android/iOS apps in React Native and TypeScript, an async FastAPI back-end, SQLAlchemy, PostgreSQL, and Redis for real-time driver tracking.' },
      ssas: { name: 'SSAS', sub: 'Smart stock alert system', cat: 'Data & automation',
        desc: 'A Python ETL pipeline consolidating stock data into SQL Server. Critical items are detected against configurable thresholds, SQL Server Agent runs the nightly jobs, and managers get their report every morning.' },
      flowi: { name: 'FlowI', sub: 'Business process automation', cat: 'Automation',
        desc: 'A modular framework to map, schedule and chain business workflows from a visual React.js interface, powered by an async FastAPI orchestration engine and plug-in Python modules.' },
      cocosecret: {
        name: 'cocosecret.shop',
        sub: 'Wellness e-commerce, live',
        kicker: 'Client project · E-commerce',
        desc: 'An online store for teas, sweets and wellness care, built for a real brand and selling every day. Customers choose how they buy: straight on WhatsApp, or through a full online checkout.',
        points: [
          'Hybrid sales funnel: order on WhatsApp or check out online',
          'Notchpay and Flutterwave payments (mobile money and card) with real-time webhook confirmation',
          'Catalogue, cart, customer accounts and testimonials',
          'Deployed and running in production at cocosecret.shop'
        ]
      },
      cocoitalia: { name: 'Coco Italia Beach', sub: 'Event ticketing', cat: 'Web · Live',
        desc: 'Ticketing for a summer beach festival in Parma, Italy: three ticket tiers (day €10 / evening €15 / full €20), Stripe checkout and attendee management. <strong>It handled real ticket sales for the 2026 edition.</strong>' },
      hospiconnect: { name: 'HospiConnect', sub: 'Hospital queue management', cat: 'Web · Healthcare',
        desc: 'Built for Clinique du Chatelet to replace paper tickets and voice paging: priority queue (standard / priority / emergency), waiting-room kiosk with voice announcements, email notifications with zero medical data, transfers between departments, wait-time analytics and a 12-month audit trail. Four roles: superadmin, admin, secretary, doctor.' },
      scripx: { name: 'SCRIPX', sub: 'Network monitoring · my first project at BEETLE', cat: 'Infrastructure',
        desc: 'My very first project at BEETLE HERITAGE HOLDING, built for the network team. A PowerShell tool that pings every device on the production network at once and shows live latency, so the team spots a failing machine immediately instead of checking them one by one — <strong>faster interventions and real monitoring</strong>.' }
    }
  },

  exp: {
    label: 'Experience',
    title: 'Where I’ve worked',
    intro: 'Three roles, each one closer to production. The short version is below — open the story if you want the context.',
    current: 'Current',
    read: 'Read the story',
    hide: 'Hide the story',
    new_tag: 'side project',
    jobs: [
      {
        role: 'Digital Solutions & Automation Integrator', company: 'BEETLE HERITAGE HOLDING', date: 'Jan 2026 – present',
        tasks: [
          'Designed, built and deployed <strong>KPIFlow</strong>, a production platform replacing the company’s Excel-based KPI cycle',
          'My very first project there: <strong>ScripX</strong>, a PowerShell tool that pings the whole production network at once — it helped the network team monitor the infrastructure and cut their intervention time',
          'Wrote a sandboxed formula engine (Python <code>ast</code>, strict node whitelist) for per-department scoring rules',
          'Implemented dual-mode IAM: local accounts + CSV/AD import with guided first login',
          'Deploy and administer the Dockerised KPIFlow stack on the company’s Debian 13 server; maintain CI/CD over SSH and monitor it with Grafana',
          'Built a Python + SQL Server stock monitoring pipeline with automated daily reports',
          '<span>On my own initiative, building <strong>BHHaccess</strong> — a QR-badge access-control MVP (zones, roles, permissions, audit log, Excel import, agent web app), MVC + SOLID</span>'
        ],
        story: 'When I arrived, every department tracked its KPIs on static Excel files — updated by hand, error-prone and impossible to consolidate. My job was to replace the whole cycle with a real system. I designed and built <strong>KPIFlow</strong> (FastAPI, SQLAlchemy, PostgreSQL, server-rendered Jinja2/Bootstrap). The hardest part was letting each department write its own scoring formula without opening a security hole, so I built a <strong>sandboxed formula engine on Python’s <code>ast</code> module with a strict node whitelist</strong>. I containerised it with Docker, deployed it myself on the company’s Debian 13 server, and I still run it and monitor it with Grafana. It’s now used across the company. It wasn’t my first project there, though: that was <strong>ScripX</strong>, a PowerShell tool that helped the network team monitor the production network and intervene faster. On the side, I started <strong>BHHaccess</strong>, a QR-badge access-control MVP, because I saw how badge access was being handled and thought it could be done better.'
      },
      {
        role: 'Digital Solutions Intern', company: 'HELLOSem', date: 'Jul – Sep 2025',
        tasks: [
          'Mapped and audited the existing business processes before proposing anything',
          'Turned a 3-hour manual daily report into a scheduled 5-minute Python job',
          'Built interactive dashboards giving managers real-time operational visibility',
          'Wrote and tested automation scripts for recurring tasks'
        ],
        story: 'This internship taught me that <strong>digital transformation is 80% understanding the process and 20% technology</strong>. I spent my first week mapping workflows and talking to staff before writing any code. What I found was a 3-hour daily report done entirely by hand. I rebuilt it as a <strong>scheduled Python job</strong> that runs in under 5 minutes — same output, a fraction of the time. The lesson I kept: the best solution is often the one nobody notices, because it just works.'
      },
      {
        role: 'Academic Intern — Software Developer', company: 'FURTHER MARKET sarl', date: 'Jun – Aug 2024',
        tasks: [
          'Shipped PHP/MySQL features on a live production application',
          'Made it a rule to read the existing codebase fully before changing it',
          'Worked with senior developers through Git workflows',
          'Designed database schemas and handled integration tasks'
        ],
        story: 'My first contact with production code serving real users. A bug here isn’t an exercise — it breaks something for an actual customer, and that sharpened my <strong>debugging discipline</strong> fast. I contributed to PHP/MySQL features, got better at schema design and learned to work on a shared codebase with Git. The biggest takeaway wasn’t technical: <strong>write code for the developer who comes after you</strong>, not just for the machine.'
      }
    ],
    edu_title: 'Education & certifications',
    edu: [
      { year: '2026 – 2027', title: 'Bachelor in Software Engineering — Data Science', school: 'IME — Institut de Management et de l’Entrepreneuriat' },
      { year: '2023 – 2025', title: 'HND in Computer Science', school: 'IME — Institut de Management et de l’Entrepreneuriat' },
      { year: '2022 – 2023', title: 'GCE Advanced Level', school: 'G.B.H.S Bafoussam' },
      { year: 'In progress', title: 'Certifications', school: 'IBM Data Science · AWS Cloud Practitioner (CLF-C02) · SAP Certified Associate – SAP BTP' }
    ]
  },

  stack: {
    label: 'Stack',
    title: 'Tools I reach for',
    intro: 'No percentages — just an honest idea of what I use every day, what I’m comfortable with, and what I’m still learning.',
    legend: { 3: 'Daily driver', 2: 'Comfortable', 1: 'Learning' },
    groups: { backend: 'Back-end', frontend: 'Front-end & mobile', data: 'Data & databases', infra: 'Infra & DevOps', methods: 'Payments & methods' }
  },

  startup: {
    label: 'My studio',
    tagline: 'Custom digital solutions',
    desc: 'HellooTech is the studio I founded to help businesses go digital — from the first web app to the server it runs on. Small team, direct contact, and we stay around after launch.',
    btn_visit: 'Visit hellootech',
    svcs: {
      web:            { t: 'Full-stack web & PWA', d: 'Fast, installable web apps — designed, built and maintained end to end.' },
      devops:         { t: 'DevOps & CI/CD', d: 'Automated pipelines: build, test and deploy on every push.' },
      devsecops:      { t: 'DevSecOps', d: 'Security baked into the pipeline: access control, audit trails, hardened servers.' },
      payment:        { t: 'Payment integration', d: 'Mobile money and card payments — Notchpay, Flutterwave, Stripe — with webhook confirmation.' },
      cloud:          { t: 'Cloud & VPS hosting', d: 'We set up, secure and run your servers so your apps stay online.' },
      automation:     { t: 'Process automation', d: 'Scheduled jobs and workflows that replace repetitive manual work.' },
      transformation: { t: 'Digital transformation', d: 'We map your processes first, then modernise your information system around them.' },
      mobile:      { t: 'Mobile apps', d: 'Android & iOS' },
      data:        { t: 'Data science & AI', d: 'Analysis, predictive models' },
      sql:         { t: 'SQL databases', d: 'SQL Server, MySQL, PostgreSQL' },
      saas:        { t: 'SaaS platforms', d: 'Multi-tenant products & APIs' },
      monitoring:  { t: 'Infra monitoring', d: 'Uptime, alerting, dashboards' },
      pm:          { t: 'Project management', d: 'Agile, SDLC' },
      maintenance: { t: 'IT maintenance', d: 'Preventive & corrective support' }
    }
  },

  contact: {
    label: 'Contact',
    title: 'Got a project?<br><span class="serif">Let’s talk.</span>',
    intro: 'A job offer, a freelance project, or a question about something I built — I read every message and usually reply within a day.',
    f_name: 'Name', f_email: 'Email', f_subject: 'Subject', f_message: 'Message',
    ph_name: 'Your name', ph_email: 'you@company.com', ph_subject: 'What’s it about?', ph_message: 'Tell me a bit about your project…',
    send: 'Send message',
    sending: 'Sending…',
    success: 'Thanks — your message is on its way. I’ll get back to you soon.',
    mailto: 'Your email app should open with the message ready — just hit send.',
    error: 'Something went wrong. Please email me directly at fongangcabrel2007@gmail.com.',
    invalid: 'Please fill in every field with a valid email address.'
  },

  footer: { top: 'Back to top ↑', note: 'Designed and coded by hand — no template.' }
},

/* ─────────────────────────── FRANÇAIS ─────────────────────────── */
fr: {
  meta: { title: 'Fongang Cabrel Kamara — Ingénieur logiciel, Full-Stack & DevOps' },

  nav: { about: 'À propos', work: 'Projets', experience: 'Parcours', stack: 'Stack', startup: 'HellooTech', contact: 'Contact', cta: 'Discutons' },

  hero: {
    eyebrow: 'Ingénieur logiciel · Full-stack & DevSecOps',
    title: { text: 'Je conçois des logiciels qui font', accent: 'tourner les entreprises.' },
    desc: 'Moi c’est FONGANG Cabrel, développeur basé à Douala, au Cameroun. Je conçois, livre et fais tourner des plateformes web de bout en bout — du back-end FastAPI jusqu’au serveur Debian qui l’héberge. Ma plateforme de KPI, <strong>KPIFlow</strong>, est utilisée dans toute l’entreprise chez BEETLE HERITAGE HOLDING.',
    btn_work: 'Voir mes projets',
    btn_contact: 'Me contacter',
    stat1: 'projets réalisés',
    stat2: 'en production',
    stat3: 'expériences pro',
    available: 'Ouvert aux opportunités',
    ring: 'Disponible · Douala · Remote · ',
    scroll: 'Défiler'
  },

  about: {
    label: 'À propos',
    statement: 'Je ne suis pas venu à l’informatique pour écrire du code pour le code. Ce que j’aime, c’est prendre un processus manuel et bancal — un fichier Excel qui circule par mail, quelqu’un qui ping ses serveurs à la main — et le remplacer par un système auquel les gens font confiance.',
    p1: 'Chaque projet commence par la même question : <em>quelle décision doit-il rendre possible ?</em> Chez BEETLE, ça voulait dire remplacer le suivi des KPI sous Excel de toute l’entreprise par <strong>KPIFlow</strong>. Pour un festival de plage en Italie, une billetterie qui encaisse de vrais paiements. Pour une équipe réseau, un script qui met fin aux pings manuels.',
    p2: 'Mon profil se situe entre le <strong>développement back-end</strong>, la data et l’infrastructure : je peux suivre un problème du schéma de base de données jusqu’au pipeline de déploiement. En ce moment, je monte en compétences sur AWS en partant de zéro, avec un objectif : devenir <strong>Platform Engineer</strong> (full-stack + DevOps).',
    f_location: 'Basé à', v_location: 'Douala-Yassa, Cameroun · ouvert au remote',
    f_edu: 'Études', v_edu: 'Licence en Génie Logiciel (Data Science), IME',
    f_lang: 'Langues', v_lang: 'Français (courant) · Anglais (technique)',
    f_mail: 'Email',
    pillars: [
      { t: 'Développement full-stack', d: 'Applications web et PWA de bout en bout — Python/FastAPI, PHP, React.' },
      { t: 'Data & automatisation', d: 'Pipelines ETL, consolidation SQL Server, jobs planifiés qui remplacent le reporting manuel.' },
      { t: 'Infrastructure & monitoring', d: 'Serveurs Linux, mise en place de VPS, visibilité réseau et alertes.' },
      { t: 'DevOps & CI/CD', d: 'GitHub Actions, déploiements SSH, Docker — du commit à la production.' },
      { t: 'Architecture propre', d: 'MVC, SOLID, du code écrit pour le prochain développeur, pas seulement pour la machine.' }
    ]
  },

  work: {
    label: 'Projets choisis',
    title: 'Ce que j’ai construit',
    intro: 'Les projets dont je suis le plus fier, puis le reste. La plupart sont des outils internes, donc le code n’est pas public — je peux vous en faire la démo lors d’un appel.',
    more_title: 'Autres projets',
    f_all: 'Tous', f_web: 'Applications web', f_data: 'Data & automatisation', f_infra: 'Infrastructure',
    live: 'Voir le site',
    code: 'Code source',
    private: 'Outil interne — démo disponible sur demande.',
    status: { production: 'En production', mvp: 'MVP · en cours', live: 'En ligne' },
    items: {
      kpiflow: {
        name: 'KPIFlow',
        sub: 'Plateforme interne de KPI, utilisée dans toute l’entreprise',
        kicker: 'BEETLE HERITAGE HOLDING · 2026',
        desc: 'Chaque département de BEETLE suivait ses KPI dans des fichiers Excel statiques. KPIFlow a remplacé tout ce cycle par une seule plateforme, que j’ai conçue, développée, déployée et que j’administre encore.',
        points: [
          'Cycle complet des KPI : définition → affectation → soumission → calcul automatique du score → validation multi-niveaux',
          'Moteur de formules isolé (module <code>ast</code> de Python, liste blanche stricte) : chaque département écrit sa propre règle de calcul, en toute sécurité',
          'IAM à deux modes : comptes locaux ou import CSV/AD, avec parcours guidé de première connexion',
          'Dockerisée et déployée sur le serveur Debian 13 de l’entreprise — CI/CD via SSH, monitoring avec Grafana'
        ]
      },
      bhhaccess: {
        name: 'BHHaccess',
        sub: 'Contrôle d’accès par badge QR',
        kicker: 'Initiative personnelle · 2026',
        desc: 'Un projet lancé de ma propre initiative : un MVP de contrôle d’accès basé sur des badges QR. Les administrateurs définissent qui peut aller où ; à l’entrée, l’agent scanne le badge et obtient la réponse en une seconde.',
        points: [
          'Zones, rôles et permissions flexibles — aucune règle d’accès codée en dur',
          'Journal d’audit complet : chaque scan et chaque action d’administration est tracé',
          'Import en masse du personnel et des badges depuis Excel',
          'Application web pour les agents de sécurité : scan et vérification sur place',
          'Architecture MVC respectant les principes SOLID, code pensé pour rester lisible et maintenable'
        ]
      },
      vyntix: { name: 'VYNTIX', sub: 'Monitoring d’infrastructure IT', cat: 'Infrastructure',
        desc: 'Monitoring réseau hybride en temps réel avec FastAPI, SQL Server, SQLite, WebSockets, Redis et Chart.js. Visibilité en direct sur chaque équipement, écritures sans interruption et score de santé basé sur les TTL.' },
      smarty: { name: 'SMARTY', sub: 'Plateforme de VTC', cat: 'Web · Mobile',
        desc: 'Un produit de VTC complet : back-office web et applications Android/iOS en React Native et TypeScript, back-end FastAPI asynchrone, SQLAlchemy, PostgreSQL et Redis pour le suivi des chauffeurs en temps réel.' },
      ssas: { name: 'SSAS', sub: 'Système d’alerte de stock', cat: 'Data & automatisation',
        desc: 'Un pipeline ETL Python qui consolide les données de stock dans SQL Server. Les articles critiques sont détectés selon des seuils configurables, SQL Server Agent exécute les traitements de nuit, et les responsables reçoivent leur rapport chaque matin.' },
      flowi: { name: 'FlowI', sub: 'Automatisation des processus métier', cat: 'Automatisation',
        desc: 'Un framework modulaire pour cartographier, planifier et enchaîner des workflows métier depuis une interface React.js visuelle, propulsé par un moteur d’orchestration FastAPI asynchrone et des modules Python enfichables.' },
      cocosecret: {
        name: 'cocosecret.shop',
        sub: 'E-commerce bien-être, en ligne',
        kicker: 'Projet client · E-commerce',
        desc: 'Une boutique en ligne de thés, bonbons et soins bien-être, conçue pour une vraie marque et qui vend tous les jours. Le client choisit comment acheter : directement sur WhatsApp, ou via un paiement en ligne complet.',
        points: [
          'Tunnel de vente hybride : commande sur WhatsApp ou paiement en ligne',
          'Paiements Notchpay et Flutterwave (mobile money et carte) avec confirmation par webhook en temps réel',
          'Catalogue, panier, comptes clients et témoignages',
          'Déployée et en production sur cocosecret.shop'
        ]
      },
      cocoitalia: { name: 'Coco Italia Beach', sub: 'Billetterie événementielle', cat: 'Web · En ligne',
        desc: 'Billetterie d’un festival de plage estival à Parme, en Italie : trois formules (journée 10 € / soirée 15 € / complet 20 €), paiement Stripe et gestion des participants. <strong>Elle a encaissé de vraies ventes de billets pour l’édition 2026.</strong>' },
      hospiconnect: { name: 'HospiConnect', sub: 'Gestion des files d’attente hospitalières', cat: 'Web · Santé',
        desc: 'Conçu pour la Clinique du Chatelet pour remplacer les tickets papier et les appels à voix haute : file par priorité (standard / prioritaire / urgence), écran de salle d’attente avec annonces vocales, notifications email sans aucune donnée médicale, transferts entre services, statistiques de temps d’attente et journal d’audit sur 12 mois. Quatre rôles : superadmin, admin, secrétaire, médecin.' },
      scripx: { name: 'SCRIPX', sub: 'Monitoring réseau · mon premier projet chez BEETLE', cat: 'Infrastructure',
        desc: 'Mon tout premier projet chez BEETLE HERITAGE HOLDING, conçu pour l’équipe réseau. Un outil PowerShell qui pingue en même temps tous les équipements du réseau de production et affiche la latence en direct : l’équipe repère tout de suite une machine en panne au lieu de vérifier un par un — <strong>des interventions plus rapides et un vrai monitoring</strong>.' }
    }
  },

  exp: {
    label: 'Parcours',
    title: 'Où j’ai travaillé',
    intro: 'Trois expériences, chacune un peu plus proche de la production. La version courte ci-dessous — ouvrez l’histoire pour le contexte.',
    current: 'En cours',
    read: 'Lire l’histoire',
    hide: 'Masquer l’histoire',
    new_tag: 'projet perso',
    jobs: [
      {
        role: 'Intégrateur des Solutions Digitales et Automatisation', company: 'BEETLE HERITAGE HOLDING', date: 'Janv. 2026 – aujourd’hui',
        tasks: [
          'Conception, développement et déploiement de <strong>KPIFlow</strong>, plateforme en production qui remplace le suivi des KPI sous Excel',
          'Mon tout premier projet : <strong>ScripX</strong>, un outil PowerShell qui pingue tout le réseau de production en simultané — il a aidé l’équipe réseau à surveiller l’infrastructure et à réduire son temps d’intervention',
          'Moteur de formules isolé (module <code>ast</code> de Python, liste blanche stricte) pour des règles de scoring propres à chaque département',
          'IAM à deux modes : comptes locaux + import CSV/AD avec parcours guidé de première connexion',
          'Déploiement et administration de KPIFlow dockerisé sur le serveur Debian 13 de l’entreprise ; maintenance du CI/CD via SSH et monitoring avec Grafana',
          'Pipeline Python + SQL Server de surveillance des stocks avec rapports quotidiens automatisés',
          '<span>De ma propre initiative, développement de <strong>BHHaccess</strong> — MVP de contrôle d’accès par badge QR (zones, rôles, permissions, journal d’audit, import Excel, application web pour les agents), en MVC + SOLID</span>'
        ],
        story: 'À mon arrivée, chaque département suivait ses KPI dans des fichiers Excel statiques — mis à jour à la main, sources d’erreurs et impossibles à consolider. Ma mission : remplacer tout le cycle par un vrai système. J’ai conçu et développé <strong>KPIFlow</strong> (FastAPI, SQLAlchemy, PostgreSQL, rendu serveur Jinja2/Bootstrap). Le plus difficile : laisser chaque département écrire sa propre formule de calcul sans ouvrir de faille de sécurité. J’ai donc construit un <strong>moteur de formules isolé basé sur le module <code>ast</code> de Python avec une liste blanche stricte de nœuds</strong>. Je l’ai dockerisé, déployé moi-même sur le serveur Debian 13 de l’entreprise, et je l’administre et le surveille toujours avec Grafana. Il est aujourd’hui utilisé dans toute l’entreprise. Ce n’était d’ailleurs pas mon premier projet ici : le tout premier, c’était <strong>ScripX</strong>, un outil PowerShell qui a aidé l’équipe réseau à surveiller le réseau de production et à intervenir plus vite. En parallèle, j’ai lancé <strong>BHHaccess</strong>, un MVP de contrôle d’accès par badge QR, parce que j’ai vu comment les accès étaient gérés et que je pensais qu’on pouvait faire mieux.'
      },
      {
        role: 'Stagiaire Solutions Digitales', company: 'HELLOSem', date: 'Juil. – sept. 2025',
        tasks: [
          'Cartographie et audit des processus existants avant toute proposition',
          'Un rapport quotidien manuel de 3 heures transformé en job Python planifié de 5 minutes',
          'Tableaux de bord interactifs donnant aux managers une visibilité opérationnelle en temps réel',
          'Écriture et test de scripts d’automatisation pour les tâches récurrentes'
        ],
        story: 'Ce stage m’a appris que la <strong>transformation digitale, c’est 80 % de compréhension du processus et 20 % de technologie</strong>. J’ai passé ma première semaine à cartographier les flux et à discuter avec le personnel avant d’écrire la moindre ligne de code. J’ai découvert un rapport quotidien de 3 heures entièrement fait à la main. Je l’ai reconstruit en <strong>job Python planifié</strong> qui tourne en moins de 5 minutes — même résultat, une fraction du temps. Ce que j’en retiens : la meilleure solution est souvent celle que personne ne remarque, parce qu’elle fonctionne.'
      },
      {
        role: 'Stagiaire académique — Développeur', company: 'FURTHER MARKET sarl', date: 'Juin – août 2024',
        tasks: [
          'Livraison de fonctionnalités PHP/MySQL sur une application en production',
          'Règle personnelle : lire entièrement le code existant avant de le modifier',
          'Travail avec des développeurs seniors via des workflows Git',
          'Conception de schémas de base de données et tâches d’intégration'
        ],
        story: 'Mon premier contact avec du code en production utilisé par de vrais clients. Ici, un bug n’est pas un exercice : il casse quelque chose pour quelqu’un, et ça a vite affûté ma <strong>discipline de débogage</strong>. J’ai contribué à des fonctionnalités PHP/MySQL, progressé en conception de schémas et appris à travailler sur un code partagé avec Git. Le plus important n’était pas technique : <strong>écrire du code pour le développeur qui viendra après</strong>, pas seulement pour la machine.'
      }
    ],
    edu_title: 'Formation & certifications',
    edu: [
      { year: '2026 – 2027', title: 'Licence en Génie Logiciel — Science des données', school: 'IME — Institut de Management et de l’Entrepreneuriat' },
      { year: '2023 – 2025', title: 'BTS / HND en Informatique', school: 'IME — Institut de Management et de l’Entrepreneuriat' },
      { year: '2022 – 2023', title: 'GCE Advanced Level', school: 'G.B.H.S Bafoussam' },
      { year: 'En cours', title: 'Certifications', school: 'IBM Data Science · AWS Cloud Practitioner (CLF-C02) · SAP Certified Associate – SAP BTP' }
    ]
  },

  stack: {
    label: 'Stack',
    title: 'Mes outils',
    intro: 'Pas de pourcentages — juste une idée honnête de ce que j’utilise tous les jours, de ce que je maîtrise et de ce que j’apprends encore.',
    legend: { 3: 'Au quotidien', 2: 'À l’aise', 1: 'En apprentissage' },
    groups: { backend: 'Back-end', frontend: 'Front-end & mobile', data: 'Data & bases de données', infra: 'Infra & DevOps', methods: 'Paiement & méthodes' }
  },

  startup: {
    label: 'Mon studio',
    tagline: 'Solutions numériques sur mesure',
    desc: 'HellooTech, c’est le studio que j’ai fondé pour accompagner les entreprises dans leur passage au numérique — de la première application web jusqu’au serveur qui la fait tourner. Petite équipe, contact direct, et on reste là après la mise en ligne.',
    btn_visit: 'Visiter hellootech',
    svcs: {
      web:            { t: 'Web full-stack & PWA', d: 'Des applications web rapides et installables — conçues, développées et maintenues de bout en bout.' },
      devops:         { t: 'DevOps & CI/CD', d: 'Des pipelines automatisés : build, tests et déploiement à chaque push.' },
      devsecops:      { t: 'DevSecOps', d: 'La sécurité intégrée au pipeline : contrôle d’accès, traçabilité, serveurs durcis.' },
      payment:        { t: 'Intégration de paiement', d: 'Mobile money et carte bancaire — Notchpay, Flutterwave, Stripe — avec confirmation par webhook.' },
      cloud:          { t: 'Cloud & hébergement VPS', d: 'On installe, sécurise et administre vos serveurs pour que vos applications restent en ligne.' },
      automation:     { t: 'Automatisation des processus', d: 'Des tâches planifiées et des workflows qui remplacent le travail manuel répétitif.' },
      transformation: { t: 'Transformation digitale', d: 'On cartographie d’abord vos processus, puis on modernise votre système d’information autour.' },
      mobile:      { t: 'Applications mobiles', d: 'Android & iOS' },
      data:        { t: 'Data science & IA', d: 'Analyse, modèles prédictifs' },
      sql:         { t: 'Bases de données SQL', d: 'SQL Server, MySQL, PostgreSQL' },
      saas:        { t: 'Plateformes SaaS', d: 'Produits multi-tenant & APIs' },
      monitoring:  { t: 'Monitoring d’infrastructure', d: 'Disponibilité, alertes, tableaux de bord' },
      pm:          { t: 'Gestion de projet', d: 'Agile, SDLC' },
      maintenance: { t: 'Maintenance informatique', d: 'Support préventif & correctif' }
    }
  },

  contact: {
    label: 'Contact',
    title: 'Un projet en tête ?<br><span class="serif">Parlons-en.</span>',
    intro: 'Une offre d’emploi, un projet freelance ou une question sur un de mes projets — je lis tous les messages et je réponds en général sous 24 h.',
    f_name: 'Nom', f_email: 'Email', f_subject: 'Objet', f_message: 'Message',
    ph_name: 'Votre nom', ph_email: 'vous@entreprise.com', ph_subject: 'De quoi s’agit-il ?', ph_message: 'Parlez-moi un peu de votre projet…',
    send: 'Envoyer le message',
    sending: 'Envoi…',
    success: 'Merci — votre message est bien parti. Je vous réponds très vite.',
    mailto: 'Votre messagerie devrait s’ouvrir avec le message prêt — il ne reste qu’à cliquer sur envoyer.',
    error: 'Une erreur est survenue. Écrivez-moi directement à fongangcabrel2007@gmail.com.',
    invalid: 'Merci de remplir tous les champs avec une adresse email valide.'
  },

  footer: { top: 'Haut de page ↑', note: 'Conçu et codé à la main — sans template.' }
}
};
