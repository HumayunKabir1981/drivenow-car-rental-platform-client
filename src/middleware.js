import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // সব cookies দেখুন
  const allCookies = request.cookies.getAll();
  console.log("All cookies:", allCookies.map(c => c.name));

  if (
    pathname.startsWith("/mybookings") ||
    pathname.startsWith("/addcar") ||
    pathname.startsWith("/explorecars/")
  ) {
    const token =
      request.cookies.get("better-auth.session_token")?.value ||
      request.cookies.get("__Secure-better-auth.session_token")?.value;

    console.log("Protected route hit:", pathname);
    console.log("Token:", token ? "EXISTS" : "NOT FOUND");

    if (!token) {
      const loginUrl = new URL("/login", request.url);
      loginUrl.searchParams.set("redirect", pathname);
      return NextResponse.redirect(loginUrl);
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};