import { compare } from "bcrypt";
import { getUserByEmail } from "~/server/actions";
import { User } from "~/server/db/schema";
import { userTransformer } from "~/server/transformers/user";
import { generateTokens } from "~/server/utils/jwt";

export default defineEventHandler(async (event) => {
	const userData = await readBody<User>(event);
	if (!userData.passwordHash || !userData.email) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Invalid params",
			})
		);
	}

	// Is the user registered?
	const user = await getUserByEmail(userData.email);

	if (!user) {
		return sendError(
			event,
			createError({
				statusCode: 400,
				statusMessage: "Username or password is invalid",
			})
		);
	}

	// Compare passwords
	const passwordsMatch: boolean = await compare(
		userData.passwordHash,
		user[0].passwordHash
	);

	// Generate Tokens
	// Access token
	// Refresh token
	const { accessToken, refreshToken } = generateTokens(user[0]);

	return {
		accessToken,
		user: userTransformer(user[0]),
	};
});
