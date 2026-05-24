import "server-only";

import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const EXPORT_DIR = path.join(process.cwd(), "public", "exports");
const SAFE_FILENAME_PATTERN = /^[a-zA-Z0-9._-]+\.(xlsx|zip)$/;

function timestamp() {
  return new Date().toISOString().replace(/[-:]/g, "").replace(/\.\d{3}Z$/, "Z");
}

export function createExportFilename(prefix: string, extension: "xlsx" | "zip") {
  return `${prefix}-${timestamp()}.${extension}`;
}

export async function writePublicExportFile(filename: string, content: Buffer | Uint8Array) {
  await mkdir(EXPORT_DIR, { recursive: true });

  const filePath = getPublicExportFilePath(filename);
  await writeFile(filePath, content);

  return {
    downloadUrl: `/api/exports/files/${encodeURIComponent(filename)}`,
    filePath,
  };
}

export function getPublicExportFilePath(filename: string) {
  if (!SAFE_FILENAME_PATTERN.test(filename) || path.basename(filename) !== filename) {
    throw new Error("导出文件名无效");
  }

  return path.join(EXPORT_DIR, filename);
}

export function getExportContentType(filename: string) {
  return filename.endsWith(".xlsx")
    ? "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
    : "application/zip";
}

export function sanitizeFileSegment(value: string | null | undefined, fallback: string) {
  const source = value?.trim() || fallback;
  const sanitized = source
    .replaceAll("\\", "-")
    .replaceAll("/", "-")
    .replace(/[^a-zA-Z0-9._-]/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");

  return (sanitized || fallback).slice(0, 80);
}

export function inferImageExtension(url: string, contentType: string | null) {
  try {
    const extension = path.extname(new URL(url).pathname).toLowerCase();

    if ([".jpg", ".jpeg", ".png", ".webp"].includes(extension)) {
      return extension;
    }
  } catch {
    // Fall back to content type below.
  }

  if (contentType?.includes("jpeg")) {
    return ".jpg";
  }

  if (contentType?.includes("png")) {
    return ".png";
  }

  if (contentType?.includes("webp")) {
    return ".webp";
  }

  return ".jpg";
}
