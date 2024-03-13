"use server";

import encryptPassword from "~/server/utils/encryptPassword";
import { db } from "../../db/index";
import { userTransformer } from "~/server/transformers/user";
import { User, users } from "../../db/schema";

export default defineEventHandler(async (event) => {
	const user = await readBody<User>(event);
	if (!user.name || !user.country || !user.email || !user.passwordHash)
		return sendError(
			event,
			createError({ statusCode: 400, statusMessage: "Invalid params" })
		);
	user.passwordHash = await encryptPassword(user.passwordHash);

	await db.insert(users).values(user);
	return {
		body: userTransformer(user),
	};
});
