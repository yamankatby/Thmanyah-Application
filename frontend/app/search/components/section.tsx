export default function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="relative mt-8">
      <h2 className="top-[52px] z-40 border-b border-[#2e2e38] bg-[#161727fa] px-[15px] py-2.5 text-white md:sticky">
        {title}
      </h2>
      {children}
    </section>
  );
}
