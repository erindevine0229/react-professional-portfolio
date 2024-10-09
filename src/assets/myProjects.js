import projZero from './projZeroFresh.png';
import projOne from './projOneWeather.png';
import projTwo from './projTwoSocial.png';
import projThree from './projThreeEmployee.png';
import projFour from './projFourTime.png';
import projFive from './projFiveHike.png';


const myProjectsData = [
    {
        id: 0,
        name: 'Pawsitively Fresh',
        description: 'A collaborate full-stack project creating the basics of an e-commerce site for customized and natural pet food. A user is able to run CRUD operations to update their pet profiles and then a filter is used to pull up only foods matching the selected pet needs',
        technologies: ['React', 'MongoDB', 'GraphQL', 'Express.js', 'CSS', 'Javascript', 'Bootstrap'],
        image: projZero,
        link: 'https://github.com/erindevine0229/Pawsitivley-Fresh'
    },
    {
        id: 1,
        name: 'Weather API Dashboard',
        description: 'A front-end application using third party API to fetch data regarding both current and upcoming weathern forecast in a city the user may search for. RESTful API design is implemented.',
        technologies: ['Javascript', 'CSS', 'HTML', 'REST API'],
        image: projOne,
        link: 'https://github.com/erindevine0229/weather-app'
    },
    {
        id: 2,
        name: 'NoSQL Social Network',
        description: 'A back-end project setting up database, schemas and CRUD operators for a social network site. URL pathing is used to target data to be manipulated and the functionality can be tested in Insomnia.',
        technologies: ['MongoDB', 'Mongoose', 'Express.js', 'Insomnia'],
        image: projTwo,
        link: 'https://github.com/erindevine0229/NoSQL-social-network'
    },
    {
        id: 3,
        name: 'Employee Database Tracker',
        description: 'A back-end database management tool using command line prompting via inquirer.js to navigate and update an employee database. SQL language is used to execute the desired operations.',
        technologies: ['Node.js', 'Express.js', 'SQL'],
        image: projThree,
        link: 'https://github.com/erindevine0229/SQL-employee-tracker'
    },
    {
        id: 4,
        name: 'Twice Upon a Time',
        description: 'A solo full-stack project using MERN stack to create an e-commerce site for users to buy and sell second-hand items from their weddings. Login/signup capability is included and a functioning shopping cart is implemented.',
        technologies: ['MongoDB', 'Express.js', 'React', 'Node.js', 'CSS', 'Stripe'],
        image: projFour,
        link: 'https://github.com/erindevine0229/Twice-upon-a-time'
    },
    {
        id: 5,
        name: 'Find A Hike',
        description: 'A collaborative full-stack website for outdoor fans to view posts on nearby hiking events they may be interested in joining. A user is able to sign-up and log in to their account to use this site.',
        technologies: ['postgreSQL', 'Express.js', 'Handlebars', 'CSS', 'Node.js', 'Sequelize ORM'],
        image: projFive,
        link: 'https://github.com/erindevine0229/group5project2'
    }

]

export default myProjectsData;