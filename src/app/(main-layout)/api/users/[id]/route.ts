import { NextRequest, NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) => {
  const { id } = await params;
  return NextResponse.json({
    success: true,
    data: {
      id: +id, // Convert string to number
      name: "John Doe",
      email: "john.doe@example.com",
    },
  });
};
