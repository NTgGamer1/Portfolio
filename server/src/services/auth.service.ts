import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { serverConfig } from "../config/server";
import { LoginRequest, AuthUser, TokenPayload } from "../types/auth.types";
import { findUserByEmail } from "../repositories/user.repository";

export async function authenticateUser(
  request: LoginRequest,
): Promise<AuthUser | null> {
  const user = await findUserByEmail(request.email);
  if (!user) return null;

  const match = await bcrypt.compare(request.password, user.passwordHash || "");
  if (!match) return null;

  return {
    id: user.id,
    email: user.email,
    name: user.name,
    role: String(user.role),
  };
}

export function createAccessToken(user: AuthUser): string {
  const payload: TokenPayload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, serverConfig.jwtSecret, { expiresIn: "15m" });
}

export function createRefreshToken(user: AuthUser): string {
  const payload: TokenPayload = {
    sub: user.id,
    email: user.email,
    role: user.role,
  };
  return jwt.sign(payload, serverConfig.jwtRefreshSecret, { expiresIn: "7d" });
}
