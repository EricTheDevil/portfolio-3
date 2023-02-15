// data.js

const intro = [
    {
        heading: "HELLO, I AM ERIC",
        description:
            "I am a passionate developer with an insatiable curiosity for all things development-related. Ever since high school, I've been captivated by the magic of programming and the limitless possibilities it holds. My core expertise lies in both web and game development, where I've spent countless hours tinkering with different languages, frameworks, and tools to create dynamic, innovative solutions. I'm always on the lookout for exciting new challenges and opportunities to learn, grow and push the boundaries of what's possible with code.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 1",
    },
    {
        heading: "Who am I?",
        description:
            "Am a big fan of scalable solutions and games.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 2",
    },
    {
        heading: "Core values 1",
        description:
            "Let us embrace kindness and lend an ear, for the tales of others are often not as they appear. When we open our hearts and listen with empathy, we discover a world of depth and nuance, hidden beneath the surface of every story.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 2",
    },
    {
        heading: "Random Trivia 1",
        description:
            "I don't use social media.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 2",
    },
    {
        heading: "Hobby 1",
        description:
            "Origami.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 2",
    },
    {
        heading: "Sports 1",
        description:
            "Sprint.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 2",
    },
    {
        heading: "Core values 2",
        description:
            "Don't betray those who trust you.",
        img: "/Images/portfolio_picture.jpg",
        alt: "Alt text for image 2",
    },
];

// no icons available from fontawesome so I'm commenting them out
const skills = [
    { id: 1, name: "React", type: "technology", "tech-stack": "front-end" },
    { id: 2, name: "Sass", type: "technology", "tech-stack": "front-end" },
    { id: 3, name: "Bootstrap", type: "technology", "tech-stack": "front-end" },
    { id: 4, name: "HTML5", type: "technology", "tech-stack": "front-end" },
    { id: 5, name: "CSS3", type: "technology", "tech-stack": "front-end" },
    { id: 6, name: "Node.js", type: "technology", "tech-stack": "back-end" },
    // { id: 7, name: "Express", type: "technology", "tech-stack": "back-end" },
    { id: 8, name: "MySQL", type: "technology", "tech-stack": "back-end" },
    { id: 9, name: "Firebase", type: "technology", "tech-stack": "cloud" },
    { id: 10, name: "AWS", type: "technology", "tech-stack": "cloud" },
    { id: 11, name: "AndroidStudio", type: "technology", "tech-stack": "mobile" },
    { id: 12, name: "XCode", type: "technology", "tech-stack": "mobile" },
    { id: 13, name: "Doxygen", type: "technology", "tech-stack": "misc" },
    { id: 14, name: "Git-CLI", type: "technology", "tech-stack": "misc" },
    { id: 15, name: "Confluence", type: "technology", "tech-stack": "misc" },
    { id: 16, name: "Jira", type: "technology", "tech-stack": "misc" },
    { id: 17, name: "Unity", type: "technology", "tech-stack": "game" },
    //{ id: 18, name: "Unreal-BP", type: "technology", "tech-stack": "game" },

    { id: 19, name: "JavaScript", type: "language", "tech-stack": "" },
    //{ id: 20, name: "Objective-C", type: "language", "tech-stack": "mobile" },
    { id: 21, name: "Java", type: "language", "tech-stack": "" },
    //{ id: 22, name: "C#", type: "language", "tech-stack": "mobile" },
    //{ id: 24, name: "TypeScript", type: "language", "tech-stack": "mobile" },
    { id: 26, name: "PHP", type: "language", "tech-stack": "" },

    { id: 27, name: "Wordpress", type: "technology", "tech-stack": "back-end" },
    { id: 28, name: "MongoDb", type: "technology", "tech-stack": "back-end" },

];

