export type TemplateFaq = {
  question: string;
  answer: string;
};

export type TemplateTable = {
  name: string;
  purpose: string;
};

export type TemplatePage = {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  path: string;
  keyword: string;
  category: string;
  database: string;
  heroEyebrow: string;
  heroDescription: string;
  tableCount: number;
  summary: string;
  tables: TemplateTable[];
  sqlExample: string;
  useCases: string[];
  howToUse: string[];
  faqs: TemplateFaq[];
  relatedTemplateSlugs: string[];
  relatedToolSlugs: string[];
};

const sharedFaqs = (subject: string): TemplateFaq[] => [
  {
    question: `What is a ${subject} template used for?`,
    answer: `A ${subject} template gives you a fast starting point for modeling entities, relationships, and core business workflows without designing every table from scratch.`,
  },
  {
    question: "Can I customize the tables for my own product?",
    answer:
      "Yes. These template pages are designed as starting structures, so teams can add domain-specific tables, constraints, and workflows later.",
  },
  {
    question: "Why include SQL on a template detail page?",
    answer:
      "SQL examples help bridge search intent with implementation detail, making the page more useful for engineers evaluating schema structure.",
  },
  {
    question: "Will these templates connect to the future drawDB editor?",
    answer:
      "Yes. The long-term goal is for these template pages to connect directly into the visual editor workflow under /app.",
  },
];

