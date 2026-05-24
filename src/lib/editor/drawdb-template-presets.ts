import { getTemplatePageBySlug, type TemplatePage } from "@/data/templates";

type EditorFieldSeed = {
  name: string;
  type: string;
  primary?: boolean;
  unique?: boolean;
  notNull?: boolean;
  increment?: boolean;
};

type EditorTableSeed = {
  name: string;
  x: number;
  y: number;
  fields: EditorFieldSeed[];
};

type EditorRelationshipSeed = {
  fromTable: string;
  fromField: string;
  toTable: string;
  toField: string;
};

type EditorPreset = {
  database: string;
  title: string;
  tables: EditorTableSeed[];
  relationships: EditorRelationshipSeed[];
};

type DrawdbField = {
  id: string;
  name: string;
  type: string;
  default: string;
  check: string;
  primary: boolean;
  unique: boolean;
  notNull: boolean;
  increment: boolean;
  comment: string;
};

type DrawdbTable = {
  id: string;
  name: string;
  x: number;
  y: number;
  fields: DrawdbField[];
  comment: string;
  locked: boolean;
  hidden: boolean;
  collapsed: boolean;
  indices: never[];
  color: string;
};

type DrawdbRelationship = {
  id: string;
  startTableId: string;
  startFieldId: string;
  endTableId: string;
  endFieldId: string;
  name: string;
  cardinality: "one_to_many";
  updateConstraint: "No action";
  deleteConstraint: "No action";
};

export type DrawdbDiagram = {
  title: string;
  database: string;
  tables: DrawdbTable[];
  relationships: DrawdbRelationship[];
  notes: never[];
  subjectAreas: never[];
  types: never[];
  enums: never[];
};

const idField = (): EditorFieldSeed => ({
  name: "id",
  type: "bigint",
  primary: true,
  notNull: true,
  increment: true,
});

const timestampField = (): EditorFieldSeed => ({
  name: "created_at",
  type: "timestamp",
  notNull: true,
});

function table(name: string, x: number, y: number, fields: EditorFieldSeed[]): EditorTableSeed {
  return { name, x, y, fields };
}

function rel(fromTable: string, fromField: string, toTable: string, toField = "id"): EditorRelationshipSeed {
  return { fromTable, fromField, toTable, toField };
}

