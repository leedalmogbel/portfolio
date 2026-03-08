export interface Experience {
  period: string;
  title: string;
  company: string;
  description: string;
  tags: string[];
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  role: string;
  link?: string;
}

export interface ArchiveProject {
  year: string;
  title: string;
  role: string;
  tags: string[];
  link?: string;
}

export const experiences: Experience[] = [
  {
    period: "2025 — Present",
    title: "Software Developer (Consultant)",
    company: "Rapid App Werks",
    description:
      "Building and maintaining enterprise low-code applications on the Mendix platform for clients including Terumo and Johnson & Johnson. Designing domain models, microflows, and nanoflows for data processing and business logic.",
    tags: ["Mendix", "Enterprise", "API Integration", "Mobile Development", "Java", "JavaScript"],
  },
  {
    period: "2024",
    title: "Software Developer (Consultant)",
    company: "MacGyver Consulting",
    description:
      "Full-stack development across React, Node.js, WordPress, and Laravel. Integrated BreadStack services into e-commerce platforms and implemented designs from Figma mockups with mobile-first responsiveness.",
    tags: ["React", "Node.js", "Laravel", "WordPress", "Figma", "React Native"],
  },
  {
    period: "2023 — 2024",
    title: "Software Developer",
    company: "Netfone VOIP Services (NZ)",
    description:
      "Backend development for VOIP integration, CRM, and fuel system digitalization. Built and maintained services using Laravel, GraphQL, Docker, and AWS with comprehensive unit testing.",
    tags: ["Laravel", "GraphQL", "Docker", "AWS", "Unit Testing"],
  },
  {
    period: "2022 — 2023",
    title: "Software Developer",
    company: "Emirates International Endurance Village",
    description:
      "Backend development for VOIP integration, CRM, and fuel system digitalization. Built and maintained services using Laravel, GraphQL, Docker, and AWS with comprehensive unit testing.",
    tags: ["Laravel", "MySQL", "Node.js", "React", "React Native", "Flutter"],
  },
  {
    period: "2020 — 2022",
    title: "Senior Software Developer",
    company: "Decenternet",
    description:
      "Led backend development with Node.js, Express, and NoSQL. Contributed to frontend with React.js, designed APIs for third-party applications, and integrated Coin Market API for real-time cryptocurrency data.",
    tags: ["Node.js", "React", "Express", "NoSQL", "Web3", "React Native"],
  },
  {
    period: "2020 — 2022",
    title: "Software Developer",
    company: "StarkDev Solutions / BlueRock Digital",
    description:
      "Integrated CRM tools including HubSpot for user information and shipping workflows. Created middleware for seamless integration between Shopify and HubSpot.",
    tags: ["Shopify", "HubSpot", "Node.js", "Laravel", "E-commerce"],
  },
  {
    period: "2019 — 2020",
    title: "Senior Software Engineer",
    company: "Stratpoint",
    description:
      "Worked on a customized CMS for ABS-CBN that gathers reports from different locations, helping verify information and flag potential fake news so that people can report news in their communities. Also helped develop a CRM platform for Globe Telecom that manages data related to their products and services, built with Node.js, Express, React, MySQL, and AWS services including RDS, Lambda, Cognito, and S3.",
    tags: ["React", "Node.js", "MySQL", "AWS S3", "Lambda", "Cognito", "CloudWatch"],
  },
  {
    period: "2017 — 2019",
    title: "Full Stack Developer",
    company: "Sterling Technologies (Openovate Labs)",
    description:
      "Spearheaded e-commerce, job hunting, and cashback sites including Dealcha and Buzzbee in Thailand. Built web backends with OOP, PHP, Node.js, React, and React Native with MySQL and AWS S3.",
    tags: ["React", "React Native", "Node.js", "PHP", "MySQL", "AWS S3"],
  },
];

export const featuredProjects: Project[] = [
  {
    title: "Singapore Airlines",
    description:
      "Enterprise-level airline website built with modern web technologies, delivering a seamless booking and travel experience for millions of users.",
    tags: ["React", "Enterprise"],
    role: "Fullstack",
    link: "https://www.singaporeair.com/welcome-to-world-class/en_UK/sg/"
  },
  {
    title: "Hilton Asia Pacific",
    description:
      "Corporate and reservation platform for Hilton's Asia Pacific operations, handling hotel bookings and corporate content management.",
    tags: ["React", "Enterprise"],
    role: "Fullstack",
    link: "https://www.singaporeair.com/welcome-to-world-class/en_UK/sg/"
  },
  {
    title: "SEAOIL Philippines",
    description:
      "Large-scale corporate website for one of the Philippines' leading independent oil companies, featuring dynamic content and service integrations.",
    tags: ["WordPress", "PHP", "JavaScript"],
    role: "Fullstack",
  },
  {
    title: "EIEV Registration Mobile | Web | Stables | Horses",
    description:
      "Developed an end-to-end event management and registration system for the Emirates International Endurance Village, handling rider registrations, event scheduling, and third-party API integrations; built the platform using the MERN stack and later migrated it to PHP (Laravel), while also developing a web platform for Arabian horse listings, creating custom APIs and internal tools, building a mobile application, integrating real-time data synchronization across web, mobile, and on-site kiosks, and assisting in debugging and maintaining backend services to improve system stability and performance.",
    tags: ["Laravel", "Node.js", "React"],
    role: "Fullstack",
    link: "https://website.eiev-app.ae/en"
  },
  {
    title: "DecenterNet / DAppStore",
    description:
      "Decentralized network platform and app marketplace built on Web3 technologies, enabling peer-to-peer interactions and decentralized application distribution.",
    tags: ["React", "Node.js", "Web3"],
    role: "Fullstack",
  },
  {
    title: "Expenses",
    description:
      "Personal finance tracking application with real-time expense categorization, analytics dashboards, and budget management. Live at expenses.leedalmogbel.com.",
    tags: ["Next.js", "Supabase", "TypeScript"],
    role: "Fullstack",
    link: "http://expenses.leedalmogbel.com",
  },
];

