// import { User } from "../models/user.model";
// import { IUser } from "../validation/user.validation";
// import { env } from "../utilities/env";
// import { IDecodedToken } from "../validations/decodedToken.validation";
// import jwt, { JwtPayload } from "jsonwebtoken";


// //* findUserById
// export const findUserById = async (id: string): Promise<IUser | null> => {
// 	return await User.findById(id);
// };

// //* findUserByEmail
// export const findUserByEmail = async (
// 	email: string | undefined,
// ): Promise<IUser | null> => {
// 	try {
// 		if (!email) {
// 			throw new Error("Email is undefined");
// 		}
// 		return await User.findOne({ "login.email": email });
// 	} catch (err) {
// 		console.error("Error finding user by email:", err);
// 		return null;
// 	}
// };

// //* verifyToken
// export class AuthService {
// 	private decodedToken?: IDecodedToken;
// 	async verifyToken(token: string): Promise<IDecodedToken | null> {
// 		try {
// 			const decoded = jwt.verify(
// 				token,
// 				env.ACCESS_SECRET_TOKEN,
// 			) as JwtPayload;
// 			this.decodedToken = {
// 				id: decoded.id,
// 			};
// 			return this.decodedToken;
// 		} catch (error) {
// 			console.error("Error verifying token:", error);
// 			return null;
// 		}
// 	}

// 	getDecodedToken(): IDecodedToken | undefined {
// 		return this.decodedToken;
// 	}
// }