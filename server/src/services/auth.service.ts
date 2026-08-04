import { LoginRequest, AuthUser } from "../types/auth.types";

export async function authenticateUser(request: LoginRequest): Promise<AuthUser | null> {
  // Validate credentials and return user payload without business logic
  return null;
}

export function createAccessToken(user: AuthUser): string {
  // Generate JWT for authenticated users
  return "";
}

export function createRefreshToken(user: AuthUser): string {
  // Generate refresh token if using token rotation
  return "";
}
