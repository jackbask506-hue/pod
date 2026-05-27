import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      error: "设置优先设计图接口尚未实现",
      status: "not_implemented",
    },
    { status: 501 },
  );
}
