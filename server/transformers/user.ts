import { User } from "../db/schema";

export const userTransformer = (user: User) => {
	return {
		id: user.id,
		name: user.name,
		email: user.email,
		country: user.country,
	};
};
