import { PageShell } from "@/components/page-shell";

const summaryCards = [
  { label: "今日上传", value: "0", note: "等待接入上传流程" },
  { label: "素材总数", value: "0", note: "等待接入素材库" },
  { label: "处理任务", value: "0", note: "等待接入批处理" },
  { label: "商品草稿", value: "0", note: "等待接入草稿管理" },
];

const workflowItems = [
  "上传图片",
  "整理素材库",
  "批量图片处理",
  "生成固定商品套图",
  "生成标题、描述、标签",
  "管理商品草稿",
  "导出 Excel 和图片 ZIP",
];

export default function DashboardPage() {
  return (
    <PageShell
      title="仪表盘"
      description="POD 商品图批量处理系统的基础入口，用于查看上传、处理、套图、文案、草稿和导出流程的概览。"
    >
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {summaryCards.map((card) => (
          <div key={card.label} className="rounded-md border border-zinc-200 bg-white p-5">
            <p className="text-sm text-zinc-500">{card.label}</p>
            <p className="mt-3 text-3xl font-semibold text-zinc-950">{card.value}</p>
            <p className="mt-2 text-xs text-zinc-500">{card.note}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
        <section className="rounded-md border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">批处理流程</h3>
          <div className="mt-5 grid gap-3 sm:grid-cols-2">
            {workflowItems.map((item, index) => (
              <div key={item} className="flex items-center gap-3 rounded-md bg-zinc-50 p-3">
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-emerald-100 text-sm font-semibold text-emerald-700">
                  {index + 1}
                </span>
                <span className="text-sm font-medium text-zinc-800">{item}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="rounded-md border border-zinc-200 bg-white p-6">
          <h3 className="text-base font-semibold text-zinc-950">第一版边界</h3>
          <div className="mt-5 space-y-3 text-sm leading-6 text-zinc-600">
            <p>当前仅搭建前端项目骨架和页面入口。</p>
            <p>暂不接入数据库、AI 服务、爬虫、支付、权限和自动上架流程。</p>
          </div>
        </section>
      </div>
    </PageShell>
  );
}
