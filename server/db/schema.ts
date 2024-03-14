import { relations } from "drizzle-orm/relations";
import { sqliteTable, integer, text } from "drizzle-orm/sqlite-core";

//declaring enums in database
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

export const challenges = sqliteTable("challneges", {
	id: integer("id").primaryKey({ autoIncrement: true }),
	requitement: text("requirement"),
});

export const refreshtokens = sqliteTable("refreshtokens", {
	id: integer("id").notNull().primaryKey({ autoIncrement: true }),
	token: text("token").unique(),
	userId: integer("userid").references(() => users.id),
});

export type User = typeof users.$inferSelect; // return type when queried
export type refreshToken = typeof refreshtokens.$inferSelect;
export type InsertUser = typeof users.$inferInsert; // insert type

export const usersToTokensRelations = relations(users, ({ one }) => ({
	refreshtokens: one(users),
}));

export const tokensToUsersRelations = relations(refreshtokens, ({ one }) => ({
	users: one(refreshtokens),
}));
