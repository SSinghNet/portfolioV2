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

        { name: "React", image: "images/react.png" },
        { name: "WordPress", image: "images/wordpress.png" },
        { name: "CSS", image: "images/css.png" },
        { name: "Tailwind", image: "images/tailwind.png" },

        { name: "Python", image: "images/python.png" },
        { name: "Java", image: "images/java.png" },
        { name: "C", image: "images/c.png" },

        { name: "Javascript", image: "images/javascript.png" },
        { name: "Typescript", image: "images/typescript.png" },
        { name: "Node.js", image: "images/nodejs.png" },
        { name: "Next.js", image: "images/nextjs.png" },
        { name: "Express.js", image: "images/expressjs.png" },
        
        { name: "SQL", image: "images/sql.png" },
        { name: "Firebase", image: "images/firebase.png" },
        { name: "MySQL", image: "images/mysql.png" },
        { name: "MongoDB", image: "images/mongodb.png" },
        { name: "AWS", image: "images/aws.jpg" },
        
        { name: "Flutter", image: "images/flutter.png" },
        
        { name: "GitHub", image: "images/github.png" },
        { name: "Linux", image: "images/linux.png" },
        
        // { name: "", image: "images/.png"},
    ],
    projects: {
        professional: [
            {
                title: "Rutgers myCommunity",
                subtitle: "Rutgers OIT - Enterprise Application Services (2023 - Present)",
                desc: "MyCommunity is an advanced online platform designed to facilitate seamless communication and engagement across the university. Built on WordPress and enhanced with the BuddyBoss plugin, MyCommunity supports both private and public group interactions, allowing students, faculty, and staff to connect and collaborate effectively. I am responsible for maintaining the site, developing custom plugins, and enhancing its appearance. I create new REST API endpoints, automate internal processes, and implement cron jobs for various tasks. Additionally, I address theme-related issues with custom JavaScript and CSS, ensuring a unified look across all Rutgers services. My efforts in maintaining and optimizing MyCommunity significantly improve its functionality and user experience.",
                chips: ["PHP", "WordPress", "Buddyboss", "HTML", "CSS", "Javascript"],
                image: "images/my_community.png"
            },
            {
                title: "Student Information System",
                subtitle: "Mount Olive Robotics Team (2019 - 2023)",
                desc: "Created a full student information system that stores sensitive information about each student in a MongoDB database, to be used in emergency situations. Implements a secure login system to keep sensitive information safe.",
                chips: ["Node.js", "Express.js", "Pug (Jade)", "HTML", "Javascript", "CSS", "MongoDB", "NoSQL"],
                github: "https://github.com/SSinghNet/StudentInformationSystem",
            },
        ],
        personal: {
            web: [
                {
                    title: "SSingh.Net Music",
                    desc: "A dynamic music blog built with Node.js & Express.js. Leverages Bootstrap to create the front-end design. Utilizes a custom-built RESTful API to insert data about albums, artists, tags, etc. Uses a MySQL Database to store data and an AWS S3 Bucket to store images.",
                    chips: ["Node.js", "Express.js", "Pug (Jade)", "HTML", "Javascript", "CSS", "Bootstrap", "SQL", "MySQL", "AWS"],
                    image: "images/SSinghNetMusic.png",
                    github: "https://github.com/SSinghNet/music.ssingh.net",
                    demo: "https://music.ssingh.net/"
                },
                {
                    title: "S.SSingh.Net",
                    desc: "A url shortener built with PHP that uses a MySQL database.",
                    chips: ["PHP", "MySQL", "SQL", "CSS"],
                    image: "images/SSSinghNet.png",
                    github: "https://github.com/SSinghNet/S.SSingh.Net",
                    demo: "https://s.ssingh.net/"
                },
            ],
            mobile: [
                {
                    title: "Expense Tracker",
                    desc: "Cross-platform Expense Tracker mobile app made with the Flutter framework.",
                    chips: ["Flutter", "Dart"],
                    image: "images/expense.png",
                    github: "https://github.com/SSinghNet/expense_tracker",
                },
                {
                    title: "Word Matters",
                    desc: "Word puzzle game built for Android with Java and Android Studio",
                    chips: ["Java", "Android Studio"],
                    image: "images/WordMatters.png",
                    github: "https://github.com/SSinghNet/WordMatters",
                },
                {
                    title: "Tic-Tac-Toe",
                    desc: "A Simple Tic-Tac-Toe game for Android built with Java and Android Studio",
                    chips: ["Java", "Android Studio"],
                    github: "https://github.com/SSinghNet/Tic-Tac-Toe",
                }
            ],
            other: [
                {
                    title: "CLox",
                    desc: "Lox is a object oriented, dynamically typed language. Clox is a compiler and bytecode VM built for the Lox language written in C. Clox does single pass compilation and compiles the code into custom bytecode that is interpreted by the VM. Clox uses its own custom garbage collector to manage memory. This language implementation is similar to that of Python, Ruby, and Lua.",
                    chips: ["C", "Lox"],
                    github: "https://github.com/SSinghNet/clox",
                },
                {
                    title: "JLox",
                    desc: "Lox is a object oriented, dynamically typed language. JLox is an interpreter written for the Lox language in Java. It uses the JVM as the backbone to the interpreter and implements it with a \"tree-walk\" interpeter. The interpreter works by first scanning the code for tokens, which is fed into the parser to be turned into a list of statements, and then is given to the resolver to run the code.",
                    chips: ["Java", "Lox"],
                    github: "https://github.com/SSinghNet/jlox",
                },
            ]
        }
            
                     
            
            
            
            // {
            //     title: "Merge Request Bot",
            //     desc: "A Discord Bot that generates the above image with specified text on top.",
            //     chips: ["Python", "Discord API"],
            //     image: "images/mergerequest.jpg",
            //     github: "https://github.com/SSinghNet/MergeRequestBot",
            // },
            // {
            //     title: "Realtime API",
            //     desc: "RESTful Flask API for my high school's student information system made with Python and the Flask framework. Gets all information through web scraping and the requests library. Ability to get grades, class information, and other miscellaneous information.",
            //     chips: ["Python", "Flask"],
            //     github: "https://github.com/SSinghNet/mtoliverealtimeflask",
            // },
            
    }
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
