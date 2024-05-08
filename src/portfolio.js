/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: false, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vicente Chavez Mendoza",
  title: "Hi, I'm Vicente",
  subTitle: emoji(
    "Analytical Data Enthusiast Committed to Transforming Data into Impactful Insights"
  ),
  resumeLink:
    "https://docs.google.com/document/d/1xRrl3Zmx_U0ngAz63bJTharPQngEF55M_MNDdCAb0Tg/edit?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vicenchavez17",
  linkedin: "https://www.linkedin.com/in/vicente-chavez-099b3b148/",
  gmail: "vicentechavezmend@gmail.com",
  stackoverflow: "https://stackoverflow.com/users/22790102/vicentechavez",
  kaggle: "https://www.kaggle.com/vicentechavez17",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "Skills and Interests",
  subTitle:
    "CURIOUS DATA ANALYST EAGER TO EXPLORE DIVERSE ANALYTICAL TOOLS AND TECHNIQUES",
  skills: [
    emoji(
      "⚡ Experienced in data visualization and interpretation, capable of creating intuitive dashboards with Tableau"
    ),
    emoji("⚡ Implementing statistical models to solve real-world problems"),
    emoji(
      "⚡ Staying updated with the latest trends and technologies in artificial intelligence and big data"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fa-solid fa-database"
    },
    {
      skillName: "tableau",
      fontAwesomeClassname: "fa-solid fa-chart-line"
    },
    {
      skillName: "scikit learn",
      fontAwesomeClassname: "fa-solid fa-subscript"
    },
    {
      skillName: "matlab",
      fontAwesomeClassname: "fa-solid fa-m"
    },
    {
      skillName: "java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "CSU East Bay",
      logo: require("./assets/images/csuEastBayLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "March 2021 - December 2023",
      desc: "Took courses in:",
      descBullets: [
        "Artificial Intelligence",
        "Data Structures & Algorithms",
        "Database Architecture",
        "Stats for Science/Engineering",
        "Analysis of Algorithms",
        "Security & Info Assurance",
        "and more"
      ]
    },
    {
      schoolName: "Year Up",
      logo: require("./assets/images/yearUpLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Year Up is an intensive, competitive technical training and career development program with 250 corporate partners, graduating thousands of students annually across the nation. The program includes college-level courses, professional training and a six-month internship.",
      descBullets: [
        "Completed coursework in Project Coordination, Web Development, Network System Admin, IT Helpdesk, Professional Skills, and Business Communications."
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Visualizations/Tableau", //Insert stack or technology you have experience in
      progressPercentage: "80%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Python/SQL",
      progressPercentage: "70%"
    },
    {
      Stack: "Statistical Analysis",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Business Analyst",
      company: "Silicon Valley Bank",
      companylogo: require("./assets/images/svbLogo.png"),
      date: "Dec 2019 – Mar 2021",
      desc: "Supported private bank leadership team by identifying and providing reports/data.",
      descBullets: [
        "Assisted with the transition from Dynamics 365 to Salesforce CRM",
        "Automated pipeline tool resulting in top tier leads",
        "Automated monthly reports and dashboard"
      ]
    },
    {
      role: "Business Data Analyst",
      company: "Silicon Valley Bank",
      companylogo: require("./assets/images/svbLogo.png"),
      date: "Sep 2018 – Dec 2019",
      desc: "Supported technology bank sales team and marketing with automated reports and ad hoc data.",
      descBullets: [
        "Supported various marketing events with clean, actionable data",
        "Led monthly trainings on best practices when using internal tools"
      ]
    },
    {
      role: "Data Quality Service Intern",
      company: "Silicon Valley Bank",
      companylogo: require("./assets/images/svbLogo.png"),
      date: "Jan 2018 – Jul 2018",
      desc: "",
      descBullets: [
        "Managed SVB's data quality dashboard",
        "Collaborated with SME's to meet regulatory data quality needs"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Colaberry School of Data Science & Analytics",
      subtitle:
        "Completed Certification from Colaberry for SQL, Python, and Tableau",
      image: require("./assets/images/colaberryLogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: []
    },
    {
      title: "Relational Databases",
      subtitle:
        "Completed Certification from LinkedIn Learning for Relational Databases",
      image: require("./assets/images/linkedInLogo.png"),
      imageAlt: "LinkedIn Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://www.linkedin.com/learning/certificates/8afbd6141466b8bc89d969b87921cd8718381a50b655b0c2afaef8cb2e820f91?trk=backfilled_certificate&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_certifications_details%3BxFZkrv1iSKm1vrsv2Lj%2F1A%3D%3D"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "",
  email_address: "vicentechavezmend@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
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
  twitterDetails,
  isHireable
};
