import { createHmac } from "crypto";

const SECRET_KEY = process.env.JWT_SECRET || "your-secret-key-change-this-in-production";

interface TokenPayload {
  userId: number;
  email: string;
}

/**
 * Sign a JWT token (simplified version)
 * Note: For production, consider using the 'jsonwebtoken' library
 */
export function signToken(payload: TokenPayload): string {
  const header = Buffer.from(JSON.stringify({ alg: "HS256", typ: "JWT" })).toString("base64url");
  const body = Buffer.from(JSON.stringify({ ...payload, exp: Date.now() + 24 * 60 * 60 * 1000 })).toString("base64url");
  const signature = createHmac("sha256", SECRET_KEY).update(`${header}.${body}`).digest("base64url");
  return `${header}.${body}.${signature}`;
}

/**
 * Verify and decode a JWT token
 */
export function verifyToken(token: string): TokenPayload | null {
  try {
    const [header, body, signature] = token.split(".");
    const expectedSignature = createHmac("sha256", SECRET_KEY).update(`${header}.${body}`).digest("base64url");

    if (signature !== expectedSignature) {
      return null;
    }

    const payload = JSON.parse(Buffer.from(body, "base64url").toString());

    if (payload.exp && payload.exp < Date.now()) {
      return null; // Token expired
    }

    return payload as TokenPayload;
  } catch (error) {
    return null;
  }
}
