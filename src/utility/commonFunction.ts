import * as bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "./env.js";

export async function hashPassword(password: string): Promise<string> {
	const salt = await bcrypt.genSalt(10);
	return await bcrypt.hash(password, salt);
}

export const createAccessToken = (id: string, time: string) => {
	const secret = env.ACCESS_SECRET_TOKEN;
	if (!secret) {
		throw new Error("Missing environment variable JWT_SECRET");
	}
	return jwt.sign({ id }, secret, { expiresIn: time });
};

export const createRefreshToken = (id: string, time: string) => {
	const secret = env.REFRESH_SECRET_TOKEN;
	if (!secret) {
		throw new Error("Missing environment variable JWT_SECRET");
	}
	return jwt.sign({ id }, secret, { expiresIn: time });
};