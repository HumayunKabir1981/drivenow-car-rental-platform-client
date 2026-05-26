import { NextResponse } from "next/server";

export function middleware(request) {
  const { pathname } = request.nextUrl;

  // কুকি থেকে টোকেন চেক করা হচ্ছে
  const token =
    request.cookies.get("__Secure-better-auth.session_token")?.value ||
    request.cookies.get("better-auth.session_token")?.value ||
    request.cookies.get("session_token")?.value;

  // সমাধান ১: এখানে '/explorecars' এর শেষের স্ল্যাশ (/) টি ফেলে দেওয়া হয়েছে
  const privateRoutes = ["/mybookings", "/addcar", "/explorecars"];

  // চেক করা হচ্ছে ইউজার কোনো প্রাইভেট রাউটে যাওয়ার চেষ্টা করছে কিনা
  const isProtected = privateRoutes.some((route) =>
    pathname.startsWith(route)
  );

  // যদি প্রাইভেট রাউট হয় এবং টোকেন না থাকে, তবে লগইনে রিডাইরেক্ট করবে
  if (isProtected && !token) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("redirect", pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

// সমাধান ২: ম্যাচারে রুট এবং চাইল্ড পাথ দুটোই আলাদাভাবে ডিফাইন করা হয়েছে
export const config = {
  matcher: [
    "/mybookings",
    "/addcar",
    "/explorecars",        // এটি শুধু মূল /explorecars পেজকে প্রটেক্ট করবে
    "/explorecars/:path*"  // এটি ভেতরের সব ডাইনামিক রাউটকে প্রটেক্ট করবে
  ],
};