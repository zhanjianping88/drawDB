export type ToolFaq = {
  question: string;
  answer: string;
};

export type ToolFeature = {
  title: string;
  description: string;
};

export type ToolStep = {
  title: string;
  description: string;
};

export type ToolPage = {
  slug: string;
  title: string;
  shortTitle: string;
  h1: string;
  description: string;
  keywords: string[];
  intro: string;
  path: string;
  category: string;
  categoryLabel: string;
  database: string;
  heroEyebrow: string;
  heroCtaLabel: string;
  heroSecondaryLabel: string;
  benefits: string[];
  steps: ToolStep[];
  features: ToolFeature[];
  schemaExample: {
    title: string;
    sql: string;
  };
  faqs: ToolFaq[];
  relatedToolSlugs: string[];
  relatedTemplateSlugs: string[];
};

type ToolConfig = Omit<ToolPage, "path">;

function buildFaqs(subject: string, answerA: string, answerB: string): ToolFaq[] {
  return [
    {
      question: `What is a ${subject} used for?`,
      answer: answerA,
    },
    {
      question: `How is a ${subject} different from writing SQL by hand?`,
      answer: answerB,
    },
    {
      question: "Can this workflow support future SQL export and diagram editing?",
      answer:
        "Yes. These tool pages are designed as entry points into the future drawDB editor, where schema planning, diagram editing, and SQL-oriented workflows can connect more directly.",
    },
    {
      question: "Why include FAQs on tool landing pages?",
      answer:
        "Well-written FAQs help cover adjacent search intent, improve page usefulness, and support FAQ structured data without adding thin filler copy.",
    },
  ];
}

function tool(config: ToolConfig): ToolPage {
  return {
    ...config,
    path: `/tools/${config.slug}`,
  };
}

