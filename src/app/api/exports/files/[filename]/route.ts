import { readFile } from "node:fs/promises";

import { NextResponse } from "next/server";

import {
  getExportContentType,
  getPublicExportFilePath,
} from "@/lib/exports/files";

export const runtime = "nodejs";

function getFilename(request: Request) {
  const pathname = new URL(request.url).pathname;
  return decodeURIComponent(pathname.split("/").filter(Boolean).at(-1) ?? "");
}

export async function GET(request: Request) {
  const filename = getFilename(request);

  if (!filename) {
    return NextResponse.json({ error: "缺少导出文件名" }, { status: 400 });
  }

  try {
    const file = await readFile(getPublicExportFilePath(filename));
    const encodedFilename = encodeURIComponent(filename);

    return new NextResponse(new Uint8Array(file), {
      headers: {
        "Cache-Control": "no-store",
        "Content-Disposition": `attachment; filename="${filename}"; filename*=UTF-8''${encodedFilename}`,
        "Content-Type": getExportContentType(filename),
      },
    });
  } catch (error) {
    const message = error instanceof Error ? error.message : "导出文件不存在";
    const status = message === "导出文件名无效" ? 400 : 404;

    return NextResponse.json({ error: message }, { status });
  }
}
