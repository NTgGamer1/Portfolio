import { Request, Response, NextFunction } from "express";
import {
  authenticateUser,
  createAccessToken,
  createRefreshToken,
} from "../services/auth.service";
import { serverConfig } from "../config/server";

function cookieOptions() {
  return {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax" as const,
    // maxAge is set per token type
  };
}

export async function login(req: Request, res: Response, next: NextFunction) {
  try {
    const { email, password } = req.body;
    const user = await authenticateUser({ email, password });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const accessToken = createAccessToken(user);
    const refreshToken = createRefreshToken(user);

    res.cookie("token", accessToken, {
      ...cookieOptions(),
      maxAge: 15 * 60 * 1000,
    });
    res.cookie("refreshToken", refreshToken, {
      ...cookieOptions(),
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    return res.json({ user });
  } catch (err) {
    next(err);
  }
}

export async function logout(req: Request, res: Response, next: NextFunction) {
  try {
    res.clearCookie("token");
    res.clearCookie("refreshToken");
    return res.json({ message: "Logged out" });
  } catch (err) {
    next(err);
  }
}

export async function me(req: Request, res: Response, next: NextFunction) {
  try {
    // authMiddleware will have populated req.user when used on protected routes;
    // for this public endpoint, try to read token manually
    const token =
      req.cookies?.token ??
      req.headers["authorization"]?.toString().replace(/^Bearer\s+/i, "");
    if (!token) return res.status(401).json({ message: "No token" });

    const jwt = await import("jsonwebtoken");
    const payload = jwt.verify(token, serverConfig.jwtSecret) as any;
    return res.json({
      user: { id: payload.sub, email: payload.email, role: payload.role },
    });
  } catch (err) {
    return res.status(401).json({ message: "Invalid token" });
  }
}

export async function refresh(req: Request, res: Response, next: NextFunction) {
  try {
    const refreshToken = req.cookies?.refreshToken;
    if (!refreshToken)
      return res.status(401).json({ message: "Missing refresh token" });

    const jwt = await import("jsonwebtoken");
    const payload = jwt.verify(
      refreshToken,
      serverConfig.jwtRefreshSecret,
    ) as any;

    const user = {
      id: payload.sub,
      email: payload.email,
      name: payload.email,
      role: payload.role,
    };
    const newAccess = createAccessToken(user);
    res.cookie("token", newAccess, {
      ...cookieOptions(),
      maxAge: 15 * 60 * 1000,
    });
    return res.json({ user });
  } catch (err) {
    return res.status(401).json({ message: "Invalid refresh token" });
  }
}
