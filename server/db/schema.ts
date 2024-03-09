import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";
//eclaring enum in database

export const users = sqliteTable("users", {
	id: integer("id").primaryKey().notNull(),
	name: text("name").notNull(),
	country: text("country").notNull(),
	passwordHash: text("passwordHash", { length: 64 }).notNull().unique(),
});

export const images = sqliteTable("images", {
	id: integer("id").primaryKey().notNull(),
	filePath: text("filePath"),
});

export const challenges = sqliteTable("challeges", {
	id: integer("id").primaryKey(),
	requitement: text("requirement"),
});

export type User = typeof users.$inferSelect; // return type when queried
export type InsertUser = typeof users.$inferInsert; // insert type

import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";

const sqlite = new Database("sqlite.db");
const db = drizzle(sqlite);
