import { varcons, sutish, bank, book, classifier, news, photography, port , js } from "../assets/images";
import {
    contact,
    css,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    react,
    redux,
    sass,
    tailwindcss,
    typescript
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: motion,
        name: "Motion",
        type: "Animation",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    }
];

export const experiences = [
    {
        title: "Full Stack Developer Intern",
        company_name: "Varcons Technologies",
        icon: varcons,
        iconBg: "#accbe1",
        date: "August 2023 - September 2023",
        points: [
            "Developing and maintaining web applications using React.js and other related technologies.",
            "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Project Coordinator Intern",
        company_name: "Sutish Tech Solutions Pvt Ltd",
        icon: sutish,
        iconBg: "#fbc3bc",
        date: "Feb 2023 - August 2023",
        points: [
            "Improved customer satisfaction rates by 25% through proactive communication, navigating timely resolutions of hardware repair and installation issues.",
            "Contributed to a 20% increase in customer retention by designing and implementing a personalized follow-up system, providing ongoing support, and administering maintenance services.",
            "Streamlined the repair and installation process, organized and oversaw service operations, resulting in a 15% reduction in service delivery time and a 10% increase in service capacity, balancing and coordinating to meet and exceed customer expectations.",  
        ],
     },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: 'mailto:bhavyjain533@gmail.com',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/Bhavy457',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/bhavy-jain',
    }
];

export const projects = [
    {
        iconUrl: classifier,
        theme: 'btn-back-red',
        name: 'Tomato Leaf Disease Classifier',
        description: 'Python project based on Machine Learning using FASTAPI, to help identify different classes of tomato leaf diseases. Built using Python, Numpy, OpenCV, TensorFlow, FASTAPI.',
        link: 'https://github.com/Bhavy457/Tomato-Leaf-Disease-Classifier',
    },
    {
        iconUrl: port,
        theme: 'btn-back-green',
        name: 'Portfolio',
        description: 'Created a simple Portfolio website highlighting skills, experience built using HTML, CSS and Javascript.',
        link: 'https://portfolio-main-bhavy.vercel.app/',
    },
    {
        iconUrl: news,
        theme: 'btn-back-blue',
        name: 'News Application Android',
        description: 'Native android app built using Java, XML. Retrofit & Glide dependencies. Provides different category news, using Guardian API.',
        link: 'https://github.com/Bhavy457/News-Application',
    },
    {
        iconUrl: book,
        theme: 'btn-back-pink',
        name: 'BookStore Management Android',
        description: 'Native android app built using Java, XML and Volley dependencies. Aims to provide a comprehensive solution for managing and facilitating book transactions.',
        link: 'https://github.com/Bhavy457/BookStore-Management-Application',
    },
    {
        iconUrl: photography,
        theme: 'btn-back-black',
        name: 'Photography Portfolio',
        description: 'A template for a Photography Portfolio website. Made with HTML, CSS, JavaScript.',
        link: 'https://github.com/Bhavy457/Photography-Portfolio',
    },
    {
        iconUrl: js,
        theme: 'btn-back-yellow',
        name: 'JavaScript Projects Website',
        description: 'This website is specially build to showcase all major javaScript projects. All my javaScript based projects are in it.',
        link: 'https://github.com/Bhavy457/JavaScript-Projects',
    }
];