const presetMap: Record<string, EditorPreset> = {
  "ecommerce-database-schema": {
    database: "postgresql",
    title: "Ecommerce Database Schema",
    tables: [
      table("users", 80, 80, [idField(), { name: "email", type: "text", unique: true, notNull: true }, timestampField()]),
      table("products", 420, 70, [idField(), { name: "sku", type: "text", unique: true, notNull: true }, { name: "title", type: "text", notNull: true }, { name: "price_cents", type: "integer", notNull: true }]),
      table("categories", 760, 70, [idField(), { name: "name", type: "text", unique: true, notNull: true }]),
      table("inventory", 760, 280, [idField(), { name: "product_id", type: "bigint", notNull: true }, { name: "quantity_on_hand", type: "integer", notNull: true }]),
      table("orders", 90, 320, [idField(), { name: "user_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }, { name: "total_cents", type: "integer", notNull: true }]),
      table("order_items", 430, 320, [idField(), { name: "order_id", type: "bigint", notNull: true }, { name: "product_id", type: "bigint", notNull: true }, { name: "quantity", type: "integer", notNull: true }]),
      table("payments", 90, 560, [idField(), { name: "order_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }, { name: "provider_ref", type: "text" }]),
      table("carts", 430, 560, [idField(), { name: "user_id", type: "bigint", notNull: true }, timestampField()]),
    ],
    relationships: [
      rel("orders", "user_id", "users"),
      rel("order_items", "order_id", "orders"),
      rel("order_items", "product_id", "products"),
      rel("inventory", "product_id", "products"),
      rel("payments", "order_id", "orders"),
      rel("carts", "user_id", "users"),
    ],
  },
  "crm-database-schema": {
    database: "postgresql",
    title: "CRM Database Schema",
    tables: [
      table("accounts", 80, 80, [idField(), { name: "name", type: "text", notNull: true }, { name: "industry", type: "text" }]),
      table("contacts", 420, 80, [idField(), { name: "account_id", type: "bigint", notNull: true }, { name: "full_name", type: "text", notNull: true }, { name: "email", type: "text" }]),
      table("owners", 760, 80, [idField(), { name: "name", type: "text", notNull: true }, { name: "email", type: "text", unique: true }]),
      table("deals", 80, 320, [idField(), { name: "account_id", type: "bigint", notNull: true }, { name: "owner_id", type: "bigint" }, { name: "stage", type: "text", notNull: true }, { name: "amount_cents", type: "integer" }]),
      table("activities", 420, 320, [idField(), { name: "account_id", type: "bigint" }, { name: "contact_id", type: "bigint" }, { name: "owner_id", type: "bigint" }, { name: "activity_type", type: "text", notNull: true }]),
      table("notes", 760, 320, [idField(), { name: "account_id", type: "bigint" }, { name: "contact_id", type: "bigint" }, { name: "body", type: "text", notNull: true }]),
    ],
    relationships: [
      rel("contacts", "account_id", "accounts"),
      rel("deals", "account_id", "accounts"),
      rel("deals", "owner_id", "owners"),
      rel("activities", "account_id", "accounts"),
      rel("activities", "contact_id", "contacts"),
      rel("activities", "owner_id", "owners"),
      rel("notes", "account_id", "accounts"),
      rel("notes", "contact_id", "contacts"),
    ],
  },
  "saas-database-schema": {
    database: "postgresql",
    title: "SaaS Database Schema",
    tables: [
      table("organizations", 80, 80, [idField(), { name: "name", type: "text", notNull: true }, timestampField()]),
      table("users", 420, 80, [idField(), { name: "email", type: "text", unique: true, notNull: true }, timestampField()]),
      table("memberships", 760, 80, [idField(), { name: "organization_id", type: "bigint", notNull: true }, { name: "user_id", type: "bigint", notNull: true }, { name: "role", type: "text", notNull: true }]),
      table("plans", 80, 320, [idField(), { name: "code", type: "text", unique: true, notNull: true }, { name: "name", type: "text", notNull: true }]),
      table("subscriptions", 420, 320, [idField(), { name: "organization_id", type: "bigint", notNull: true }, { name: "plan_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }]),
      table("feature_flags", 760, 320, [idField(), { name: "plan_id", type: "bigint" }, { name: "organization_id", type: "bigint" }, { name: "feature_key", type: "text", notNull: true }]),
      table("audit_logs", 420, 560, [idField(), { name: "organization_id", type: "bigint", notNull: true }, { name: "actor_user_id", type: "bigint" }, { name: "event_name", type: "text", notNull: true }, timestampField()]),
    ],
    relationships: [
      rel("memberships", "organization_id", "organizations"),
      rel("memberships", "user_id", "users"),
      rel("subscriptions", "organization_id", "organizations"),
      rel("subscriptions", "plan_id", "plans"),
      rel("feature_flags", "plan_id", "plans"),
      rel("feature_flags", "organization_id", "organizations"),
      rel("audit_logs", "organization_id", "organizations"),
      rel("audit_logs", "actor_user_id", "users"),
    ],
  },
  "inventory-management-database-schema": {
    database: "postgresql",
    title: "Inventory Management Database Schema",
    tables: [
      table("products", 80, 80, [idField(), { name: "sku", type: "text", unique: true, notNull: true }, { name: "title", type: "text", notNull: true }]),
      table("warehouses", 420, 80, [idField(), { name: "name", type: "text", notNull: true }, { name: "location_code", type: "text" }]),
      table("stock_levels", 760, 80, [idField(), { name: "product_id", type: "bigint", notNull: true }, { name: "warehouse_id", type: "bigint", notNull: true }, { name: "available_qty", type: "integer", notNull: true }]),
      table("stock_movements", 80, 320, [idField(), { name: "product_id", type: "bigint", notNull: true }, { name: "warehouse_id", type: "bigint", notNull: true }, { name: "movement_type", type: "text", notNull: true }, { name: "quantity", type: "integer", notNull: true }]),
      table("suppliers", 420, 320, [idField(), { name: "name", type: "text", notNull: true }, { name: "email", type: "text" }]),
      table("purchase_orders", 760, 320, [idField(), { name: "supplier_id", type: "bigint", notNull: true }, { name: "warehouse_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }]),
    ],
    relationships: [
      rel("stock_levels", "product_id", "products"),
      rel("stock_levels", "warehouse_id", "warehouses"),
      rel("stock_movements", "product_id", "products"),
      rel("stock_movements", "warehouse_id", "warehouses"),
      rel("purchase_orders", "supplier_id", "suppliers"),
      rel("purchase_orders", "warehouse_id", "warehouses"),
    ],
  },
  "booking-system-database-schema": {
    database: "postgresql",
    title: "Booking System Database Schema",
    tables: [
      table("customers", 80, 80, [idField(), { name: "full_name", type: "text", notNull: true }, { name: "email", type: "text" }]),
      table("resources", 420, 80, [idField(), { name: "name", type: "text", notNull: true }, { name: "resource_type", type: "text", notNull: true }]),
      table("availability_slots", 760, 80, [idField(), { name: "resource_id", type: "bigint", notNull: true }, { name: "starts_at", type: "timestamp", notNull: true }, { name: "ends_at", type: "timestamp", notNull: true }]),
      table("bookings", 80, 320, [idField(), { name: "customer_id", type: "bigint", notNull: true }, { name: "resource_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }, { name: "starts_at", type: "timestamp", notNull: true }]),
      table("payments", 420, 320, [idField(), { name: "booking_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }, { name: "amount_cents", type: "integer", notNull: true }]),
      table("notifications", 760, 320, [idField(), { name: "booking_id", type: "bigint", notNull: true }, { name: "channel", type: "text", notNull: true }, { name: "sent_at", type: "timestamp" }]),
    ],
    relationships: [
      rel("availability_slots", "resource_id", "resources"),
      rel("bookings", "customer_id", "customers"),
      rel("bookings", "resource_id", "resources"),
      rel("payments", "booking_id", "bookings"),
      rel("notifications", "booking_id", "bookings"),
    ],
  },
  "school-management-database-schema": {
    database: "postgresql",
    title: "School Management Database Schema",
    tables: [
      table("students", 80, 80, [idField(), { name: "student_number", type: "text", unique: true, notNull: true }, { name: "full_name", type: "text", notNull: true }]),
      table("teachers", 420, 80, [idField(), { name: "full_name", type: "text", notNull: true }, { name: "email", type: "text" }]),
      table("classes", 760, 80, [idField(), { name: "teacher_id", type: "bigint", notNull: true }, { name: "class_name", type: "text", notNull: true }]),
      table("enrollments", 80, 320, [idField(), { name: "student_id", type: "bigint", notNull: true }, { name: "class_id", type: "bigint", notNull: true }, { name: "enrolled_at", type: "timestamp", notNull: true }]),
      table("assignments", 420, 320, [idField(), { name: "class_id", type: "bigint", notNull: true }, { name: "title", type: "text", notNull: true }, { name: "due_at", type: "timestamp" }]),
      table("grades", 760, 320, [idField(), { name: "student_id", type: "bigint", notNull: true }, { name: "assignment_id", type: "bigint", notNull: true }, { name: "score", type: "numeric", notNull: true }]),
    ],
    relationships: [
      rel("classes", "teacher_id", "teachers"),
      rel("enrollments", "student_id", "students"),
      rel("enrollments", "class_id", "classes"),
      rel("assignments", "class_id", "classes"),
      rel("grades", "student_id", "students"),
      rel("grades", "assignment_id", "assignments"),
    ],
  },
  "hospital-management-database-schema": {
    database: "postgresql",
    title: "Hospital Management Database Schema",
    tables: [
      table("patients", 80, 80, [idField(), { name: "medical_record_number", type: "text", unique: true, notNull: true }, { name: "full_name", type: "text", notNull: true }]),
      table("doctors", 420, 80, [idField(), { name: "full_name", type: "text", notNull: true }, { name: "specialty", type: "text" }]),
      table("departments", 760, 80, [idField(), { name: "name", type: "text", notNull: true }]),
      table("appointments", 80, 320, [idField(), { name: "patient_id", type: "bigint", notNull: true }, { name: "doctor_id", type: "bigint", notNull: true }, { name: "scheduled_at", type: "timestamp", notNull: true }]),
      table("admissions", 420, 320, [idField(), { name: "patient_id", type: "bigint", notNull: true }, { name: "department_id", type: "bigint", notNull: true }, { name: "admitted_at", type: "timestamp", notNull: true }]),
      table("prescriptions", 760, 320, [idField(), { name: "patient_id", type: "bigint", notNull: true }, { name: "doctor_id", type: "bigint", notNull: true }, { name: "medication_name", type: "text", notNull: true }]),
    ],
    relationships: [
      rel("appointments", "patient_id", "patients"),
      rel("appointments", "doctor_id", "doctors"),
      rel("admissions", "patient_id", "patients"),
      rel("admissions", "department_id", "departments"),
      rel("prescriptions", "patient_id", "patients"),
      rel("prescriptions", "doctor_id", "doctors"),
    ],
  },
  "hr-management-database-schema": {
    database: "postgresql",
    title: "HR Management Database Schema",
    tables: [
      table("employees", 80, 80, [idField(), { name: "employee_number", type: "text", unique: true, notNull: true }, { name: "full_name", type: "text", notNull: true }]),
      table("departments", 420, 80, [idField(), { name: "name", type: "text", notNull: true }]),
      table("roles", 760, 80, [idField(), { name: "title", type: "text", notNull: true }]),
      table("employment_records", 80, 320, [idField(), { name: "employee_id", type: "bigint", notNull: true }, { name: "department_id", type: "bigint", notNull: true }, { name: "role_id", type: "bigint", notNull: true }, { name: "hire_date", type: "date", notNull: true }]),
      table("leave_requests", 420, 320, [idField(), { name: "employee_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }, { name: "starts_on", type: "date", notNull: true }]),
      table("performance_reviews", 760, 320, [idField(), { name: "employee_id", type: "bigint", notNull: true }, { name: "review_period", type: "text", notNull: true }, { name: "rating", type: "numeric" }]),
    ],
    relationships: [
      rel("employment_records", "employee_id", "employees"),
      rel("employment_records", "department_id", "departments"),
      rel("employment_records", "role_id", "roles"),
      rel("leave_requests", "employee_id", "employees"),
      rel("performance_reviews", "employee_id", "employees"),
    ],
  },
  "payroll-database-schema": {
    database: "postgresql",
    title: "Payroll Database Schema",
    tables: [
      table("employees", 80, 80, [idField(), { name: "employee_number", type: "text", unique: true, notNull: true }, { name: "full_name", type: "text", notNull: true }]),
      table("pay_periods", 420, 80, [idField(), { name: "period_start", type: "date", notNull: true }, { name: "period_end", type: "date", notNull: true }]),
      table("payroll_runs", 760, 80, [idField(), { name: "pay_period_id", type: "bigint", notNull: true }, { name: "status", type: "text", notNull: true }]),
      table("earnings", 80, 320, [idField(), { name: "employee_id", type: "bigint", notNull: true }, { name: "payroll_run_id", type: "bigint", notNull: true }, { name: "gross_cents", type: "integer", notNull: true }]),
      table("deductions", 420, 320, [idField(), { name: "employee_id", type: "bigint", notNull: true }, { name: "payroll_run_id", type: "bigint", notNull: true }, { name: "amount_cents", type: "integer", notNull: true }]),
      table("payouts", 760, 320, [idField(), { name: "employee_id", type: "bigint", notNull: true }, { name: "payroll_run_id", type: "bigint", notNull: true }, { name: "net_cents", type: "integer", notNull: true }]),
    ],
    relationships: [
      rel("payroll_runs", "pay_period_id", "pay_periods"),
      rel("earnings", "employee_id", "employees"),
      rel("earnings", "payroll_run_id", "payroll_runs"),
      rel("deductions", "employee_id", "employees"),
      rel("deductions", "payroll_run_id", "payroll_runs"),
      rel("payouts", "employee_id", "employees"),
      rel("payouts", "payroll_run_id", "payroll_runs"),
    ],
  },
  "social-media-database-schema": {
    database: "postgresql",
    title: "Social Media Database Schema",
    tables: [
      table("users", 80, 80, [idField(), { name: "username", type: "text", unique: true, notNull: true }, { name: "email", type: "text", unique: true }]),
      table("posts", 420, 80, [idField(), { name: "user_id", type: "bigint", notNull: true }, { name: "body", type: "text", notNull: true }, timestampField()]),
      table("comments", 760, 80, [idField(), { name: "post_id", type: "bigint", notNull: true }, { name: "user_id", type: "bigint", notNull: true }, { name: "body", type: "text", notNull: true }]),
      table("likes", 80, 320, [idField(), { name: "post_id", type: "bigint", notNull: true }, { name: "user_id", type: "bigint", notNull: true }]),
      table("follows", 420, 320, [idField(), { name: "follower_id", type: "bigint", notNull: true }, { name: "following_id", type: "bigint", notNull: true }]),
      table("messages", 760, 320, [idField(), { name: "sender_id", type: "bigint", notNull: true }, { name: "recipient_id", type: "bigint", notNull: true }, { name: "body", type: "text", notNull: true }]),
    ],
    relationships: [
      rel("posts", "user_id", "users"),
      rel("comments", "post_id", "posts"),
      rel("comments", "user_id", "users"),
      rel("likes", "post_id", "posts"),
      rel("likes", "user_id", "users"),
      rel("follows", "follower_id", "users"),
      rel("follows", "following_id", "users"),
      rel("messages", "sender_id", "users"),
      rel("messages", "recipient_id", "users"),
    ],
  },
};

function normalizeDatabase(template: TemplatePage): string {
  const database = template.database.toLowerCase();

  if (database.includes("mysql")) return "mysql";
  if (database.includes("sqlite")) return "sqlite";
  if (database.includes("postgres")) return "postgresql";

  return "postgresql";
}

function fallbackPreset(template: TemplatePage): EditorPreset {
  return {
    database: normalizeDatabase(template),
    title: template.shortTitle,
    tables: template.tables.slice(0, 8).map((item, index) =>
      table(item.name, 80 + (index % 3) * 320, 80 + Math.floor(index / 3) * 240, [
        idField(),
        { name: "name", type: "text", notNull: true },
        timestampField(),
      ]),
    ),
    relationships: [],
  };
}

function toFieldId(tableName: string, fieldName: string) {
  return `${tableName}:${fieldName}`;
}

export function getDrawdbTemplateDiagram(slug: string): DrawdbDiagram | null {
  const template = getTemplatePageBySlug(slug);

  if (!template) {
    return null;
  }

  const preset = presetMap[slug] ?? fallbackPreset(template);

  const tables: DrawdbTable[] = preset.tables.map((seed) => ({
    id: seed.name,
    name: seed.name,
    x: seed.x,
    y: seed.y,
    comment: "",
    locked: false,
    hidden: false,
    collapsed: false,
    indices: [],
    color: "#175e7a",
    fields: seed.fields.map((field) => ({
      id: toFieldId(seed.name, field.name),
      name: field.name,
      type: field.type,
      default: "",
      check: "",
      primary: field.primary ?? false,
      unique: field.unique ?? false,
      notNull: field.notNull ?? false,
      increment: field.increment ?? false,
      comment: "",
    })),
  }));

  const relationships: DrawdbRelationship[] = preset.relationships.map((seed, index) => ({
    id: `${seed.fromTable}:${seed.fromField}->${seed.toTable}:${seed.toField}:${index}`,
    startTableId: seed.fromTable,
    startFieldId: toFieldId(seed.fromTable, seed.fromField),
    endTableId: seed.toTable,
    endFieldId: toFieldId(seed.toTable, seed.toField),
    name: "",
    cardinality: "one_to_many",
    updateConstraint: "No action",
    deleteConstraint: "No action",
  }));

  return {
    title: preset.title,
    database: preset.database,
    tables,
    relationships,
    notes: [],
    subjectAreas: [],
    types: [],
    enums: [],
  };
}
