import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
//eclaring enum in database

export const users = sqliteTable("users", {
	id: integer("id").notNull().primaryKey({ autoIncrement: true }),
	name: text("name").notNull(),
	email: text("email").notNull().unique(),
	country: text("country").notNull(),
	passwordHash: text("passwordHash", { length: 118 }).notNull(),
});

export const images = sqliteTable("images", {
	id: integer("id").notNull().primaryKey({ autoIncrement: true }),
	filePath: text("filePath"),
});

export const challenges = sqliteTable("challeges", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	requitement: text("requirement"),
});

export type User = typeof users.$inferSelect; // return type when queried
export type InsertUser = typeof users.$inferInsert; // insert type
