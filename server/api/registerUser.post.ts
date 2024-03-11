"use server";

import encryptPassword from "~/server/utils/encryptPassword";
import { db } from "../db/index";

import { User, users } from "../db/schema";

export default defineEventHandler(async (event) => {
	const user = await readBody<User>(event);
	user.passwordHash = await encryptPassword(user.passwordHash);

	await db.insert(users).values(user);
});
