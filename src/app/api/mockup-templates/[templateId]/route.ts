import { NextResponse } from "next/server";

import { createSupabaseServiceRoleClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

const templateColumns = [
  "id",
  "name",
  "product_type",
  "scenes",
  "status",
  "created_at",
  "updated_at",
].join(",");

function getTemplateId(request: Request) {
  const pathname = new URL(request.url).pathname;
  return decodeURIComponent(pathname.split("/").filter(Boolean).at(-1) ?? "");
}

export async function GET(request: Request) {
  const templateId = getTemplateId(request);

  if (!templateId) {
    return NextResponse.json({ error: "缺少模板 ID" }, { status: 400 });
  }

  const supabase = createSupabaseServiceRoleClient();
  const { data, error } = await supabase
    .from("mockup_templates")
    .select(templateColumns)
    .eq("id", templateId)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ template: data });
}