const projects = [
    {
        id: 1,
        title: "Third portfolio",
        description: "My current portfolio demo",
        image: "/Images/project_01.jpg",
        website: "https://ericthedevil-portfolio-3.netlify.app/",
        repository: "https://github.com/EricTheDevil/portfolio-3",
        technologies: "JS, React, R3F, GSAP, Sass, Git"
    },
    {
        id: 2,
        title: "Clarita",
        description: "Restaurant delivery app",
        image: "/Images/project_02.jpg",
        website: "",
        repository: "https://github.com/Paperboardstudio/RiseToNirvana",
        technologies: "React Native, Firebase, Rest-API, Jira, Git, Confluence,"
    },
    {
        id: 3,
        title: "Rise To Nirvana",
        description: "Casual game jam, Typing game, type the correct keys to advance the floors, get to the top floor to reach Nirvana",
        image: "/Images/project_03.jpg",
        website: "https://paperboardstudio-risetonirvana.netlify.app",
        repository: "https://github.com/Paperboardstudio/RiseToNirvana",
        technologies: "C#, Unity, DoxyGen, Jira, Git, Confluence"
    },
    {
        id: 4,
        title: "Tic Tac Toe",
        description: "Create a very basic tic tac toe game in objective-c",
        image: "/Images/default.jpg",
        website: "",
        repository: "https://github.com/EricTheDevil/TicTacToe-ObjC",
        technologies: "Objective-C, XCode, Git"
    },
    {
        id: 5,
        title: "Country list website",
        description: "Website that displays all countries with their information using REST-API",
        image: "/Images/project_04.jpg",
        website: "https://ericthedevil-fs9-frontend.netlify.app/",
        repository: "https://github.com/EricTheDevil/Task-Front-End",
        technologies: "Typescript, Redux, Redux-thunk, MUI, Rest-API,"
    },
    {
        id: 6,
        title: "Accessibility demo",
        description: "Website with accessibility using basic css animations in React",
        image: "/Images/project_05.jpg",
        website: "https://ericthedevil-fs9-animation.netlify.app/",
        repository: "https://github.com/EricTheDevil/Task-Accessibility-Web",
        technologies: "JS, React, Git"
    },
    {
        id: 7,
        title: "API-Task",
        description: "Create full-stack application that sends and responds to client with simple messages",
        image: "/Images/default.jpg",
        website: "",
        repository: "https://github.com/EricTheDevil/API-Task",
        technologies: "React, MongoDb, Express, Rest-API,"
    },
    {
        id: 8,
        title: "Distant Paradise",
        description: "Mobile hypercasual game, Spinning forever game, get upgrades and get to the next level. (available on US playstore)",
        image: "/Images/project_08.jpg",
        website: "https://www.youtube.com/watch?v=4JrIw3JkGUk",
        repository: "",
        technologies: "C#, Unity, Jira, Git, Confluence"
    },
    {
        id: 9,
        title: "Game Jam UE4",
        description: "Game jam for Unreal Engine, worked in pair of 2 to develop game, story, art using blueprintss",
        image: "/Images/project_09.jpg",
        website: "https://www.youtube.com/watch?v=ZqlpCuvnilE",
        repository: "https://github.com/EricTheDevil/MegaJamUnreal2021",
        technologies: "Blueprints, Unreal Engine 4, Trello, Git"
    },
    {
        id: 10,
        title: "A Guiding Sorrow",
        description: "Launch a Perforce server on EC2 and manage the security and training.",
        image: "/Images/project_10.jpg",
        website: "https://www.youtube.com/watch?v=rviie6J-B7c",
        repository: "",
        technologies: "AWS, Unreal Engine 5, Perforce"
    },
    {
        id: 11,
        title: "Second portfolio",
        description: "My second portfolio demo",
        image: "/Images/project_11.jpg",
        website: "https://ericthedevil-portfolio1.netlify.app/",
        repository: "",
        technologies: "JS, React, R3F, GSAP, Sass, Git"
    },
    {
        id: 12,
        title: "First portfolio",
        description: "My first portfolio demo",
        image: "/Images/project_12.jpg",
        website: "https://firstericsite.netlify.app/",
        repository: "",
        technologies: "JS, React, R3F, GSAP, Sass, Git"
    },
    {
        id: 13,
        title: "Wordpress carousel",
        description: "Assignment to Make a custom theme with a wordpress carousel.",
        image: "/Images/default.jpg",
        repository: "https://github.com/EricTheDevil/Wordpress-Carousel",
        technologies: "php, Wordpress"
    },
    {
        id: 14,
        title: "Dog's night out",
        description: "University assignment, Every one first game, puzzle platformer, 3 levels.",
        image: "/Images/project_14.jpg",
        website: "https://paperboardstudios-dogsnightout.netlify.app/",
        repository: "https://github.com/stefanoskapsoritakis/GameDevTools",
        technologies: "C# Unity, Git"
    },
];

