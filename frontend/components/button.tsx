export default function Button({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick?: () => void;
}) {
  return (
    <button
      className="h-[30px] cursor-pointer rounded-[5px] bg-gradient-to-b from-[#40678c] to-[#2c5378] px-3 text-[13px] text-white transition-all hover:brightness-125"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
