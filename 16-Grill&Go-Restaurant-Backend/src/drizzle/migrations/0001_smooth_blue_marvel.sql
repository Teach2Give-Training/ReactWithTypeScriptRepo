CREATE TABLE "mealTable" (
	"mealName" varchar,
	"mealUrl" varchar,
	"mealDescription" varchar NOT NULL,
	"mealPrice" varchar NOT NULL,
	"mealBadge" varchar,
	"createdAt" timestamp DEFAULT now(),
	"updatedAt" timestamp DEFAULT now()
);
