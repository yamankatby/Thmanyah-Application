"use client";
import { ChangeEvent } from "react";

interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
}

export default function SearchBar({ value, onChange }: SearchBarProps) {
  const handle = (e: ChangeEvent<HTMLInputElement>) => onChange(e.target.value);
  return (
    <input
      value={value}
      onChange={handle}
      placeholder="Search podcasts or episodes…"
      className="w-full rounded-md border px-4 py-2 text-lg shadow"
    />
  );
}
