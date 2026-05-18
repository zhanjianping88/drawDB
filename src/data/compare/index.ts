export type CompareFaq = {
  question: string;
  answer: string;
};

export type CompareRow = {
  label: string;
  left: string;
  right: string;
};

export type CompareFeature = {
  title: string;
  description: string;
};

export type ComparePage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  path: string;
  keyword: string;
  leftName: string;
  rightName: string;
  intro: string;
  decisionSummary: string;
  table: CompareRow[];
  leftPros: string[];
  leftCons: string[];
  rightPros: string[];
  rightCons: string[];
  useCases: {
    left: string[];
    right: string[];
  };
  featureBreakdown: CompareFeature[];
  faqs: CompareFaq[];
  relatedToolSlugs: string[];
  relatedTemplateSlugs: string[];
};

function compareFaqs(
  subject: string,
  betterAnswer: string,
  chooseAnswer: string,
): CompareFaq[] {
  return [
    {
      question: `Which is better: ${subject}?`,
      answer: betterAnswer,
    },
    {
      question: `How should I choose between ${subject}?`,
      answer: chooseAnswer,
    },
    {
      question: "Why create dedicated comparison pages instead of generic product pages?",
      answer:
        "Comparison pages match high-intent search behavior more closely, answer decision-stage questions directly, and create stronger internal links into tools and templates.",
    },
    {
      question: "Can these comparison pages support future product conversion?",
      answer:
        "Yes. They are designed to attract decision-stage searchers and then route them into tools, templates, and future product workflows under drawDB.",
    },
  ];
}

function page(config: Omit<ComparePage, "path">): ComparePage {
  return {
    ...config,
    path: `/compare/${config.slug}`,
  };
}

