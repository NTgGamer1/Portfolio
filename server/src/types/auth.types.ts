export interface LoginRequest {
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  email: string;
  name: string;
  role: string;
}

export interface TokenPayload {
  sub: string;
  email: string;
  role: string;
}
