import { NextResponse } from "next/server";

export const runtime = "nodejs";

export async function POST() {
  return NextResponse.json(
    {
      error: "印花提取任务接口尚未实现",
      status: "not_implemented",
    },
    { status: 501 },
  );
}
