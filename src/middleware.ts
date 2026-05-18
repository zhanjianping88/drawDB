import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const apexHost = "schemaforge.cc";
const wwwHost = `www.${apexHost}`;

export function middleware(request: NextRequest) {
  const host = request.headers.get("host");

  if (host === wwwHost) {
    const url = request.nextUrl.clone();
    url.host = apexHost;
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/:path*",
};
