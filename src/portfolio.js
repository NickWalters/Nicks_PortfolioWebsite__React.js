
/* Change this file to get your personal Portfolio */

// Your Summary And Greeting Section

import emoji from "react-easy-emoji";

const greeting = {
  /* Summary And Greeting Section */
  username: "Nick Walters",
  title: "I'm Nick",
  subTitle: emoji("I am a graduate Software Engineer, keeping myself up to date with all the technology and tools required for the future 🚀 I have exeprience building Web and Mobile Applications with tools such as JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."),
  resumeLink: "https://drive.google.com/file/d/1AY54AnVg4Hm2QPJIWY1As5CxcSsUIzQT/view?usp=sharing"
};

// Social Media Link

const socialMediaLinks = {

  github: "https://github.com/NickWalters",
  linkedin: "https://www.linkedin.com/in/nick-walters-752a449b",
  gmail: "nicho.walters@gmail.com",
  facebook: "https://www.facebook.com/nick.walters822/"
};

// Skills Section

const skillsSection = {
  title: "Abilities",
  subTitle: "Full Stack Web Developer",
  skills: [
    emoji("⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"),
    emoji("⚡ Integrate and link front-end UI/Design to relational databases and backend server functions seamlessly"),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks"),
  ],

/* must include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

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
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", 
      progressPercentage: "65%"  //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "85%"
    }
  ]
};


// Your top 3 work experiences

const workExperiences = {
  viewExperiences: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",  
      company: "University of Western Australia",
      companylogo: require("./assets/images/uwa.jpg"),
      date: "July 2019 – December 2019",
      desc: "Developed a custom website for the management of Computer Science projects in the school. Worked in a team of 4, to deliver full stack solutions",
      descBullets: [
        "Agile Web Development",
        "Full Stack Website with Django",
        "Deployed University-Wide"
      ]
    },
    {
      role: "Software Development and Testing",   
      company: "Adapt By Design",
      companylogo: require("./assets/images/adapt.png"),
      date: "July 2018 – November 2018",
      desc: "Responsible for the testing of Software & Quality Assurance. Javascript automated testing. Software Development using Angular and Typescript."
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  githubConvertedToken: process.env.REACT_APP_GITHUB_TOKEN,
  githubUserName: "NickWalters", // Change to your github username to view your profile in Contact Section.
  showGithubProfile :"true" // Set true or false to show Contact profile using Github, defaults to false 
};



// Achievement Section

const achievementSection = {

  title: emoji("Certifications & Certificates 🏆 "),
  subtitle: "Other Qualifications",

  achivementsCards: [
    {
      title: "Discrete Mathematics for Computer Science",
      subtitle: "Logic, Automata, Reasoning and the Mathematical fundamentals of Computer Science. A certification from Coursera ",
      image:
        "https://pbs.twimg.com/profile_images/1161027494268420096/mMAIqDBB_400x400.jpg",
      footerLink: [
        { name: "Certification", url: "https://coursera.org/share/8abd59d16d36b245b4a656fd3b7a2cb8" }]
    },
    {
      title: "JLPT N4",
      subtitle: "Japanese Language Proficiency Test - Certification of Conversational Ability. Required for Study or Employment in Japan",
      image: "https://www.eduhivenepal.com/admin/site_images/content/jlpt.png",
      footerLink: [
        { name:"", url: ""}]
    },
  ]
};



const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle: "Do you Want to discuss something with me?",
  number: "+61 0481181151",
  email_address: "nicho.walters@gmail.com"
};

export { greeting, socialMediaLinks, skillsSection, techStack, workExperiences, openSource, achievementSection, contactInfo};
