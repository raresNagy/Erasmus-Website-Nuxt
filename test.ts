import { password } from "bun";

console.log(password.hashSync("simona20"));
console.log(password.hashSync("another password"));
