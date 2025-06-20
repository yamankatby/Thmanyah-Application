"use client";

import { cn } from "@/utils";
import { motion } from "motion/react";

export default function Logo({ size = "normal" }: { size?: "normal" | "sm" }) {
  return (
    <motion.img
      src="/logo.svg"
      whileTap={{ scale: 0.95 }}
      className={cn("cursor-pointer", { "size-[44px]": size === "sm" })}
    />
  );
}
