import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const cookieName = request.nextUrl.searchParams.get("name") as string;
  const cookieValue = (await cookies()).get(cookieName)?.value || "";
  return NextResponse.json({
    cookies: cookieValue,
  });
}; // api dduwojc call trong FilterForm.tsx TRONG src/app/(main-layout)/products/_components/FilterForm.tsx

export const POST = async (request: NextRequest) => {
  const reqBody = await request.json();
  const cookieName = reqBody.name as string;
  const cookieValue = reqBody.value as string;
  (await cookies()).set(cookieName, cookieValue, {
    httpOnly: true,
    secure: true,
    maxAge: 60 * 60 * 24 * 7,
  });
  return NextResponse.json({
    message: `Cookie ${cookieName} set successfully`,
  });
};
