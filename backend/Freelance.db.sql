BEGIN TRANSACTION;
CREATE TABLE IF NOT EXISTS "customers" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"username"	text,
	"password"	text,
	"first_name"	text,
	"last_name"	text,
	"email"	text,
	"phone_number"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "works" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "freelances" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"username"	text,
	"password"	text,
	"first_name"	text,
	"last_name"	text,
	"email"	text,
	"phone_number"	text,
	PRIMARY KEY("id" AUTOINCREMENT)
);
CREATE TABLE IF NOT EXISTS "empayment_contracts" (
	"id"	integer,
	"created_at"	datetime,
	"updated_at"	datetime,
	"deleted_at"	datetime,
	"note"	text,
	"work_id"	integer,
	"freelance_id"	integer,
	"customer_id"	integer,
	PRIMARY KEY("id" AUTOINCREMENT),
	CONSTRAINT "fk_freelances_empayment_contract" FOREIGN KEY("freelance_id") REFERENCES "freelances"("id"),
	CONSTRAINT "fk_works_empayment_contract" FOREIGN KEY("work_id") REFERENCES "works"("id"),
	CONSTRAINT "fk_customers_empayment_contract" FOREIGN KEY("customer_id") REFERENCES "customers"("id")
);
CREATE INDEX IF NOT EXISTS "idx_customers_deleted_at" ON "customers" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_works_deleted_at" ON "works" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_freelances_deleted_at" ON "freelances" (
	"deleted_at"
);
CREATE INDEX IF NOT EXISTS "idx_empayment_contracts_deleted_at" ON "empayment_contracts" (
	"deleted_at"
);
COMMIT;
