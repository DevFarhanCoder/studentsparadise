"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

export default function PageLoader() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [pathname, searchParams]);

  return (
    <AnimatePresence>
      {loading && (
        <>
          {/* Top Progress Bar */}
          <motion.div
            initial={{ scaleX: 0, opacity: 1 }}
            animate={{ scaleX: 1, opacity: 1 }}
            exit={{ scaleX: 1, opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 z-[9999] origin-left shadow-2xl shadow-cyan-500/80"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 blur-sm"></div>
          </motion.div>

          {/* Overlay with Spinner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-[#0a1628]/80 backdrop-blur-sm z-[9998] flex items-center justify-center"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="relative"
            >
              {/* Spinning Ring */}
              <div className="w-16 h-16 rounded-full border-4 border-gray-700 border-t-yellow-400 animate-spin"></div>

              {/* Inner Glow */}
              <div className="absolute inset-0 w-16 h-16 rounded-full bg-gradient-to-r from-yellow-400 to-amber-500 blur-xl opacity-30 animate-pulse"></div>
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
