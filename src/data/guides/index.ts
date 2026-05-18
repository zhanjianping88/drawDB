export type GuideFaq = {
  question: string;
  answer: string;
};

export type GuideSection = {
  id: string;
  title: string;
  summary: string;
  points: string[];
  checklist?: string[];
  table?: {
    headers: string[];
    rows: string[][];
  };
  example?: string;
};

export type GuidePage = {
  slug: string;
  title: string;
  h1: string;
  description: string;
  path: string;
  category: string;
  readingTime: string;
  intro: string;
  sections: GuideSection[];
  faqs: GuideFaq[];
  relatedToolSlugs: string[];
  relatedTemplateSlugs: string[];
  relatedCompareSlugs: string[];
};

function guide(
  config: Omit<GuidePage, "path">,
): GuidePage {
  return {
    ...config,
    path: `/guides/${config.slug}`,
  };
}

function coreFaqs(subject: string, answer: string): GuideFaq[] {
  return [
    {
      question: `What is the best way to approach ${subject}?`,
      answer,
    },
    {
      question: `Should ${subject} start with a diagram or with SQL?`,
      answer:
        "Start with structure and relationships first, then move into SQL once the model is coherent. The earlier you clarify entities, ownership, and constraints, the fewer migration mistakes you carry forward.",
    },
    {
      question: "Why do these guides link to tools, templates, and compare pages together?",
      answer:
        "That combination helps readers move from education into action. Guides explain the concept, tools support the workflow, templates show concrete examples, and comparison pages help with adjacent decisions.",
    },
  ];
}

