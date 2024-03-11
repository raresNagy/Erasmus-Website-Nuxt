import { genSalt, hashSync } from "bcrypt";

export default async function (password: string | Buffer) {
	const salt = await genSalt();
	return hashSync(password, salt);
}
