import emoji from 'react-easy-emoji';

const illustration = {
    animated: true
  };
const greeting = {
    username: "Haris Ahmad Khan",
    title: "Hi all, I'm Haris",
    subTitle: emoji( "I'm an Electronic Engineer and A passionate Full Stack Web App Developer 🚀 having an experience of designing and building Web applications with JavaScript / React-js / Python and some other cool libraries and frameworks."),
    resumeLink: "",
    displayGreeting: true,

};

const socialMediaLinks = {
    github: "https://github.com/haris18896",
    linkedIn: "https://www.linkedin.com/in/haris-ahmad-91b70215a/",
    twitter: "https://twitter.com/HarisAhmadKha18",
    facebook: "https://www.facebook.com/shadowwalker43/",
    instagram: "https://www.instagram.com/haris18896/",
    gmail: "haris18896@gmail.com",
    stackOverflow: "https://stackoverflow.com/users/13411507/haris-ahmad",
    display: true
};

const skillsSection = {
    display: true,
    title: "What I do",
    subTitle: "I'M, A FULL STACK WEB APP DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
    skills: [
        emoji("⚡ will develop highly interactive Front end and user interface for your Web applications and business."),
        emoji("⚡ will design custom database using postgreSQL and Django as Backend"),
        emoji("⚡ will do DB Normalization and make ER-Diagrams"),
        emoji("⚡ Integration of third party services such as firebase, Stripe, PayPal")
    ],

    softwareSkills: [
        {
            skillName: "html-5",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            skillName: "css3",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            skillName: "JavaScript",
            fontAwesomeClassname: "fab fa-js"
          },
          {
            skillName: "reactjs",
            fontAwesomeClassname: "fab fa-react"
          },
          {
            skillName: "sql-database",
            fontAwesomeClassname: "fas fa-database"
          },
          {
            skillName: "firebase",
            fontAwesomeClassname: "fas fa-fire"
          },
          {
            skillName: "python",
            fontAwesomeClassname: "fab fa-python"
          },

    ]
};

const educationInfo = {};

const techStack = {
    displayCodersrank: true,
    viewSkillBars: true,
    experience: [
        {
            Stack: "HTML 5",
            progressPercentage: "97%",
            fontAwesomeClassname: "fab fa-html5"
        },
        {
            Stack: "CSS 3",
            progressPercentage: "85%",
            fontAwesomeClassname: "fab fa-css3-alt"
        },
        {
            Stack: "JavaScript",
            progressPercentage: "81%",
            fontAwesomeClassname: "fab fa-js"
        },
        {
            Stack: "React JS",
            progressPercentage: "75%",
            fontAwesomeClassname: "fab fa-react"
        },
        {
            Stack: "SQL and Database design",
            progressPercentage: "85%",
            fontAwesomeClassname: "fas fa-database"
        },
        {
            Stack: "Python",
            progressPercentage: "90%",
            fontAwesomeClassname: "fab fa-python"
        },
    ]
};

const workExperiences = {};

const openSource = {};

const bigProjects = {};

const achievementSection = {};

const blogSection = {};

const talkSection = {};

const podcastSection = {};

const contactInfo = {};

const twitterDetails = {};

export {
    illustration,
    greeting,
    socialMediaLinks,
    skillsSection,
    educationInfo,
    techStack,
    workExperiences,
    openSource,
    bigProjects,
    achievementSection,
    blogSection,
    talkSection,
    podcastSection,
    contactInfo,
    twitterDetails
};