"use client";

import { motion } from "framer-motion";

const LoadingSpinner = () => {
  return (
    <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50">
      <motion.div initial={{ opacity: 0, scale: 0.5 }} animate={{ opacity: 1, scale: 1 }} className="text-center">
        <div className="relative">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} className="w-16 h-16 border-4 border-purple-600/30 border-t-purple-600 rounded-full mx-auto mb-4" />
          <motion.div animate={{ rotate: -360 }} transition={{ duration: 1.5, repeat: Number.POSITIVE_INFINITY, ease: "linear" }} className="absolute inset-0 w-16 h-16 border-4 border-blue-600/30 border-b-blue-600 rounded-full mx-auto" />
        </div>
        <motion.p animate={{ opacity: [0.5, 1, 0.5] }} transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }} className="text-white text-lg font-medium">
          Loading...
        </motion.p>
      </motion.div>
    </div>
  );
};

export default LoadingSpinner;
