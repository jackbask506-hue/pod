"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { navItems } from "@/lib/navigation";

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="flex h-full w-64 shrink-0 flex-col border-r border-zinc-200 bg-white">
      <div className="border-b border-zinc-200 px-6 py-5">
        <p className="text-xs font-semibold uppercase tracking-wide text-emerald-600">
          Internal POD
        </p>
        <h1 className="mt-2 text-lg font-semibold text-zinc-950">商品图批处理</h1>
      </div>

      <nav className="flex-1 space-y-1 overflow-y-auto px-3 py-4">
        {navItems.map((item) => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={[
                "block rounded-md px-3 py-2.5 text-sm transition",
                isActive
                  ? "bg-zinc-950 text-white"
                  : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-950",
              ].join(" ")}
            >
              <span className="font-medium">{item.title}</span>
              <span
                className={[
                  "mt-0.5 block text-xs",
                  isActive ? "text-zinc-300" : "text-zinc-500",
                ].join(" ")}
              >
                {item.description}
              </span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
