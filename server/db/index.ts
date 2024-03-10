import { drizzle } from "drizzle-orm/libsql";
import { createClient } from "@libsql/client";

const client = createClient({
	// TODO change url after dev phase
	url: "http://localhost:8080",
	authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client);
