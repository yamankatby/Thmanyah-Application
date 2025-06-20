"use client";

export default function Search() {
  return (
    <input
      type="text"
      placeholder="Search through over 70 million podcasts and episodes..."
      className="h-8 flex-1 rounded-[10px] border border-white/25 text-center text-sm text-white placeholder-[#8A8A91] focus:border-[#7B7BF0] focus:bg-white/5 focus:outline-none focus:placeholder:text-transparent"
      onChange={(e) => console.log(e.target.value)}
    />
  );
}
