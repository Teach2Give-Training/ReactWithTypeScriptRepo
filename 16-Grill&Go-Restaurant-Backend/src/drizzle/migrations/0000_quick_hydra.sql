CREATE TYPE "public"."userType" AS ENUM('member', 'admin');--> statement-breakpoint
CREATE TABLE "userTable" (
	"userId" serial PRIMARY KEY NOT NULL,
	"lastName" varchar,
	"email" varchar NOT NULL,
	"password" varchar NOT NULL,
	"userType" "userType" DEFAULT 'member',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
