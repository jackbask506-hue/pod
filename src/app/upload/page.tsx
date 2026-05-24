import { PageShell } from "@/components/page-shell";
import { UploadForm } from "@/components/upload-form";

export default function UploadPage() {
  return (
    <PageShell title="上传图片" description="用于上传 POD 商品图处理前的原始图片。">
      <UploadForm />
    </PageShell>
  );
}