export const toolPages: ToolPage[] = [
  tool({
    slug: "database-schema-generator",
    title: "Database Schema Generator | Free Online Tool | drawDB",
    shortTitle: "Database Schema Generator",
    h1: "Free online database schema generator for faster relational design.",
    description:
      "Generate cleaner database structures with a visual-first workflow for tables, relationships, keys, and SQL planning.",
    keywords: [
      "database schema generator",
      "database schema design",
      "relational database generator",
      "online schema generator",
    ],
    intro:
      "Use this database schema generator page to plan normalized tables, relationships, and implementation-ready structures before you commit to migrations or application code.",
    category: "core",
    categoryLabel: "Core Tools",
    database: "Multi-database",
    heroEyebrow: "Core Schema Tool",
    heroCtaLabel: "Explore Tool Library",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Model entities and relationships before schema decisions become expensive to change.",
      "Use a visual-first structure to clarify naming, keys, and ownership boundaries.",
      "Bridge discovery-stage SEO traffic into future product workflows and template exploration.",
    ],
    steps: [
      {
        title: "List the entities you actually need",
        description:
          "Start with your real business objects, not implementation details, so the schema reflects product behavior.",
      },
      {
        title: "Connect tables through real relationships",
        description:
          "Define ownership, cardinality, and foreign key flows early to prevent fragile schema design later.",
      },
      {
        title: "Refine the structure into SQL-friendly patterns",
        description:
          "After the diagram is stable, turn the model into naming conventions, indexes, and migration-ready structures.",
      },
    ],
    features: [
      {
        title: "Broad relational planning",
        description: "Useful across product, operations, analytics, and back-office database design workflows.",
      },
      {
        title: "Visual schema clarity",
        description: "Help teams align on structure without forcing every discussion into raw SQL immediately.",
      },
      {
        title: "Reusable SEO template",
        description: "Acts as a core acquisition page for one of the highest-intent database keywords.",
      },
      {
        title: "Strong template crossover",
        description: "Naturally links into ecommerce, SaaS, CRM, and other reusable schema examples.",
      },
    ],
    schemaExample: {
      title: "Generic relational schema example",
      sql: `CREATE TABLE customers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE projects (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id),
  title TEXT NOT NULL,
  status TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "database schema generator",
      "A database schema generator helps you define tables, keys, and relationships faster so you can move from abstract requirements to an actual relational model.",
      "Handwritten SQL is implementation detail. A schema generator is better for early-stage structure planning, normalization decisions, and cross-team review.",
    ),
    relatedToolSlugs: [
      "sql-schema-generator",
      "online-database-designer",
      "database-design-tool",
      "database-diagram-maker",
      "er-diagram-tool",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "crm-database-schema",
      "saas-database-schema",
    ],
  }),
  tool({
    slug: "sql-schema-generator",
    title: "SQL Schema Generator | Free Online Tool | drawDB",
    shortTitle: "SQL Schema Generator",
    h1: "Generate SQL schema structure from a clearer database design workflow.",
    description:
      "Plan SQL schemas faster with structured table design, key mapping, and diagram-first preparation for implementation.",
    keywords: [
      "sql schema generator",
      "sql database generator",
      "sql schema design tool",
      "sql schema builder",
    ],
    intro:
      "This SQL schema generator is aimed at engineers who want a more reliable way to move from entity planning into implementation-ready SQL structure.",
    category: "core",
    categoryLabel: "Core Tools",
    database: "SQL",
    heroEyebrow: "SQL Workflow Tool",
    heroCtaLabel: "Explore SQL Tools",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Reduce translation errors between schema planning and SQL implementation.",
      "Keep table structure, constraints, and relationship intent visible during design.",
      "Use content-driven tool pages to capture high-intent SQL workflow searches.",
    ],
    steps: [
      {
        title: "Start from entities, not syntax",
        description:
          "Identify the tables and relationships first so your SQL reflects a stable business model rather than a rushed implementation.",
      },
      {
        title: "Map keys, references, and constraints",
        description:
          "Check primary keys, foreign keys, uniqueness, and nullability before finalizing SQL structure.",
      },
      {
        title: "Translate into migration-ready SQL",
        description:
          "Once the model is clear, generate cleaner SQL statements and prepare them for your actual database workflow.",
      },
    ],
    features: [
      {
        title: "SQL-oriented planning",
        description: "Better suited to developers moving directly toward CREATE TABLE and migration flows.",
      },
      {
        title: "Constraint visibility",
        description: "Make uniqueness, references, and required fields explicit before coding.",
      },
      {
        title: "Cross-engine compatibility",
        description: "Useful as a design layer before adapting syntax to PostgreSQL, MySQL, or SQLite.",
      },
      {
        title: "Keyword-specific positioning",
        description: "Targets SQL intent more directly than a generic ERD or database design page.",
      },
    ],
    schemaExample: {
      title: "SQL schema planning example",
      sql: `CREATE TABLE teams (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  team_id BIGINT REFERENCES teams(id),
  email TEXT NOT NULL UNIQUE,
  role TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "SQL schema generator",
      "A SQL schema generator helps you move from a relational model into SQL-ready table definitions, references, and constraints with fewer design mistakes.",
      "Writing SQL manually is flexible, but a schema generator is better for validating structure before you harden it into migrations and production code.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "sql-table-designer",
      "ddl-generator",
      "sql-diagram-generator",
      "database-normalization-tool",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "payroll-database-schema",
      "crm-database-schema",
    ],
  }),
  tool({
    slug: "mysql-er-diagram",
    title: "MySQL ER Diagram Tool | Free Online Tool | drawDB",
    shortTitle: "MySQL ER Diagram",
    h1: "Create a MySQL ER diagram online for cleaner schema planning.",
    description:
      "Design MySQL entity relationship diagrams with a browser-based workflow for tables, keys, and relationship mapping.",
    keywords: [
      "mysql er diagram",
      "mysql erd tool",
      "mysql relationship diagram",
      "mysql database diagram",
    ],
    intro:
      "Use this MySQL ER diagram page to visualize table structure, foreign keys, and naming patterns before turning the model into MySQL migrations or DDL.",
    category: "engine",
    categoryLabel: "Database Engines",
    database: "MySQL",
    heroEyebrow: "MySQL Design Tool",
    heroCtaLabel: "Explore MySQL Tools",
    heroSecondaryLabel: "Browse MySQL-Friendly Templates",
    benefits: [
      "Visualize MySQL table relationships before they become schema drift.",
      "Design cleaner foreign key structures and join paths for application workflows.",
      "Capture engine-specific intent from users searching for MySQL diagram tools.",
    ],
    steps: [
      {
        title: "Identify MySQL entities and ownership",
        description:
          "Outline your main tables and how records depend on one another before introducing indexing or engine-specific tuning.",
      },
      {
        title: "Map joins and references visually",
        description:
          "Use the ERD structure to confirm one-to-many and many-to-many relationships before you implement them.",
      },
      {
        title: "Convert the diagram into MySQL DDL",
        description:
          "Once the model is stable, adapt the structure into MySQL-specific types, indexes, and migration logic.",
      },
    ],
    features: [
      {
        title: "MySQL-oriented planning",
        description: "Focuses on the needs of developers and teams working in MySQL-centric stacks.",
      },
      {
        title: "Readable ERD workflow",
        description: "Turn join-heavy structures into clearer relationship maps for review and collaboration.",
      },
      {
        title: "Migration preparation",
        description: "Great for catching missing references and naming inconsistencies before coding.",
      },
      {
        title: "Engine-specific SEO target",
        description: "Addresses high-intent searchers who already know they want MySQL design help.",
      },
    ],
    schemaExample: {
      title: "MySQL store schema example",
      sql: `CREATE TABLE customers (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  email VARCHAR(255) NOT NULL UNIQUE
);

CREATE TABLE orders (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  customer_id BIGINT NOT NULL,
  status VARCHAR(50) NOT NULL,
  CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id) REFERENCES customers(id)
);`,
    },
    faqs: buildFaqs(
      "MySQL ER diagram tool",
      "A MySQL ER diagram tool helps you plan relational structure visually so joins, foreign keys, and schema assumptions are easier to validate before implementation.",
      "Writing MySQL DDL directly is fast for experts, but an ER diagram is better when you need to validate relationships, naming, and future extensibility.",
    ),
    relatedToolSlugs: [
      "mysql-schema-designer",
      "database-relationship-diagram-tool",
      "er-diagram-tool",
      "sql-table-designer",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "inventory-management-database-schema",
      "booking-system-database-schema",
    ],
  }),
  tool({
    slug: "postgresql-schema-generator",
    title: "PostgreSQL Schema Generator | Free Online Tool | drawDB",
    shortTitle: "PostgreSQL Schema Generator",
    h1: "Generate PostgreSQL schema structure with a cleaner design-first workflow.",
    description:
      "Plan PostgreSQL tables, references, and normalized structures with a schema generator built for real relational workflows.",
    keywords: [
      "postgresql schema generator",
      "postgres schema generator",
      "postgresql schema design",
      "postgres database generator",
    ],
    intro:
      "This PostgreSQL schema generator helps teams design Postgres-friendly data models with stronger table structure, references, and implementation planning.",
    category: "engine",
    categoryLabel: "Database Engines",
    database: "PostgreSQL",
    heroEyebrow: "PostgreSQL Tool",
    heroCtaLabel: "Explore PostgreSQL Tools",
    heroSecondaryLabel: "View PostgreSQL Templates",
    benefits: [
      "Keep Postgres-oriented naming, keys, and audit patterns visible while you design.",
      "Use a stronger planning layer before writing migrations and DDL.",
      "Capture search traffic from teams who already know they want a PostgreSQL workflow.",
    ],
    steps: [
      {
        title: "Design your entities in Postgres terms",
        description:
          "Think through ids, timestamps, references, and relational ownership before writing migrations.",
      },
      {
        title: "Validate normalization and relationship shape",
        description:
          "Use the design phase to avoid duplicate fields, weak references, and hard-to-maintain join structures.",
      },
      {
        title: "Prepare the model for SQL and migrations",
        description:
          "Once the schema is stable, translate it into PostgreSQL DDL and the migration tooling you actually use.",
      },
    ],
    features: [
      {
        title: "Postgres-first model design",
        description: "Align schema planning with the constraints and conventions common in PostgreSQL apps.",
      },
      {
        title: "Migration-ready structure",
        description: "Improve the quality of the model before it becomes irreversible migration history.",
      },
      {
        title: "Strong relational review",
        description: "Useful for teams that care about normalization, reporting, and long-term schema health.",
      },
      {
        title: "Direct engine intent",
        description: "More specific than generic database design pages, which helps search relevance.",
      },
    ],
    schemaExample: {
      title: "PostgreSQL org and membership schema",
      sql: `CREATE TABLE organizations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE memberships (
  id BIGSERIAL PRIMARY KEY,
  organization_id BIGINT NOT NULL REFERENCES organizations(id),
  user_id BIGINT NOT NULL,
  role TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "PostgreSQL schema generator",
      "A PostgreSQL schema generator helps you plan table structure, references, and relational modeling before you commit the design to Postgres migrations.",
      "Handwritten Postgres DDL is still important, but a generator workflow is better for validating relationships, normalization, and reuse before implementation.",
    ),
    relatedToolSlugs: [
      "postgresql-erd-tool",
      "database-schema-generator",
      "sql-schema-generator",
      "ddl-generator",
      "database-normalization-tool",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "ecommerce-database-schema",
    ],
  }),
  tool({
    slug: "sqlite-database-designer",
    title: "SQLite Database Designer | Free Online Tool | drawDB",
    shortTitle: "SQLite Database Designer",
    h1: "Design SQLite databases online before you write the final schema.",
    description:
      "Use a lightweight design workflow for SQLite table structure, relationships, and schema planning.",
    keywords: [
      "sqlite database designer",
      "sqlite schema design",
      "sqlite database modeler",
      "sqlite erd tool",
    ],
    intro:
      "This SQLite database designer helps developers and builders sketch relational structure early, especially for local apps, prototypes, and embedded workflows.",
    category: "engine",
    categoryLabel: "Database Engines",
    database: "SQLite",
    heroEyebrow: "SQLite Tool",
    heroCtaLabel: "Explore SQLite Tools",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Plan relational structure for lightweight applications before SQL implementation.",
      "Keep local or embedded database workflows understandable as they grow.",
      "Capture engine-specific traffic from developers building with SQLite.",
    ],
    steps: [
      {
        title: "Start with the smallest useful model",
        description:
          "Design only the tables needed for your current application flow, especially if you are prototyping.",
      },
      {
        title: "Keep relationships intentional",
        description:
          "Even in lightweight apps, explicitly mapping ownership and references reduces future refactors.",
      },
      {
        title: "Evolve the schema as complexity grows",
        description:
          "Use the design layer to understand when your SQLite app is still simple and when it needs stronger structure.",
      },
    ],
    features: [
      {
        title: "Prototype-friendly workflow",
        description: "Useful for builders who move fast but still want a coherent relational model.",
      },
      {
        title: "Embedded app focus",
        description: "Good fit for local tools, desktop apps, and internal systems using SQLite.",
      },
      {
        title: "Simple schema clarity",
        description: "Avoid ad hoc table growth by visualizing the model early.",
      },
      {
        title: "Long-tail engine relevance",
        description: "Targets a narrower but still high-intent search audience.",
      },
    ],
    schemaExample: {
      title: "SQLite project tracker schema",
      sql: `CREATE TABLE projects (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL
);

CREATE TABLE tasks (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  project_id INTEGER REFERENCES projects(id),
  title TEXT NOT NULL,
  status TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "SQLite database designer",
      "A SQLite database designer helps you create a cleaner relational structure for local or embedded applications before the schema evolves into something harder to refactor.",
      "Manual SQLite SQL is fine for small apps, but a design tool is better when you want to keep the data model organized as the product expands.",
    ),
    relatedToolSlugs: [
      "sqlite-schema-generator",
      "online-database-designer",
      "database-design-tool",
      "sql-table-designer",
    ],
    relatedTemplateSlugs: [
      "booking-system-database-schema",
      "school-management-database-schema",
      "social-media-database-schema",
    ],
  }),
  tool({
    slug: "online-database-designer",
    title: "Online Database Designer | Free Web-Based Tool | drawDB",
    shortTitle: "Online Database Designer",
    h1: "Use an online database designer to plan schemas without leaving the browser.",
    description:
      "Design databases online with browser-based table planning, relationship mapping, and SQL-oriented structure review.",
    keywords: [
      "online database designer",
      "web database designer",
      "online schema designer",
      "database modeler online",
    ],
    intro:
      "This online database designer targets users who want fast browser-based schema design without switching into local tooling before the data model is ready.",
    category: "core",
    categoryLabel: "Core Tools",
    database: "Multi-database",
    heroEyebrow: "Browser-Based Design Tool",
    heroCtaLabel: "Explore Design Tools",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Design from anywhere without installing local desktop modeling software.",
      "Use the browser to align product, engineering, and data discussions around one model.",
      "Capture searchers looking specifically for online, accessible database planning.",
    ],
    steps: [
      {
        title: "Outline the model in the browser",
        description:
          "Keep the earliest design pass accessible so product and engineering can review the same structure quickly.",
      },
      {
        title: "Refine tables and relationships collaboratively",
        description:
          "An online workflow is valuable when multiple people need to understand schema shape before implementation.",
      },
      {
        title: "Move into engine-specific structure later",
        description:
          "Once the model is stable, adapt it into PostgreSQL, MySQL, SQLite, or another database stack.",
      },
    ],
    features: [
      {
        title: "Browser-first workflow",
        description: "No local setup is required to communicate the data model clearly.",
      },
      {
        title: "Great for early collaboration",
        description: "Useful when teams need a lightweight planning surface before writing code.",
      },
      {
        title: "Engine-agnostic design layer",
        description: "Start broad, then narrow into engine-specific workflows later.",
      },
      {
        title: "High-intent keyword alignment",
        description: "Targets users explicitly searching for web-based database design tools.",
      },
    ],
    schemaExample: {
      title: "Online task app schema example",
      sql: `CREATE TABLE workspaces (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE tasks (
  id BIGSERIAL PRIMARY KEY,
  workspace_id BIGINT NOT NULL REFERENCES workspaces(id),
  title TEXT NOT NULL,
  priority TEXT
);`,
    },
    faqs: buildFaqs(
      "online database designer",
      "An online database designer lets you plan tables and relationships in the browser, which is ideal for fast iteration and early-stage collaboration.",
      "Local SQL tools are great for implementation, but an online designer is often better for discussing schema shape before it is locked into code or migrations.",
    ),
    relatedToolSlugs: [
      "database-design-tool",
      "database-diagram-maker",
      "database-schema-generator",
      "er-diagram-tool",
      "sql-table-designer",
      "database-relationship-diagram-tool",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "saas-database-schema",
      "booking-system-database-schema",
    ],
  }),
  tool({
    slug: "database-diagram-maker",
    title: "Database Diagram Maker | Free Online Tool | drawDB",
    shortTitle: "Database Diagram Maker",
    h1: "Create a database diagram online for clearer schema structure and review.",
    description:
      "Build database diagrams that explain tables, relationships, and design intent before the schema is finalized.",
    keywords: [
      "database diagram maker",
      "database diagram tool",
      "database schema diagram",
      "diagram database online",
    ],
    intro:
      "This database diagram maker is focused on teams that need an understandable visual model of their database before it becomes application logic.",
    category: "diagram",
    categoryLabel: "Diagram Tools",
    database: "Multi-database",
    heroEyebrow: "Diagram Tool",
    heroCtaLabel: "Explore Diagram Tools",
    heroSecondaryLabel: "Browse Schema Templates",
    benefits: [
      "Turn complex relational structure into something easier to review with a team.",
      "Use diagrams to align product requirements with technical implementation.",
      "Capture visual-intent traffic from users who want diagrams more than raw SQL.",
    ],
    steps: [
      {
        title: "Draw the tables that matter",
        description:
          "Start with the core entities that explain the system, not every possible supporting table.",
      },
      {
        title: "Map the critical relationships",
        description:
          "Show how the data actually flows so readers can understand ownership and dependencies quickly.",
      },
      {
        title: "Use the diagram to pressure-test the design",
        description:
          "A good diagram reveals duplicated concepts, unclear boundaries, and awkward join paths early.",
      },
    ],
    features: [
      {
        title: "Communication-first output",
        description: "Great for reviews, onboarding, planning sessions, and architecture documentation.",
      },
      {
        title: "Visual relationship emphasis",
        description: "Focuses more on explainability than pure SQL syntax generation.",
      },
      {
        title: "Broad use-case coverage",
        description: "Works for product schemas, analytics models, and internal business systems.",
      },
      {
        title: "Strong internal linking role",
        description: "Connects naturally to ER diagram, relationship diagram, and schema generator pages.",
      },
    ],
    schemaExample: {
      title: "Diagram-friendly project schema",
      sql: `CREATE TABLE clients (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE engagements (
  id BIGSERIAL PRIMARY KEY,
  client_id BIGINT NOT NULL REFERENCES clients(id),
  name TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "database diagram maker",
      "A database diagram maker helps you visualize tables and relationships so the structure is easier to review, explain, and evolve.",
      "SQL shows implementation, while a diagram highlights architecture and relationships in a way that is much faster for teams to understand.",
    ),
    relatedToolSlugs: [
      "er-diagram-tool",
      "database-relationship-diagram-tool",
      "sql-diagram-generator",
      "online-database-designer",
      "database-design-tool",
    ],
    relatedTemplateSlugs: [
      "social-media-database-schema",
      "school-management-database-schema",
      "hospital-management-database-schema",
    ],
  }),
  tool({
    slug: "er-diagram-tool",
    title: "ER Diagram Tool | Free Online Tool | drawDB",
    shortTitle: "ER Diagram Tool",
    h1: "Use an ER diagram tool to plan entities and relationships more clearly.",
    description:
      "Model entities and relationships online with an ER diagram tool built for schema planning and database design review.",
    keywords: [
      "er diagram tool",
      "entity relationship diagram tool",
      "erd tool online",
      "entity relationship designer",
    ],
    intro:
      "This ER diagram tool targets users who specifically want entity-relationship modeling rather than a generic database page or SQL-only workflow.",
    category: "diagram",
    categoryLabel: "Diagram Tools",
    database: "Multi-database",
    heroEyebrow: "ERD Workflow",
    heroCtaLabel: "Explore ERD Tools",
    heroSecondaryLabel: "Browse Entity Templates",
    benefits: [
      "Keep entities and relationships at the center of the design process.",
      "Clarify join logic before implementation, analytics, and reporting depend on it.",
      "Meet high-intent ERD search demand with a clear, dedicated page.",
    ],
    steps: [
      {
        title: "Define the entity vocabulary",
        description:
          "Agree on the main nouns in the system first so the data model reflects the product domain.",
      },
      {
        title: "Map cardinality and ownership",
        description:
          "Use the ERD to show what belongs to what, what can repeat, and where the boundaries really are.",
      },
      {
        title: "Turn the ERD into a practical schema",
        description:
          "Once the entity model is sound, convert it into the final database-specific structure and SQL.",
      },
    ],
    features: [
      {
        title: "Entity-first design",
        description: "Ideal for early-stage modeling and architectural review conversations.",
      },
      {
        title: "Clear relationship mapping",
        description: "Useful when join complexity or data ownership is the real design challenge.",
      },
      {
        title: "Broad educational value",
        description: "Attracts users who are still evaluating the best structure for a database design problem.",
      },
      {
        title: "Strong cluster hub",
        description: "Works as a central internal-link node across diagram, design, and schema pages.",
      },
    ],
    schemaExample: {
      title: "ERD membership example",
      sql: `CREATE TABLE authors (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  author_id BIGINT NOT NULL REFERENCES authors(id),
  title TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "ER diagram tool",
      "An ER diagram tool helps you think in terms of entities, ownership, and relationships before you lock the design into SQL or application code.",
      "Raw SQL is great for implementation, but an ERD is better when you need to validate the conceptual model or explain it to others.",
    ),
    relatedToolSlugs: [
      "database-diagram-maker",
      "database-relationship-diagram-tool",
      "online-database-designer",
      "database-design-tool",
      "postgresql-erd-tool",
      "mysql-er-diagram",
    ],
    relatedTemplateSlugs: [
      "crm-database-schema",
      "ecommerce-database-schema",
      "social-media-database-schema",
    ],
  }),
  tool({
    slug: "sql-table-designer",
    title: "SQL Table Designer | Free Online Tool | drawDB",
    shortTitle: "SQL Table Designer",
    h1: "Design SQL tables online before you commit them to production schema.",
    description:
      "Plan SQL tables, columns, keys, and references with a cleaner workflow for relational implementation.",
    keywords: [
      "sql table designer",
      "sql table design tool",
      "table designer sql",
      "sql table generator",
    ],
    intro:
      "This SQL table designer is intended for users who are focused on column-level table modeling, constraints, and SQL-ready structure rather than only high-level diagrams.",
    category: "sql",
    categoryLabel: "SQL Tools",
    database: "SQL",
    heroEyebrow: "Table Design Tool",
    heroCtaLabel: "Explore SQL Tools",
    heroSecondaryLabel: "Browse SQL-Friendly Templates",
    benefits: [
      "Design table-level detail before schema changes become migration churn.",
      "Validate columns, nullability, keys, and references in one place.",
      "Match search intent from users looking specifically for SQL table design help.",
    ],
    steps: [
      {
        title: "Model one table at a time",
        description:
          "Use the design stage to clarify field purpose, type choice, and key structure before implementation.",
      },
      {
        title: "Check relationships between tables",
        description:
          "Even table-focused pages should confirm how references affect joins and data integrity.",
      },
      {
        title: "Promote stable structures into SQL",
        description:
          "After the design is sound, translate it into engine-specific DDL or migration files.",
      },
    ],
    features: [
      {
        title: "Column-level focus",
        description: "Useful when the challenge is field design rather than high-level system architecture.",
      },
      {
        title: "Constraint awareness",
        description: "Make PK, FK, uniqueness, and required fields explicit before coding.",
      },
      {
        title: "Great for schema review",
        description: "Helps teams reason about table detail without diving straight into long SQL files.",
      },
      {
        title: "Search-intent specificity",
        description: "Targets users who know they want table design, not a generic ERD page.",
      },
    ],
    schemaExample: {
      title: "SQL table design example",
      sql: `CREATE TABLE invoices (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL,
  total_cents INTEGER NOT NULL,
  due_date DATE,
  status TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "SQL table designer",
      "A SQL table designer helps you think through columns, keys, required fields, and references before the table becomes part of a production schema.",
      "Manual SQL is still necessary, but a table designer is better for preventing column-level mistakes and unclear table responsibilities.",
    ),
    relatedToolSlugs: [
      "sql-schema-generator",
      "ddl-generator",
      "database-schema-generator",
      "mysql-schema-designer",
      "sqlite-database-designer",
    ],
    relatedTemplateSlugs: [
      "payroll-database-schema",
      "hr-management-database-schema",
      "booking-system-database-schema",
    ],
  }),
  tool({
    slug: "database-design-tool",
    title: "Database Design Tool | Free Online Tool | drawDB",
    shortTitle: "Database Design Tool",
    h1: "Use a database design tool to plan structure before schema decisions harden.",
    description:
      "Design relational databases with a structured workflow for entities, tables, constraints, and implementation planning.",
    keywords: [
      "database design tool",
      "database model design tool",
      "database planner",
      "database modeling tool online",
    ],
    intro:
      "This database design tool page captures broader design intent from users who want help shaping a database correctly before choosing the exact implementation path.",
    category: "core",
    categoryLabel: "Core Tools",
    database: "Multi-database",
    heroEyebrow: "Design Workflow",
    heroCtaLabel: "Explore Design Tools",
    heroSecondaryLabel: "Browse Schema Templates",
    benefits: [
      "Bridge product requirements into a cleaner relational structure.",
      "Catch ownership and normalization issues earlier in the design process.",
      "Serve as a broad-intent hub page across schema, ERD, and SQL tool clusters.",
    ],
    steps: [
      {
        title: "Start with the domain model",
        description:
          "Use business concepts to drive the structure so the schema maps to actual application behavior.",
      },
      {
        title: "Turn concepts into tables and relationships",
        description:
          "Translate the domain model into entities, keys, references, and boundaries that can scale.",
      },
      {
        title: "Stress-test the design before implementation",
        description:
          "Use the design layer to find duplicated concepts, unclear ownership, and avoidable complexity.",
      },
    ],
    features: [
      {
        title: "Broad schema planning support",
        description: "Useful across business apps, consumer products, internal tools, and analytics models.",
      },
      {
        title: "Good top-of-cluster page",
        description: "Works well as a more general search landing page than a specific engine page.",
      },
      {
        title: "Flexible internal-link hub",
        description: "Connects naturally to ERD, SQL, diagram, and generator pages.",
      },
      {
        title: "High relevance for early-stage users",
        description: "Targets searchers who know they need help but have not yet chosen a specific workflow.",
      },
    ],
    schemaExample: {
      title: "General database design example",
      sql: `CREATE TABLE organizations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE projects (
  id BIGSERIAL PRIMARY KEY,
  organization_id BIGINT NOT NULL REFERENCES organizations(id),
  title TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "database design tool",
      "A database design tool helps you move from vague requirements into a clear relational model with entities, keys, and relationships that can actually scale.",
      "Writing SQL by hand is implementation. A design tool is more useful when you are still making structural decisions or aligning a team on the model.",
    ),
    relatedToolSlugs: [
      "online-database-designer",
      "database-schema-generator",
      "er-diagram-tool",
      "database-diagram-maker",
      "database-normalization-tool",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "hospital-management-database-schema",
    ],
  }),
  tool({
    slug: "mysql-schema-designer",
    title: "MySQL Schema Designer | Free Online Tool | drawDB",
    shortTitle: "MySQL Schema Designer",
    h1: "Design MySQL schema structure with a workflow built for relational clarity.",
    description:
      "Use a MySQL schema designer to plan table structure, references, and implementation-ready relational models.",
    keywords: [
      "mysql schema designer",
      "mysql schema design tool",
      "mysql schema builder",
      "mysql database designer",
    ],
    intro:
      "This MySQL schema designer is aimed at users who want more table-structure detail than a basic ERD page while still staying design-first.",
    category: "engine",
    categoryLabel: "Database Engines",
    database: "MySQL",
    heroEyebrow: "MySQL Schema Tool",
    heroCtaLabel: "Explore MySQL Tools",
    heroSecondaryLabel: "Browse MySQL-Friendly Templates",
    benefits: [
      "Focus on MySQL-friendly schema structure before writing DDL.",
      "Validate keys, relationships, and naming with a design layer instead of only SQL.",
      "Capture users searching specifically for MySQL schema design rather than generic database help.",
    ],
    steps: [
      {
        title: "Plan the main tables in MySQL terms",
        description:
          "Work through table boundaries, foreign keys, and likely join patterns before implementation.",
      },
      {
        title: "Review indexing and constraint assumptions",
        description:
          "Use the design phase to think about required fields, uniqueness, and relational correctness.",
      },
      {
        title: "Finalize the model into DDL",
        description:
          "Once stable, adapt the structure into the MySQL syntax and migration flow you actually use.",
      },
    ],
    features: [
      {
        title: "MySQL-specific intent",
        description: "Clearer fit for engine-aware searches than a generic SQL or ERD page.",
      },
      {
        title: "Schema-level detail",
        description: "Emphasizes table structure and implementation readiness more than conceptual diagramming.",
      },
      {
        title: "Join and reference validation",
        description: "Useful for spotting design flaws before query complexity grows.",
      },
      {
        title: "Supports commerce and operations use cases",
        description: "Pairs well with ecommerce and inventory templates where MySQL is common.",
      },
    ],
    schemaExample: {
      title: "MySQL schema design example",
      sql: `CREATE TABLE suppliers (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);

CREATE TABLE purchase_orders (
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  supplier_id BIGINT NOT NULL,
  status VARCHAR(50) NOT NULL,
  CONSTRAINT fk_po_supplier FOREIGN KEY (supplier_id) REFERENCES suppliers(id)
);`,
    },
    faqs: buildFaqs(
      "MySQL schema designer",
      "A MySQL schema designer helps you define a cleaner relational structure for MySQL before the model becomes part of migrations or production code.",
      "Handwritten MySQL DDL is still necessary, but a schema designer is better when you want to validate the model before the implementation gets locked in.",
    ),
    relatedToolSlugs: [
      "mysql-er-diagram",
      "sql-table-designer",
      "sql-schema-generator",
      "database-relationship-diagram-tool",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "inventory-management-database-schema",
      "booking-system-database-schema",
    ],
  }),
  tool({
    slug: "postgresql-erd-tool",
    title: "Free Online PostgreSQL ERD Tool and SQL Generator | drawDB",
    shortTitle: "PostgreSQL ERD Tool",
    h1: "Free online PostgreSQL ERD tool for schema planning and SQL-first design.",
    description:
      "Design PostgreSQL schemas online with a visual ERD tool, relationship mapping, and SQL-first structure planning for modern apps.",
    keywords: [
      "postgresql erd tool",
      "postgres erd tool",
      "postgres relationship diagram",
      "postgresql schema diagram",
    ],
    intro:
      "Use drawDB to design PostgreSQL databases with a visual entity relationship workflow, structured schema planning, and production-friendly naming conventions.",
    category: "engine",
    categoryLabel: "Database Engines",
    database: "PostgreSQL",
    heroEyebrow: "Database Engine Tool",
    heroCtaLabel: "Explore Tool Library",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Map entities, primary keys, and foreign keys before writing SQL migrations.",
      "Create cleaner Postgres schemas for ecommerce, SaaS, CRM, and analytics products.",
      "Use the page as a search-optimized entry point into the future drawDB editor.",
    ],
    steps: [
      {
        title: "Outline entities and relationships",
        description:
          "Start by listing core PostgreSQL tables, ownership boundaries, and how records connect across your app.",
      },
      {
        title: "Validate naming and key structure",
        description:
          "Check primary keys, foreign keys, and audit columns early so your schema stays consistent as it grows.",
      },
      {
        title: "Refine for production workflows",
        description:
          "Model indexes, constraints, and normalization tradeoffs before turning the diagram into SQL or migrations.",
      },
    ],
    features: [
      {
        title: "Visual relationship mapping",
        description: "Clarify one-to-many and many-to-many relationships before they become migration debt.",
      },
      {
        title: "PostgreSQL-oriented structure",
        description: "Keep schemas aligned with common Postgres conventions for ids, timestamps, and references.",
      },
      {
        title: "Team-readable diagrams",
        description: "Use the ERD as a shared artifact for engineers, PMs, and stakeholders reviewing data models.",
      },
      {
        title: "SEO-ready landing framework",
        description: "This page doubles as the reusable template for future database engine and keyword pages.",
      },
    ],
    schemaExample: {
      title: "PostgreSQL ecommerce schema example",
      sql: `CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  sku TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  price_cents INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  total_cents INTEGER NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);`,
    },
    faqs: buildFaqs(
      "PostgreSQL ERD tool",
      "A PostgreSQL ERD tool helps you plan tables, keys, and relationships visually before or alongside writing SQL migrations.",
      "Visual planning helps catch naming inconsistencies, missing relationships, and normalization issues earlier than going straight into Postgres DDL.",
    ),
    relatedToolSlugs: [
      "postgresql-schema-generator",
      "er-diagram-tool",
      "database-relationship-diagram-tool",
      "database-normalization-tool",
      "sql-diagram-generator",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "crm-database-schema",
      "saas-database-schema",
    ],
  }),
  tool({
    slug: "sqlite-schema-generator",
    title: "SQLite Schema Generator | Free Online Tool | drawDB",
    shortTitle: "SQLite Schema Generator",
    h1: "Generate SQLite schema structure with a simple design-first workflow.",
    description:
      "Plan SQLite tables, relationships, and practical schema structure for local apps, embedded tools, and prototypes.",
    keywords: [
      "sqlite schema generator",
      "sqlite schema builder",
      "sqlite database generator",
      "sqlite schema design",
    ],
    intro:
      "This SQLite schema generator is best for builders who want enough structure to avoid schema chaos without overcomplicating lightweight database workflows.",
    category: "engine",
    categoryLabel: "Database Engines",
    database: "SQLite",
    heroEyebrow: "SQLite Schema Tool",
    heroCtaLabel: "Explore SQLite Tools",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Keep small SQLite projects organized before the schema sprawls.",
      "Improve design quality for local tools, prototypes, and embedded products.",
      "Capture long-tail SQLite traffic with stronger topical relevance.",
    ],
    steps: [
      {
        title: "Plan the minimum viable model",
        description:
          "Focus on the smallest stable set of tables that explain the current application workflow.",
      },
      {
        title: "Avoid hidden relationship drift",
        description:
          "Even simple SQLite apps benefit from explicit reference planning and consistent naming.",
      },
      {
        title: "Refine only when complexity proves it is needed",
        description:
          "A generator workflow helps you evolve the design intentionally instead of accumulating table debt.",
      },
    ],
    features: [
      {
        title: "Lightweight relational planning",
        description: "Ideal for developers who need structure without heavyweight modeling processes.",
      },
      {
        title: "Prototype-to-product support",
        description: "Useful when a once-simple SQLite app starts to grow beyond its original scope.",
      },
      {
        title: "Engine-specific landing page",
        description: "Captures targeted SQLite intent more effectively than generic schema content.",
      },
      {
        title: "Practical local-app fit",
        description: "Pairs well with internal tools, desktop software, and side projects.",
      },
    ],
    schemaExample: {
      title: "SQLite journal app schema",
      sql: `CREATE TABLE journals (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  title TEXT NOT NULL
);

CREATE TABLE entries (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  journal_id INTEGER REFERENCES journals(id),
  content TEXT NOT NULL,
  created_at TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "SQLite schema generator",
      "A SQLite schema generator helps you create a cleaner relational model for lightweight apps before the schema becomes difficult to maintain.",
      "SQLite SQL is simple, but a generator workflow is useful when you still want consistency, explicit relationships, and fewer structural mistakes.",
    ),
    relatedToolSlugs: [
      "sqlite-database-designer",
      "database-schema-generator",
      "sql-table-designer",
      "database-normalization-tool",
    ],
    relatedTemplateSlugs: [
      "booking-system-database-schema",
      "social-media-database-schema",
      "school-management-database-schema",
    ],
  }),
  tool({
    slug: "sql-diagram-generator",
    title: "SQL Diagram Generator | Free Online Tool | drawDB",
    shortTitle: "SQL Diagram Generator",
    h1: "Generate SQL diagrams from relational structure and schema planning intent.",
    description:
      "Use a SQL diagram generator to turn table structure and references into a clearer visual design workflow.",
    keywords: [
      "sql diagram generator",
      "sql schema diagram",
      "sql relationship diagram",
      "sql diagram tool",
    ],
    intro:
      "This SQL diagram generator targets users who want a diagram connected to SQL structure rather than a purely conceptual ERD page.",
    category: "sql",
    categoryLabel: "SQL Tools",
    database: "SQL",
    heroEyebrow: "SQL Diagram Tool",
    heroCtaLabel: "Explore SQL Tools",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Make SQL structure easier to understand and review visually.",
      "Use diagrams to communicate table relationships before final implementation.",
      "Capture searchers who want SQL-specific diagrams rather than a generic database graphic.",
    ],
    steps: [
      {
        title: "Define the tables from a SQL perspective",
        description:
          "Focus on the final relational structure you expect to implement, not only abstract entities.",
      },
      {
        title: "Diagram the references and joins",
        description:
          "Use the visual layer to expose how tables connect and where implementation assumptions may be weak.",
      },
      {
        title: "Refine the design before DDL hardens it",
        description:
          "A diagram generator is especially useful when the team needs to validate SQL structure before migrations land.",
      },
    ],
    features: [
      {
        title: "SQL-aware diagramming",
        description: "Better aligned with implementation intent than a broad conceptual-only ERD page.",
      },
      {
        title: "Review-friendly output",
        description: "Useful for engineering reviews, docs, and architecture communication.",
      },
      {
        title: "Connects design and DDL",
        description: "Helps teams move from relational thinking into practical SQL structure.",
      },
      {
        title: "Great long-tail fit",
        description: "Targets users who already know they want SQL-connected diagram workflows.",
      },
    ],
    schemaExample: {
      title: "SQL diagram example",
      sql: `CREATE TABLE subscriptions (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL,
  plan_code TEXT NOT NULL
);

CREATE TABLE invoices (
  id BIGSERIAL PRIMARY KEY,
  subscription_id BIGINT NOT NULL REFERENCES subscriptions(id),
  total_cents INTEGER NOT NULL
);`,
    },
    faqs: buildFaqs(
      "SQL diagram generator",
      "A SQL diagram generator helps you visualize relational structure in a way that stays closer to actual SQL implementation patterns.",
      "A conceptual ERD is useful early, but a SQL diagram generator is better when you want the diagram to reflect implementation-oriented table structure.",
    ),
    relatedToolSlugs: [
      "sql-schema-generator",
      "database-diagram-maker",
      "database-relationship-diagram-tool",
      "postgresql-erd-tool",
      "ddl-generator",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "hospital-management-database-schema",
    ],
  }),
  tool({
    slug: "database-relationship-diagram-tool",
    title: "Database Relationship Diagram Tool | Free Online Tool | drawDB",
    shortTitle: "Database Relationship Diagram Tool",
    h1: "Map database relationships visually before schema complexity becomes a problem.",
    description:
      "Use a database relationship diagram tool to clarify joins, ownership, and foreign key structure across your schema.",
    keywords: [
      "database relationship diagram tool",
      "relationship diagram database",
      "database relationship mapper",
      "fk diagram tool",
    ],
    intro:
      "This page targets users whose real challenge is understanding and validating relationships, not simply creating tables or writing SQL syntax.",
    category: "diagram",
    categoryLabel: "Diagram Tools",
    database: "Multi-database",
    heroEyebrow: "Relationship Mapping Tool",
    heroCtaLabel: "Explore Diagram Tools",
    heroSecondaryLabel: "Browse Related Templates",
    benefits: [
      "Reveal ownership and reference issues before they are buried inside code or migrations.",
      "Make join complexity easier to reason about during design reviews.",
      "Serve as a focused landing page for relationship-specific search intent.",
    ],
    steps: [
      {
        title: "List the tables with real dependencies",
        description:
          "Focus first on the records that depend on each other rather than every field in the system.",
      },
      {
        title: "Map the critical foreign key flows",
        description:
          "Use the relationship diagram to validate one-to-many, many-to-many, and ownership boundaries clearly.",
      },
      {
        title: "Use the map to simplify the final schema",
        description:
          "A good relationship diagram often shows where the model can be normalized, split, or clarified before implementation.",
      },
    ],
    features: [
      {
        title: "Join-path clarity",
        description: "Helpful when the real problem is relationship complexity rather than pure schema generation.",
      },
      {
        title: "Foreign key review",
        description: "Use it to validate reference direction and ownership before coding.",
      },
      {
        title: "Cross-team explainability",
        description: "Great for explaining data dependencies to people outside the database layer.",
      },
      {
        title: "Search-intent precision",
        description: "Targets users explicitly looking for relationship-focused visual tooling.",
      },
    ],
    schemaExample: {
      title: "Relationship-heavy support schema",
      sql: `CREATE TABLE tickets (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL
);

CREATE TABLE comments (
  id BIGSERIAL PRIMARY KEY,
  ticket_id BIGINT NOT NULL REFERENCES tickets(id),
  author_id BIGINT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "database relationship diagram tool",
      "A database relationship diagram tool helps you validate how records connect, which is often the hardest part of relational schema design.",
      "DDL defines references, but a relationship diagram makes those dependencies much easier to inspect, explain, and improve before implementation.",
    ),
    relatedToolSlugs: [
      "er-diagram-tool",
      "database-diagram-maker",
      "sql-diagram-generator",
      "mysql-er-diagram",
      "postgresql-erd-tool",
    ],
    relatedTemplateSlugs: [
      "social-media-database-schema",
      "crm-database-schema",
      "hospital-management-database-schema",
    ],
  }),
  tool({
    slug: "prisma-schema-generator",
    title: "Prisma Schema Generator | Free Online Tool | drawDB",
    shortTitle: "Prisma Schema Generator",
    h1: "Plan Prisma schema structure from a cleaner relational design workflow.",
    description:
      "Use a Prisma schema generator page to think through models, relations, and implementation structure before writing the final Prisma schema.",
    keywords: [
      "prisma schema generator",
      "prisma schema design",
      "prisma model generator",
      "prisma database schema",
    ],
    intro:
      "This Prisma schema generator targets developers working in Prisma-based stacks who want to validate models and relationships before codifying them.",
    category: "framework",
    categoryLabel: "Framework Tools",
    database: "Prisma",
    heroEyebrow: "Framework Schema Tool",
    heroCtaLabel: "Explore Developer Tools",
    heroSecondaryLabel: "Browse SaaS Templates",
    benefits: [
      "Design models and relations before they become Prisma schema files and migrations.",
      "Keep the relational layer understandable even when the ORM hides some SQL detail.",
      "Capture framework-specific intent from users building on Prisma workflows.",
    ],
    steps: [
      {
        title: "Model the entities independently of ORM syntax",
        description:
          "Start with the relational structure so the Prisma model reflects a solid data design rather than just framework conventions.",
      },
      {
        title: "Check how relations map back to the database",
        description:
          "Even with an ORM, clear relationship and ownership thinking prevents schema confusion later.",
      },
      {
        title: "Translate the stable model into Prisma schema",
        description:
          "Once the design holds up, adapt it into Prisma models, relations, and migrations.",
      },
    ],
    features: [
      {
        title: "Framework-aware search intent",
        description: "Targets Prisma users directly instead of hoping they land on generic SQL pages.",
      },
      {
        title: "ORM-to-database clarity",
        description: "Useful when teams need to think beyond models and consider actual relational structure.",
      },
      {
        title: "SaaS and app fit",
        description: "Pairs naturally with SaaS, CRM, and account-driven application templates.",
      },
      {
        title: "Implementation bridge",
        description: "Helps move from product requirements into ORM-ready database structure.",
      },
    ],
    schemaExample: {
      title: "Prisma-style relational example",
      sql: `CREATE TABLE organizations (
  id BIGSERIAL PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL
);

CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  organization_id BIGINT REFERENCES organizations(id),
  email TEXT UNIQUE NOT NULL
);`,
    },
    faqs: buildFaqs(
      "Prisma schema generator",
      "A Prisma schema generator helps you think through relational models and references before they become Prisma schema definitions and migrations.",
      "Prisma syntax is convenient, but a design generator is useful because it keeps the underlying database model visible and reviewable.",
    ),
    relatedToolSlugs: [
      "supabase-schema-designer",
      "database-schema-generator",
      "sql-schema-generator",
      "postgresql-schema-generator",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "social-media-database-schema",
    ],
  }),
  tool({
    slug: "supabase-schema-designer",
    title: "Supabase Schema Designer | Free Online Tool | drawDB",
    shortTitle: "Supabase Schema Designer",
    h1: "Design Supabase schema structure with a clearer Postgres-oriented workflow.",
    description:
      "Plan Supabase schemas with a design-first approach to tables, relationships, auth-linked data, and SQL structure.",
    keywords: [
      "supabase schema designer",
      "supabase database design",
      "supabase schema generator",
      "supabase table designer",
    ],
    intro:
      "This Supabase schema designer is aimed at teams building quickly on Supabase who still want a coherent relational model before implementation expands.",
    category: "framework",
    categoryLabel: "Framework Tools",
    database: "Supabase",
    heroEyebrow: "Supabase Workflow",
    heroCtaLabel: "Explore Supabase-Friendly Tools",
    heroSecondaryLabel: "Browse Product Templates",
    benefits: [
      "Keep Supabase projects from drifting into ad hoc schema design too early.",
      "Plan auth-linked and application data with stronger relationship clarity.",
      "Target users looking specifically for Supabase schema help rather than generic Postgres advice.",
    ],
    steps: [
      {
        title: "Separate auth-related data from app data",
        description:
          "Model your product entities clearly so user identity and business data stay understandable as the product grows.",
      },
      {
        title: "Use Postgres thinking for table design",
        description:
          "Supabase runs on Postgres, so strong relational planning still matters for maintainable long-term structure.",
      },
      {
        title: "Translate stable design into Supabase implementation",
        description:
          "Once the model is clear, turn it into migrations, policies, and the actual schema in your project.",
      },
    ],
    features: [
      {
        title: "Supabase-specific relevance",
        description: "Fits teams that already know the platform they want to build on.",
      },
      {
        title: "Postgres-backed structure",
        description: "Encourages stronger relational habits even in rapid product builds.",
      },
      {
        title: "Great for SaaS and product apps",
        description: "Pairs well with account, billing, and content-driven application templates.",
      },
      {
        title: "Framework-to-schema bridge",
        description: "Makes it easier to move from app requirements into a maintainable Supabase data model.",
      },
    ],
    schemaExample: {
      title: "Supabase-style account schema",
      sql: `CREATE TABLE profiles (
  id UUID PRIMARY KEY,
  display_name TEXT
);

CREATE TABLE workspaces (
  id BIGSERIAL PRIMARY KEY,
  owner_profile_id UUID REFERENCES profiles(id),
  name TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "Supabase schema designer",
      "A Supabase schema designer helps you plan application tables, relationships, and auth-adjacent data before the implementation becomes difficult to evolve.",
      "Supabase makes building quickly easier, but a schema designer is still useful because rapid shipping often leads to weak relational structure without deliberate planning.",
    ),
    relatedToolSlugs: [
      "postgresql-schema-generator",
      "prisma-schema-generator",
      "database-schema-generator",
      "postgresql-erd-tool",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "social-media-database-schema",
      "crm-database-schema",
    ],
  }),
  tool({
    slug: "mongodb-schema-design-tool",
    title: "MongoDB Schema Design Tool | Free Planning Tool | drawDB",
    shortTitle: "MongoDB Schema Design Tool",
    h1: "Use a MongoDB schema design tool to plan document structure more deliberately.",
    description:
      "Plan collections, embedded documents, references, and query-oriented structure with a MongoDB schema design workflow.",
    keywords: [
      "mongodb schema design tool",
      "mongodb schema designer",
      "mongodb data model tool",
      "mongodb document schema design",
    ],
    intro:
      "This MongoDB schema design tool targets developers who still need modeling discipline even when they are working with documents instead of purely relational tables.",
    category: "database-modeling",
    categoryLabel: "Database Models",
    database: "MongoDB",
    heroEyebrow: "Document Modeling Tool",
    heroCtaLabel: "Explore Data Modeling Tools",
    heroSecondaryLabel: "Browse App Templates",
    benefits: [
      "Think through embedding vs referencing before the model becomes difficult to change.",
      "Keep document design aligned with read patterns and application boundaries.",
      "Capture a different data-modeling audience without needing the real editor yet.",
    ],
    steps: [
      {
        title: "Start from access patterns",
        description:
          "MongoDB modeling works best when you know which data is read together and which boundaries matter for the application.",
      },
      {
        title: "Choose where to embed and where to reference",
        description:
          "Use the design phase to prevent over-embedding, duplicated documents, or brittle reference chains.",
      },
      {
        title: "Pressure-test the model against growth",
        description:
          "A schema design tool is useful because document models still need structure, especially as queries and features expand.",
      },
    ],
    features: [
      {
        title: "Document-model relevance",
        description: "Addresses schema planning for a non-relational workflow without pretending the design can stay ad hoc.",
      },
      {
        title: "Query-oriented thinking",
        description: "Useful when collection design depends on read patterns and denormalization choices.",
      },
      {
        title: "Broader acquisition surface",
        description: "Extends the site beyond only SQL and relational database search traffic.",
      },
      {
        title: "Still structurally disciplined",
        description: "Keeps design quality high even for teams not using relational engines.",
      },
    ],
    schemaExample: {
      title: "MongoDB-style modeling example",
      sql: `-- Example conceptual collections:
-- users
-- posts
-- comments
-- notifications
-- In a document workflow, evaluate which data should embed and which should reference.`,
    },
    faqs: buildFaqs(
      "MongoDB schema design tool",
      "A MongoDB schema design tool helps you decide how collections, embedded documents, and references should be structured before implementation gets messy.",
      "MongoDB is flexible, but that flexibility is exactly why deliberate design matters. A planning tool helps avoid document sprawl and inconsistent collection boundaries.",
    ),
    relatedToolSlugs: [
      "database-design-tool",
      "database-schema-generator",
      "database-normalization-tool",
      "online-database-designer",
    ],
    relatedTemplateSlugs: [
      "social-media-database-schema",
      "crm-database-schema",
      "booking-system-database-schema",
    ],
  }),
  tool({
    slug: "database-normalization-tool",
    title: "Database Normalization Tool | Free Planning Tool | drawDB",
    shortTitle: "Database Normalization Tool",
    h1: "Use a database normalization tool to reduce duplicated structure and schema drift.",
    description:
      "Evaluate relational structure with a database normalization workflow for cleaner tables, references, and long-term maintainability.",
    keywords: [
      "database normalization tool",
      "database normalization checker",
      "normalize database schema",
      "normalization design tool",
    ],
    intro:
      "This database normalization tool targets users whose schema exists conceptually but still needs refinement to reduce duplication, ambiguity, and join pain later.",
    category: "analysis",
    categoryLabel: "Analysis Tools",
    database: "Relational",
    heroEyebrow: "Schema Quality Tool",
    heroCtaLabel: "Explore Quality Tools",
    heroSecondaryLabel: "Browse Clean Schema Templates",
    benefits: [
      "Catch repeated data, unclear ownership, and overloaded tables before the design hardens.",
      "Improve long-term maintainability, especially for reporting and transactional systems.",
      "Target educational and implementation-oriented normalization search intent together.",
    ],
    steps: [
      {
        title: "Review what each table is responsible for",
        description:
          "Overloaded tables are often the clearest signal that a schema needs normalization work.",
      },
      {
        title: "Check repeated fields and duplicated concepts",
        description:
          "Look for attributes or groups of values that probably belong in their own table or relationship.",
      },
      {
        title: "Balance purity against product reality",
        description:
          "Normalization is about better structure, not blindly maximizing joins where the product does not benefit.",
      },
    ],
    features: [
      {
        title: "Schema quality focus",
        description: "Useful after an initial design exists but before implementation complexity compounds it.",
      },
      {
        title: "Educational + practical fit",
        description: "Appeals both to engineers learning normalization and teams refactoring real schemas.",
      },
      {
        title: "Strong support for template pages",
        description: "Pairs naturally with schema examples that users want to critique or improve.",
      },
      {
        title: "Improves internal linking depth",
        description: "Connects generator, ERD, SQL, and design-intent pages around schema quality.",
      },
    ],
    schemaExample: {
      title: "Normalization improvement example",
      sql: `-- Instead of repeating customer_name on every invoice row,
-- move customer data into a customers table and reference it.

CREATE TABLE customers (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE invoices (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL REFERENCES customers(id)
);`,
    },
    faqs: buildFaqs(
      "database normalization tool",
      "A database normalization tool helps you evaluate whether data is duplicated, tables are overloaded, or ownership boundaries are unclear in a relational schema.",
      "Writing SQL does not guarantee good schema quality. A normalization workflow is useful because it improves the underlying design before poor structure spreads across the codebase.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "sql-schema-generator",
      "database-design-tool",
      "postgresql-schema-generator",
      "sqlite-schema-generator",
      "ddl-generator",
    ],
    relatedTemplateSlugs: [
      "crm-database-schema",
      "hospital-management-database-schema",
      "hr-management-database-schema",
    ],
  }),
  tool({
    slug: "ddl-generator",
    title: "DDL Generator | Free SQL Structure Tool | drawDB",
    shortTitle: "DDL Generator",
    h1: "Generate cleaner DDL from a better database design workflow.",
    description:
      "Use a DDL generator workflow to move from structured schema planning into implementation-ready CREATE TABLE statements.",
    keywords: [
      "ddl generator",
      "sql ddl generator",
      "create table generator",
      "database ddl generator",
    ],
    intro:
      "This DDL generator page is aimed at users who are already close to implementation and want a cleaner bridge from schema planning into final SQL definition language.",
    category: "sql",
    categoryLabel: "SQL Tools",
    database: "SQL",
    heroEyebrow: "Implementation Tool",
    heroCtaLabel: "Explore SQL Tools",
    heroSecondaryLabel: "Browse Templates",
    benefits: [
      "Reduce the gap between design intent and final DDL output.",
      "Use a structured workflow before CREATE TABLE definitions land in migration history.",
      "Capture searchers who are already in implementation mode, not just exploration.",
    ],
    steps: [
      {
        title: "Stabilize the schema design first",
        description:
          "DDL is most useful when the underlying relationships, keys, and table responsibilities have already been reviewed.",
      },
      {
        title: "Map constraints into final definitions",
        description:
          "Use the DDL stage to make required fields, references, and uniqueness explicit and correct.",
      },
      {
        title: "Promote only the clean structure into migrations",
        description:
          "A DDL generator helps ensure you are encoding a good schema instead of prematurely freezing a weak one.",
      },
    ],
    features: [
      {
        title: "Implementation-near intent",
        description: "Targets users who are close to writing production SQL and want a cleaner final step.",
      },
      {
        title: "Constraint-focused workflow",
        description: "Useful for finalizing PKs, FKs, defaults, and required fields cleanly.",
      },
      {
        title: "Pairs with SQL design tools",
        description: "Strong complement to schema generator and table designer pages.",
      },
      {
        title: "High-value search target",
        description: "Good fit for users who are beyond broad research and close to implementation decisions.",
      },
    ],
    schemaExample: {
      title: "DDL output example",
      sql: `CREATE TABLE departments (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL UNIQUE
);

CREATE TABLE employees (
  id BIGSERIAL PRIMARY KEY,
  department_id BIGINT REFERENCES departments(id),
  full_name TEXT NOT NULL
);`,
    },
    faqs: buildFaqs(
      "DDL generator",
      "A DDL generator helps turn a reviewed database structure into concrete CREATE TABLE definitions with clearer constraints and references.",
      "Manual DDL is flexible, but a generator workflow is useful because it reduces translation mistakes between the reviewed schema and the implementation.",
    ),
    relatedToolSlugs: [
      "sql-schema-generator",
      "sql-table-designer",
      "postgresql-schema-generator",
      "database-normalization-tool",
      "database-schema-generator",
    ],
    relatedTemplateSlugs: [
      "payroll-database-schema",
      "saas-database-schema",
      "inventory-management-database-schema",
    ],
  }),
];

export const relatedToolSummaries = toolPages.map((tool) => ({
  slug: tool.slug,
  title: tool.shortTitle,
  description: tool.description,
  href: tool.path,
  category: tool.category,
  database: tool.database,
}));

export function getToolPageBySlug(slug: string) {
  return toolPages.find((page) => page.slug === slug);
}
