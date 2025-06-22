CREATE TYPE "public"."statusType" AS ENUM('pending', 'canceled', 'completed');--> statement-breakpoint
CREATE TABLE "orderTable" (
	"mealId" integer NOT NULL,
	"userId" integer NOT NULL,
	"statusType" "statusType" DEFAULT 'pending',
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
--> statement-breakpoint
ALTER TABLE "orderTable" ADD CONSTRAINT "orderTable_mealId_mealTable_mealId_fk" FOREIGN KEY ("mealId") REFERENCES "public"."mealTable"("mealId") ON DELETE cascade ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "orderTable" ADD CONSTRAINT "orderTable_userId_userTable_userId_fk" FOREIGN KEY ("userId") REFERENCES "public"."userTable"("userId") ON DELETE cascade ON UPDATE no action;