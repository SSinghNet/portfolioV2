import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function BlogSection({ active }: { active: boolean }) {
  return (
    <div
      data-active-panel={active ? "" : undefined}
      className={`absolute inset-0 overflow-y-auto transition-opacity duration-[220ms] ease-in-out pt-[52px] pb-[100px] px-5 md:px-[60px] ${active ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
    >
      <p className="font-code font-semibold text-[10px] tracking-[3px] uppercase mb-2 text-[var(--accent)]">Writing</p>
      <h2 className="font-body font-bold text-3xl mb-8 text-[var(--text-primary)]" style={{ letterSpacing: "-0.5px" }}>
        Blog
      </h2>

      <div className="max-w-[680px] rounded-[10px] overflow-hidden border border-[var(--border)]">
        {siteConfig.blogPosts.map((post, i) => (
          <>
            {i > 0 && <div key={`div-${i}`} className="h-px mx-6 bg-[var(--border)]" />}
            <PostRow key={i} post={post} />
          </>
        ))}
      </div>
    </div>
  );
}

function PostRow({ post }: { post: (typeof siteConfig.blogPosts)[number] }) {
  const [hovered, setHovered] = useState(false);
  return (
    <a
      href={post.url}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`flex items-start gap-5 px-6 py-5 no-underline transition-colors duration-150 ${hovered ? "bg-[var(--accent-muted)]" : "bg-[var(--bg-card)]"}`}
    >
      <span className="font-code font-medium text-[11px] text-[var(--text-faint)] w-[68px] flex-shrink-0 pt-0.5">
        {post.date}
      </span>
      <div className="flex-1">
        <div className="font-body font-semibold text-[15px] mb-1 text-[var(--text-primary)]">{post.title}</div>
        <div className="font-body text-[13px] leading-[1.55] text-[var(--text-muted)]">{post.excerpt}</div>
      </div>
      <span className="text-base flex-shrink-0 pt-0.5 text-[var(--accent)]">→</span>
    </a>
  );
}
