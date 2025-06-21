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
      <div
        className="top-[52px] z-40 flex items-center justify-between border-b border-[#2e2e38] bg-[#161727fa] pt-2.5 pr-[12px] pb-[13px] pl-[20px] md:sticky"
        style={{
          boxShadow: "0px 5px 5px hsla(237,25%,12%,50%)",
        }}
      >
        <h2 className="font-semibold tracking-[-.5px] text-white">{title}</h2>
        {controls}
      </div>
      {children}
    </section>
  );
}