export const templatePages: TemplatePage[] = [
  {
    slug: "ecommerce-database-schema",
    title: "Ecommerce Database Schema Template | drawDB",
    shortTitle: "Ecommerce Database Schema",
    description:
      "Explore a scalable ecommerce database schema template with users, products, orders, payments, and inventory relationships.",
    path: "/templates/ecommerce-database-schema",
    keyword: "ecommerce database schema",
    category: "commerce",
    database: "PostgreSQL",
    heroEyebrow: "Commerce Template",
    heroDescription:
      "A production-minded starting point for stores, carts, orders, fulfillment, inventory, and payment flows.",
    tableCount: 12,
    summary: "Designed for product catalogs, checkout flows, orders, fulfillment, inventory, and customer history.",
    tables: [
      { name: "users", purpose: "Customer accounts, profile data, and authentication linkage." },
      { name: "products", purpose: "Product catalog records including SKU and pricing data." },
      { name: "categories", purpose: "Product taxonomy and merchandising structure." },
      { name: "inventory", purpose: "Stock levels and warehouse tracking." },
      { name: "carts", purpose: "Temporary checkout state before order creation." },
      { name: "orders", purpose: "Placed order records and lifecycle state." },
      { name: "order_items", purpose: "Line items connecting orders to products." },
      { name: "payments", purpose: "Payment attempts, status, and gateway references." },
    ],
    sqlExample: `CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  full_name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE products (
  id BIGSERIAL PRIMARY KEY,
  sku TEXT UNIQUE NOT NULL,
  title TEXT NOT NULL,
  price_cents INTEGER NOT NULL
);

CREATE TABLE orders (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  status TEXT NOT NULL,
  total_cents INTEGER NOT NULL
);`,
    useCases: [
      "Online stores with product catalogs and checkout flows.",
      "Marketplace MVPs validating order and inventory logic.",
      "Headless commerce platforms planning fulfillment and payments.",
    ],
    howToUse: [
      "Start with products, inventory, carts, and orders to map the purchase lifecycle.",
      "Add payment, shipment, and discount tables based on the complexity of your store.",
      "Refine indexes and constraints after the entity flow is stable.",
    ],
    faqs: sharedFaqs("ecommerce database schema"),
    relatedTemplateSlugs: [
      "inventory-management-database-schema",
      "booking-system-database-schema",
      "saas-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "sql-schema-generator", "postgresql-erd-tool"],
  },
  {
    slug: "crm-database-schema",
    title: "CRM Database Schema Template | drawDB",
    shortTitle: "CRM Database Schema",
    description:
      "Model a CRM database schema for contacts, accounts, deals, activities, ownership, and pipeline visibility.",
    path: "/templates/crm-database-schema",
    keyword: "crm database schema",
    category: "business",
    database: "PostgreSQL",
    heroEyebrow: "CRM Template",
    heroDescription:
      "A flexible CRM data model covering contacts, companies, opportunities, tasks, notes, and activity history.",
    tableCount: 10,
    summary: "Built for account ownership, pipeline tracking, activity timelines, and sales reporting.",
    tables: [
      { name: "accounts", purpose: "Company or organization records." },
      { name: "contacts", purpose: "People linked to accounts, roles, and communication data." },
      { name: "deals", purpose: "Sales opportunities and revenue stages." },
      { name: "activities", purpose: "Calls, emails, meetings, and follow-up records." },
      { name: "owners", purpose: "Sales reps, CSMs, or internal stakeholders." },
      { name: "notes", purpose: "Freeform relationship and meeting notes." },
    ],
    sqlExample: `CREATE TABLE accounts (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  industry TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE contacts (
  id BIGSERIAL PRIMARY KEY,
  account_id BIGINT REFERENCES accounts(id),
  full_name TEXT NOT NULL,
  email TEXT
);

CREATE TABLE deals (
  id BIGSERIAL PRIMARY KEY,
  account_id BIGINT NOT NULL REFERENCES accounts(id),
  stage TEXT NOT NULL,
  amount_cents INTEGER
);`,
    useCases: [
      "B2B sales tools managing pipeline and account ownership.",
      "Customer success platforms tracking touchpoints and renewals.",
      "Internal revenue ops systems needing normalized reporting data.",
    ],
    howToUse: [
      "Define the relationship between accounts, contacts, and deals first.",
      "Add ownership, tasks, and activity history based on your workflow depth.",
      "Extend reporting tables only after the operational model is stable.",
    ],
    faqs: sharedFaqs("CRM database schema"),
    relatedTemplateSlugs: [
      "saas-database-schema",
      "hr-management-database-schema",
      "social-media-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "database-diagram-maker", "postgresql-erd-tool"],
  },
  {
    slug: "saas-database-schema",
    title: "SaaS Database Schema Template | drawDB",
    shortTitle: "SaaS Database Schema",
    description:
      "Plan a SaaS database schema for tenants, subscriptions, billing, seats, permissions, and product usage data.",
    path: "/templates/saas-database-schema",
    keyword: "saas database design",
    category: "software",
    database: "PostgreSQL",
    heroEyebrow: "SaaS Template",
    heroDescription:
      "A template for multi-tenant products with organizations, plans, seats, entitlements, billing, and audit history.",
    tableCount: 11,
    summary: "Supports tenant boundaries, subscriptions, member roles, permissions, and event history.",
    tables: [
      { name: "organizations", purpose: "Tenant or workspace boundary." },
      { name: "users", purpose: "Global user identity records." },
      { name: "memberships", purpose: "User-to-organization access and roles." },
      { name: "plans", purpose: "Pricing plans and entitlements." },
      { name: "subscriptions", purpose: "Billing state and active plan linkage." },
      { name: "feature_flags", purpose: "Plan-level or tenant-level feature access." },
      { name: "audit_logs", purpose: "Critical admin and product events." },
    ],
    sqlExample: `CREATE TABLE organizations (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE memberships (
  id BIGSERIAL PRIMARY KEY,
  organization_id BIGINT NOT NULL REFERENCES organizations(id),
  user_id BIGINT NOT NULL,
  role TEXT NOT NULL
);

CREATE TABLE subscriptions (
  id BIGSERIAL PRIMARY KEY,
  organization_id BIGINT NOT NULL REFERENCES organizations(id),
  plan_code TEXT NOT NULL,
  status TEXT NOT NULL
);`,
    useCases: [
      "B2B SaaS products with tenant and seat-based access models.",
      "Subscription businesses with plan entitlements and billing workflows.",
      "Admin platforms requiring auditability and account-level permissions.",
    ],
    howToUse: [
      "Model tenant boundaries first so roles and billing stay consistent.",
      "Add plan and subscription entities before building feature gating logic.",
      "Introduce audit and event logs once operational flows are defined.",
    ],
    faqs: sharedFaqs("SaaS database schema"),
    relatedTemplateSlugs: [
      "crm-database-schema",
      "payroll-database-schema",
      "hr-management-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "sql-schema-generator", "database-design-tool"],
  },
  {
    slug: "inventory-management-database-schema",
    title: "Inventory Management Database Schema Template | drawDB",
    shortTitle: "Inventory Management Database Schema",
    description:
      "Use this inventory management database schema template to model products, stock, warehouses, movements, and purchase orders.",
    path: "/templates/inventory-management-database-schema",
    keyword: "inventory database schema",
    category: "operations",
    database: "PostgreSQL",
    heroEyebrow: "Operations Template",
    heroDescription:
      "A practical inventory schema for warehouses, stock levels, suppliers, purchase orders, and transaction history.",
    tableCount: 10,
    summary: "Focused on stock visibility, warehouse operations, reorder flows, and movement history.",
    tables: [
      { name: "products", purpose: "SKU, title, unit, and catalog metadata." },
      { name: "warehouses", purpose: "Storage locations and capacity grouping." },
      { name: "stock_levels", purpose: "Available quantities by warehouse and product." },
      { name: "stock_movements", purpose: "Inbound, outbound, and adjustment history." },
      { name: "suppliers", purpose: "Vendor records and sourcing data." },
      { name: "purchase_orders", purpose: "Replenishment workflows and receiving state." },
    ],
    sqlExample: `CREATE TABLE warehouses (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  location_code TEXT
);

CREATE TABLE stock_levels (
  id BIGSERIAL PRIMARY KEY,
  warehouse_id BIGINT NOT NULL REFERENCES warehouses(id),
  product_id BIGINT NOT NULL,
  quantity_on_hand INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE stock_movements (
  id BIGSERIAL PRIMARY KEY,
  stock_level_id BIGINT NOT NULL REFERENCES stock_levels(id),
  movement_type TEXT NOT NULL,
  quantity_delta INTEGER NOT NULL
);`,
    useCases: [
      "Warehouse software and retail operations systems.",
      "Procurement platforms with supplier and reorder workflows.",
      "Ecommerce operations teams needing stock visibility by location.",
    ],
    howToUse: [
      "Start with products, warehouses, and stock levels as your core operational entities.",
      "Add movement history before introducing reporting or procurement detail.",
      "Expand into supplier and purchase order flows if replenishment is in scope.",
    ],
    faqs: sharedFaqs("inventory management database schema"),
    relatedTemplateSlugs: [
      "ecommerce-database-schema",
      "booking-system-database-schema",
      "hospital-management-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "sql-schema-generator", "postgresql-erd-tool"],
  },
  {
    slug: "booking-system-database-schema",
    title: "Booking System Database Schema Template | drawDB",
    shortTitle: "Booking System Database Schema",
    description:
      "Design a booking system database schema for reservations, schedules, availability, customers, and payments.",
    path: "/templates/booking-system-database-schema",
    keyword: "booking system database schema",
    category: "scheduling",
    database: "PostgreSQL",
    heroEyebrow: "Booking Template",
    heroDescription:
      "A reservation-focused data model for availability calendars, bookings, cancellations, and payment confirmation flows.",
    tableCount: 9,
    summary: "Useful for appointment apps, rentals, hospitality systems, and schedule-based services.",
    tables: [
      { name: "customers", purpose: "Booker identity and contact data." },
      { name: "resources", purpose: "Rooms, assets, staff, or slots being booked." },
      { name: "availability_slots", purpose: "Bookable time windows and capacity." },
      { name: "bookings", purpose: "Reservation state and confirmation data." },
      { name: "payments", purpose: "Transaction references and settlement status." },
      { name: "cancellations", purpose: "Cancellation reason and timeline data." },
    ],
    sqlExample: `CREATE TABLE resources (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  resource_type TEXT NOT NULL
);

CREATE TABLE availability_slots (
  id BIGSERIAL PRIMARY KEY,
  resource_id BIGINT NOT NULL REFERENCES resources(id),
  starts_at TIMESTAMPTZ NOT NULL,
  ends_at TIMESTAMPTZ NOT NULL
);

CREATE TABLE bookings (
  id BIGSERIAL PRIMARY KEY,
  customer_id BIGINT NOT NULL,
  slot_id BIGINT NOT NULL REFERENCES availability_slots(id),
  status TEXT NOT NULL
);`,
    useCases: [
      "Appointment software and scheduling tools.",
      "Rental, accommodation, or event booking platforms.",
      "Capacity-driven reservation systems with payment workflows.",
    ],
    howToUse: [
      "Define resources and availability separately so bookings stay flexible.",
      "Model booking states and cancellations early to support edge cases.",
      "Add payment tables only where reservation confirmation depends on payment.",
    ],
    faqs: sharedFaqs("booking system database schema"),
    relatedTemplateSlugs: [
      "inventory-management-database-schema",
      "school-management-database-schema",
      "hospital-management-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "database-diagram-maker", "postgresql-erd-tool"],
  },
  {
    slug: "school-management-database-schema",
    title: "School Management Database Schema Template | drawDB",
    shortTitle: "School Management Database Schema",
    description:
      "A school management database schema template for students, classes, schedules, enrollments, grades, and attendance.",
    path: "/templates/school-management-database-schema",
    keyword: "school management database schema",
    category: "education",
    database: "PostgreSQL",
    heroEyebrow: "Education Template",
    heroDescription:
      "Model academic entities like students, teachers, courses, sections, attendance, and grading workflows.",
    tableCount: 11,
    summary: "Covers student records, course schedules, enrollment, attendance, and assessments.",
    tables: [
      { name: "students", purpose: "Student identity and academic profile data." },
      { name: "teachers", purpose: "Faculty records and assignment ownership." },
      { name: "courses", purpose: "Catalog of subjects or programs." },
      { name: "sections", purpose: "Scheduled teaching instances of courses." },
      { name: "enrollments", purpose: "Student participation in sections." },
      { name: "attendance", purpose: "Presence, absence, and attendance records." },
      { name: "grades", purpose: "Assessment results and grade tracking." },
    ],
    sqlExample: `CREATE TABLE students (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  enrollment_number TEXT UNIQUE NOT NULL
);

CREATE TABLE sections (
  id BIGSERIAL PRIMARY KEY,
  course_id BIGINT NOT NULL,
  teacher_id BIGINT NOT NULL,
  term_code TEXT NOT NULL
);

CREATE TABLE enrollments (
  id BIGSERIAL PRIMARY KEY,
  student_id BIGINT NOT NULL REFERENCES students(id),
  section_id BIGINT NOT NULL REFERENCES sections(id)
);`,
    useCases: [
      "School administration systems.",
      "Learning management back-office platforms.",
      "Student information systems with attendance and grade tracking.",
    ],
    howToUse: [
      "Separate catalog tables like courses from scheduled instances like sections.",
      "Use enrollments as the bridge between students and active teaching sections.",
      "Add reporting-specific tables only after academic workflows are stable.",
    ],
    faqs: sharedFaqs("school management database schema"),
    relatedTemplateSlugs: [
      "hospital-management-database-schema",
      "booking-system-database-schema",
      "hr-management-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "sql-schema-generator", "database-design-tool"],
  },
  {
    slug: "hospital-management-database-schema",
    title: "Hospital Management Database Schema Template | drawDB",
    shortTitle: "Hospital Management Database Schema",
    description:
      "Plan a hospital management database schema for patients, doctors, appointments, admissions, billing, and care records.",
    path: "/templates/hospital-management-database-schema",
    keyword: "hospital management database schema",
    category: "healthcare",
    database: "PostgreSQL",
    heroEyebrow: "Healthcare Template",
    heroDescription:
      "A starting model for patient records, clinician assignment, appointments, admissions, treatment, and billing flows.",
    tableCount: 12,
    summary: "Built for patient operations, provider workflows, admissions, treatment records, and medical billing.",
    tables: [
      { name: "patients", purpose: "Core patient profile and identity data." },
      { name: "doctors", purpose: "Clinician records and specialty assignment." },
      { name: "appointments", purpose: "Consultation scheduling and status." },
      { name: "admissions", purpose: "Inpatient stays and ward movement." },
      { name: "medical_records", purpose: "Clinical notes and case history." },
      { name: "invoices", purpose: "Billing and payment collections." },
    ],
    sqlExample: `CREATE TABLE patients (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  date_of_birth DATE NOT NULL
);

CREATE TABLE appointments (
  id BIGSERIAL PRIMARY KEY,
  patient_id BIGINT NOT NULL REFERENCES patients(id),
  doctor_id BIGINT NOT NULL,
  scheduled_at TIMESTAMPTZ NOT NULL,
  status TEXT NOT NULL
);

CREATE TABLE admissions (
  id BIGSERIAL PRIMARY KEY,
  patient_id BIGINT NOT NULL REFERENCES patients(id),
  admitted_at TIMESTAMPTZ NOT NULL,
  discharge_at TIMESTAMPTZ
);`,
    useCases: [
      "Hospital operations planning and patient workflow systems.",
      "Clinic management systems with appointment and billing modules.",
      "Healthcare administration tools requiring structured patient records.",
    ],
    howToUse: [
      "Start with patient, provider, and appointment entities before complex clinical records.",
      "Add admissions and treatment history if inpatient operations are in scope.",
      "Separate operational billing from medical records for cleaner data boundaries.",
    ],
    faqs: sharedFaqs("hospital management database schema"),
    relatedTemplateSlugs: [
      "booking-system-database-schema",
      "school-management-database-schema",
      "inventory-management-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "postgresql-erd-tool", "database-diagram-maker"],
  },
  {
    slug: "hr-management-database-schema",
    title: "HR Management Database Schema Template | drawDB",
    shortTitle: "HR Management Database Schema",
    description:
      "Use this HR management database schema template for employees, departments, leave, performance, and org structure.",
    path: "/templates/hr-management-database-schema",
    keyword: "hr management database schema",
    category: "people-ops",
    database: "PostgreSQL",
    heroEyebrow: "HR Template",
    heroDescription:
      "A people-operations schema for employees, departments, managers, policies, leave requests, and reviews.",
    tableCount: 9,
    summary: "Supports employee lifecycle, org structure, leave management, and performance review workflows.",
    tables: [
      { name: "employees", purpose: "Core people records and employment data." },
      { name: "departments", purpose: "Functional team structure." },
      { name: "positions", purpose: "Role definitions and org mapping." },
      { name: "leave_requests", purpose: "Time-off workflows and approval status." },
      { name: "reviews", purpose: "Performance cycles and outcomes." },
      { name: "managers", purpose: "Reporting lines and approver hierarchy." },
    ],
    sqlExample: `CREATE TABLE employees (
  id BIGSERIAL PRIMARY KEY,
  full_name TEXT NOT NULL,
  work_email TEXT UNIQUE NOT NULL,
  department_id BIGINT
);

CREATE TABLE departments (
  id BIGSERIAL PRIMARY KEY,
  name TEXT NOT NULL
);

CREATE TABLE leave_requests (
  id BIGSERIAL PRIMARY KEY,
  employee_id BIGINT NOT NULL REFERENCES employees(id),
  starts_on DATE NOT NULL,
  ends_on DATE NOT NULL,
  status TEXT NOT NULL
);`,
    useCases: [
      "Internal HR platforms and people ops tooling.",
      "Employee self-service systems with leave and review modules.",
      "Back-office operational systems for growing teams.",
    ],
    howToUse: [
      "Model employees, departments, and reporting lines first.",
      "Add leave and review modules based on process maturity.",
      "Keep payroll as a separate concern unless your app requires full integration.",
    ],
    faqs: sharedFaqs("HR management database schema"),
    relatedTemplateSlugs: [
      "payroll-database-schema",
      "saas-database-schema",
      "school-management-database-schema",
    ],
    relatedToolSlugs: ["database-schema-generator", "sql-schema-generator", "database-design-tool"],
  },
  {
    slug: "payroll-database-schema",
    title: "Payroll Database Schema Template | drawDB",
    shortTitle: "Payroll Database Schema",
    description:
      "Explore a payroll database schema template for employees, compensation, pay runs, deductions, taxes, and disbursements.",
    path: "/templates/payroll-database-schema",
    keyword: "payroll database schema",
    category: "finance-ops",
    database: "PostgreSQL",
    heroEyebrow: "Payroll Template",
    heroDescription:
      "A payroll-oriented schema for pay periods, earnings, deductions, tax records, and payment disbursement workflows.",
    tableCount: 10,
    summary: "Built for recurring payroll calculations, employee earnings, statutory deductions, and pay history.",
    tables: [
      { name: "employees", purpose: "Payroll-linked employee identity records." },
      { name: "pay_periods", purpose: "Cycle boundaries for salary processing." },
      { name: "pay_runs", purpose: "Execution records for each payroll cycle." },
      { name: "earnings", purpose: "Salary and incentive components." },
      { name: "deductions", purpose: "Benefits, loans, or manual deductions." },
      { name: "tax_records", purpose: "Withholding and statutory tax data." },
    ],
    sqlExample: `CREATE TABLE pay_periods (
  id BIGSERIAL PRIMARY KEY,
  starts_on DATE NOT NULL,
  ends_on DATE NOT NULL
);

CREATE TABLE pay_runs (
  id BIGSERIAL PRIMARY KEY,
  pay_period_id BIGINT NOT NULL REFERENCES pay_periods(id),
  status TEXT NOT NULL,
  processed_at TIMESTAMPTZ
);

CREATE TABLE earnings (
  id BIGSERIAL PRIMARY KEY,
  pay_run_id BIGINT NOT NULL REFERENCES pay_runs(id),
  employee_id BIGINT NOT NULL,
  amount_cents INTEGER NOT NULL
);`,
    useCases: [
      "HRIS and payroll management platforms.",
      "Back-office salary processing systems.",
      "Operational finance tools requiring recurring compensation logic.",
    ],
    howToUse: [
      "Separate pay periods from pay runs so you can track both schedule and execution.",
      "Model earnings and deductions as line items for flexibility.",
      "Only combine payroll with HR entities if your product owns both workflows.",
    ],
    faqs: sharedFaqs("payroll database schema"),
    relatedTemplateSlugs: [
      "hr-management-database-schema",
      "saas-database-schema",
      "crm-database-schema",
    ],
    relatedToolSlugs: ["sql-schema-generator", "database-schema-generator", "postgresql-erd-tool"],
  },
  {
    slug: "social-media-database-schema",
    title: "Social Media Database Schema Template | drawDB",
    shortTitle: "Social Media Database Schema",
    description:
      "Build a social media database schema template with users, posts, follows, comments, likes, feeds, and messaging entities.",
    path: "/templates/social-media-database-schema",
    keyword: "social media database schema",
    category: "consumer-apps",
    database: "PostgreSQL",
    heroEyebrow: "Consumer App Template",
    heroDescription:
      "A normalized starting point for content creation, follows, interactions, feeds, moderation, and notifications.",
    tableCount: 11,
    summary: "Useful for social apps with profiles, user-generated content, engagement events, and messaging.",
    tables: [
      { name: "users", purpose: "Identity, handles, and profile records." },
      { name: "posts", purpose: "Primary published content entities." },
      { name: "comments", purpose: "Discussion attached to posts." },
      { name: "likes", purpose: "Engagement tracking for content and comments." },
      { name: "follows", purpose: "Social graph relationships." },
      { name: "messages", purpose: "Private communication between users." },
      { name: "notifications", purpose: "Event delivery for interactions and mentions." },
    ],
    sqlExample: `CREATE TABLE users (
  id BIGSERIAL PRIMARY KEY,
  handle TEXT UNIQUE NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE posts (
  id BIGSERIAL PRIMARY KEY,
  user_id BIGINT NOT NULL REFERENCES users(id),
  body TEXT NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

CREATE TABLE follows (
  id BIGSERIAL PRIMARY KEY,
  follower_id BIGINT NOT NULL REFERENCES users(id),
  followee_id BIGINT NOT NULL REFERENCES users(id)
);`,
    useCases: [
      "Social publishing platforms and creator communities.",
      "Consumer apps with follow graphs and interaction features.",
      "Community products needing content, engagement, and notification models.",
    ],
    howToUse: [
      "Model the user identity layer first because most entities depend on it.",
      "Keep interactions like comments and likes separate from core post records.",
      "Introduce feed denormalization only after the normalized core is stable.",
    ],
    faqs: sharedFaqs("social media database schema"),
    relatedTemplateSlugs: [
      "crm-database-schema",
      "saas-database-schema",
      "booking-system-database-schema",
    ],
    relatedToolSlugs: ["database-diagram-maker", "database-schema-generator", "postgresql-erd-tool"],
  },
];

export type TemplateSummary = {
  slug: string;
  title: string;
  description: string;
  href: string;
  database: string;
  tableCount: number;
  category: string;
};

export const templateSummaries: TemplateSummary[] = templatePages.map((template) => ({
  slug: template.slug,
  title: template.shortTitle,
  description: template.summary,
  href: template.path,
  database: template.database,
  tableCount: template.tableCount,
  category: template.category,
}));

export function getTemplatePageBySlug(slug: string) {
  return templatePages.find((template) => template.slug === slug);
}
