export default function SectionTag({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-block rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#0E4541]">
      {children}
    </span>
  );
}