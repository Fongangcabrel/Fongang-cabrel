/* ═══════════════════════════════════════════
   TRANSLATIONS — EN / FR
   Add more languages by adding a new key to T
   ═══════════════════════════════════════════ */

window.T = {

  /* ─────────────── ENGLISH ─────────────── */
  en: {
    lang_label: 'EN',
    lang_flag:  '🇬🇧',

    nav: {
      about:      'About',
      skills:     'Skills',
      experience: 'Experience',
      projects:   'Projects',
      startup:    'HellooTech',
      contact:    'Contact'
    },

    hero: {
      badge:        'Available for opportunities',
      desc:         'Software engineer passionate about building efficient information systems, data-driven solutions and digital transformation. Based in <strong>Douala, Cameroon | Remote</strong>.',
      btn_projects: 'View Projects',
      btn_contact:  'Get In Touch',
      stat1_lbl:    'Projects',
      stat2_lbl:    'Internships',
      stat3_lbl:    'Years Coding',
      roles: [
        'Software Developer',
        'Data Science Enthusiast',
        'PWA Builder',
        'IT Infrastructure Engineer',
        'Digital Transformer'
      ]
    },

    about: {
      tag:   'About me',
      title: 'Who I Am',
      lead:  'I didn\'t just want to write code — I wanted to build systems that solve real problems. That conviction led me to computer science at IME, where I quickly discovered my true passion: the intersection of <strong>data, automation, and system design</strong>.',
      p1:    'Every project I take on starts with one question: <em>"What decision does this need to enable?"</em> Whether it\'s a stock alert engine that wakes up a manager at 7am with exactly the right information, a ticketing platform that handles real payments for a live event, or a network monitoring script that eliminates manual pinging — the technology is always in service of a concrete outcome.',
      p2:    'My hybrid profile bridges <strong>back-end development</strong>, data engineering and IT infrastructure — which means I can see a problem end-to-end and build the full solution, not just one layer of it.',
      meta_location: 'Douala-Yassa, Cameroon',
      meta_edu:      'HND Computer Science — IME',
      meta_lang:     'French (Fluent) · English (Technical)',
      meta_email:    'Fongangcabrel2007@gmail.com',
      btn_hire:      'Hire Me',
      card1_title: 'Full-Stack Dev',
      card1_desc:  'Web & PWA apps from back to front with Python, PHP, React and FastAPI.',
      card2_title: 'Data & Automation',
      card2_desc:  'ETL pipelines, SQL Server KPI consolidation and automation scripting.',
      card3_title: 'Infra Monitoring',
      card3_desc:  'Real-time infrastructure monitoring, VPS config and network management.',
      card4_title: 'Data Visualization',
      card4_desc:  'Dashboards and reports using Power BI and Python-based solutions.'
    },

    skills: {
      tag:            'Tech Stack',
      title:          'Skills & Technologies',
      tab_all:        'All',
      tab_dev:        'Development',
      tab_data:       'Data & DB',
      tab_infra:      'Infra & Systems',
      tab_payment:    'Payment',
      tab_methods:    'Methods',
      lvl_advanced:     'Advanced',
      lvl_intermediate: 'Intermediate',
      lvl_basic:        'Basic'
    },

    exp: {
      tag:   'Career',
      title: 'Professional Experience',
      current: 'Current',

      role1:    'IT Intern',
      company1: 'BEETLE HERITAGE HOLDING',
      date1:    'Jan 2026 – Present',
      story1: `When I arrived, managers were making financial decisions using static Excel files
               updated manually each morning — slow, error-prone, and blind to real-time shifts.
               My challenge: give the team <strong>live visibility into stock data without
               disrupting their existing workflow</strong>. I designed a Python ETL pipeline that
               automatically extracts, cleans and consolidates market metrics into SQL Server on a
               schedule. The hardest part was building the alert engine: different assets needed
               different threshold logic, so instead of hardcoding rules, I created a
               <strong>configurable rule table in the database</strong> — flexible enough to evolve
               with the business. The result: automated reports land in inboxes every morning, and
               critical alerts fire in real-time. Hours of manual work, gone.`,
      tasks1: [
        'Built a Python ETL pipeline → SQL Server for market data consolidation & KPI tracking',
        'Designed a configurable business rule engine for threshold-based stock alerts',
        'Automated daily reporting, eliminating hours of manual Excel work per week',
        'Managed hardware/software support and assisted with network administration'
      ],

      role2:    'Digital Solutions Intern',
      company2: 'HELLOSem',
      date2:    'Jul – Sep 2025',
      story2: `This internship taught me that <strong>digital transformation is 80% process
               understanding and 20% technology</strong>. Before writing a single line of code, I
               spent the first week mapping workflows and interviewing staff to pinpoint the real
               bottlenecks. What I found: a 3-hour daily reporting process that was entirely manual.
               I rebuilt it as a <strong>scheduled Python automation</strong> that now runs in under
               5 minutes — same output, a fraction of the time. I also built interactive dashboards
               that gave managers a level of operational visibility they had never had before. The
               lesson I carry from this experience: the best technical solution is often the one
               that nobody notices, because it just works seamlessly.`,
      tasks2: [
        'Mapped and audited existing business processes before proposing any solution',
        'Cut a 3-hour manual reporting workflow down to an automated 5-minute script',
        'Built interactive dashboards providing real-time operational visibility',
        'Developed and tested automation scripts for recurring business tasks'
      ],

      role3:    'Academic Intern — Software Developer',
      company3: 'FURTHER MARKET sarl',
      date3:    'Jun – Aug 2024',
      story3: `My first contact with production code serving real users — and it immediately raised
               the stakes. I quickly learned that a bug here isn't an exercise you fix and move on
               from: it breaks something for an actual customer. That pressure sharpened my
               <strong>debugging discipline</strong> fast. Before touching any feature, I made a
               rule for myself: read the existing codebase thoroughly first. I contributed to
               PHP/MySQL feature development, deepened my database schema design skills and learned
               how to collaborate on a shared codebase with Git. The biggest takeaway wasn't a
               technical skill — it was a mindset: <strong>write code for the developer who comes
               after you</strong>, not just for the machine that runs it.`,
      tasks3: [
        'Contributed to PHP/MySQL feature development on a live production application',
        'Developed the discipline of reading a full codebase before modifying it',
        'Collaborated with senior developers using Git version control workflows',
        'Designed database schemas and handled system integration tasks'
      ],

      edu_title: 'Education',
      edu1_title:  'HND in Computer Science',
      edu1_school: 'IME — Institut de Management et de l\'Entrepreneuriat',
      edu2_title:  'GCE Advanced Level',
      edu2_school: 'G.B.H.S Bafoussam',
      edu3_title:  'Certifications (In Progress)',
      edu3_school: 'Azure Database Administrator Associate · IBM Data Science'
    },

    projects: {
      tag:           'Portfolio',
      title:         'Featured Projects',
      filter_all:    'All',
      filter_web:    'Web Apps',
      filter_data:   'Data & Automation',
      filter_infra:  'Infrastructure',
      live_label:    'Live site',
      items: [
        {
          name:     'VYNTIX — IT Infrastructure Monitor',
          catLabel: 'Infrastructure',
          desc:     'Hybrid real-time network monitoring — FastAPI, SQL Server, SQLite, WebSockets, Redis, Chart.js. Live infrastructure visibility with zero-downtime writes and TTL-based device health scoring.'
        },
        {
          name:     'SMARTY — Ride-Hailing Platform',
          catLabel: 'Web App · Mobile',
          desc:     'Complete ride-hailing app: Web Admin + Mobile Android/iOS. React Native, TypeScript, FastAPI async backend, SQLAlchemy ORM, PostgreSQL + Redis for real-time driver tracking.'
        },
        {
          name:     'SSAS — Smart Stock Alert System',
          catLabel: 'Data & Automation',
          desc:     'Automated stock alerts and data analytics pipeline. Python ETL, SQL Server consolidation, SQL Server Agent nightly jobs, Power BI reporting based on configurable thresholds.'
        },
        {
          name:     'FlowI — Business Process Automation',
          catLabel: 'Automation · SaaS',
          desc:     'Modular business-process automation framework that maps, schedules, and chains custom workflows via a visual React.js UI. FastAPI async orchestration engine with plug-and-play Python modules for enterprise workflows.'
        },
        {
          name:     'cocosecret.store — E-commerce Web App',
          catLabel: 'Web App · Live',
          desc:     'Commercially deployed e-commerce platform with a hybrid sales funnel: direct WhatsApp ordering + multi-gateway checkout. Notchpay and Flutterwave payment integration with real-time webhook confirmation.'
        },
        {
          name:     'Coco Italia Beach — Event Ticketing',
          catLabel: 'Web App · Live',
          desc:     'Full event ticketing platform for a summer beach festival in Parma, Italy. Three-tier ticket system (Day €10 / Full €20 / Evening €15), Stripe payment integration, real-time booking with attendee management, and a responsive tropical-themed UI. <strong>Handling real transactions for a live 2026 event.</strong>'
        },
        {
          name:     'LovIT — Dating Platform',
          catLabel: 'Web App',
          desc:     'Full-stack dating app with authentication and profile management. Lightweight Python backend with MySQL persistence and a responsive vanilla-JS front-end.'
        },
        {
          name:     'SCRIPX — Network Monitoring Ping',
          catLabel: 'Infrastructure',
          desc:     'Multi-device network monitoring — BEETLE HERITAGE HOLDING. PowerShell script: simultaneous ping, real-time latency display, infrastructure visibility across the production network.'
        }
      ]
    },

    startup: {
      tag:       'My Startup',
      tagline:   'Custom Digital Solutions',
      desc:      'From digital transformation to cloud hosting, we design and deploy complete solutions tailored to your needs.',
      motto1:    'We Build.',
      motto2:    'We Deploy.',
      motto3:    'We Transform.',
      btn_visit: 'Visit HellooTech Site →',
      svcs: [
        { title: 'Web & PWA Dev',          desc: 'Modern web apps and Progressive Web Apps — fast, reliable and installable on all devices.' },
        { title: 'Mobile Dev',              desc: 'Performant Android & iOS apps with exceptional user experiences.' },
        { title: 'Data Science & AI',       desc: 'Data analysis, predictive models and AI integration to optimize your processes.' },
        { title: 'Digital Transformation',  desc: 'Digitalize your business processes and modernize your information system.' },
        { title: 'SQL Databases',           desc: 'Design, optimization and administration of SQL Server and MySQL databases.' },
        { title: 'Project Management',      desc: 'End-to-end IT project management following best SDLC practices.' },
        { title: 'Infra Monitoring',        desc: 'Real-time server and application monitoring for availability and performance.' },
        { title: 'SaaS Platforms',          desc: 'Scalable multi-tenant SaaS products with APIs and custom dashboards.' },
        { title: 'IT Maintenance',          desc: 'Technical support and preventive/corrective maintenance of your systems.' }
      ],
      vps_title: 'VPS Hosting & Configuration',
      vps_desc:  'We deploy and configure VPS servers, host your applications and manage your production environments with security and performance.'
    },

    contact: {
      tag:   'Let\'s talk',
      title: 'Get In Touch',
      intro: 'Have a project in mind, want to collaborate, or just want to say hi? My inbox is always open.',
      lbl_email:    'Email',
      lbl_whatsapp: 'WhatsApp',
      lbl_linkedin: 'LinkedIn',
      form_name:        'Name',
      form_email:       'Email',
      form_subject:     'Subject',
      form_message:     'Message',
      ph_name:          'Your name',
      ph_email:         'your@email.com',
      ph_subject:       'Project discussion',
      ph_message:       'Tell me about your project...',
      btn_send:         'Send Message',
      success:          '✓ Message received! I\'ll get back to you soon.'
    },

    footer: {
      tagline:     'Building the future, one line of code at a time.',
      founder:     'Founder of <strong class="gradient-text">HellooTech</strong>',
      col_nav:     'Navigate',
      col_connect: 'Connect',
      copyright:   '© 2026 Fongang Cabrel — All rights reserved.'
    }
  },

  /* ─────────────── FRANÇAIS ─────────────── */
  fr: {
    lang_label: 'FR',
    lang_flag:  '🇫🇷',

    nav: {
      about:      'À propos',
      skills:     'Compétences',
      experience: 'Expérience',
      projects:   'Projets',
      startup:    'HellooTech',
      contact:    'Contact'
    },

    hero: {
      badge:        'Disponible pour des opportunités',
      desc:         'Ingénieur logiciel passionné par la construction de systèmes d\'information efficaces, de solutions data et la transformation digitale. Basé à <strong>Douala, Cameroun | Remote</strong>.',
      btn_projects: 'Voir les projets',
      btn_contact:  'Me contacter',
      stat1_lbl:    'Projets',
      stat2_lbl:    'Stages',
      stat3_lbl:    'Ans de code',
      roles: [
        'Développeur Logiciel',
        'Passionné de Data Science',
        'Créateur de PWA',
        'Ingénieur Infrastructure IT',
        'Transformateur Digital'
      ]
    },

    about: {
      tag:   'À propos',
      title: 'Qui suis-je',
      lead:  'Je ne voulais pas seulement écrire du code — je voulais construire des systèmes qui résolvent de vrais problèmes. Cette conviction m\'a amené à l\'informatique à l\'IME, où j\'ai vite découvert ma vraie passion : l\'intersection entre <strong>données, automatisation et conception de systèmes</strong>.',
      p1:    'Chaque projet que j\'entreprends commence par une question : <em>« Quelle décision ceci doit-il permettre ? »</em> Qu\'il s\'agisse d\'un moteur d\'alertes boursières qui réveille un manager à 7h avec exactement la bonne information, d\'une plateforme de billetterie traitant de vrais paiements pour un événement en direct, ou d\'un script de monitoring réseau qui élimine les pings manuels — la technologie est toujours au service d\'un résultat concret.',
      p2:    'Mon profil hybride relie le <strong>développement back-end</strong>, l\'ingénierie des données et l\'infrastructure IT — ce qui me permet de voir un problème de bout en bout et de construire la solution complète, pas seulement une couche.',
      meta_location: 'Douala-Yassa, Cameroun',
      meta_edu:      'BTS Informatique — IME',
      meta_lang:     'Français (Courant) · Anglais (Technique)',
      meta_email:    'Fongangcabrel2007@gmail.com',
      btn_hire:      'Me recruter',
      card1_title: 'Dev Full-Stack',
      card1_desc:  'Applications web & PWA de bout en bout avec Python, PHP, React et FastAPI.',
      card2_title: 'Data & Automatisation',
      card2_desc:  'Pipelines ETL, consolidation KPI SQL Server et scripts d\'automatisation.',
      card3_title: 'Monitoring Infra',
      card3_desc:  'Surveillance d\'infrastructure en temps réel, config VPS et gestion réseau.',
      card4_title: 'Visualisation Data',
      card4_desc:  'Tableaux de bord et rapports avec Power BI et solutions Python.'
    },

    skills: {
      tag:            'Stack Technique',
      title:          'Compétences & Technologies',
      tab_all:        'Tout',
      tab_dev:        'Développement',
      tab_data:       'Data & BDD',
      tab_infra:      'Infra & Systèmes',
      tab_payment:    'Paiement',
      tab_methods:    'Méthodes',
      lvl_advanced:     'Avancé',
      lvl_intermediate: 'Intermédiaire',
      lvl_basic:        'Notions'
    },

    exp: {
      tag:   'Parcours',
      title: 'Expérience Professionnelle',
      current: 'En cours',

      role1:    'Stagiaire IT',
      company1: 'BEETLE HERITAGE HOLDING',
      date1:    'Jan 2026 – Présent',
      story1: `À mon arrivée, les managers prenaient des décisions financières à partir de fichiers
               Excel statiques mis à jour manuellement chaque matin — lent, sujet aux erreurs et
               aveugle aux variations en temps réel. Ma mission : donner à l'équipe une
               <strong>visibilité en direct sur les données boursières sans perturber leur flux de
               travail</strong>. J'ai conçu un pipeline ETL en Python qui extrait, nettoie et
               consolide automatiquement les métriques de marché dans SQL Server selon un planning.
               La partie la plus difficile : le moteur d'alertes. Différents actifs nécessitaient
               des logiques de seuil différentes, j'ai donc créé une <strong>table de règles
               configurable en base de données</strong> plutôt que de coder les conditions en dur.
               Résultat : rapports automatisés chaque matin, alertes critiques en temps réel.
               Des heures de travail manuel, supprimées.`,
      tasks1: [
        'Pipeline ETL Python → SQL Server pour consolidation des données de marché et KPI',
        'Moteur de règles métier configurable pour les alertes de seuil boursier',
        'Automatisation du reporting quotidien, éliminant des heures de travail Excel hebdomadaire',
        'Support technique matériel/logiciel et assistance à l\'administration réseau'
      ],

      role2:    'Stagiaire Solutions Digitales',
      company2: 'HELLOSem',
      date2:    'Juil – Sep 2025',
      story2: `Ce stage m'a appris que la <strong>transformation digitale, c'est 80% compréhension
               du processus et 20% technologie</strong>. Avant d'écrire une seule ligne de code,
               j'ai passé ma première semaine à cartographier les flux et interviewer le personnel
               pour identifier les vrais goulots d'étranglement. Ce que j'ai découvert : un
               processus de reporting quotidien de 3 heures entièrement manuel. Je l'ai reconstruit
               en <strong>automatisation Python planifiée</strong> qui tourne désormais en moins de
               5 minutes — même résultat, une fraction du temps. J'ai aussi construit des tableaux
               de bord interactifs offrant une visibilité opérationnelle inédite aux managers.
               La leçon retenue : la meilleure solution technique est souvent celle que personne
               ne remarque, parce qu'elle fonctionne simplement.`,
      tasks2: [
        'Cartographie et audit des processus métier avant toute proposition de solution',
        'Réduction d\'un reporting manuel de 3h à un script automatisé de 5 minutes',
        'Construction de tableaux de bord interactifs pour la visibilité opérationnelle en temps réel',
        'Développement et test de scripts d\'automatisation pour les tâches récurrentes'
      ],

      role3:    'Stagiaire Académique — Développeur Logiciel',
      company3: 'FURTHER MARKET sarl',
      date3:    'Juin – Août 2024',
      story3: `Mon premier contact avec du code en production servant de vrais utilisateurs — et
               ça a immédiatement élevé les enjeux. J'ai vite appris qu'un bug ici n'est pas un
               exercice qu'on corrige et oublie : il casse quelque chose pour un vrai client. Cette
               pression a affûté rapidement ma <strong>discipline de débogage</strong>. Avant de
               toucher quoi que ce soit, je me suis imposé une règle : lire intégralement le code
               existant en premier. J'ai contribué au développement PHP/MySQL, approfondi mes
               compétences en conception de schémas de BDD et appris à collaborer sur une base de
               code partagée avec Git. Le plus grand enseignement n'était pas technique — c'était
               un état d'esprit : <strong>écrire du code pour le développeur qui viendra après
               toi</strong>, pas seulement pour la machine qui l'exécute.`,
      tasks3: [
        'Contribution au développement de fonctionnalités PHP/MySQL sur une application en production',
        'Discipline acquise : lire intégralement une base de code avant de la modifier',
        'Collaboration avec des développeurs seniors via Git',
        'Conception de schémas de base de données et tâches d\'intégration système'
      ],

      edu_title: 'Formation',
      edu1_title:  'BTS Informatique',
      edu1_school: 'IME — Institut de Management et de l\'Entrepreneuriat',
      edu2_title:  'Baccalauréat Général (GCE A-Level)',
      edu2_school: 'G.B.H.S Bafoussam',
      edu3_title:  'Certifications (En cours)',
      edu3_school: 'Azure Database Administrator · IBM Data Science'
    },

    projects: {
      tag:          'Portfolio',
      title:        'Projets Réalisés',
      filter_all:   'Tous',
      filter_web:   'Web Apps',
      filter_data:  'Data & Automation',
      filter_infra: 'Infrastructure',
      live_label:   'Site en ligne',
      items: [
        {
          name:     'VYNTIX — Monitoring d\'Infrastructure IT',
          catLabel: 'Infrastructure',
          desc:     'Monitoring réseau hybride en temps réel — FastAPI, SQL Server, SQLite, WebSockets, Redis, Chart.js. Visibilité infrastructure live avec scoring de santé des équipements basé sur les TTL.'
        },
        {
          name:     'SMARTY — Plateforme de Ride-Hailing',
          catLabel: 'Web App · Mobile',
          desc:     'Application de ride-hailing complète : Web Admin + Mobile Android/iOS. React Native, TypeScript, backend FastAPI async, SQLAlchemy ORM, PostgreSQL + Redis pour le suivi en temps réel.'
        },
        {
          name:     'SSAS — Smart Stock Alert System',
          catLabel: 'Data & Automatisation',
          desc:     'Alertes stock automatisées et pipeline data analytique. ETL Python, consolidation SQL Server, jobs nocturnes SQL Server Agent, reporting Power BI basé sur des seuils configurables.'
        },
        {
          name:     'FlowI — Automatisation de Processus Métier',
          catLabel: 'Automatisation · SaaS',
          desc:     'Framework modulaire d\'automatisation de processus qui cartographie, planifie et enchaîne des workflows personnalisés via une interface React.js visuelle. Moteur d\'orchestration FastAPI async pour les workflows d\'entreprise.'
        },
        {
          name:     'cocosecret.store — Application E-commerce',
          catLabel: 'Web App · En ligne',
          desc:     'Plateforme e-commerce commercialisée avec tunnel de vente hybride : commande directe WhatsApp + paiement multi-gateway. Intégration Notchpay et Flutterwave avec confirmation webhook en temps réel.'
        },
        {
          name:     'Coco Italia Beach — Billetterie Événementielle',
          catLabel: 'Web App · En ligne',
          desc:     'Plateforme complète de billetterie pour un festival de plage à Parme, Italie. Système 3 niveaux de billets (Journée €10 / Complet €20 / Soirée €15), intégration Stripe, réservation en temps réel. <strong>Traitement de vrais paiements pour un événement live 2026.</strong>'
        },
        {
          name:     'LovIT — Plateforme de Rencontres',
          catLabel: 'Web App',
          desc:     'Application de rencontres full-stack avec authentification et gestion de profils. Backend Python léger avec persistance MySQL et front-end vanilla JS responsive.'
        },
        {
          name:     'SCRIPX — Monitoring Réseau Ping',
          catLabel: 'Infrastructure',
          desc:     'Monitoring multi-appareils réseau — BEETLE HERITAGE HOLDING. Script PowerShell : ping simultané, latence en temps réel, visibilité infrastructure sur le réseau de production.'
        }
      ]
    },

    startup: {
      tag:       'Ma Startup',
      tagline:   'Solutions Numériques Sur Mesure',
      desc:      'De la transformation digitale à l\'hébergement cloud, nous concevons et déployons des solutions complètes adaptées à vos besoins.',
      motto1:    'On Construit.',
      motto2:    'On Déploie.',
      motto3:    'On Transforme.',
      btn_visit: 'Visiter le site HellooTech →',
      svcs: [
        { title: 'Développement Web & PWA',     desc: 'Applications web modernes et PWA — rapides, fiables et installables sur tous les appareils.' },
        { title: 'Développement Mobile',         desc: 'Apps Android & iOS performantes avec des expériences utilisateur exceptionnelles.' },
        { title: 'Data Science & IA',            desc: 'Analyse de données, modèles prédictifs et intégration IA pour optimiser vos processus.' },
        { title: 'Transformation Digitale',      desc: 'Digitalisez vos processus métier et modernisez votre système d\'information.' },
        { title: 'Bases de Données SQL',         desc: 'Conception, optimisation et administration de bases SQL Server et MySQL.' },
        { title: 'Gestion de Projet',            desc: 'Pilotage IT de bout en bout selon les meilleures pratiques SDLC.' },
        { title: 'Monitoring d\'Infrastructure', desc: 'Surveillance en temps réel de vos serveurs et applications pour la disponibilité et la performance.' },
        { title: 'Plateformes SaaS',             desc: 'Produits SaaS multi-tenant scalables avec APIs et tableaux de bord sur mesure.' },
        { title: 'Maintenance Informatique',     desc: 'Support technique et maintenance préventive/corrective de vos systèmes.' }
      ],
      vps_title: 'Hébergement & Configuration VPS',
      vps_desc:  'Nous déployons et configurons des serveurs VPS, hébergeons vos applications et gérons vos environnements de production avec sécurité et performance.'
    },

    contact: {
      tag:   'Parlons-en',
      title: 'Me Contacter',
      intro: 'Un projet en tête, envie de collaborer ou simplement dire bonjour ? Ma boîte mail est toujours ouverte.',
      lbl_email:    'Email',
      lbl_whatsapp: 'WhatsApp',
      lbl_linkedin: 'LinkedIn',
      form_name:    'Nom',
      form_email:   'Email',
      form_subject: 'Objet',
      form_message: 'Message',
      ph_name:      'Votre nom',
      ph_email:     'votre@email.com',
      ph_subject:   'Discussion projet',
      ph_message:   'Parlez-moi de votre projet...',
      btn_send:     'Envoyer le message',
      success:      '✓ Message reçu ! Je vous réponds très bientôt.'
    },

    footer: {
      tagline:     'Construire l\'avenir, une ligne de code à la fois.',
      founder:     'Fondateur de <strong class="gradient-text">HellooTech</strong>',
      col_nav:     'Navigation',
      col_connect: 'Réseaux',
      copyright:   '© 2026 Fongang Cabrel — Tous droits réservés.'
    }
  }
};

/* ── Active language (default: browser lang or EN) ── */
window.LANG = localStorage.getItem('fc_lang') ||
  (navigator.language.startsWith('fr') ? 'fr' : 'en');
