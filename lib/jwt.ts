import jwt from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET || "super-secret-key";

export function signToken(payload: object) {
  return jwt.sign(payload, SECRET, { expiresIn: "1d" }); // token valid 1 jam
}

// Verifikasi token
export function verifyToken(token: string) {
  return jwt.verify(token, SECRET);
}