export const archiveProjects: ArchiveProject[] = [
  { year: "2024", title: "Expenses", role: "Fullstack", tags: ["Next.js", "Supabase"], link: "https://expenses.leedalmogbel.com" },
  { year: "2022", title: "EIEV Web", role: "Fullstack", tags: ["Laravel", "Node.js", "React", "WordPress"], link: "https://website.eiev-app.ae/en" },
  { year: "2022", title: "EIEV Stables", role: "Fullstack", tags: ["Laravel", "Node.js", "React"], link: "https://registration.eiev-app.ae/login" },
  { year: "2022", title: "EIEV Horses", role: "Fullstack", tags: ["Laravel", "Node.js", "React"], link: "https://registration.eiev-app.ae/login" },
  { year: "2021", title: "DoYouEven", role: "Fullstack", tags: ["React", "Node.js", "MongoDB", "Stripe", "Wordpress", "PHP", "Laravel"], link: "https://www.doyoueven.com/" },
  { year: "2021", title: "Vie Capital", role: "Fullstack", tags: ["Wordpress", "Laravel", "PHP", "MySQL"], link: "https://www.viecapital.com.au/" },
  { year: "2021", title: "RightPuff", role: "Fullstack", tags: ["React", "Node.js", "Stripe", "Wordpress", "MongoDB"], link: "https://rightpuff.ca/" },
  { year: "2020", title: "Acent Tech", role: "Fullstack", tags: ["React", "Node.js", "MongoDB"], link: "http://www.acent.tech/" },
  { year: "2020", title: "YourEarth", role: "Fullstack", tags: ["React", "Node.js", "Web3", "MongoDB"], link: "https://yourearth.io/" },
  { year: "2019", title: "KrisFlyer Experiences", role: "Fullstack", tags: ["PHP", "Wordpress", "MySQL", "JavaScript"], link: "https://krisflyerexperiences.com/en/welcome" },
  { year: "2019", title: "Galleon", role: "Fullstack", tags: ["PHP"], link: "https://www.galleon.ph/" },
  { year: "2019", title: "ShopCentral", role: "Fullstack", tags: ["PHP", "PrestaShop", "MySQL"], link: "https://shopcentral.com.ph/" },
  { year: "2018", title: "Calyx and Trichomes", role: "Fullstack", tags: ["WordPress", "WooCommerce"], link: "https://calyxandtrichomes.com/" },
  { year: "2018", title: "GlassWalk", role: "Fullstack", tags: ["WordPress", "PHP", "JS"], link: "https://glasswalk.com/" },
  { year: "2018", title: "PlantLife Cannabis", role: "Fullstack", tags: ["WordPress", "WooCommerce", "React", "Node.js", "MySQL", "MongoDB"], link: "https://plantlifecannabis.com/" },
  { year: "2018", title: "Detroit Bubble Tea", role: "Fullstack", tags: ["WordPress", "PHP"], link: "https://detroitbubbletea.com/" },
  { year: "2018", title: "MCC 4x4", role: "Fullstack", tags: ["WordPress", "WooCommerce"], link: "https://www.mcc4x4.com.au/" },
  { year: "2017", title: "Marie France Philippines", role: "Fullstack", tags: ["WordPress", "PHP"], link: "http://mariefrance.com.ph/" },
  { year: "2017", title: "Svenson Philippines", role: "Fullstack", tags: ["WordPress", "PHP"], link: "https://www.svenson.com.ph/" },
  { year: "2017", title: "UCC APAC", role: "Fullstack", tags: ["WordPress", "PHP"], link: "https://ucc-apac.com/" },
  { year: "2017", title: "PCNA", role: "Fullstack", tags: ["WordPress", "PHP"], link: "https://pcna.com.au/" },
];

export const mobileProjects: ArchiveProject[] = [
  { year: "2022", title: "EIEV (iOS / Android)", role: "Fullstack", tags: ["React Native", "Node.js", "Firebase", "Laravel"], link: "https://apps.apple.com/us/app/eiev/id1529308218" },
  { year: "2020", title: "On Mission (iOS / Android)", role: "Fullstack", tags: ["React Native", "React", "Node.js", "MongoDB"] },
  { year: "2020", title: "The Garden Cartoon (iOS)", role: "Backend", tags: ["Node.js", "MongoDB", "Kotlin", "Swift"], link: "https://apps.apple.com/us/app/the-garden/id1610776109" },
  { year: "2025", title: "EmergenSync (Android / WIP)", role: "Fullstack", tags: ["React Native", "Firebase"] },
  { year: "2025", title: "Kushii App (iOS / WIP)", role: "Fullstack", tags: ["React Native", "MongoDB"] },
];
