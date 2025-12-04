import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const path = req.nextUrl.pathname;

  const publicPaths = ["/login", "/signUp"];

  if (
    path.startsWith("/_next") ||
    path.startsWith("/_next/image") ||
    path.startsWith("/images") ||
    path === "/favicon.ico" ||
    path.startsWith("/api")
  ) {
    return NextResponse.next();
  }

  if (!token && !publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  if (token && publicPaths.includes(path)) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next|favicon.ico).*)"],
};
