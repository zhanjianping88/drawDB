import {
  Blocks,
  Bot,
  Database,
  FileCode2,
  GitBranch,
  LayoutTemplate,
  LineChart,
  ShieldCheck,
  Sparkles,
  Zap,
} from "lucide-react";

export const popularTools = [
  {
    title: "Database Schema Generator",
    description: "Generate clean relational structures for production apps and export SQL faster.",
    href: "/tools/database-schema-generator",
  },
  {
    title: "SQL Schema Generator",
    description: "Move from relational planning into cleaner SQL structure and implementation-ready design.",
    href: "/tools/sql-schema-generator",
  },
  {
    title: "MySQL ER Diagram",
    description: "Model MySQL tables, keys, and indexes with a browser-based database canvas.",
    href: "/tools/mysql-er-diagram",
  },
  {
    title: "PostgreSQL Schema Generator",
    description: "Plan Postgres-friendly tables, references, and normalized structure before migrations.",
    href: "/tools/postgresql-schema-generator",
  },
  {
    title: "Online Database Designer",
    description: "Design databases in the browser with a workflow tuned for speed, clarity, and collaboration.",
    href: "/tools/online-database-designer",
  },
  {
    title: "ER Diagram Tool",
    description: "Map entities and relationships clearly before schema complexity spreads into implementation.",
    href: "/tools/er-diagram-tool",
  },
];

export const templateCards = [
  {
    title: "Ecommerce Schema",
    meta: "12 tables",
    description: "Users, orders, products, inventory, payments, fulfillment.",
  },
  {
    title: "CRM Database",
    meta: "9 tables",
    description: "Contacts, pipelines, activities, accounts, ownership, permissions.",
  },
  {
    title: "SaaS Billing",
    meta: "11 tables",
    description: "Subscriptions, invoices, plans, seats, feature flags, audit logs.",
  },
  {
    title: "Content Platform",
    meta: "8 tables",
    description: "Authors, posts, categories, tags, media, revisions, comments.",
  },
];

export const featureItems = [
  {
    title: "SEO Landing Engine",
    description: "Scale long-tail database pages with reusable page templates and metadata systems.",
    icon: LineChart,
  },
  {
    title: "SQL-First Workflows",
    description: "Keep product positioning centered on schema design, exports, and real engineering use cases.",
    icon: FileCode2,
  },
  {
    title: "Template-Driven Growth",
    description: "Capture high-intent template searches across industries and database engines.",
    icon: LayoutTemplate,
  },
  {
    title: "Semantic Page System",
    description: "Use clean HTML structure, structured data, breadcrumbs, and FAQ sections by default.",
    icon: Blocks,
  },
  {
    title: "Performance Focus",
    description: "Ship a server-component-heavy marketing site with lean JavaScript and fast paint times.",
    icon: Zap,
  },
  {
    title: "Future AI Surface",
    description: "Reserve space for AI schema generation and premium workflows without blocking launch.",
    icon: Bot,
  },
];

export const faqItems = [
  {
    question: "What is drawDB for?",
    answer:
      "drawDB is being positioned as a modern online database design platform for schema generation, ER diagrams, SQL exports, and reusable templates.",
  },
  {
    question: "Will the editor be part of this site?",
    answer:
      "Yes. The editor will live under /app later, while the first launch focuses on a fast marketing and SEO surface that drives qualified traffic.",
  },
  {
    question: "Which database keywords are we targeting first?",
    answer:
      "The first wave focuses on database schema generator, ERD tool, SQL schema generator, MySQL ER diagram, Postgres ERD tool, and online database designer.",
  },
  {
    question: "How will AdSense fit without hurting UX?",
    answer:
      "AdSense will use clearly separated dark-surface placeholders inside long-form content modules, not inside the core workflow or primary navigation.",
  },
];

export const stats = [
  { label: "Core keyword clusters", value: "8+" },
  { label: "Template families", value: "20+" },
  { label: "SEO route systems", value: "5" },
  { label: "Future monetization layers", value: "3" },
];

export const highlightPills = [
  { label: "ERD Tool", icon: Database },
  { label: "SQL Generator", icon: GitBranch },
  { label: "Template Library", icon: LayoutTemplate },
  { label: "Premium-Ready", icon: ShieldCheck },
  { label: "Programmatic SEO", icon: Sparkles },
];
