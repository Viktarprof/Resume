import AuthorizationForm from './media/AuthorizationForm.png';
import BuhOne from './media/BuhOne.png';
import CvJohn from './media/CvJohn.png';
import FakeAPI from './media/FakeAPI.png';
import todoList from './media/todoList.png';
import Eurocrane_company from './media/Eurocrane_company.png'
import cart_redux from './media/reduxCart.png'

export const education = [
    {
        id: 1,
        school: "TelRan",
        specialization: "Front-end PRO",
        about: "Learned to create the front-end of websites, worked with HTML, CSS, and JavaScript, as well as developed projects using React and Redux. Within the course, worked with databases, learned SQL and mongoDB. Mastered principles of product development in companies and organizing teamwork. Got familiar with agile work methodologies such as Agile and Scrum.",
        studyingTime: 'September 2022 — June 2023'
    },
    {
        id: 2,
        school: "LLC 'Educational Center of the High Technologies Park'",
        specialization: "Functional Testing",
        about: "Studied the process of software testing performed manually. Modeled various testing scenarios and documented any program behavior that deviated from the expected result.",
        studyingTime: '2017'
    },
    {
        id: 3,
        school: "Yanka Kupala State University of Grodno",
        specialization: "Specialist in Tourism and Hospitality",
        about: "Studied the profession in the field of tourism and service",
        studyingTime: 'September 2008 — June 2013'
    }
];


export const workExperience = [
    {
        id: 1,
        title: "Private Unitary Enterprise 'MarkTur'",
        profetions: "Tourism Manager",
        description: "Tour selection. Tourist consultation. Registration for obtaining visas at the consulates of the Republic of Poland and the Republic of Lithuania.",
        date: 'April 2013 — June 2014'
    },
    {
        id: 2,
        title: "Public Joint-Stock Company 'Belagrozdorovnitsa' Branch Sanatorium 'Porechye'",
        professions: "Marketing Department Specialist",
        description: "Implementation of vouchers. Consulting vacationers and maintaining customer base. Promotion of the sanatorium on internet platforms. Organization of meetings with clients, conducting presentations. Preparation of documentation for tenders. Support and filling of information on the sanatorium's website. Daily and monthly reports on implementation. Acting head of the marketing department.",
        date: 'June 2014 — March 2020'
    },
    {
        id: 3,
        title: "Kamienica Zamenhofa",
        profetions: "Marketing department specialist",
        description: "Maintaining a profile and creating content on social networks. Implementing paid advertising campaigns. Market analysis, reporting activities, planning marketing events.",
        date: 'June 2021 — September 2022'
    },
];

    export const skill = [
        "High performance" ,  "HTML5" , "CSS"  , "JavaScript" , "React" , "Redux", "MySQL", "MongoDB" , "Git" , "Agile" , "Teamwork" , "Handling large amounts of information" 
    ]



export const portfolio = [
    {
        id: 1,
        title: "John Reusme",
        description: "The website created as part of a job search has the functionality of an adaptive page and the ability to navigate between different pages. Additionally, this website uses HashRouter, which provides more efficient handling of URL addresses.",
        image: CvJohn,
        link: 'https://viktarprof.github.io/CV_John/#/',
        tools: ['React', 'Responsive']
    },
    {
        id: 2,
        title: "Cart Redux",
        description: "Thanks to the use of the React framework and Redux library, this application has achieved high flexibility in state management. They provide a convenient mechanism for storing and processing data, which allows creating a scalable application with a rich user interface and easy state management",
        image: cart_redux,
        link: 'https://viktarprof.github.io/Cart_redux/',
        tools: ['React', 'Redux', 'JavaScript']
    },
    {
        id: 3,
        title: "TODO List",
        description: "The developed application allows the user to add tasks for each day of the week with the ability to specify the importance of each task. Once a task is completed, it can be removed from the list. The application is built using React. Local browser storage (localstorage) is used to store data in the application.",
        image: todoList,
        link: 'https://viktarprof.github.io/todo/',
        tools: ['React', 'Responsive']
    },
    {
        id: 4,
        title: "Authorization and registration form",
        description: "A code was written using React that includes user authentication and registration functionality. Additionally, this website uses HashRouter.",
        image: AuthorizationForm,
        link: 'https://viktarprof.github.io/react_authorization/#/login', tools: ['React', 'hook-form']
    },
    {
        id: 5,
        title: "Fake api products",
        description: "The present work contains code with a dummy IP address, as well as added code for switching images and implementing a star rating system.",
        image: FakeAPI,
        link: 'https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Tigran/HW6(product%20card)/index.html', 
        tools: ['GET', 'React', 'JavaScript']
    },
    {
        id: 6,
        title: "Eurocrane company",
        description: "For the task related to Eurocrane company, we worked as a team and I was responsible for creating the 'About us' and 'Contacts' pages. During the project execution, I successfully implemented media queries and added a feature of image switching, as well as set up a timer for the appearance of a modal window.",
        image: Eurocrane_company,
        link: 'https://viktarprof.github.io/ReactHW/%D0%95%D0%B2%D1%80%D0%BE%D0%BA%D1%80%D0%B0%D0%BD/about.html', 
        tools: ['HTML', 'SCC', 'JavaScript', 'Responsive design']
    },
    {
        id: 7,
        title: "BuhOne",
        description: "The HTML code was written, which contains the necessary markup for the page, and CSS tools were used to create an adaptive design. To improve the user experience on the page, a JavaScript code has been added that provides image switching on the page. This allows users to view different versions of images.",
        image: BuhOne,
        link: 'https://viktarprof.github.io/TelRan_frontend/Frontend/HomeWork/Tigran/HW7(%D0%B2%D0%B5%D1%80%D1%81%D1%82%D0%BA%D0%B0%20%D0%BC%D0%B0%D0%BA%D0%B5%D1%82%D0%B0%2C%20JS-%D1%81%D0%BB%D0%B0%D0%B9%D0%B4%D0%B5%D1%80%2C%20%D0%91%D1%83%D1%80%D0%B3%D0%B5%D1%80%20%D0%BA%D0%BD%D0%BE%D0%BF%D0%BA%D0%B0)/index.html',
        tools: ['HTML', 'SCC', 'JavaScript', 'Responsive design']
    },
]