import { PageShell } from "@/components/page-shell";

export default function PrintExtractionPage() {
  return (
    <PageShell title="印花提取" description="从商品图中提取透明底印花图，支持后续批量处理。">
      <section className="rounded-md border border-zinc-200 bg-white p-6">
        <h3 className="text-base font-semibold text-zinc-950">印花图提取</h3>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-zinc-500">
          第一阶段已预留数据库结构、类型定义和接口入口。图像算法、素材选择、预览和批量任务将在后续任务中实现。
        </p>
      </section>
    </PageShell>
  );
}
