"user server";

import { SQLWrapper, eq } from "drizzle-orm";
import { db } from "./db/index";

import { User, users } from "./db/schema";

import { genSalt, hashSync } from "bcrypt";

export async function createUser(user: User) {
	const salt = await genSalt();
	user.passwordHash = hashSync(user.passwordHash, salt);

	db.insert(users).values(user);
}

export async function getUserByEmail(email: string) {
	return await db.select().from(users).where(eq(users.email, email));
}
