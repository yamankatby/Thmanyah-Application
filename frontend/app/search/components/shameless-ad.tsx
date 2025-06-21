"use client";
import { atom, useAtomValue } from "jotai";
import { AnimatePresence, motion } from "motion/react";

export const showShamelessAdAtom = atom(false);

export default function ShamelessAd() {
  const showShamelessAd = useAtomValue(showShamelessAdAtom);

  return (
    <AnimatePresence>
      {showShamelessAd && (
        <motion.div
          initial={{ y: 140 }}
          animate={{ y: 0 }}
          exit={{ y: 140 }}
          className="fixed inset-x-0 bottom-0 z-50 flex flex-col items-center justify-center gap-2 pb-10"
        >
          <div className="flex w-[360px] flex-col gap-1 rounded-full bg-white/10 p-4 text-center text-sm text-white">
            <p className="text-xs text-white/40">
              Warning: Shameless Self Advertisement
            </p>
            <p>
              ابحث عن <strong>&quot;مطور&quot;</strong> حتى تسمع واحد من أفضل
              البودكاست الموجود على الشبكة العنكبوتية 😊
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
