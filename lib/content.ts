export const content = {
    en: {
        navbar: {
            links: [
                { name: "When Calling Me", href: "#id_when_to_call" },
                { name: "Expertise", href: "#id_expertise" },
                { name: "About Me", href: "#id_about" },
                { name: "Portfolio", href: "#id_projects" },
                { name: "Testimonials", href: "#id_testimonials" },
            ],
            cta: "Let's Talk",
            role: "Data & BI Consultant"
        },
        hero: {
            greeting: "Hello,",
            name_prefix: "I am",
            name: "Mouad Bakhchane",
            intro_text: "Companies call me when their Data, BI, and ML have become unmanageable: inconsistent figures, fragile pipelines, unreadable dashboards, and unreliable models.",
            cta_primary: "View My Work",
            cta_secondary: "Contact Me",
            stats: [
                { value: "50", label: "Reports Industrialized" },
                { value: "25", label: "ML Models Built" },
                { value: "4", label: "Sectors: E-commerce, Retail, SaaS, Fashion" }
            ]
        },
        whenToCall: {
            badge: "Current Situation",
            title_start: "When Your Data, BI, ML & Automation Is Off",
            title_highlight: "Track",
            subtitle: "Feel like your data is slowing you down instead of helping? Here are typical symptoms.",
            cta: "Brief Me",
            footer_text_start: "If you check",
            footer_text_highlight: "2-3 boxes",
            footer_text_end: ", we need to talk.",
            cards: [
                { id: 1, text: "Inconsistent figures across reports." },
                { id: 2, text: "Fragile pipelines and slow refreshes." },
                { id: 3, text: "Unreadable dashboards, unreliable models." },
                { id: 4, text: "Technical debt, unscalable architecture." },
                { id: 5, text: "Management no longer trusts the data." },
                { id: 6, text: "Manual processes and spreadsheets everywhere." }
            ]
        },
        expertise: {
            badge: "Expertise",
            title_start: "My Areas of",
            title_highlight: "Expertise",
            items: [
                {
                    title: "Data Analytics",
                    description: "Transforming raw data into a reliable source of truth using robust star schemas and scalable pipelines.",
                    points: []
                },
                {
                    title: "Data Visualization",
                    description: "Building high-impact dashboards with actionable design for instant data-driven decisions.",
                    points: []
                },
                {
                    title: "Data Science, ML & AI Automation",
                    description: "Deploying production-ready models to predict outcomes and automate workflows using MLOps.",
                    points: []
                }
            ],
            side_title: "How I Help",
            side_para1: "I bridge the gap between raw data and operational intelligence. Whether fixing slow dashboards or deploying local models to production, I build scalable systems you can trust.",
            side_para2: "Expert in BI reconstruction, Predictive ML, and MLOps. Beyond code, I establish the governance needed to keep your data stack solid as you scale.",
            side_para3: "",
            stats: [
                { value: "50+", label: "Systems Rebuilt or Industrialized (BI & ML)" },
                { value: "15 min", label: "Refresh Time Achieved (vs 18h before)" }
            ]
        },
        howWeWork: {
            title: "How We Work Together",
            subtitle: "Three clear steps to get your BI back on track, from diagnosis to team adoption.",
            steps: [
                {
                    title: "BI Diagnosis",
                    description: "Model analysis, KPIs, pipelines, performance, governance.",
                    deliverable: "Deliverable: Current state + Prioritized action plan."
                },
                {
                    title: "Complete Reconstruction",
                    description: "Model, SQL, Snowflake, Power BI, security, industrialization.",
                    deliverable: "Deliverable: Rebuilt BI, documented, ready to scale."
                },
                {
                    title: "Adoption & Transfer",
                    description: "Documentation, training, support for management & teams.",
                    deliverable: "Deliverable: Autonomous teams, governance in place."
                }
            ],
            cta: "Let's Talk"
        },

        about: {
            badge: "About Me",
            title_start: "Bridging the Gap:",
            title_highlight: "Data, Science & Business",
            bio_p1: "I am a Data Scientist & Analyst with a background in Business, specializing in turning raw data into production-ready intelligence. I help companies bridge the gap between technical complexity and business ROI.",
            bring_table_title: "What I bring to the table:",
            points: [
                { title: "Dual Perspective", text: "I speak the language of P&L and KPIs while architecting solutions in SQL, Python, and MLOps." },
                { title: "Notebooks to Production", text: "I don’t just build models; I build reliable systems. I move AI from research to reality by deploying stable, automated environments." },
                { title: "Full-Cycle Delivery", text: "From deep-dive statistical analysis and visualization to industrializing ML models for long-term scalability." }
            ],
            tech_arsenal: "The Stack",
            tech_text: "",
            education_title: "Education",
            education: [
                {
                    school: "ENCG Settat",
                    degree: "Master Degree Accounting and Finance",
                    year: "2009 - 2014"
                }
            ],
            certifications: "Certifications",
            certs: [
                { name: "Data Science", issuer: "ALX & Explore AI", link: "https://savanna.alxafrica.com/certificates/YscyrXL7mT" },
                { name: "Foundations in Project Management", issuer: "ALX", link: "https://savanna.alxafrica.com/certificates/2HNzP6YRLZ" },
                { name: "Power BI Data Analyst Associate", issuer: "Microsoft", link: "" },
                { name: "Fabric Analytics Engineer Associate", issuer: "Microsoft", link: "" }
            ],
            // Keeping for type safety if needed, though will rely on points
            bio_p2: "",
            stats: []
        },
        testimonials: {
            badge: "Testimonials",
            title_start: "They Trust",
            title_highlight: "Me",
            items: [
                {
                    quote: "Mouad transformed our manual reporting into a war machine. What took us 2 days now takes 2 minutes.",
                    author: "Sarah Martin",
                    role: "CFO, TechFlow Solutions",
                    image: "/testimonials/sarah.png"
                },
                {
                    quote: "The audit of our data pipelines revealed critical flaws. Thanks to his intervention, our KPIs are finally 100% reliable.",
                    author: "Thomas Dubois",
                    role: "Head of Data, RetailConnect",
                    image: "/testimonials/thomas.png"
                },
                {
                    quote: "Rare technical expertise coupled with real business understanding. An indispensable partner for our growth.",
                    author: "Elise Renard",
                    role: "COO, GreenEnergy Corp",
                    image: "/testimonials/elise.png"
                }
            ]
        },
        mlops: {
            badge: "Predictive Intelligence & MLOps",
            title_start: "Bridging the Gap Between",
            title_highlight: "Data & Production",
            description: "I don’t just build models; I build reliable systems. Focusing on the MLOps lifecycle to ensure insights don't stay trapped in notebooks.",
            pillars_title: "The 7 Pillars of my MLOps Blueprint",
            pillars: [
                { title: "Clean Project Structure", text: "Modular, readable code." },
                { title: "Version Control", text: "Git, PRs, Code Review." },
                { title: "Experiment Tracking", text: "MLflow, Weights & Biases." },
                { title: "Reproducible Env", text: "Docker, Conda, Poetry." },
                { title: "Model Deployment", text: "FastAPI, Docker, Kubernetes." },
                { title: "Model Monitoring", text: "Drift detection, Performance tracking." },
                { title: "Automated Pipelines", text: "CI/CD, GitHub Actions." }
            ],
            use_cases_title: "Predictive Intelligence",
            use_cases: [
                {
                    title: "Demand Forecasting",
                    description: "Using advanced time-series models (XGBoost, LSTMs) to predict future sales, reducing stockouts and minimizing capital tied up in excess inventory."
                },
                {
                    title: "Customer Churn & LTV",
                    description: "Identifying at-risk customers before they leave and scoring leads to focus your sales team on the highest-value opportunities."
                },
                {
                    title: "Anomaly Detection",
                    description: "Implementing real-time monitoring to detect fraud, equipment failure, or operational irregularities before they escalate."
                }
            ],
            policy: {
                title: "Zero-Waste Policy",
                text: "If a model doesn't directly improve your bottom line or save your team time, I don't build it."
            }
        },
        projects: {
            badge: "Portfolio",
            title_start: "Real-World",
            title_highlight: "Use Cases",
            subtitle: "See how I apply data engineering and machine learning to solve actual business problems.",
            view_project: "View Project",
            items: [
                {
                    title: "Flight Price Prediction",
                    category: "Machine Learning",
                    description: "Analyze and predict flight prices in the Indian Aviation Market. Built a Gradient Boosting Regressor model to estimate fares based on airline, route, and timing.",
                    stack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly"],
                    githubLink: "https://github.com/MouadBAKHCHANE/Flight-Price-Prediction",
                    demoLink: "https://mouadbakhchane-flight-price-prediction-app-55qrhn.streamlit.app/",
                    image: "/projects/flight-price-prediction.png",
                },
                {
                    title: "Churn Prediction",
                    category: "Machine Learning",
                    description: "Identify customers likely to leave and retain them proactively. Built a binary classification model to predict churn risk and enable proactive retention strategies.",
                    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
                    githubLink: "https://github.com/MouadBAKHCHANE/Churn-Prediction",
                    demoLink: "https://mouadbakhchane-data-portfolio-dashboard-t8mqrg.streamlit.app/",
                    image: "/projects/churn-prediction.png",
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
            phone: "+212 611 714 711",
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
            greeting: "Hello,",
            name_prefix: "Je suis",
            name: "Mouad Bakhchane",
            intro_text: "Les entreprises m'appellent quand leur Data, BI et ML sont devenues ingérables : chiffres incohérents, pipelines fragiles, dashboards illisibles et modèles peu fiables.",
            cta_primary: "Voir mon travail",
            cta_secondary: "Me Contacter",
            stats: [
                { value: "50", label: "Rapports Industrialisés" },
                { value: "25", label: "Modèles ML Déployés" },
                { value: "4", label: "Secteurs: E-commerce, Retail, SaaS, Mode" }
            ]
        },
        whenToCall: {
            badge: "Situation Actuelle",
            title_start: "Quand votre Data, BI, ML & Auto ne tient plus",
            title_highlight: "la route",
            subtitle: "Vous avez l'impression que vos données vous ralentissent au lieu de vous aider ? Voici les symptômes typiques.",
            cta: "Me briefer",
            footer_text_start: "Si vous cochez",
            footer_text_highlight: "2-3 cases",
            footer_text_end: ", on a un sujet.",
            cards: [
                { id: 1, text: "Chiffres incohérents entre rapports." },
                { id: 2, text: "Pipelines fragiles et refresh trop lents." },
                { id: 3, text: "Dashboards illisibles, modèles peu fiables." },
                { id: 4, text: "Dette technique, architecture non scalable." },
                { id: 5, text: "La direction ne sait plus à quoi se fier." },
                { id: 6, text: "Processus manuels et fichiers Excel partout." }
            ]
        },
        expertise: {
            badge: "Savoir-Faire",
            title_start: "Mes Domaines",
            title_highlight: "d'Expertise",
            items: [
                {
                    title: "Architecture BI & Modélisation décisionnelle",
                    description: "Modèles robustes, KPI clairs, BI lisible et fiable.",
                    points: []
                },
                {
                    title: "Industrialisation & Stabilisation BI",
                    description: "Pipelines stables, gouvernance simple, BI qui ne casse plus.",
                    points: []
                },
                {
                    title: "Chaîne analytique complète",
                    description: "SQL/Python, ingestion, optimisation et refresh ultra-rapide.",
                    points: []
                }
            ],
            side_title: "Comment j'aide",
            side_para1: "Je reconstruis des systèmes BI devenus complexes, lents ou difficiles à exploiter. De la compréhension métier à la mise en production, j'assure la refonte des modèles, la fiabilisation des pipelines SQL/Power BI et l'optimisation des performances pour des chiffres clairs, rapides et actionnables.",
            side_para2: "J'interviens dans des environnements data exigeants : tech, média, musique, publicité, industrie.",
            side_para3: "Mes interventions portent sur la reconstruction BI, l'harmonisation des KPI, la réduction des temps de refresh et la mise en place d'une gouvernance durable.",
            stats: [
                { value: "30+", label: "Systèmes BI reconstruits ou industrialisés" },
                { value: "15 min", label: "Temps de refresh obtenu (vs 18 h auparavant)" }
            ]
        },

        howWeWork: {
            title: "Comment on travaille ensemble",
            subtitle: "Trois blocs clairs pour remettre votre BI sur pied, du diagnostic à l'adoption par les équipes.",
            steps: [
                {
                    title: "Diagnostic BI",
                    description: "Analyse modèle, KPI, pipelines, performance, gouvernance.",
                    deliverable: "Livrable : état des lieux + plan d'action priorisé."
                },
                {
                    title: "Reconstruction complète",
                    description: "Modèle, SQL, Snowflake, Power BI, sécurité, industrialisation.",
                    deliverable: "Livrable : BI reconstruite, documentée, prête à scaler."
                },
                {
                    title: "Adoption & transfert",
                    description: "Documentation, formation, accompagnement directions & équipes.",
                    deliverable: "Livrable : équipes autonomes, gouvernance en place."
                }
            ],
            cta: "Discutons"
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
                    role: "CFO, TechFlow Solutions",
                    image: "/testimonials/sarah.png"
                },
                {
                    quote: "L'audit de nos pipelines de données a révélé des failles critiques. Grâce à son intervention, nos KPI sont enfin fiables à 100%.",
                    author: "Thomas Dubois",
                    role: "Head of Data, RetailConnect",
                    image: "/testimonials/thomas.png"
                },
                {
                    quote: "Expertise technique rare couplée à une vraie compréhension des enjeux business. Un partenaire indispensable pour notre croissance.",
                    author: "Elise Renard",
                    role: "COO, GreenEnergy Corp",
                    image: "/testimonials/elise.png"
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
                    title: "Prédiction de Prix de Vols",
                    category: "Machine Learning",
                    description: "Analysez et prédisez les prix des vols sur le marché indien. Modèle Gradient Boosting pour estimer les tarifs selon la compagnie, l'itinéraire et le moment.",
                    stack: ["Python", "Streamlit", "Pandas", "Scikit-learn", "Plotly"],
                    githubLink: "https://github.com/MouadBAKHCHANE/Flight-Price-Prediction",
                    demoLink: "https://mouadbakhchane-flight-price-prediction-app-55qrhn.streamlit.app/",
                    image: "/projects/flight-price-prediction.png",
                },
                {
                    title: "Prédiction de Churn",
                    category: "Machine Learning",
                    description: "Identifier les clients susceptibles de partir et les retenir proactivement. Modèle de classification binaire pour prédire le risque de départ.",
                    stack: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
                    githubLink: "https://github.com/MouadBAKHCHANE/Churn-Prediction",
                    demoLink: "https://mouadbakhchane-data-portfolio-dashboard-t8mqrg.streamlit.app/",
                    image: "/projects/churn-prediction.png",
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
            phone: "+212 611 714 711",
            email_button: "M'envoyer un email",
            logo_text: "Data",
            logo_sub: "avec Mouad"
        }
    }
};
