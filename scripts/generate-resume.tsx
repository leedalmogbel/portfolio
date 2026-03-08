import React from "react";
import { renderToFile, Document, Page, View, Text, Link, StyleSheet } from "@react-pdf/renderer";

const BLUE = "#4A7BF7";
const BLACK = "#1a1a1a";
const DARK = "#374151";
const GRAY = "#555555";
const LIGHT_GRAY = "#888888";

const s = StyleSheet.create({
  page: {
    fontFamily: "Helvetica",
    fontSize: 8,
    color: BLACK,
    paddingTop: 30,
    paddingBottom: 20,
    paddingHorizontal: 36,
    lineHeight: 1.35,
  },
  // Header
  headerRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerLeft: {
    width: "55%",
  },
  name: {
    fontSize: 24,
    fontFamily: "Helvetica-Bold",
    color: DARK,
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 9,
    color: GRAY,
    lineHeight: 1.4,
    marginTop: 2,
    maxWidth: "55%",
  },
  contactBlock: {
    alignItems: "flex-end",
    justifyContent: "flex-start",
    paddingTop: 4,
  },
  contactText: {
    fontSize: 8,
    color: GRAY,
    marginBottom: 2,
  },
  contactLink: {
    fontSize: 8,
    color: GRAY,
    textDecoration: "none",
    marginBottom: 2,
  },
  divider: {
    borderBottomWidth: 2,
    borderBottomColor: BLUE,
    marginTop: 10,
    marginBottom: 10,
  },
  // Columns
  columns: {
    flexDirection: "row",
    gap: 24,
  },
  leftCol: {
    width: "62%",
  },
  rightCol: {
    width: "38%",
  },
  // Section
  sectionTitle: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: BLUE,
    letterSpacing: 1.2,
    marginBottom: 8,
  },
  // Experience
  expEntry: {
    marginBottom: 7,
  },
  expHeaderRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 2,
  },
  expTitleText: {
    fontSize: 8,
    color: GRAY,
    flex: 1,
    paddingRight: 4,
  },
  expCompanyText: {
    fontFamily: "Helvetica-Bold",
    color: BLACK,
  },
  expDate: {
    fontSize: 7,
    color: LIGHT_GRAY,
    flexShrink: 0,
  },
  // Bullets
  bulletItem: {
    fontSize: 7.5,
    color: GRAY,
    lineHeight: 1.4,
    paddingLeft: 8,
    marginBottom: 1,
  },
  // Right column
  subheading: {
    fontSize: 8,
    fontFamily: "Helvetica-Bold",
    color: BLACK,
    marginBottom: 1,
  },
  bodyText: {
    fontSize: 7.5,
    color: GRAY,
    lineHeight: 1.4,
    marginBottom: 6,
  },
});

