import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      error: "一键抠图任务接口尚未实现",
      status: "not_implemented",
    },
    { status: 501 },
  );
}
