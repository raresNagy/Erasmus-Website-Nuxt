import { getUserByEmail } from "~/server/actions";
import { User } from "~/server/db/schema";

export default defineEventHandler(async (event) => {
	const userData = await readBody<User>(event);
	if (!userData.name || !userData.passwordHash || !userData.email) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Invalid params",
			})
		);
	}
	const user = getUserByEmail(userData.email);

	if (!user) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Username or password is invalid",
			})
		);
	}

	return {
		user: user,
	};
});