const experiences = [
  {
    role: "Software Developer (Consultant)",
    company: "Rapid App Werks",
    date: "Feb 2025 — Present",
    bullets: [
      "Building and maintaining enterprise low-code applications on the Mendix platform for clients including Terumo and Johnson & Johnson",
      "Designing domain models, microflows, and nanoflows for data processing and business logic",
      "Integrated external services and APIs with Mendix applications; collaborated on enterprise projects",
    ],
  },
  {
    role: "Software Developer (Consultant)",
    company: "MacGyver Consulting",
    date: "Mar 2024 — Dec 2024",
    bullets: [
      "Full-stack development using React, Node.js, WordPress, and Laravel",
      "Managed and synchronized data across multiple databases; integrated BreadStack services into e-commerce platforms",
      "Implemented designs from Figma mockups and optimized projects for mobile responsiveness",
    ],
  },
  {
    role: "Software Developer",
    company: "Netfone VOIP Services (NZ)",
    date: "Nov 2023 — Mar 2024",
    bullets: [
      "Backend development using Laravel 8-10, GraphQL, Docker, and AWS",
      "Managed data across multiple databases; part of VOIP integration, CRM, and fuel system digitalization",
      "Worked with unit testing to secure endpoints and functionality",
    ],
  },
  {
    role: "Web Developer",
    company: "Emirates Intl Endurance Village",
    date: "Feb 2022 — Nov 2023",
    bullets: [
      "Developed dynamic registration system for endurance horse ride events; integrated with third-party APIs",
      "Used MERN stack and later migrated to PHP (Laravel); created user-friendly site listing Arabian horses",
      "Developed internal tools and APIs; built a cross-platform mobile application",
    ],
  },
  {
    role: "Senior Software Developer",
    company: "Decenternet",
    date: "Jan 2020 — Jan 2022",
    bullets: [
      "Led backend development with Node.js, Express, and NoSQL database",
      "Contributed to frontend with React.js; designed and exposed APIs for third-party applications",
      "Integrated Coin Market API for real-time cryptocurrency data",
    ],
  },
  {
    role: "Software Developer",
    company: "StarkDev / BlueRock Digital",
    date: "Dec 2020 — Jan 2022",
    bullets: [
      "Integrated CRM tools (HubSpot) for user information and shipping details",
      "Created middleware for seamless integration between Shopify and HubSpot",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Stratpoint",
    date: "Oct 2019 — Nov 2020",
    bullets: [
      "Built customized CMS for ABS-CBN, the top TV network in the Philippines",
      "Engineered bespoke CRM for Globe Telecom; backend with Node.js, Express, React, MySQL, AWS",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Sterling Technologies (Openovate Labs)",
    date: "Oct 2017 — Oct 2019",
    bullets: [
      "Spearheaded e-commerce, job hunting, and cashback sites (Dealcha, Buzzbee) in Thailand",
      "Web backend with OOP, PHP, Node.js, React, React Native, MySQL, AWS S3",
    ],
  },
];

const Resume = () => (
  <Document>
    <Page size="A4" style={s.page}>
      {/* Header - Name */}
      <View style={s.headerRow}>
        <View style={s.headerLeft}>
          <Text style={s.name}>Waleed Almogbel</Text>
        </View>
        <View style={s.contactBlock}>
          <Link src="mailto:leedalmogbel@gmail.com" style={s.contactLink}>leedalmogbel@gmail.com</Link>
          <Text style={s.contactText}>+639155160537</Text>
          <Link src="https://github.com/leedalmogbel" style={s.contactLink}>github.com/leedalmogbel</Link>
          <Link src="https://linkedin.com/in/leed-almogbel-645a2a52" style={s.contactLink}>linkedin.com/in/leed-almogbel</Link>
        </View>
      </View>
      {/* Subtitle - separate block below name */}
      <Text style={s.subtitle}>
        Experienced full-stack developer with a focus on building reliable, scalable web & mobile applications
      </Text>

      <View style={s.divider} />

      {/* Two columns */}
      <View style={s.columns}>
        {/* LEFT */}
        <View style={s.leftCol}>
          <Text style={s.sectionTitle}>RELEVANT EXPERIENCE</Text>

          {experiences.map((exp, i) => (
            <View key={i} style={s.expEntry}>
              <View style={s.expHeaderRow}>
                <Text style={s.expTitleText}>
                  {exp.role}  ·  <Text style={s.expCompanyText}>{exp.company}</Text>
                </Text>
                <Text style={s.expDate}>{exp.date}</Text>
              </View>
              {exp.bullets.map((bullet, j) => (
                <Text key={j} style={s.bulletItem}>•  {bullet}</Text>
              ))}
            </View>
          ))}
        </View>

        {/* RIGHT */}
        <View style={s.rightCol}>
          <Text style={s.sectionTitle}>SKILLS</Text>

          <Text style={s.subheading}>Programming Languages</Text>
          <Text style={s.bodyText}>JavaScript (ES2015+), TypeScript, PHP, HTML, CSS, GraphQL</Text>

          <Text style={s.subheading}>Libraries & Frameworks</Text>
          <Text style={s.bodyText}>React, Next.js, Node.js, Express, Laravel, NestJS, React Native, Tailwind CSS, Framer Motion, Flutter</Text>

          <Text style={s.subheading}>Tools & Platforms</Text>
          <Text style={s.bodyText}>Git, GitHub, Docker, AWS (S3, RDS, Lambda, Cognito, CloudWatch), Supabase, Firebase, MySQL, MongoDB, Figma, Vercel, WordPress</Text>

          <Text style={{ ...s.sectionTitle, marginTop: 8 }}>SELECTED PROJECTS</Text>

          <Text style={s.subheading}>Singapore Airlines</Text>
          <Text style={s.bodyText}>Enterprise-level airline website delivering seamless booking and travel experience for millions of users</Text>

          <Text style={s.subheading}>EmergenSync (Android / WIP)</Text>
          <Text style={s.bodyText}>Life360 clone made with React Native and Firebase</Text>

          <Text style={s.subheading}>EIEV Event System</Text>
          <Text style={s.bodyText}>End-to-end event management with web, mobile, and on-site kiosk integration for equestrian events in the UAE</Text>

          <Text style={s.subheading}>Expenses App</Text>
          <Text style={s.bodyText}>Personal finance tracker built with Next.js, React Native and Supabase, live at expenses.leedalmogbel.com</Text>

          <Text style={{ ...s.sectionTitle, marginTop: 8 }}>EDUCATION</Text>

          <Text style={s.subheading}>Pamantasan ng Cabuyao</Text>
          <Text style={s.bodyText}>{"BS in Computer Science\n2009 — 2013"}</Text>

          <Text style={{ ...s.sectionTitle, marginTop: 8 }}>INTERESTS</Text>
          <Text style={s.bodyText}>Exploring new technologies, AI & machine learning, open-source development, improving 1% everyday</Text>
        </View>
      </View>
    </Page>
  </Document>
);

const outputPath = new URL("../public/resume.pdf", import.meta.url).pathname;

renderToFile(Resume(), outputPath).then(() => {
  console.log(`Resume PDF generated at: ${outputPath}`);
});
