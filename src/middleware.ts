import { NextRequest, NextResponse } from "next/server";

export const middleware = (request: NextRequest) => {
  const pathname = request.nextUrl.pathname;
  //   console.log("Middleware executed: ", request.url);
  //   if (pathname.startsWith("/admin")) {
  //     console.log("xử lý cho đường dẫn /admin");
  //   } else {
  //     console.log("xử lý cho các đường dẫn khác /admin");
  //   }

  //   const cookie = request.cookies.get("name")?.value;
  //   const email = request.cookies.get("email")?.value;
  //   console.log("Cookie value:", cookie);
  //   console.log("Email value:", email);

  //   const allCookies = request.cookies.getAll();
  //   console.log("All cookies:", allCookies);

  //kiểm tra cookie có key ko
  //   const hasName = request.cookies.has("name");

  //set cookies
  //   const response = NextResponse.next();
  //   response.cookies.set("token", "abcd1234", {
  //     httpOnly: true,
  //     path: "/",
  //     maxAge: 60 * 60 * 24,
  //     secure: true,
  //   });
  //   response.cookies.delete("name");

  //   return response;

  // Rewrite URL
  if (pathname.startsWith("/gioi-thieu")) {
    return NextResponse.rewrite(new URL("/about", request.url));
  }
  if (pathname.startsWith("/san-pham")) {
    const productUrl = request.url;
    const result = productUrl.match(/[0-9]+$/i);
    if (result) {
      const productId = result[0];
      return NextResponse.rewrite(
        new URL(`/products/${productId}`, request.url),
      );
    }
    return NextResponse.rewrite(new URL(`/products`, request.url));
  }
};

export const config = {
  //   matcher: ["/admin/:path*"],
  matcher:
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
};