export const comparePages: ComparePage[] = [
  page({
    slug: "mysql-vs-postgresql",
    title: "MySQL vs PostgreSQL | Database Comparison | drawDB",
    h1: "MySQL vs PostgreSQL: which database is better for your next application?",
    description:
      "Compare MySQL and PostgreSQL across flexibility, performance patterns, relational features, and long-term schema design tradeoffs.",
    keyword: "mysql vs postgresql",
    leftName: "MySQL",
    rightName: "PostgreSQL",
    intro:
      "This database comparison is for teams choosing between MySQL and PostgreSQL for transactional apps, SaaS products, and long-term schema maintainability.",
    decisionSummary:
      "Choose MySQL when operational simplicity and broad familiarity matter most. Choose PostgreSQL when you want richer relational features, stricter modeling discipline, and more advanced querying flexibility.",
    table: [
      { label: "Best for", left: "Straightforward web app stacks", right: "Feature-rich relational systems" },
      { label: "Schema flexibility", left: "Good", right: "Stronger advanced modeling support" },
      { label: "Query power", left: "Solid", right: "Typically broader" },
      { label: "Team familiarity", left: "Very common", right: "Common but often more technical" },
      { label: "Long-term complexity handling", left: "Good", right: "Often better for richer relational domains" },
    ],
    leftPros: [
      "Common in many web application stacks and hosting environments.",
      "Usually easy for teams to adopt quickly.",
      "Works well for many straightforward transactional products.",
    ],
    leftCons: [
      "May feel more limited for advanced relational or analytical patterns.",
      "Some teams outgrow it when schema complexity increases.",
    ],
    rightPros: [
      "Excellent for advanced relational modeling and richer SQL workflows.",
      "Strong fit for SaaS, analytics, and feature-heavy backend systems.",
      "Often preferred when long-term schema quality matters deeply.",
    ],
    rightCons: [
      "Can feel more complex for teams that only need basic CRUD workloads.",
      "Sometimes more than necessary for simple products.",
    ],
    useCases: {
      left: [
        "Traditional web apps with straightforward CRUD and transactional needs.",
        "Teams prioritizing broad ecosystem familiarity.",
      ],
      right: [
        "SaaS products with richer permissions, billing, and reporting needs.",
        "Products where schema quality, flexibility, and query power matter more.",
      ],
    },
    featureBreakdown: [
      {
        title: "Relational depth",
        description: "PostgreSQL usually wins when the schema needs richer constraints, modeling patterns, and long-term query flexibility.",
      },
      {
        title: "Adoption simplicity",
        description: "MySQL often feels easier for teams that want a familiar default and do not expect heavy relational complexity early.",
      },
      {
        title: "Template relevance",
        description: "Both work with common product schemas, but PostgreSQL often pairs better with SaaS and analytics-oriented designs.",
      },
    ],
    faqs: compareFaqs(
      "MySQL vs PostgreSQL",
      "Neither is universally better. MySQL is often simpler for straightforward app stacks, while PostgreSQL is often better for complex relational systems and advanced querying needs.",
      "Choose based on schema complexity, query patterns, team familiarity, and whether long-term relational flexibility is a major requirement.",
    ),
    relatedToolSlugs: [
      "mysql-er-diagram",
      "mysql-schema-designer",
      "postgresql-schema-generator",
      "postgresql-erd-tool",
      "database-schema-generator",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "ecommerce-database-schema",
      "inventory-management-database-schema",
    ],
  }),
  page({
    slug: "drawdb-vs-dbdiagram",
    title: "drawDB vs dbdiagram | ERD Tool Comparison | drawDB",
    h1: "drawDB vs dbdiagram: which ERD tool is better for schema planning?",
    description:
      "Compare drawDB and dbdiagram across ERD workflows, schema visualization, SEO-facing templates, and database design positioning.",
    keyword: "drawdb vs dbdiagram",
    leftName: "drawDB",
    rightName: "dbdiagram",
    intro:
      "This comparison is for users evaluating ERD tooling workflows and deciding whether they want a pure diagram experience or a broader schema content and template ecosystem.",
    decisionSummary:
      "Choose drawDB if you want a broader database tooling surface with SEO landing pages, templates, and schema education. Choose dbdiagram if you mainly want a focused diagramming workflow and already know that is your core use case.",
    table: [
      { label: "Primary focus", left: "Schema tooling platform", right: "Diagram-centric workflow" },
      { label: "Template ecosystem", left: "Growing template-led content system", right: "More tool-focused" },
      { label: "SEO landing strategy", left: "Strong", right: "Not the main value proposition" },
      { label: "Decision-stage content", left: "Broader content surface", right: "More product-centered" },
      { label: "Future platform room", left: "High", right: "More specialized" },
    ],
    leftPros: [
      "Broader content and tool ecosystem for SEO-led growth.",
      "Strong fit when templates, comparisons, and educational landing pages matter.",
      "Good long-term positioning for an expandable schema platform.",
    ],
    leftCons: [
      "The product surface may still be evolving compared with more established single-purpose tools.",
      "Broader scope can mean less single-purpose focus in the short term.",
    ],
    rightPros: [
      "Clear and focused diagramming use case.",
      "Well-known among users specifically looking for diagram-based schema workflows.",
    ],
    rightCons: [
      "Less naturally positioned as a broad content-driven database platform.",
      "Can be narrower if users want templates, comparisons, and educational content around design.",
    ],
    useCases: {
      left: [
        "Teams that want schema tools plus templates, comparisons, and search-driven resources.",
        "Founders or marketers building a broader database content moat.",
      ],
      right: [
        "Users who already know they mainly want a focused ER diagram experience.",
        "Teams prioritizing diagram creation over surrounding content workflows.",
      ],
    },
    featureBreakdown: [
      {
        title: "Platform breadth",
        description: "drawDB is being positioned as more than an ERD page, with templates, tools, comparisons, and SEO acquisition built in.",
      },
      {
        title: "Diagram focus",
        description: "dbdiagram is often evaluated as a more direct ERD product choice when the user already knows that is the exact workflow they want.",
      },
      {
        title: "Content-led growth",
        description: "drawDB has stronger upside if comparison pages, template pages, and long-tail search traffic are part of the product strategy.",
      },
    ],
    faqs: compareFaqs(
      "drawDB vs dbdiagram",
      "dbdiagram may be better if you only care about focused ERD creation today, while drawDB is better if you want a wider schema tooling and content ecosystem around database design.",
      "Choose based on whether your priority is pure diagramming or a larger platform that combines tools, templates, education, and long-tail search discovery.",
    ),
    relatedToolSlugs: [
      "er-diagram-tool",
      "database-diagram-maker",
      "database-schema-generator",
      "online-database-designer",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "ecommerce-database-schema",
    ],
  }),
  page({
    slug: "dbdiagram-vs-lucidchart",
    title: "dbdiagram vs Lucidchart | Diagram Tool Comparison | drawDB",
    h1: "dbdiagram vs Lucidchart: which diagram tool fits database design better?",
    description:
      "Compare dbdiagram and Lucidchart for ER diagrams, database-specific workflows, flexibility, and broader diagramming use cases.",
    keyword: "dbdiagram vs lucidchart",
    leftName: "dbdiagram",
    rightName: "Lucidchart",
    intro:
      "This comparison helps users decide between a more database-specific diagram workflow and a broader general-purpose diagram platform.",
    decisionSummary:
      "Choose dbdiagram when your main need is database-focused diagrams. Choose Lucidchart when the team wants one diagram platform for many use cases beyond database design.",
    table: [
      { label: "Primary use", left: "Database diagrams", right: "General diagramming" },
      { label: "Database-specific focus", left: "Higher", right: "Broader but less specialized" },
      { label: "Team-wide documentation uses", left: "Narrower", right: "Broader" },
      { label: "Schema planning intent", left: "More direct", right: "More generic" },
      { label: "Non-database use cases", left: "Limited", right: "Strong" },
    ],
    leftPros: [
      "More directly aligned with database diagram workflows.",
      "Less cluttered for users focused only on schema work.",
    ],
    leftCons: [
      "Narrower if the team wants one tool for every diagram use case.",
    ],
    rightPros: [
      "Strong for general process diagrams, org charts, and broader visual documentation.",
      "Better when database diagrams are only one part of a team’s diagram needs.",
    ],
    rightCons: [
      "Less purpose-built for database design intent.",
      "Can feel generic for users who want schema-first workflows.",
    ],
    useCases: {
      left: [
        "Teams mainly creating ERDs or database-related diagrams.",
        "Users who want a focused database diagram experience.",
      ],
      right: [
        "Organizations needing one tool across process, product, and architecture diagrams.",
        "Teams where database diagrams are only one small part of documentation work.",
      ],
    },
    featureBreakdown: [
      {
        title: "Specialization vs versatility",
        description: "dbdiagram is usually better for focused schema work, while Lucidchart wins when versatility across many diagram categories matters more.",
      },
      {
        title: "Database intent alignment",
        description: "Searchers explicitly looking for ERD or schema workflows usually map more closely to dbdiagram-like positioning.",
      },
      {
        title: "Team documentation needs",
        description: "Lucidchart has stronger value when the same platform must cover org, process, technical, and database diagrams together.",
      },
    ],
    faqs: compareFaqs(
      "dbdiagram vs Lucidchart",
      "dbdiagram is usually better for dedicated database diagram workflows, while Lucidchart is better for teams that need a general-purpose diagram platform beyond database design.",
      "Choose based on whether database-specific focus or broader diagram versatility is the higher priority for your team.",
    ),
    relatedToolSlugs: [
      "database-diagram-maker",
      "er-diagram-tool",
      "database-relationship-diagram-tool",
      "online-database-designer",
    ],
    relatedTemplateSlugs: [
      "school-management-database-schema",
      "hospital-management-database-schema",
      "social-media-database-schema",
    ],
  }),
  page({
    slug: "erd-vs-uml",
    title: "ERD vs UML | Modeling Comparison | drawDB",
    h1: "ERD vs UML: which modeling approach is better for database design?",
    description:
      "Compare ERD and UML for data modeling, schema planning, software architecture communication, and design intent.",
    keyword: "erd vs uml",
    leftName: "ERD",
    rightName: "UML",
    intro:
      "This page is for users deciding whether they need a database-specific entity relationship diagram or a broader software modeling notation like UML.",
    decisionSummary:
      "Choose ERD when the goal is schema planning and relational data design. Choose UML when you need a broader software modeling language that covers systems beyond the database layer.",
    table: [
      { label: "Best for", left: "Database schema design", right: "Broader software modeling" },
      { label: "Relationship clarity", left: "High for relational data", right: "Good, but broader scope" },
      { label: "Database specificity", left: "Strong", right: "Lower" },
      { label: "Architecture breadth", left: "Narrower", right: "Broader" },
      { label: "Data-modeling focus", left: "Primary purpose", right: "One of many uses" },
    ],
    leftPros: [
      "Best fit for relational schemas and entity ownership discussions.",
      "More direct for designing tables and foreign key relationships.",
    ],
    leftCons: [
      "Narrower when the team wants to model broader application architecture.",
    ],
    rightPros: [
      "Useful for wider software design and system communication.",
      "Works when database structure is only one part of a bigger technical model.",
    ],
    rightCons: [
      "Less focused for pure relational schema planning.",
      "Can add unnecessary abstraction for database-specific design tasks.",
    ],
    useCases: {
      left: [
        "Schema design, ERD reviews, and relational data planning.",
        "Teams whose immediate need is clear database modeling.",
      ],
      right: [
        "Software architecture, behavior modeling, and broader engineering communication.",
        "Teams modeling both systems and data with one notation family.",
      ],
    },
    featureBreakdown: [
      {
        title: "Database specialization",
        description: "ERD is purpose-built for the exact kinds of entity, relationship, and ownership decisions that matter in relational database design.",
      },
      {
        title: "Modeling scope",
        description: "UML is broader, which is valuable for system design but often less direct for schema planning.",
      },
      {
        title: "Communication fit",
        description: "Choose the notation that matches the decision being made, not just the one your team already recognizes.",
      },
    ],
    faqs: compareFaqs(
      "ERD vs UML",
      "ERD is usually better for database design specifically, while UML is better when the team needs a broader software modeling language that goes beyond data structure.",
      "Choose ERD for relational schema work and UML when application architecture, behavior, and other software design concerns matter equally.",
    ),
    relatedToolSlugs: [
      "er-diagram-tool",
      "database-relationship-diagram-tool",
      "database-design-tool",
      "database-diagram-maker",
    ],
    relatedTemplateSlugs: [
      "crm-database-schema",
      "saas-database-schema",
      "school-management-database-schema",
    ],
  }),
  page({
    slug: "mysql-vs-mongodb",
    title: "MySQL vs MongoDB | Database Comparison | drawDB",
    h1: "MySQL vs MongoDB: which database model is better for your app?",
    description:
      "Compare MySQL and MongoDB across relational structure, document flexibility, query patterns, and data-model tradeoffs.",
    keyword: "mysql vs mongodb",
    leftName: "MySQL",
    rightName: "MongoDB",
    intro:
      "This comparison is for teams deciding between a relational SQL database and a document-oriented model for product, content, and application workloads.",
    decisionSummary:
      "Choose MySQL when relational integrity and structured joins matter most. Choose MongoDB when document flexibility and query patterns benefit from a denormalized model.",
    table: [
      { label: "Data model", left: "Relational", right: "Document-oriented" },
      { label: "Best for", left: "Structured transactional systems", right: "Flexible document-centric apps" },
      { label: "Joins and references", left: "Core strength", right: "Different modeling tradeoffs" },
      { label: "Schema strictness", left: "Higher", right: "More flexible" },
      { label: "Normalization fit", left: "Strong", right: "Often denormalized" },
    ],
    leftPros: [
      "Strong relational integrity and SQL-based structure.",
      "Better fit for normalized schemas and join-heavy business systems.",
    ],
    leftCons: [
      "Less flexible when document-style modeling fits the application better.",
    ],
    rightPros: [
      "Flexible for document-heavy or rapidly evolving content models.",
      "Can align well with read-optimized denormalized patterns.",
    ],
    rightCons: [
      "Harder to reason about with strictly relational assumptions.",
      "Document flexibility can become messy without strong modeling discipline.",
    ],
    useCases: {
      left: [
        "Commerce, billing, CRM, HR, and other structured transactional systems.",
        "Products where joins and explicit relationships are central.",
      ],
      right: [
        "Content-heavy or document-first apps.",
        "Workloads where flexible nesting and evolving fields matter more than strict relational modeling.",
      ],
    },
    featureBreakdown: [
      {
        title: "Modeling philosophy",
        description: "MySQL expects structure and relationships; MongoDB expects document boundaries and access-pattern-aware modeling.",
      },
      {
        title: "Schema governance",
        description: "Relational systems often enforce discipline through structure, while document systems demand discipline through modeling decisions.",
      },
      {
        title: "Team fit",
        description: "Choose based on how your application really uses data, not only on general popularity or familiarity.",
      },
    ],
    faqs: compareFaqs(
      "MySQL vs MongoDB",
      "MySQL is usually better for structured relational systems, while MongoDB is better when document flexibility and denormalized access patterns matter more.",
      "Choose based on whether your app behaves more like a relational business system or a document-oriented content or event model.",
    ),
    relatedToolSlugs: [
      "mysql-schema-designer",
      "mysql-er-diagram",
      "mongodb-schema-design-tool",
      "database-design-tool",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "social-media-database-schema",
      "booking-system-database-schema",
    ],
  }),
  page({
    slug: "sqlite-vs-postgresql",
    title: "SQLite vs PostgreSQL | Database Comparison | drawDB",
    h1: "SQLite vs PostgreSQL: which database is better for your project stage?",
    description:
      "Compare SQLite and PostgreSQL across deployment simplicity, relational depth, scalability expectations, and product maturity.",
    keyword: "sqlite vs postgresql",
    leftName: "SQLite",
    rightName: "PostgreSQL",
    intro:
      "This comparison is useful when a team is deciding between a lightweight embedded database and a fuller relational system built for larger backend workloads.",
    decisionSummary:
      "Choose SQLite for local, embedded, or lightweight product stages. Choose PostgreSQL when the application needs a stronger multi-user backend and richer relational features.",
    table: [
      { label: "Best for", left: "Embedded and lightweight apps", right: "Server-backed relational systems" },
      { label: "Setup complexity", left: "Very low", right: "Higher but more capable" },
      { label: "Relational depth", left: "Good for smaller apps", right: "Much broader" },
      { label: "Scaling expectation", left: "Lower", right: "Higher" },
      { label: "Backend multi-user fit", left: "Limited", right: "Strong" },
    ],
    leftPros: [
      "Extremely simple to start with.",
      "Great for local tools, prototypes, and embedded products.",
    ],
    leftCons: [
      "More limited for larger multi-user backend workloads.",
    ],
    rightPros: [
      "Stronger fit for serious application backends.",
      "Better for richer relational and reporting workflows.",
    ],
    rightCons: [
      "Heavier operationally than SQLite for very small projects.",
    ],
    useCases: {
      left: [
        "Desktop tools, local apps, and early-stage prototypes.",
        "Projects where setup simplicity matters more than backend depth.",
      ],
      right: [
        "SaaS backends, analytics-heavy systems, and complex transactional products.",
        "Applications expecting richer schema evolution and concurrent usage.",
      ],
    },
    featureBreakdown: [
      {
        title: "Project stage fit",
        description: "SQLite often wins for very early or local use cases, while PostgreSQL usually wins once the product becomes a real multi-user backend.",
      },
      {
        title: "Operational tradeoff",
        description: "SQLite removes setup overhead, but PostgreSQL pays off when relational complexity grows.",
      },
      {
        title: "Schema expansion",
        description: "Teams that expect permissions, billing, analytics, or deeper reporting usually benefit more from PostgreSQL.",
      },
    ],
    faqs: compareFaqs(
      "SQLite vs PostgreSQL",
      "SQLite is better for very lightweight or embedded contexts, while PostgreSQL is better for serious backend systems that need stronger relational features and scalability.",
      "Choose based on project stage, deployment environment, concurrent usage expectations, and how complex the schema will likely become.",
    ),
    relatedToolSlugs: [
      "sqlite-database-designer",
      "sqlite-schema-generator",
      "postgresql-schema-generator",
      "postgresql-erd-tool",
    ],
    relatedTemplateSlugs: [
      "booking-system-database-schema",
      "school-management-database-schema",
      "saas-database-schema",
    ],
  }),
  page({
    slug: "supabase-vs-firebase",
    title: "Supabase vs Firebase | Backend Platform Comparison | drawDB",
    h1: "Supabase vs Firebase: which backend platform is better for database-centric products?",
    description:
      "Compare Supabase and Firebase across relational modeling, developer workflow, backend flexibility, and product architecture tradeoffs.",
    keyword: "supabase vs firebase",
    leftName: "Supabase",
    rightName: "Firebase",
    intro:
      "This page targets product teams evaluating backend platforms and deciding whether relational SQL workflows or document and managed backend patterns fit better.",
    decisionSummary:
      "Choose Supabase when relational design and SQL-centric workflows matter most. Choose Firebase when the team wants a broader managed backend with strong real-time and document-oriented patterns.",
    table: [
      { label: "Database model", left: "PostgreSQL-based", right: "Document-oriented core experience" },
      { label: "Best for", left: "SQL and relational apps", right: "Managed app backend workflows" },
      { label: "Schema-first design", left: "Stronger", right: "Less central" },
      { label: "Developer mental model", left: "Database-centric", right: "Platform-centric" },
      { label: "Relational depth", left: "Higher", right: "Different tradeoffs" },
    ],
    leftPros: [
      "Excellent for SQL-first teams and relational products.",
      "Better fit when schema clarity and database structure are central.",
    ],
    leftCons: [
      "May feel more database-heavy for teams wanting a broader managed service mindset.",
    ],
    rightPros: [
      "Strong for broader app backend workflows and certain real-time patterns.",
      "Often appealing to teams that want a more platform-managed experience.",
    ],
    rightCons: [
      "Less naturally aligned with relational SQL schema planning.",
      "Can be a weaker fit when normalized database design is central to the product.",
    ],
    useCases: {
      left: [
        "SaaS, CRM, and account-based products that rely on relational structure.",
        "Teams that want Postgres-like thinking in a managed backend workflow.",
      ],
      right: [
        "Teams that value platform-managed backend services and document-oriented workflows.",
        "Products where relational SQL modeling is not the core design constraint.",
      ],
    },
    featureBreakdown: [
      {
        title: "Relational fit",
        description: "Supabase is usually the stronger option when SQL, ERDs, and explicit schema quality matter deeply.",
      },
      {
        title: "Platform experience",
        description: "Firebase often appeals more when the team wants a broader backend product mindset rather than a database-first one.",
      },
      {
        title: "Product architecture alignment",
        description: "Choose based on whether the product behaves more like a relational business app or a managed app-platform workload.",
      },
    ],
    faqs: compareFaqs(
      "Supabase vs Firebase",
      "Supabase is usually better for relational SQL-centric products, while Firebase is better when a broader managed backend model and document workflows fit the application more naturally.",
      "Choose based on whether the product is primarily database-centric or platform-service-centric, and whether relational schema quality is central to success.",
    ),
    relatedToolSlugs: [
      "supabase-schema-designer",
      "prisma-schema-generator",
      "database-schema-generator",
      "mongodb-schema-design-tool",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "social-media-database-schema",
      "crm-database-schema",
    ],
  }),
  page({
    slug: "prisma-vs-typeorm",
    title: "Prisma vs TypeORM | ORM Comparison | drawDB",
    h1: "Prisma vs TypeORM: which ORM workflow is better for your database stack?",
    description:
      "Compare Prisma and TypeORM across schema workflow, developer ergonomics, relational clarity, and database modeling tradeoffs.",
    keyword: "prisma vs typeorm",
    leftName: "Prisma",
    rightName: "TypeORM",
    intro:
      "This comparison helps developers decide between two ORM approaches and think through how each shapes schema design, migrations, and relational clarity.",
    decisionSummary:
      "Choose Prisma when you want a more explicit schema workflow and strong database modeling clarity. Choose TypeORM when you prefer a code-first ORM approach tightly coupled to entities in the application layer.",
    table: [
      { label: "Primary workflow", left: "Schema-first leaning", right: "Code-first leaning" },
      { label: "Database modeling clarity", left: "Higher visibility", right: "More embedded in app code" },
      { label: "Developer ergonomics", left: "Strong for schema review", right: "Strong for decorator-oriented code workflows" },
      { label: "Migration mindset", left: "Schema-centric", right: "Entity-centric" },
      { label: "Fit for explicit design review", left: "Higher", right: "More indirect" },
    ],
    leftPros: [
      "Clearer schema visibility and strong fit for design-first workflows.",
      "Often easier to reason about when schema structure is central.",
    ],
    leftCons: [
      "May feel more opinionated for teams that want everything anchored directly in application entities.",
    ],
    rightPros: [
      "Feels natural for teams preferring a code-first ORM experience.",
      "Works well when the entity layer is the center of the backend workflow.",
    ],
    rightCons: [
      "Schema design can become less visible or less intentionally reviewed.",
      "Can be weaker when teams want explicit database-first modeling discipline.",
    ],
    useCases: {
      left: [
        "Teams that want schema review, migrations, and relational thinking to stay explicit.",
        "Projects where database design is a first-class concern.",
      ],
      right: [
        "Developers comfortable with code-first ORM workflows.",
        "Projects where entity classes are the preferred source of truth.",
      ],
    },
    featureBreakdown: [
      {
        title: "Schema visibility",
        description: "Prisma usually makes the database model easier to inspect and reason about as a distinct artifact.",
      },
      {
        title: "Application coupling",
        description: "TypeORM often appeals to teams that want database modeling tightly tied to the code layer.",
      },
      {
        title: "Design discipline",
        description: "If schema quality and explicit review matter, Prisma-like workflows often align better with that goal.",
      },
    ],
    faqs: compareFaqs(
      "Prisma vs TypeORM",
      "Prisma is often better for schema-first clarity, while TypeORM is better for developers who prefer a code-first ORM style deeply embedded in the application layer.",
      "Choose based on whether you want the database schema to remain an explicit design artifact or prefer to drive more of the model through code entities.",
    ),
    relatedToolSlugs: [
      "prisma-schema-generator",
      "database-schema-generator",
      "sql-schema-generator",
      "postgresql-schema-generator",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "hr-management-database-schema",
    ],
  }),
  page({
    slug: "sql-vs-nosql",
    title: "SQL vs NoSQL | Database Comparison | drawDB",
    h1: "SQL vs NoSQL: which database approach is better for your product?",
    description:
      "Compare SQL and NoSQL across relational structure, flexibility, scaling patterns, and application data-model tradeoffs.",
    keyword: "sql vs nosql",
    leftName: "SQL",
    rightName: "NoSQL",
    intro:
      "This comparison targets product and engineering teams deciding whether a relational model or a non-relational approach better fits their data and query patterns.",
    decisionSummary:
      "Choose SQL when relationships, integrity, and structured business workflows matter most. Choose NoSQL when flexibility, document or event models, and non-relational access patterns drive the architecture.",
    table: [
      { label: "Best for", left: "Structured relational systems", right: "Flexible non-relational workloads" },
      { label: "Schema strictness", left: "Higher", right: "Lower or more flexible" },
      { label: "Relationships", left: "Core strength", right: "Different modeling tradeoffs" },
      { label: "Normalization fit", left: "Strong", right: "Often less central" },
      { label: "Model flexibility", left: "More structured", right: "More flexible" },
    ],
    leftPros: [
      "Excellent for business systems with clear relationships and integrity requirements.",
      "Makes schema quality, joins, and normalized design more explicit.",
    ],
    leftCons: [
      "Can feel more rigid when the application benefits from looser or document-style modeling.",
    ],
    rightPros: [
      "Flexible for document, event, key-value, and non-relational workloads.",
      "Can align better with certain scale and access-pattern problems.",
    ],
    rightCons: [
      "Less naturally suited to strict relational design and normalization.",
      "Flexibility can create modeling drift without discipline.",
    ],
    useCases: {
      left: [
        "Commerce, CRM, HR, finance, and most structured product backends.",
        "Products where reporting and relational integrity are central.",
      ],
      right: [
        "Document-heavy platforms, event-oriented systems, and some real-time patterns.",
        "Workloads where access patterns matter more than normalized relational design.",
      ],
    },
    featureBreakdown: [
      {
        title: "Relational vs flexible modeling",
        description: "SQL wins when the data model is naturally relational; NoSQL wins when document or alternate access patterns are the true center of the system.",
      },
      {
        title: "Schema governance",
        description: "SQL tends to make structure explicit, while NoSQL demands discipline from design decisions rather than the database alone.",
      },
      {
        title: "Product fit",
        description: "The right choice depends more on application behavior than on hype around one category or the other.",
      },
    ],
    faqs: compareFaqs(
      "SQL vs NoSQL",
      "SQL is better for structured relational systems, while NoSQL is better for workloads where flexibility, non-relational access patterns, or document modeling matter more.",
      "Choose based on how the product really uses data, especially whether relationships and integrity or flexibility and alternate models are the main design concern.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "mongodb-schema-design-tool",
      "sql-schema-generator",
      "database-design-tool",
    ],
    relatedTemplateSlugs: [
      "social-media-database-schema",
      "ecommerce-database-schema",
      "hospital-management-database-schema",
    ],
  }),
  page({
    slug: "database-schema-vs-erd",
    title: "Database Schema vs ERD | Design Comparison | drawDB",
    h1: "Database schema vs ERD: what is the difference and which matters first?",
    description:
      "Compare database schema and ERD concepts across design intent, implementation detail, communication, and workflow sequencing.",
    keyword: "database schema vs erd",
    leftName: "Database Schema",
    rightName: "ERD",
    intro:
      "This page is for users who are trying to understand the difference between the actual schema structure and the ERD used to think through it visually.",
    decisionSummary:
      "Use an ERD when you need to reason visually about entities and relationships. Use the database schema when the structure must become exact, implementable, and enforceable in a real database.",
    table: [
      { label: "Primary role", left: "Implementation structure", right: "Visual design model" },
      { label: "Best for", left: "Exact tables and constraints", right: "Relationship clarity" },
      { label: "Audience", left: "Developers and implementers", right: "Designers, reviewers, and engineers" },
      { label: "Workflow stage", left: "Later and concrete", right: "Earlier and explanatory" },
      { label: "Direct database execution", left: "Yes", right: "No" },
    ],
    leftPros: [
      "Represents the actual structure the database must enforce.",
      "Critical for migrations, constraints, and implementation.",
    ],
    leftCons: [
      "Harder to discuss quickly at a conceptual level than a visual ERD.",
    ],
    rightPros: [
      "Makes relationships and ownership easier to understand.",
      "Better for early-stage design and collaborative review.",
    ],
    rightCons: [
      "Not a substitute for the actual schema definition.",
    ],
    useCases: {
      left: [
        "Migration planning, SQL generation, constraint definition, and implementation review.",
        "Teams preparing the final database structure.",
      ],
      right: [
        "Entity planning, architecture review, and stakeholder communication.",
        "Teams clarifying data relationships before coding.",
      ],
    },
    featureBreakdown: [
      {
        title: "Concept vs implementation",
        description: "An ERD helps explain the model, while the schema defines exactly how that model exists in the database.",
      },
      {
        title: "Workflow sequence",
        description: "Many teams benefit from starting with ERD thinking and then promoting the stable model into schema detail.",
      },
      {
        title: "Why both matter",
        description: "Good database work often needs both the visual clarity of ERDs and the precision of final schema definitions.",
      },
    ],
    faqs: compareFaqs(
      "database schema vs ERD",
      "Neither replaces the other. ERDs are better for visual design thinking, while the schema is better for exact implementation and enforcement.",
      "Use ERDs to clarify the model early and the schema to finalize structure, constraints, and production-ready implementation details.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "er-diagram-tool",
      "database-diagram-maker",
      "sql-schema-generator",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "crm-database-schema",
      "saas-database-schema",
    ],
  }),
];

export const compareSummaries = comparePages.map((page) => ({
  slug: page.slug,
  title: page.h1,
  description: page.description,
  href: page.path,
  leftName: page.leftName,
  rightName: page.rightName,
}));

export function getComparePageBySlug(slug: string) {
  return comparePages.find((page) => page.slug === slug);
}
