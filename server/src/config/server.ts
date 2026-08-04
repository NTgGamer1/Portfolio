import dotenv from "dotenv";

dotenv.config();

export const serverConfig = {
  port: Number(process.env.PORT ?? 4000),
  jwtSecret: process.env.JWT_SECRET ?? "",
  jwtRefreshSecret: process.env.JWT_REFRESH_SECRET ?? "",
  cookieSecret: process.env.COOKIE_SECRET ?? "",
};