export const guidePages: GuidePage[] = [
  guide({
    slug: "how-to-design-a-database-schema",
    title: "How to Design a Database Schema | drawDB Guide",
    h1: "How to design a database schema that stays clean as your product grows",
    description:
      "Learn how to design a database schema with clearer entities, relationships, normalization decisions, and implementation-ready structure.",
    category: "foundations",
    readingTime: "12 min read",
    intro:
      "This guide is for teams that know they need a database but want a cleaner path from product requirements to tables, keys, and long-term schema quality.",
    sections: [
      {
        id: "start-with-domain",
        title: "Start with the domain, not with columns",
        summary:
          "Good schema design begins by identifying real business entities and how they interact, rather than jumping straight into field lists.",
        points: [
          "List the core nouns in the product first: users, orders, invoices, subscriptions, etc.",
          "Map what each entity owns and what depends on it.",
          "Separate operational entities from reporting or caching concerns.",
        ],
        checklist: [
          "Can you explain each table as a business concept?",
          "Does each table have one clear responsibility?",
          "Are relationship boundaries already obvious?",
        ],
      },
      {
        id: "model-relationships",
        title: "Model relationships before implementation details",
        summary:
          "Relationships are where schema quality often succeeds or fails. If ownership is weak, the SQL will only harden a weak model.",
        points: [
          "Clarify one-to-many, many-to-many, and optional relationships before writing migrations.",
          "Use join tables intentionally rather than overloading parent tables.",
          "Check whether deletion, auditing, and lifecycle events need dedicated tables.",
        ],
        table: {
          headers: ["Question", "Why it matters"],
          rows: [
            ["Who owns this record?", "Determines foreign key direction and lifecycle dependencies."],
            ["Can one parent have many children?", "Defines cardinality and likely join behavior."],
            ["Should this relationship be optional?", "Affects nullability and product workflow assumptions."],
          ],
        },
      },
      {
        id: "normalize-intentionally",
        title: "Normalize intentionally, not automatically",
        summary:
          "Normalization is about reducing duplicated structure and ambiguous ownership, but it should still serve the product, not become a theoretical exercise.",
        points: [
          "Normalize repeated entities and attributes when they create data inconsistency risk.",
          "Keep denormalization as a deliberate performance or product tradeoff, not as the default.",
          "Use reporting or caching layers when normalized transactional structure becomes expensive to query directly.",
        ],
        example:
          "If customer email appears in orders, invoices, and shipments as plain text, ask whether that data should instead live in a customer table with references from dependent records.",
      },
      {
        id: "promote-to-sql",
        title: "Promote the stable model into SQL and migrations",
        summary:
          "Only after the model is coherent should it become SQL definitions, constraints, and production migration files.",
        points: [
          "Define primary keys, foreign keys, required fields, and uniqueness based on the reviewed model.",
          "Use naming conventions consistently before the first migrations land.",
          "Document the design in diagrams or templates so future changes remain grounded in the original structure.",
        ],
        checklist: [
          "Have you reviewed all foreign keys?",
          "Do the table names read consistently?",
          "Will a new engineer understand the model from the structure alone?",
        ],
      },
    ],
    faqs: coreFaqs(
      "database schema design",
      "Start by modeling the real product entities and their relationships, then normalize repeated structure, and only after that promote the model into SQL and migrations.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "database-design-tool",
      "database-normalization-tool",
      "sql-schema-generator",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "ecommerce-database-schema",
    ],
    relatedCompareSlugs: [
      "database-schema-vs-erd",
      "sql-vs-nosql",
      "mysql-vs-postgresql",
    ],
  }),
  guide({
    slug: "how-to-create-an-er-diagram",
    title: "How to Create an ER Diagram | drawDB Guide",
    h1: "How to create an ER diagram that actually improves your schema design",
    description:
      "Learn how to create an ER diagram for relational systems with better entity naming, relationship mapping, and review workflows.",
    category: "diagramming",
    readingTime: "10 min read",
    intro:
      "This guide is for people who know they need an ER diagram but want to make it useful for real design decisions instead of just creating a pretty chart.",
    sections: [
      {
        id: "identify-entities",
        title: "Identify entities that reflect real product concepts",
        summary:
          "An ER diagram only helps when the entities represent actual business or product concepts rather than arbitrary implementation groupings.",
        points: [
          "Use nouns that your team already uses consistently.",
          "Keep entities focused on one responsibility each.",
          "Do not combine identity, workflow, and reporting concerns into one table unless the model truly demands it.",
        ],
      },
      {
        id: "draw-relationships",
        title: "Draw the relationships before thinking about SQL syntax",
        summary:
          "The value of the diagram is the relationship map. If the lines are wrong, the final schema will be wrong too.",
        points: [
          "Confirm whether each relationship is one-to-one, one-to-many, or many-to-many.",
          "Use join tables for many-to-many relationships rather than hiding them in arrays or overloaded fields.",
          "Discuss deletion and ownership while the model is still visual.",
        ],
        table: {
          headers: ["Relationship type", "Typical schema pattern"],
          rows: [
            ["One-to-many", "Child table stores a foreign key to parent."],
            ["Many-to-many", "Use a dedicated join table."],
            ["Optional reference", "Allow null foreign key when the workflow truly allows it."],
          ],
        },
      },
      {
        id: "review-with-team",
        title: "Review the ERD with the people who will use the schema",
        summary:
          "ERDs are most useful when engineers, PMs, and stakeholders can all spot broken assumptions before implementation begins.",
        points: [
          "Ask whether each entity and relationship reflects the real workflow.",
          "Look for duplicated concepts, unclear ownership, or relationship loops.",
          "Use the review to find missing audit, billing, membership, or state-tracking entities.",
        ],
      },
      {
        id: "turn-into-schema",
        title: "Translate the ER diagram into schema structure",
        summary:
          "Once the ERD is stable, use it to produce the final table definitions, constraints, and migrations more confidently.",
        points: [
          "Promote each entity into a table with explicit keys.",
          "Convert relationship lines into foreign keys or join tables.",
          "Keep the ERD available for future schema reviews so changes remain intelligible.",
        ],
      },
    ],
    faqs: coreFaqs(
      "creating an ER diagram",
      "Start from real entities and relationship types, review the diagram with the team, and only then translate it into concrete tables and constraints.",
    ),
    relatedToolSlugs: [
      "er-diagram-tool",
      "database-diagram-maker",
      "database-relationship-diagram-tool",
      "postgresql-erd-tool",
    ],
    relatedTemplateSlugs: [
      "crm-database-schema",
      "social-media-database-schema",
      "school-management-database-schema",
    ],
    relatedCompareSlugs: [
      "erd-vs-uml",
      "database-schema-vs-erd",
      "drawdb-vs-dbdiagram",
    ],
  }),
  guide({
    slug: "database-schema-design-best-practices",
    title: "Database Schema Design Best Practices | drawDB Guide",
    h1: "Database schema design best practices for maintainable applications",
    description:
      "Use these database schema design best practices to improve relational clarity, normalization, naming, and long-term maintainability.",
    category: "best-practices",
    readingTime: "11 min read",
    intro:
      "This guide pulls together the practical habits that keep schemas understandable, evolvable, and less painful as applications get more complicated.",
    sections: [
      {
        id: "one-responsibility",
        title: "Give each table one primary responsibility",
        summary:
          "Overloaded tables are one of the fastest ways to create migration churn and unclear ownership.",
        points: [
          "Separate identity data from workflow state and from reporting concerns.",
          "If a table needs too many unrelated nullable fields, it may be hiding multiple concepts.",
          "Use supporting tables instead of stretching one table to fit every product scenario.",
        ],
      },
      {
        id: "be-consistent",
        title: "Use consistent naming and key patterns",
        summary:
          "Consistency makes schemas easier to query, easier to review, and less error-prone during implementation.",
        points: [
          "Use predictable primary key naming patterns.",
          "Keep timestamp columns and lifecycle fields consistent.",
          "Make foreign keys clearly reference their parent entity names.",
        ],
        checklist: [
          "Do all primary keys follow one naming style?",
          "Are timestamp fields named consistently?",
          "Do foreign keys read unambiguously?",
        ],
      },
      {
        id: "optimize-later",
        title: "Optimize after the model is sound",
        summary:
          "Premature denormalization or indexing can distract from the bigger problem: whether the data model is coherent in the first place.",
        points: [
          "First validate relational correctness, then optimize query patterns.",
          "Use measured performance needs to justify denormalization.",
          "Keep operational tables distinct from derived reporting structures when possible.",
        ],
      },
      {
        id: "keep-design-visible",
        title: "Keep the design visible in diagrams, templates, and reviews",
        summary:
          "Schema quality deteriorates when the only truth lives in migrations and application code.",
        points: [
          "Maintain diagrams or schema templates that explain the design at a glance.",
          "Use review artifacts to make change discussions faster and more grounded.",
          "Link documentation, templates, and tools together so teams have multiple useful entry points into the model.",
        ],
      },
    ],
    faqs: coreFaqs(
      "database schema design best practices",
      "The best practices are to keep tables focused, name structure consistently, normalize repeated concepts intentionally, and make the model reviewable before implementation hardens it.",
    ),
    relatedToolSlugs: [
      "database-design-tool",
      "database-schema-generator",
      "database-normalization-tool",
      "sql-table-designer",
    ],
    relatedTemplateSlugs: [
      "hr-management-database-schema",
      "hospital-management-database-schema",
      "saas-database-schema",
    ],
    relatedCompareSlugs: [
      "database-schema-vs-erd",
      "sql-vs-nosql",
      "prisma-vs-typeorm",
    ],
  }),
  guide({
    slug: "database-normalization-guide",
    title: "Database Normalization Guide | drawDB",
    h1: "Database normalization guide for cleaner relational structure",
    description:
      "Understand database normalization with practical examples, tradeoffs, and design guidance for relational systems.",
    category: "foundations",
    readingTime: "13 min read",
    intro:
      "Normalization is one of the most useful tools in schema design, but it matters most when applied to real product workflows rather than as a purely academic exercise.",
    sections: [
      {
        id: "why-normalization",
        title: "Why normalization matters in real products",
        summary:
          "Normalization reduces duplicated data, makes ownership clearer, and lowers the risk of inconsistent updates across related records.",
        points: [
          "Repeated customer details across many tables usually create drift.",
          "Overloaded tables often hide missing entities or broken ownership boundaries.",
          "Normalized structure usually makes transactional logic easier to trust over time.",
        ],
      },
      {
        id: "spotting-problems",
        title: "How to spot normalization problems",
        summary:
          "You do not need formal theory first. Often you can recognize weak structure by asking simple practical questions.",
        points: [
          "Is the same real-world concept stored in multiple places?",
          "Does one table have too many responsibilities?",
          "Do updates require touching many records that should really reference one source of truth?",
        ],
        table: {
          headers: ["Signal", "Likely issue"],
          rows: [
            ["Repeated text fields across many tables", "Missing parent entity or weak references."],
            ["Large tables with many unrelated columns", "Overloaded responsibility."],
            ["Manual consistency checks in app code", "Schema structure may not represent ownership clearly."],
          ],
        },
      },
      {
        id: "when-to-denormalize",
        title: "When denormalization is reasonable",
        summary:
          "Normalization is not a religion. Some workloads benefit from selective denormalization after the normalized core is already understood.",
        points: [
          "Use denormalization when performance or access patterns justify it.",
          "Treat it as an optimization decision, not as the starting point.",
          "Document why duplicated fields exist so future engineers know it was deliberate.",
        ],
        example:
          "A reporting table might intentionally duplicate order totals and customer region so dashboards stay fast, while the transactional system remains normalized underneath.",
      },
      {
        id: "normalization-workflow",
        title: "A practical normalization workflow",
        summary:
          "The easiest way to apply normalization is to review the schema table by table and ask what belongs where.",
        points: [
          "Review each table responsibility in plain language.",
          "Extract repeated concepts into their own entities where necessary.",
          "Re-check relationship shape after every structural change.",
        ],
        checklist: [
          "Can each table be explained in one sentence?",
          "Is duplicated information still intentional?",
          "Are join paths clearer than before?",
        ],
      },
    ],
    faqs: coreFaqs(
      "database normalization",
      "Use normalization to reduce duplicated data and make ownership explicit, but apply it in service of product clarity and maintainability rather than as a purely theoretical goal.",
    ),
    relatedToolSlugs: [
      "database-normalization-tool",
      "database-schema-generator",
      "sql-schema-generator",
      "database-design-tool",
    ],
    relatedTemplateSlugs: [
      "crm-database-schema",
      "hospital-management-database-schema",
      "hr-management-database-schema",
    ],
    relatedCompareSlugs: [
      "sql-vs-nosql",
      "database-schema-vs-erd",
      "mysql-vs-postgresql",
    ],
  }),
  guide({
    slug: "sql-database-design-for-beginners",
    title: "SQL Database Design for Beginners | drawDB Guide",
    h1: "SQL database design for beginners: how to think before you write schema",
    description:
      "A beginner-friendly guide to SQL database design covering entities, relationships, tables, keys, and practical schema decisions.",
    category: "beginners",
    readingTime: "11 min read",
    intro:
      "If you are new to database design, the biggest challenge is usually not SQL syntax. It is learning how to think in tables, relationships, and ownership before coding.",
    sections: [
      {
        id: "from-problem-to-tables",
        title: "Move from product requirements to tables",
        summary:
          "Begin by writing down the real things your product stores and tracks instead of jumping into SQL statements.",
        points: [
          "Users, products, subscriptions, and invoices are common examples of entities.",
          "Tables should represent stable concepts, not temporary screen states.",
          "Think about who owns each record and why it exists.",
        ],
      },
      {
        id: "keys-and-relationships",
        title: "Understand keys and relationships early",
        summary:
          "Most beginner mistakes come from unclear references, not from missing SQL syntax knowledge.",
        points: [
          "A primary key identifies a record uniquely.",
          "A foreign key points from one table to another to express a relationship.",
          "One-to-many relationships appear constantly in real products.",
        ],
        table: {
          headers: ["Concept", "What it means"],
          rows: [
            ["Primary key", "Unique identifier for one row."],
            ["Foreign key", "Reference to another table’s primary key."],
            ["Join table", "A table that connects many-to-many relationships."],
          ],
        },
      },
      {
        id: "beginner-workflow",
        title: "Use a repeatable beginner workflow",
        summary:
          "Beginners improve quickly when they use the same sequence every time instead of improvising schema design from scratch.",
        points: [
          "List entities.",
          "Map relationships.",
          "Check whether each table has one responsibility.",
          "Only then write SQL or generate DDL.",
        ],
        checklist: [
          "Do you know what each table represents?",
          "Do you know which table owns which records?",
          "Did you check whether a join table is needed?",
        ],
      },
      {
        id: "mistakes-to-avoid",
        title: "Common beginner mistakes to avoid",
        summary:
          "A few repeated mistakes account for most weak beginner schemas, and catching them early makes a huge difference.",
        points: [
          "Putting too much unrelated data into one table.",
          "Skipping foreign keys because they feel complicated.",
          "Using duplicated text instead of explicit relationships.",
          "Treating SQL syntax as more important than the actual model.",
        ],
      },
    ],
    faqs: coreFaqs(
      "SQL database design for beginners",
      "The best beginner approach is to start with entities and relationships, then clarify keys and ownership, and only after that write SQL definitions.",
    ),
    relatedToolSlugs: [
      "sql-schema-generator",
      "sql-table-designer",
      "database-schema-generator",
      "er-diagram-tool",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "crm-database-schema",
      "booking-system-database-schema",
    ],
    relatedCompareSlugs: [
      "database-schema-vs-erd",
      "sql-vs-nosql",
      "erd-vs-uml",
    ],
  }),
  guide({
    slug: "ecommerce-database-design-guide",
    title: "Ecommerce Database Design Guide | drawDB",
    h1: "Ecommerce database design guide for products, orders, inventory, and payments",
    description:
      "Learn how to design an ecommerce database with products, carts, orders, payments, inventory, and customer relationships.",
    category: "use-cases",
    readingTime: "12 min read",
    intro:
      "Ecommerce schemas become messy quickly because they combine catalog structure, transactional state, payment flows, and operational fulfillment logic in one system.",
    sections: [
      {
        id: "core-entities",
        title: "Define the ecommerce core entities first",
        summary:
          "The core model usually includes customers, products, carts, orders, payments, and inventory, each with different lifecycle and ownership rules.",
        points: [
          "Customers and products usually behave as foundational entities.",
          "Orders and payments are transactional records that must preserve history.",
          "Inventory often needs operational tables distinct from catalog tables.",
        ],
      },
      {
        id: "order-lifecycle",
        title: "Model the order lifecycle carefully",
        summary:
          "Orders often outlive carts, payments, discounts, and fulfillment steps, so the schema has to reflect that durability clearly.",
        points: [
          "Keep carts separate from confirmed orders.",
          "Use order items to preserve line-level purchase history.",
          "Consider whether shipment, refund, and return workflows deserve separate entities early.",
        ],
        example:
          "A cart is temporary and editable. An order should usually become historical and auditable once confirmed, even if payment or fulfillment changes later.",
      },
      {
        id: "inventory-payments",
        title: "Separate inventory and payment concerns cleanly",
        summary:
          "Inventory and payments are often handled by different workflows, and forcing them too tightly into the order table creates long-term schema pain.",
        points: [
          "Inventory needs stock visibility, location, and movement logic.",
          "Payments need transaction attempts, settlement state, and provider references.",
          "Do not hide both systems inside generic order status fields alone.",
        ],
      },
      {
        id: "ecommerce-checklist",
        title: "Use an ecommerce schema checklist before implementation",
        summary:
          "A quick review before writing final migrations helps prevent expensive downstream fixes.",
        points: [
          "Check whether product, order, and payment responsibilities are clearly separated.",
          "Check whether order history remains readable after payment or fulfillment updates.",
          "Check whether inventory logic can evolve without restructuring the whole catalog.",
        ],
        checklist: [
          "Are carts and orders separate?",
          "Are line items modeled explicitly?",
          "Can payment retries be represented cleanly?",
          "Can inventory be tracked independently of product metadata?",
        ],
      },
    ],
    faqs: coreFaqs(
      "ecommerce database design",
      "Start with customers, products, carts, orders, and payments, then separate operational concerns like inventory and fulfillment so the schema stays maintainable as complexity grows.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "sql-schema-generator",
      "mysql-er-diagram",
      "database-normalization-tool",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "inventory-management-database-schema",
      "booking-system-database-schema",
    ],
    relatedCompareSlugs: [
      "mysql-vs-postgresql",
      "sql-vs-nosql",
      "database-schema-vs-erd",
    ],
  }),
  guide({
    slug: "crm-database-design-guide",
    title: "CRM Database Design Guide | drawDB",
    h1: "CRM database design guide for accounts, contacts, deals, and activity history",
    description:
      "Design a CRM database schema with accounts, contacts, deals, ownership, activities, and reporting structure.",
    category: "use-cases",
    readingTime: "11 min read",
    intro:
      "CRM schemas often look simple at first, but they become difficult when account ownership, activity history, notes, and reporting all compete for the same structure.",
    sections: [
      {
        id: "accounts-and-contacts",
        title: "Separate accounts, contacts, and ownership explicitly",
        summary:
          "The core CRM model should make it obvious how organizations, people, and internal owners relate to one another.",
        points: [
          "Accounts usually represent companies or organizations.",
          "Contacts usually represent people within or related to those accounts.",
          "Ownership or team assignment often deserves its own structure rather than just a text field.",
        ],
      },
      {
        id: "deals-and-pipeline",
        title: "Model deals and pipeline as operational entities",
        summary:
          "Pipeline state drives reporting, forecasting, and workflow automation, so it should be represented deliberately.",
        points: [
          "A deal should preserve stage history and ownership changes where needed.",
          "Pipeline logic often justifies additional stage or activity structures.",
          "Keep reporting derivations separate from the core operational model when possible.",
        ],
      },
      {
        id: "activity-history",
        title: "Treat activity history as a first-class workflow",
        summary:
          "Calls, emails, meetings, and notes are often the lifeblood of CRM usage, so they should not be an afterthought.",
        points: [
          "Activities should link cleanly to accounts, contacts, or deals depending on the workflow.",
          "Notes should not replace structured activity events where reporting matters.",
          "Time-based history usually becomes a major product surface later.",
        ],
      },
      {
        id: "crm-checklist",
        title: "CRM schema review checklist",
        summary:
          "Before building the final schema, review whether the model can support both daily workflows and future reporting.",
        points: [
          "Check whether account and contact boundaries are clear.",
          "Check whether activity history is queryable without hacks.",
          "Check whether ownership and reporting can evolve without rewriting the schema.",
        ],
        checklist: [
          "Are accounts and contacts distinct?",
          "Are deals represented independently of activities?",
          "Can ownership change without data duplication?",
        ],
      },
    ],
    faqs: coreFaqs(
      "CRM database design",
      "Start with accounts, contacts, deals, and activities as separate responsibilities, then build ownership and reporting layers around those core structures.",
    ),
    relatedToolSlugs: [
      "database-design-tool",
      "database-schema-generator",
      "postgresql-erd-tool",
      "sql-schema-generator",
    ],
    relatedTemplateSlugs: [
      "crm-database-schema",
      "saas-database-schema",
      "hr-management-database-schema",
    ],
    relatedCompareSlugs: [
      "database-schema-vs-erd",
      "prisma-vs-typeorm",
      "mysql-vs-postgresql",
    ],
  }),
  guide({
    slug: "saas-database-design-guide",
    title: "SaaS Database Design Guide | drawDB",
    h1: "SaaS database design guide for tenants, billing, roles, and product events",
    description:
      "Learn how to design a SaaS database with tenant boundaries, memberships, billing, permissions, and product event structure.",
    category: "use-cases",
    readingTime: "13 min read",
    intro:
      "SaaS schemas are difficult because they combine account boundaries, user roles, billing state, feature access, and auditability inside one backend model.",
    sections: [
      {
        id: "tenant-boundaries",
        title: "Model tenant boundaries first",
        summary:
          "The cleanest SaaS schemas make it obvious what belongs to an organization, workspace, or account boundary before adding features on top.",
        points: [
          "Organizations or workspaces often become the primary multi-tenant boundary.",
          "Memberships should express how users connect to those boundaries.",
          "Many later problems come from unclear tenant ownership early on.",
        ],
      },
      {
        id: "roles-permissions",
        title: "Separate roles, memberships, and permissions carefully",
        summary:
          "Access control becomes a long-term structural concern in SaaS, so it should not be hidden in a few boolean columns.",
        points: [
          "Membership roles often need to be explicit and queryable.",
          "Feature permissions may belong at account, role, or plan level depending on the product.",
          "Audit requirements usually grow as the product matures.",
        ],
      },
      {
        id: "billing-structure",
        title: "Keep billing and product usage logically distinct",
        summary:
          "Billing affects the product, but the schema becomes brittle when billing structure and operational product tables are collapsed together.",
        points: [
          "Plans, subscriptions, invoices, and entitlements should be clear product concepts.",
          "Usage or event data may need its own modeling path.",
          "Do not overload one table with both account metadata and billing lifecycle logic.",
        ],
      },
      {
        id: "saas-checklist",
        title: "SaaS schema review checklist",
        summary:
          "Before shipping the first version, check whether the schema can survive permission changes, billing iteration, and tenant growth.",
        points: [
          "Review whether tenant boundaries remain obvious everywhere.",
          "Review whether memberships and roles are evolvable.",
          "Review whether billing can change without rewriting the whole model.",
        ],
        checklist: [
          "Can one user belong to multiple workspaces cleanly?",
          "Can billing change independently of product data?",
          "Are audits and events modelable without hacks?",
        ],
      },
    ],
    faqs: coreFaqs(
      "SaaS database design",
      "Start with tenant boundaries, memberships, and ownership first, then layer in billing, permissions, feature access, and event history as separate but connected concerns.",
    ),
    relatedToolSlugs: [
      "database-schema-generator",
      "postgresql-schema-generator",
      "prisma-schema-generator",
      "supabase-schema-designer",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "payroll-database-schema",
    ],
    relatedCompareSlugs: [
      "supabase-vs-firebase",
      "prisma-vs-typeorm",
      "mysql-vs-postgresql",
    ],
  }),
  guide({
    slug: "mysql-database-design-guide",
    title: "MySQL Database Design Guide | drawDB",
    h1: "MySQL database design guide for cleaner relational schemas",
    description:
      "Use this MySQL database design guide to plan tables, keys, and relationships for maintainable relational systems.",
    category: "database-engines",
    readingTime: "10 min read",
    intro:
      "A strong MySQL schema is not just about syntax. It depends on getting entity boundaries, foreign keys, and table responsibilities right before the DDL is finalized.",
    sections: [
      {
        id: "mysql-modeling",
        title: "Use MySQL with a strong relational model first",
        summary:
          "MySQL performs best in many real products when the underlying schema is already clear and normalized enough for the workload.",
        points: [
          "Model entities and joins before worrying about engine-level tuning.",
          "Keep transaction history and product state tables distinct where possible.",
          "Use explicit foreign keys and naming consistency to make the schema easier to maintain.",
        ],
      },
      {
        id: "table-design",
        title: "Design tables for clarity before optimization",
        summary:
          "If the table model is unclear, indexing and query tuning only optimize the wrong structure.",
        points: [
          "Review whether each table has one responsibility.",
          "Avoid burying relationship meaning inside generic status or type columns.",
          "Treat join tables as first-class design decisions when many-to-many structure appears.",
        ],
      },
      {
        id: "migration-readiness",
        title: "Prepare the model for migration safety",
        summary:
          "The earlier you check naming and ownership, the easier MySQL schema evolution becomes later.",
        points: [
          "Keep foreign key naming and table naming consistent.",
          "Review whether optional relationships are truly optional.",
          "Decide audit field standards before the schema spreads across many migrations.",
        ],
      },
    ],
    faqs: coreFaqs(
      "MySQL database design",
      "Start by modeling entities and relationships clearly, then validate table responsibilities, and only after that optimize the schema for MySQL-specific implementation concerns.",
    ),
    relatedToolSlugs: [
      "mysql-er-diagram",
      "mysql-schema-designer",
      "sql-table-designer",
      "database-schema-generator",
    ],
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "inventory-management-database-schema",
      "crm-database-schema",
    ],
    relatedCompareSlugs: [
      "mysql-vs-postgresql",
      "mysql-vs-mongodb",
      "sql-vs-nosql",
    ],
  }),
  guide({
    slug: "postgresql-database-design-guide",
    title: "PostgreSQL Database Design Guide | drawDB",
    h1: "PostgreSQL database design guide for relational depth and long-term schema quality",
    description:
      "Learn how to design PostgreSQL schemas with better relational modeling, normalization, and implementation discipline.",
    category: "database-engines",
    readingTime: "11 min read",
    intro:
      "PostgreSQL often shines when teams treat schema design as a first-class architectural decision instead of an afterthought hidden inside migrations.",
    sections: [
      {
        id: "postgres-structure",
        title: "Use PostgreSQL to support richer relational structure",
        summary:
          "PostgreSQL is often chosen because teams expect stronger relational modeling, query flexibility, and long-term schema evolution.",
        points: [
          "Take advantage of PostgreSQL by being explicit about ownership and constraints.",
          "Use the extra modeling flexibility to improve the design, not to make it more complex without reason.",
          "Keep transactional and reporting concerns separated when possible.",
        ],
      },
      {
        id: "constraint-discipline",
        title: "Let constraints reinforce the model",
        summary:
          "A strong PostgreSQL schema often benefits from treating constraints and relationships as part of the design language, not just as implementation details.",
        points: [
          "Use keys and uniqueness rules to make ownership and integrity unambiguous.",
          "Check whether references match the product lifecycle and state transitions.",
          "Review nullability assumptions carefully before the schema spreads.",
        ],
      },
      {
        id: "future-growth",
        title: "Design for the future complexity you actually expect",
        summary:
          "PostgreSQL supports sophisticated systems well, but only when the schema remains coherent as features accumulate.",
        points: [
          "Keep role systems, billing, and event history as separate responsibilities when needed.",
          "Use diagrams or templates to keep the structure explainable as teams grow.",
          "Normalize repeated concepts before they become embedded in business logic everywhere.",
        ],
      },
    ],
    faqs: coreFaqs(
      "PostgreSQL database design",
      "Use PostgreSQL to reinforce a strong relational model: define ownership clearly, use constraints intentionally, and keep schema decisions explicit before they become migration history.",
    ),
    relatedToolSlugs: [
      "postgresql-schema-generator",
      "postgresql-erd-tool",
      "database-normalization-tool",
      "sql-schema-generator",
    ],
    relatedTemplateSlugs: [
      "saas-database-schema",
      "crm-database-schema",
      "hospital-management-database-schema",
    ],
    relatedCompareSlugs: [
      "mysql-vs-postgresql",
      "sqlite-vs-postgresql",
      "supabase-vs-firebase",
    ],
  }),
];

export const guideSummaries = guidePages.map((guide) => ({
  slug: guide.slug,
  title: guide.h1,
  description: guide.description,
  href: guide.path,
  category: guide.category,
  readingTime: guide.readingTime,
}));

export function getGuidePageBySlug(slug: string) {
  return guidePages.find((guide) => guide.slug === slug);
}
