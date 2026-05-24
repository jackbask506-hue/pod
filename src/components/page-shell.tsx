import type { ReactNode } from "react";

type PageShellProps = {
  title: string;
  description: string;
  children?: ReactNode;
};

export function PageShell({ title, description, children }: PageShellProps) {
  return (
    <section className="space-y-6">
      <div className="border-b border-zinc-200 pb-5">
        <p className="text-sm font-medium text-emerald-600">POD 工作台</p>
        <h2 className="mt-2 text-2xl font-semibold text-zinc-950">{title}</h2>
        <p className="mt-2 max-w-3xl text-sm leading-6 text-zinc-600">{description}</p>
      </div>
      {children}
    </section>
  );
}
