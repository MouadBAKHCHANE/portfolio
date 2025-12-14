export const content = {
    en: {
        navbar: {
            links: [
                { name: "When Calling Me", href: "#id_when_to_call" },
                { name: "Expertise", href: "#id_expertise" },
                { name: "About Me", href: "#id_about" },
                { name: "Case Studies", href: "#id_projects" },
                { name: "Testimonials", href: "#id_testimonials" },
            ],
            cta: "Let's Talk",
            role: "Data & BI Consultant"
        },
        hero: {
            availability: "Available for Freelance Missions",
            title_start: "Transforming Data into",
            title_highlight: "Business Value",
            subtitle: "Freelance Business Data Analyst & Financial Market Expert specialized in Power BI, Snowflake, and Modern Data Stack.",
            cta_primary: "View My Work",
            cta_secondary: "Contact Me"
        },
        whenToCall: {
            badge: "Current Situation",
            title_start: "When Your BI Is Off",
            title_highlight: "Track",
            subtitle: "Feel like your data is slowing you down instead of helping? Here are typical symptoms.",
            cta: "Brief Me via Malt",
            footer_text_start: "If you check",
            footer_text_highlight: "2-3 boxes",
            footer_text_end: ", we need to talk.",
            cards: [
                { id: 1, text: "Inconsistent numbers across reports." },
                { id: 2, text: "Unstable pipelines and slow refreshes." },
                { id: 3, text: "Unreadable dashboards, uncontrolled KPIs." },
                { id: 4, text: "Technical debt, lost business logic." },
                { id: 5, text: "Management no longer trusts the data." }
            ]
        },
        expertise: {
            badge: "Know-How",
            title_start: "My Areas of",
            title_highlight: "Expertise",
            items: [
                {
                    title: "Power BI Dashboards",
                    description: "Transforming raw data into clear visual insights.",
                    points: [
                        "Star Schema Modeling",
                        "Advanced DAX & Optimization",
                        "Security (RLS) & Governance",
                        "Report Builder (Paginated Reports)"
                    ]
                },
                {
                    title: "Modern Data Stack",
                    description: "Robust architecture for reliable and scalable data.",
                    points: [
                        "Snowflake & Microsoft Fabric",
                        "High-Performance SQL Pipelines",
                        "DWH Modeling (Data Warehousing)",
                        "Data Quality & Documentation"
                    ]
                },
                {
                    title: "Analytics Engineering",
                    description: "The technical bridge between data and business.",
                    points: [
                        "Python Automation & Scripts",
                        "CI/CD & Azure DevOps",
                        "dbt Transformation",
                        "Business Adoption Support"
                    ]
                }
            ]
        },
        about: {
            badge: "About Me",
            title_start: "Bridging the Gap Between",
            title_highlight: "Data & Business",
            bio_p1: "I am a Business Data Analyst with a strong background in Finance. I help companies structure, analyze, and visualize their data to make better decisions.",
            bio_p2: "Former financial market expert turned data consultant, I speak both the language of business (ROI, P&L, KPIs) and the language of tech (SQL, Python, DAX).",
            stats: [
                { value: "5+", label: "Years Experience" },
                { value: "50+", label: "Projects Delivered" },
                { value: "100%", label: "Client Satisfaction" }
            ],
            tech_arsenal: "Technical Arsenal",
            certifications: "Certifications",
            certs: [
                "Microsoft Certified: Power BI Data Analyst Associate",
                "Fabric Analytics Engineer Associate"
            ]
        },
        testimonials: {
            badge: "Testimonials",
            title_start: "They Trust",
            title_highlight: "Me",
            items: [
                {
                    quote: "Mouad transformed our manual reporting into a war machine. What took us 2 days now takes 2 minutes.",
                    author: "Sarah Martin",
                    role: "CFO, TechFlow Solutions"
                },
                {
                    quote: "The audit of our data pipelines revealed critical flaws. Thanks to his intervention, our KPIs are finally 100% reliable.",
                    author: "Thomas Dubois",
                    role: "Head of Data, RetailConnect"
                },
                {
                    quote: "Rare technical expertise coupled with real business understanding. An indispensable partner for our growth.",
                    author: "Elise Renard",
                    role: "COO, GreenEnergy Corp"
                }
            ]
        },
        projects: {
            badge: "Portfolio",
            title_start: "Real-World",
            title_highlight: "Use Cases",
            subtitle: "See how I apply data engineering and machine learning to solve actual business problems.",
            view_project: "View Project",
            items: [
                {
                    title: "Churn Prediction",
                    category: "Machine Learning",
                    description: "Identify customers likely to leave and retain them proactively. Built a binary classification model to predict churn risk and enable proactive retention strategies.",
                },
                {
                    title: "Dynamic Pricing",
                    category: "Optimization",
                    description: "Adjust prices based on demand, time, or competitor data. Implemented regression and optimization models to maximize revenue dynamically.",
                },
                {
                    title: "Demand Forecasting",
                    category: "Time Series",
                    description: "Predict future product demand to manage inventory. Built forecasting models using ARIMA and LSTM to optimize stock levels and reduce waste.",
                },
                {
                    title: "Recommendation System",
                    category: "Collaborative Filtering",
                    description: "Suggest products/content to increase engagement or purchases. Implemented collaborative filtering and ML-based recommendations using graph databases.",
                },
                {
                    title: "Marketing Response",
                    category: "Classification",
                    description: "Predict customer likelihood to respond to campaigns. Built classification models to optimize targeting and improve marketing ROI.",
                }
            ]
        },
        contact: {
            badge: "Contact",
            title_start: "Ready to Upgrade Your",
            title_highlight: "Data?",
            subtitle: "Available for freelance missions. Let's discuss your project.",
            email_button: "Send me an email",
            logo_text: "Data",
            logo_sub: "with Mouad"
        }
    },
    fr: {
        navbar: {
            links: [
                { name: "Quand m'appeler ?", href: "#id_when_to_call" },
                { name: "Expertise", href: "#id_expertise" },
                { name: "À Propos", href: "#id_about" },
                { name: "Études de Cas", href: "#id_projects" },
                { name: "Témoignages", href: "#id_testimonials" },
            ],
            cta: "Discutons",
            role: "Consultant Data & BI"
        },
        hero: {
            availability: "Disponible pour Missions Freelance",
            title_start: "Transformer la Data en",
            title_highlight: "Valeur Business",
            subtitle: "Business Data Analyst Freelance & Expert Marchés Financiers spécialisé en Power BI, Snowflake et Modern Data Stack.",
            cta_primary: "Voir mon travail",
            cta_secondary: "Me Contacter"
        },
        whenToCall: {
            badge: "Situation Actuelle",
            title_start: "Quand votre BI ne tient plus",
            title_highlight: "la route",
            subtitle: "Vous avez l'impression que vos données vous ralentissent au lieu de vous aider ? Voici les symptômes typiques.",
            cta: "Me briefer via Malt",
            footer_text_start: "Si vous cochez",
            footer_text_highlight: "2-3 cases",
            footer_text_end: ", on a un sujet.",
            cards: [
                { id: 1, text: "Chiffres incohérents entre rapports." },
                { id: 2, text: "Pipelines instables et refresh trop lents." },
                { id: 3, text: "Dashboards illisibles, KPI non maîtrisés." },
                { id: 4, text: "Dette technique, règles métiers perdues." },
                { id: 5, text: "La direction ne sait plus à quoi se fier." }
            ]
        },
        expertise: {
            badge: "Savoir-Faire",
            title_start: "Mes Domaines",
            title_highlight: "d'Expertise",
            items: [
                {
                    title: "Dashboards Power BI",
                    description: "Transformation de données brutes en insights visuels clairs.",
                    points: [
                        "Modélisation en étoile (Star Schema)",
                        "Mesures DAX avancées & optimisation",
                        "Sécurité (RLS) & Gouvernance",
                        "Report Builder (Paginated Reports)"
                    ]
                },
                {
                    title: "Modern Data Stack",
                    description: "Architecture robuste pour des données fiables et scalables.",
                    points: [
                        "Snowflake & Microsoft Fabric",
                        "Pipelines SQL performants",
                        "Modélisation DWH (Data Warehousing)",
                        "Qualité de données & Documentation"
                    ]
                },
                {
                    title: "Analytics Engineering",
                    description: "Le pont technique entre la donnée et le métier.",
                    points: [
                        "Automatisation Python & Scripts",
                        "CI/CD & DevOps Azure",
                        "Transformation dbt",
                        "Accompagnement adoption métier"
                    ]
                }
            ]
        },
        about: {
            badge: "À Propos",
            title_start: "Le Pont Entre",
            title_highlight: "Data & Business",
            bio_p1: "Je suis un Business Data Analyst avec un fort background en Finance. J'aide les entreprises à structurer, analyser et visualiser leurs données pour prendre de meilleures décisions.",
            bio_p2: "Ancien expert des marchés financiers devenu consultant data, je parle à la fois le langage du business (ROI, P&L, KPI) et celui de la tech (SQL, Python, DAX).",
            stats: [
                { value: "5+", label: "Années d'Expérience" },
                { value: "50+", label: "Projets Livrés" },
                { value: "100%", label: "Satisfaction Client" }
            ],
            tech_arsenal: "Arsenal Technique",
            certifications: "Certifications",
            certs: [
                "Microsoft Certified: Power BI Data Analyst Associate",
                "Fabric Analytics Engineer Associate"
            ]
        },
        testimonials: {
            badge: "Témoignages",
            title_start: "Ils me font",
            title_highlight: "confiance",
            items: [
                {
                    quote: "Mouad a transformé notre reporting manuel en une machine de guerre. Ce qui nous prenait 2 jours ne prend plus que 2 minutes.",
                    author: "Sarah Martin",
                    role: "CFO, TechFlow Solutions"
                },
                {
                    quote: "L'audit de nos pipelines de données a révélé des failles critiques. Grâce à son intervention, nos KPI sont enfin fiables à 100%.",
                    author: "Thomas Dubois",
                    role: "Head of Data, RetailConnect"
                },
                {
                    quote: "Expertise technique rare couplée à une vraie compréhension des enjeux business. Un partenaire indispensable pour notre croissance.",
                    author: "Elise Renard",
                    role: "COO, GreenEnergy Corp"
                }
            ]
        },
        projects: {
            badge: "Portfolio",
            title_start: "Cas d'Usage",
            title_highlight: "Réels",
            subtitle: "Découvrez comment j'applique l'ingénierie des données et le machine learning pour résoudre de vrais problèmes business.",
            view_project: "Voir le Projet",
            items: [
                {
                    title: "Prédiction de Churn",
                    category: "Machine Learning",
                    description: "Identifier les clients susceptibles de partir et les retenir proactivement. Modèle de classification binaire pour prédire le risque de départ.",
                },
                {
                    title: "Pricing Dynamique",
                    category: "Optimisation",
                    description: "Ajuster les prix en fonction de la demande, du temps ou des concurrents. Modèles de régression pour maximiser les revenus.",
                },
                {
                    title: "Prévision de la Demande",
                    category: "Séries Temporelles",
                    description: "Prédire la demande future pour gérer les stocks. Modèles ARIMA et LSTM pour optimiser les niveaux de stock.",
                },
                {
                    title: "Système de Recommandation",
                    category: "Filtrage Collaboratif",
                    description: "Suggérer des produits/contenus pour augmenter l'engagement. Filtrage collaboratif et graph databases.",
                },
                {
                    title: "Réponse Marketing",
                    category: "Classification",
                    description: "Prédire la probabilité de réponse aux campagnes. Modèles de classification pour optimiser le ciblage et le ROI.",
                }
            ]
        },
        contact: {
            badge: "Contact",
            title_start: "Prêt à Upgrader Votre",
            title_highlight: "Data ?",
            subtitle: "Disponible pour missions freelance. Discutons de votre projet.",
            email_button: "M'envoyer un email",
            logo_text: "Data",
            logo_sub: "avec Mouad"
        }
    }
};
