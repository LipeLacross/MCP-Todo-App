export const config = {
  port: parseInt(process.env.PORT || "3000"),
  jwtSecret: process.env.JWT_SECRET || "your-secret-key-change-this-in-production",
  nodeEnv: process.env.NODE_ENV || "development",
};
