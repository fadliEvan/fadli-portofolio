export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  details?: string;
  stack: string[];
  metrics?: string;
  featured: boolean;
  github?: string;
  demo?: string;
}

export const featuredProjects: Project[] = [
  {
    id: "01",
    title: "Internal REST API System",
    category: "Backend Architecture & Government Operations",
    description:
      "Built and maintained production REST APIs for internal government applications with optimized database architecture and scalable backend workflows.",
    details:
      "Designed secure endpoints, optimized relational schemas, and ensured robust request lifecycle management for daily public sector operations.",
    stack: ["Node.js", "PHP", "MySQL", "REST API", "Postman"],
    metrics: "Production-grade internal data operations",
    featured: true,
  },
  {
    id: "02",
    title: "AI WhatsApp Bot",
    category: "AI Integration & Automation",
    description:
      "AI-powered WhatsApp automation platform capable of handling conversations, workflow automation, and smart responses.",
    details:
      "Engineered automated conversation pipelines linking messaging webhooks to intelligent prompt handling and structured reply actions.",
    stack: ["Node.js", "WhatsApp API", "AI Integration", "Express.js"],
    metrics: "Automated multi-turn customer communication",
    featured: true,
  },
  {
    id: "03",
    title: "Financial Bookkeeping App",
    category: "Enterprise Software & Finance",
    description:
      "Accounting and reporting web application developed for real business operations and financial management.",
    details:
      "Includes ledger balances, journal reporting, session authentication, and transaction logging with relational MySQL integrity.",
    stack: ["PHP", "MySQL", "Authentication", "CSS3"],
    metrics: "Comprehensive balance and ledger reporting",
    featured: true,
  },
  {
    id: "04",
    title: "K-Means Clustering Analysis",
    category: "Machine Learning & Data Intelligence",
    description:
      "Machine learning project focused on data clustering, analysis, and visualization using K-Means algorithms.",
    details:
      "Applied statistical data preprocessing, elbow heuristic scoring, and multidimensional cluster mapping to discover hidden segments.",
    stack: ["Python", "Machine Learning", "K-Means", "Data Analysis"],
    metrics: "Heuristic data segmentation model",
    featured: true,
  },
];

export const clientProjects = [
  {
    name: "Travel Bali Landing Page",
    category: "Tourism & Experience Portal",
    url: "https://fadlievan.github.io/travelbali/",
    year: "Live Demo",
    stack: "HTML5 / CSS / JavaScript",
  },
  {
    name: "Fashion Distro Website",
    category: "E-Commerce & Streetwear Brand",
    url: "https://fadlievan.github.io/fashiondistro/",
    year: "Live Demo",
    stack: "Web Design / Responsive",
  },
  {
    name: "Coffee Shop Landing Page",
    category: "Hospitality & F&B Showcase",
    url: "https://fadlievan.github.io/coffeshop1/",
    year: "Live Demo",
    stack: "Modern UI / Micro-interactions",
  },
  {
    name: "LuxPhone Store",
    category: "Gadget Retail Experience",
    url: "https://luxphone-eight.vercel.app/",
    year: "Vercel Deployment",
    stack: "React / Frontend App",
  },
];
