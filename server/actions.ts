import { SQLWrapper, eq } from "drizzle-orm";
import { db } from "./db/index";

import { User, users } from "./db/schema";

import { genSalt, hashSync } from "bcrypt";

export async function createUser(user: User) {
	const salt = await genSalt();
	user.passwordHash = hashSync(user.passwordHash, salt);

	db.insert(users).values(user);
}

export const getUserByEmail = (email: string | SQLWrapper) => {
	return db.select().from(users).where(eq(users.email, email));
};
