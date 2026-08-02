import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const cookie = request.cookies.get("admin-auth");

  return NextResponse.json({
    isAdmin: cookie?.value === "true",
  });
}