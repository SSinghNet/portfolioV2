export type SiteConfig = typeof siteConfig;

export const siteConfig = {
    name: "Sumeet Singh",
    description: "Sumeet Singh - Fullstack Developer",
    links: {
        github: "https://github.com/SSinghNet",
        email: "sumeet605@gmail.com",
        linkedin: "https://www.linkedin.com/in/sumeet-singh-net",
    },
    skills: [
        { name: "PHP", image: "images/php.png" },
        { name: "Java", image: "images/java.png" },
        { name: "Go", image: "images/go.svg" },

        { name: "AWS", image: "images/aws.jpg" },

        { name: "React", image: "images/react.png" },
        { name: "WordPress", image: "images/wordpress.png" },

        { name: "Python", image: "images/python.png" },
        { name: "C", image: "images/c.png" },

        { name: "Javascript", image: "images/javascript.png" },
        { name: "Typescript", image: "images/typescript.png" },
        { name: "Node.js", image: "images/nodejs.png" },
        { name: "Next.js", image: "images/nextjs.png" },
        { name: "Express.js", image: "images/expressjs.png" },

        { name: "CSS", image: "images/css.png" },
        { name: "Tailwind", image: "images/tailwind.png" },

        { name: "SQL", image: "images/sql.png" },
        { name: "Firebase", image: "images/firebase.png" },
        { name: "MySQL", image: "images/mysql.png" },
        { name: "MongoDB", image: "images/mongodb.png" },

        { name: "Flutter", image: "images/flutter.png" },

        { name: "GitHub", image: "images/github.png" },
        { name: "Linux", image: "images/linux.png" },

        // { name: "", image: "images/.png"},
    ],
    projects: {
        professional: [
            {
                title: "Student Software Engineer",
                subtitle: "Rutgers OIT - Enterprise Application Services (2023 - Present)",
                desc: "Enhanced Rutgers’ myCommunity platform, a large-scale WordPress system serving 50,000+ students and 1,000+ organizations. Led new feature development, infrastructure updates, and performance improvements across PHP, WordPress, and BuddyBoss. Automated event workflows with custom PHP plugins and optimized queries, improving site performance by 50%. Designed and documented internal REST APIs with OpenAPI 3.0 and Swagger UI. Built a real-time data sync between Rutgers’ Club Database and myCommunity using PHP and cron jobs, automatically syncing records for 1,000+ clubs. Modernized the user experience by refactoring themes with JavaScript and CSS, adding dark mode, improving accessibility, and ensuring responsive design. Also developed React demos and Flutter prototypes to validate new features with stakeholders.",
                chips: [
                    "PHP",
                    "WordPress",
                    "BuddyBoss",
                    "HTML",
                    "CSS",
                    "JavaScript",
                    "REST APIs",
                    "OpenAPI",
                    "MySQL",
                    "Firestore",
                    "Cron Jobs",
                    "React",
                    "Flutter"
                ],
                image: "images/my_community.png"
            },

            {
                title: "Software Engineer Intern",
                subtitle: "Universal Selfcare LLC (2025 - Present)",
                desc: "Built secure and scalable backend features in Go for a healthcare SaaS platform. Refactored the backend into a consistent controller–service–repository architecture, reducing duplication and improving maintainability. Configured Google Cloud Platform IAM for role-based access control and deployed PostgreSQL Cloud SQL to ensure secure and compliant handling of sensitive healthcare data.",
                chips: [
                    "Go",
                    "Microservices",
                    "Controller–Service–Repository",
                    "Google Cloud Platform",
                    "IAM",
                    "PostgreSQL"
                ],
            }
        ],

        personal: [

            {
                title: "AI Playlist Generator",
                desc:
                    "I developed an AI-powered playlist generator that interprets natural language prompts to create personalized music playlists. The backend is built in Java using Spring Boot microservices, with Spring AI and Gemini 2.5 powering the prompt interpretation. The system integrates with the Spotify Web API for metadata retrieval, user authentication, and playlist exporting. It follows a microservice architecture managed by Spring Cloud Eureka for service discovery and load balancing. Each service is containerized and deployed using AWS ECS Fargate, with Docker images stored in AWS ECR. An AWS Application Load Balancer routes external traffic, securely exposing only the API Gateway. The frontend is a responsive and user-friendly Next.js (React) application hosted on Vercel, providing a seamless experience from login to playlist creation.",
                chips:
                    [
                        "Java", "Spring Boot", "Spring AI", "Gemini 2.5",
                        "Microservices", "Spring Cloud Eureka", "Spotify API",
                        "Docker", "AWS ECS", "AWS Fargate", "AWS ECR",
                        "AWS Application Load Balancer", "Next.js", "React",
                        "Vercel", "API Gateway"
                    ],
                image:
                    "images/aiplaylist.png",
                github:
                    "https://github.com/SSinghNet/ai-playlist",
                demo:
                    "https://aiplaylist.ssingh.net/"
            },
            {
                title: "SSingh.Net Music",
                desc:
                    "SSingh.Net Music is a dynamic music blog built with Node.js and Express.js for the backend and React with Tailwind CSS for the frontend. It features a custom-built RESTful API to manage and manipulate data related to albums, artists, tags, and more. The application uses a MySQL database for structured data storage and integrates with an AWS S3 bucket for efficient image storage and retrieval.",
                chips:
                    ["JavaScript", "TypeScript", "React", "Tailwind", "Express.js", "Node.js", "SQL", "MySQL", "AWS S3"],
                image:
                    "images/SSinghNetMusic.png",
                github:
                    "https://github.com/SSinghNet/music.ssingh.net",
                demo:
                    "https://music.ssingh.net/"
            },
            {
                title: "CLox",
                desc:
                    "CLox is a compiler and bytecode VM written in C for the object oriented & dynamically typed language, Lox. Clox does single pass compilation and compiles the code into custom bytecode that is interpreted by the VM. Clox uses its own custom garbage collector to manage memory. This language implementation is similar to that of Python, Ruby, and Lua.",
                chips:
                    ["C", "Lox"],
                github:
                    "https://github.com/SSinghNet/clox",
            },
            {
                title: "JLox",
                desc:
                    "JLox is an interpreter written in Java for the object oriented & dynamically typed language, Lox. It uses the JVM as the backbone to the interpreter and implements it with a \"tree-walk\" interpeter. The interpreter works by first scanning the code for tokens, which is fed into the parser to be turned into a list of statements, and then is given to the resolver to run the code.",
                chips:
                    ["Java", "Lox"],
                github:
                    "https://github.com/SSinghNet/jlox",
            },

            {
                title: "SSingh.Net Music Admin Portal",
                desc:
                    "SSingh.Net Music is a dynamic music blog built with Node.js and Express.js for the backend and React with Tailwind CSS for the frontend. It features a custom-built RESTful API to manage and manipulate data related to albums, artists, tags, and more. The application uses a MySQL database for structured data storage and integrates with an AWS S3 bucket for efficient image storage and retrieval.",
                chips:
                    ["TypeScript", "React", "Tailwind"],
                image:
                    "images/musicadmin.png",
                github:
                    "https://github.com/SSinghNet/musicadminmodern"
            },
            // {
            //     title: "Weather App",
            //     desc:
            //         "Cross-platform mobile Weather app made with the Flutter framework. Uses the OpenWeatherMap API to get location coordinates and the Open-Meteo API to get weather info.",
            //     chips:
            //         ["Flutter", "Dart"],
            //     image:
            //         "images/weather.png",
            //     github:
            //         "https://github.com/SSinghNet/weatherapp",
            // },
            // {
            //     title: "Word Matters",
            //     desc:
            //         "Word puzzle game built for Android with Java and Android Studio",
            //     chips:
            //         ["Java", "Android Studio"],
            //     image:
            //         "images/WordMatters.png",
            //     github:
            //         "https://github.com/SSinghNet/WordMatters",
            // },
            {
                title: "S.SSingh.Net",
                desc:
                    "A url shortener built with PHP that uses a MySQL database.",
                chips:
                    ["PHP", "MySQL", "SQL", "CSS"],
                image:
                    "images/SSSinghNet.png",
                github:
                    "https://github.com/SSinghNet/S.SSingh.Net",
                demo:
                    "https://s.ssingh.net/"
            },
        ],

    },

    certificates: [
        {
            name: "AWS Certified Solutions Architect - Associate",
            provider: "Amazon Web Services",
            link: "https://cp.certmetrics.com/amazon/en/public/verify/credential/a230c8845f2a474686494db23896d2ed",
            issueDate: "8/11/2025",
            expiryDate: "8/11/2028",
            image: "images/aws-certified-solutions-architect-associate.png",
        }
    ]
        ,
        education: [
            {
                institution: "Rutgers University - New Brunswick",
                location: "New Brunswick, NJ",
                degree: "B.S. in Computer Science, B.S. in Mathematics",
                dates: "September 2023 - May 2026",
            }
        ]
};

export interface ProjectProps {
    title: string,
    subtitle?: string,
    desc: string,
    chips: Array<string>,
    github?: string,
    demo?: string,
    image?: string,
};
