export interface NavLink {
  label: string;
  href: string;
}

export interface ExperienceEntry {
  company: string;
  role: string;
  location: string;
  period: string;
  project: string;
  highlights: string[];
  technologies: string[];
}

export interface ProjectEntry {
  title: string;
  description: string;
  highlights: string[];
  tags: string[];
  githubUrl?: string;
}

export interface SkillCategory {
  name: string;
  skills: string[];
}

export interface EducationEntry {
  degree: string;
  school: string;
  location: string;
  period: string;
  details?: string;
}

export interface SocialLink {
  label: string;
  href: string;
  icon: "email" | "linkedin" | "github" | "phone";
}

export interface PortfolioData {
  name: string;
  shortName: string;
  heroTitle: string;
  tagline: string;
  tickerItems: string[];
  yearsExperience: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  resumePath: string;
  siteUrl: string;
  seo: {
    title: string;
    description: string;
  };
  navLinks: NavLink[];
  about: {
    paragraphs: string[];
    careerFocus: string[];
    targetRoles: string[];
  };
  experience: ExperienceEntry[];
  projects: ProjectEntry[];
  skills: SkillCategory[];
  education: EducationEntry[];
  socialLinks: SocialLink[];
  metrics: { label: string; value: string }[];
}

export const portfolio: PortfolioData = {
  name: "Murali Venkateswara Gopi Krishna Ponnada",
  shortName: "Murali Ponnada",
  heroTitle:
    "Backend Engineer focused on trading platforms, financial data workflows, and production reliability.",
  tagline:
    "Software engineer with 5+ years building and supporting high-volume trading systems, regulatory reporting flows, and production backend infrastructure.",
  tickerItems: [
    "Trading platform APIs",
    "Financial data workflows",
    "Regulatory reporting",
    "Kafka · AMPS · Quartz",
    "Observability & incident response",
    "High-volume backend systems",
    "Python · Java",
    "Production reliability",
    "Distributed messaging",
    "Capital markets infrastructure",
  ],
  yearsExperience: "5+ years",
  location: "Harrison, NJ / New York City Metro Area",
  email: "gopisai2421@gmail.com",
  phone: "(607) 595-7476",
  linkedin: "https://linkedin.com/in/pmvgk/",
  github: "https://github.com/gopimurali",
  resumePath: "/MuraliPonnada__SoftwareEngineer.pdf",
  siteUrl: "https://muraliponnada.com",
  seo: {
    title:
      "Murali Ponnada | Software Engineer — Trading Systems & Backend Engineering",
    description:
      "Software Engineer with 5+ years building trading platforms, financial data workflows, and regulatory reporting at Bank of America. Python and Java backend engineer focused on high-throughput systems, APIs, messaging, and production reliability.",
  },
  navLinks: [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Education", href: "#education" },
    { label: "Contact", href: "#contact" },
  ],
  about: {
    paragraphs: [
      "I'm a software engineer who builds and supports production systems at the intersection of capital markets and backend engineering - trading platforms, financial data pipelines, regulatory reporting, and the APIs and messaging layers that keep them reliable under load.",
      "My recent work centers on equities derivatives trading infrastructure: real-time position APIs, regulatory data flows, high-volume trade processing, and observability across distributed services. I care about correctness under peak load, clear operational signals, and code that teams can maintain.",
      "I'm actively seeking roles as a Software Engineer, Backend Engineer, or Quant Developer on trading platform, fintech, and capital markets engineering teams - building infrastructure, not trading strategies.",
    ],
    careerFocus: [
      "Trading platform systems",
      "Financial data workflows",
      "Regulatory reporting flows",
      "REST APIs & service design",
      "Messaging systems (Kafka, AMPS)",
      "Observability & production reliability",
      "High-volume backend systems",
    ],
    targetRoles: [
      "Software Engineer — trading platforms & fintech",
      "Backend / Platform Engineer — capital markets",
      "Quant Developer — quantitative finance infrastructure",
    ],
  },
  experience: [
    {
      company: "Bank of America",
      role: "Software Engineer",
      location: "New York, NY",
      period: "Oct 2024 – Present",
      project: "Equities Derivatives Trading Platform",
      highlights: [
        "Built and maintained APIs delivering real-time trade position data to downstream consumers, using parallel processing and caching to handle high request volume with low latency while protecting P&L and dividend workflows.",
        "Led design and launch of a financial regulatory reporting flow within a legacy system — improving handling of instruments, transactions, and position data with zero SLA breaches during rollout.",
        "Contributed to high-volume equities derivatives workflows supporting up to ~7M daily trade records, leveraging concurrency, Quartz scheduling for sub-second processing latencies, and caching to improve reliability and production stability.",
        "Migrated messaging infrastructure across multiple servers, improving latency by ~10% and reliability by ~12% in critical trading workflows.",
        "Implemented observability with Grafana, Kibana, and Splunk, reducing production incidents by ~8% and enabling faster root-cause analysis.",
        "Partnered with product owners and cross-functional teams on deliverables; documented APIs and workflows to improve onboarding and reduce knowledge silos.",
      ],
      technologies: [
        "Java",
        "Python",
        "AMPS",
        "Kafka",
        "Quartz",
        "Elasticsearch",
        "Splunk",
        "Grafana",
        "Kibana",
        "Docker",
        "CI/CD",
        "Distributed Systems",
      ],
    },
    {
      company: "Binghamton University",
      role: "Research Associate",
      location: "Binghamton, NY",
      period: "Jul 2024 – Oct 2024",
      project: "Brain Aging Study — Neuroimaging Data Analysis",
      highlights: [
        "Enhanced MATLAB pipelines to process raw brain scan sequences from 54 subjects into blood flow heatmaps for quantitative comparison.",
        "Compared cerebral blood flow patterns across age and demographic segments, surfacing statistically meaningful insights on neural aging dynamics.",
      ],
      technologies: ["MATLAB", "Data Analysis", "Scientific Computing"],
    },
    {
      company: "Infosys",
      role: "Senior Systems Engineer",
      location: "Hyderabad, India",
      period: "Dec 2019 – Aug 2022",
      project: "CIRRUS — Middle Office Regulatory Reporting",
      highlights: [
        "Improved trade processing and end-of-day risk systems on the Quartz platform for Bank of America, resolving issues with currency conversions, FX trades, and trade record masking.",
        "Enhanced valuations processing and event-type generation logic, improving exposure reporting accuracy by ~20%, reducing errors by ~30%, and increasing transaction reporting accuracy by ~10%.",
        "Contributed to regulatory reporting workflows processing ~1M trades/day across FX, EQ, IR, and CR asset classes; resolved reporting issues affecting ~100K daily trades.",
        "Implemented compliance coverage for CFTC, MiFID, HKMA, SEC, ASIC, and EMIR regulatory standards.",
        "Served as Level 3 (L3) escalation point for production incidents; traced impact across hardware, network, and service operations.",
        "Contributed to regulatory impact assessments and design reviews with stakeholders across asset classes.",
      ],
      technologies: [
        "Python",
        "Quartz",
        "Oracle",
        "Regulatory Reporting",
        "Distributed Systems",
      ],
    },
  ],
  projects: [
    {
      title: "Spotted Lanternfly Detection",
      description:
        "Computer vision system built during a 12-hour Cornell University hackathon to detect spotted lanternflies and egg masses from consumer drone video feeds.",
      highlights: [
        "Trained YOLOv8 with custom detection thresholds; iterated across model variants for high visual variability across life stages.",
        "Coordinated with government officials and researchers; validated against real-world drone footage for deployment readiness.",
      ],
      tags: ["Python", "YOLOv8", "Computer Vision", "Drone Data", "ML"],
    },
    {
      title: "Blood Bank Management System",
      description:
        "Scalable cloud system for blood bank inventory and request management with role-based access and automated tracking.",
      highlights: [
        "Deployed on AWS (Lambda, DynamoDB, S3, API Gateway) with a React/Node.js frontend.",
        "Reduced manual errors in blood request workflows through automated inventory management.",
      ],
      tags: ["AWS", "React", "Node.js", "DynamoDB", "Serverless"],
    },
    {
      title: "Analysis of Health Reddit Data",
      description:
        "Data analysis pipeline on health-related discussions from Reddit using sentiment analysis and topic modeling.",
      highlights: [
        "Built with Python, Matplotlib, and MongoDB to surface engagement and sentiment trends across health communities.",
      ],
      tags: ["Python", "NLP", "MongoDB", "Sentiment Analysis", "Topic Modeling"],
    },
    {
      title: "Healthcare Voice Navigation App",
      description:
        "Voice-assisted navigation system for physically handicapped patients with a caregiver proxy interface.",
      highlights: [
        "Django/MySQL healthcare application with accessible design across multiple user personas.",
      ],
      tags: ["Django", "MySQL", "Accessibility", "Voice UI"],
    },
  ],
  skills: [
    {
      name: "Languages",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "C++", "MATLAB"],
    },
    {
      name: "Backend & Frameworks",
      skills: ["Flask", "Django", "Node.js", "Express.js", "React", "Angular"],
    },
    {
      name: "Trading & Finance Tech",
      skills: ["AMPS", "Quartz", "Kafka", "Regulatory Reporting", 
        "Equities Derivatives", "Trade Lifecycle", "Instrument / Transaction / Position Data"],
    },
    {
      name: "Databases",
      skills: ["Oracle", "MySQL", "MongoDB", "CassandraDB", "Elasticsearch"],
    },
    {
      name: "Observability & DevOps",
      skills: [
        "Grafana",
        "Kibana",
        "Splunk",
        "Docker",
        "AWS",
        "CI/CD",
        "Git",
      ],
    },
    {
      name: "ML / AI / NLP",
      skills: [
        "YOLOv8",
        "scikit-learn",
        "pandas",
        "numpy",
        "NLTK",
        "Gensim",
      ],
    },
    {
      name: "Concepts",
      skills: [
        "Distributed Systems",
        "Microservices",
        "REST APIs",
        "Concurrency",
        "Messaging Systems",
        "Large-Scale System Design",
        "Agile",
      ],
    },
  ],
  education: [
    {
      degree: "MS in Computer Science",
      school: "Binghamton University, SUNY — Thomas J. Watson College of Engineering",
      location: "Binghamton, NY",
      period: "Aug 2022 – May 2024",
      details: "CGPA: 3.8 / 4.0",
    },
    {
      degree: "BE in Electronics and Communication Engineering",
      school: "Chaitanya Bharathi Institute of Technology, Osmania University",
      location: "Hyderabad, India",
      period: "Aug 2015 – May 2019",
    },
  ],
  socialLinks: [
    { label: "Email", href: "mailto:gopisai2421@gmail.com", icon: "email" },
    { label: "LinkedIn", href: "https://linkedin.com/in/pmvgk/", icon: "linkedin" },
    { label: "GitHub", href: "https://github.com/gopimurali", icon: "github" },
    { label: "Phone", href: "tel:+16075957476", icon: "phone" },
  ],
  metrics: [
    { label: "Trades processed daily", value: "~1M" },
    { label: "Processing error rate", value: "<1%" },
    { label: "Latency improvement", value: "~10%" },
    { label: "Incident reduction", value: "~8%" },
    { label: "Exposure accuracy gain", value: "~20%" },
    { label: "Daily trades impacted", value: "~100K" },
  ],
};
