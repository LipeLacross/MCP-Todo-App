import { createHash } from "crypto";

/**
 * Hash a password using SHA-256
 * Note: For production, consider using bcrypt or argon2
 */
export function hashPassword(password: string): string {
  return createHash("sha256").update(password).digest("hex");
}

/**
 * Verify a password against a hash
 */
export function verifyPassword(password: string, hash: string): boolean {
  const passwordHash = hashPassword(password);
  return passwordHash === hash;
}