const experiences = [
    {
        id: 1,
        title: "Intern",
        company: "Vertigo Creative Studio Belgium",
        time: "2016 - 2016",
        shortDescription: "1-2 month, Custom Wordpress theme developer",
        technologies: "Php, FileZilla, Wordpress",
        description: [
            "• Create new custom wordpress theme",
            "• Update it according to client wishes",
        ]
    },
    {
        id: 2,
        title: "Software Engineer (Intern)",
        company: "Pilvia Oy",
        time: "2019 - 2019",
        shortDescription: "3 Months, Assist team lead, develop new components.",
        technologies: "Typescript, Angular, NodeJS, Kubernetes, Docker, Git, Trello",
        description: [
            "• Assist the team lead",
            "• Add new components with functionality that would eventually be added on their website",
        ]
    },
    {
        id: 3,
        title: "Software Engineer (Intern)",
        company: "Turku University of Applied Sciences",
        time: "2019 - 2020",
        shortDescription: "1 year, Develop components for fully custom drupal, attend important meetings",
        technologies: "Drupal, VMWare, Node.JS, BitBucket, Trello",
        description: [
            "• Adhere to GDPR rules.",
            "• Created new components and added them into a custom drupal theme.",
            "• Worked in a full command-line environment without a visual interface."
        ]
    },
    {
        id: 4,
        title: "Research Assistant (Course)",
        company: "Turku University of Applied Sciences",
        time: "2020 - 2020",
        shortDescription: "5 months, Create a network solution for the digital twin",
        technologies: "C#, Unity, BitBucket, OculusVR, Trello",
        description: [
            "• Acted as a lead developer and worked with a team lead to distribute tasks between numerous team members.",
            "• Incorporated the latest hand tracking technology into a custom build network solution for digital twin.",
            "• Worked on usability tests together with a team.",
            "• Assist team members.",
            "• Participated in weekly scrums to plan upcoming weeks task"
        ]
    },
    {
        id: 5,
        title: "Game Developer (Intern)",
        company: "Turku Game Lab",
        time: "2020 - 2020",
        shortDescription: "3 months, Develop and update components XR mobile game",
        technologies: "C#, Unity, BitBucket",
        description: [
            "• Designed components and incorporated them into an existing AR/XR game.",
            "• Created new features for existing components.",
            "• Migrated old, deprecated functions into new functions.",
            "• Worked on tasks both individually and as a part of a team.",
            "• Participated in weekly scrums to plan upcoming weeks task",
        ]
    },
    {
        id: 6,
        title: "Systems Engineer",
        company: "Paperboards Studio (Start up)",
        time: "2021 - present",
        shortDescription: "Manage the infrastructure and security",
        technologies: "C#, Unity, Git, Jira, Confluence",
        description: [
            "• Managed the version control systems and code review.",
            "• Manage the access and security for all our systems (Jira, Confluence, Git etc...).",
            "• Create Design Docs.",
            "• Work on CI/CD pipelines.",
            "• Assist team members.",
        ]
    },
    {
        id: 7,
        title: "Junior Software Developer",
        company: "Integrify -> (Auga Technologies)",
        time: "2022 - present",
        shortDescription: "Subcontractor, Develop native iOS and Android features.",
        technologies: "Objective-C, Java, X-Code, AndroidStudio, JavaSE, Jira, Confluence",
        description: [
            "• Work as a subcontractor under ISO27001 guidelance (trained and passed).",
            "• Work on native functionalities with custom servers",
            "• Create functionalities for new and older devices with backwards maintainability kept in mind",
            "• Work closely with QA members and address their concerns",
            "• Participated in weekly scrums to plan upcoming weeks task",
            "• Assist team members.",
        ]
    }
];

// Not used, they aren't gonna change often so maybe a bit overkill to load it like this (cause icons need special loading)
const footer = [
    {
        id: 1,
        name: "GitHub",
        link: "https://github.com/",
    },
    {
        id: 2,
        name: "LinkedIn",
        link: "https://github.com/",
    },
]

export { intro, experiences, projects, skills, footer };