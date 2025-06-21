export default function Section({
  title,
  controls,
  children,
}: {
  title: string;
  controls?: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <section className="relative mt-8">
      <div className="top-[52px] z-40 flex items-center justify-between border-b border-[#2e2e38] bg-[#161727fa] px-[15px] py-2.5 md:sticky">
        <h2 className="font-semibold tracking-[-.5px] text-white">{title}</h2>
        {controls}
      </div>
      {children}
    </section>
  );
}
