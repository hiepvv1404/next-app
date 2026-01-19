//GET => HTTP METHOD GET
//POST => HTTP METHOD POST
//PUT => HTTP METHOD PUT
//DELETE => HTTP METHOD DELETE
//PATCH => HTTP METHOD PATCH

import { headers } from "next/headers";
import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export const GET = async (request: NextRequest) => {
  // search params
  const keyword = request.nextUrl.searchParams.get("keyword");
  const token = request.headers.get("token");
  // cach khac de lay token tu headers
  const token2 = (await headers()).get("token");
  // lay name tu cookies
  const name = (await cookies()).get("name")?.value;
  //set cookie
  (await cookies()).set("email", "a@gmail.com", {
    httpOnly: true,
    maxAge: 60 * 60 * 24, //1 ngay
  });
  //xoa cookie
  (await cookies()).delete("name");
  return NextResponse.json({
    success: true,
    message: "GET Users API",
    data: {
      keyword,
      token,
      token2,
      name_cookie: name,
    },
  });
};

export const POST = async (request: NextRequest) => {
  //neu la body json
  //   const body = await request.json();

  // Neu gui la form data
  const formData = await request.formData();
  //   const name = formData.get("name");
  //   const email = formData.get("email");

  const body: { [key: string]: string } = {};
  formData.forEach((value, key) => {
    body[key] = value.toString();
  });

  return NextResponse.json(
    {
      success: true,
      message: "Created successfully",
      data: body,
    },
    { status: 201 },
  );
};
