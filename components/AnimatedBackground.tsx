'use client'
import { motion } from "framer-motion";
export default function AnimatedBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div aria-hidden initial={{ opacity: .4, scale: 1 }} animate={{ opacity: [.35,.55,.35], scale: [1,1.05,1] }} transition={{ duration: 12, repeat: Infinity }} className="absolute -top-40 -left-40 h-[50rem] w-[50rem] rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(99,102,241,.35), transparent)" }} />
      <motion.div aria-hidden initial={{ opacity: .35, scale: 1 }} animate={{ opacity: [.3,.5,.3], scale: [1,1.1,1] }} transition={{ duration: 14, repeat: Infinity, delay: 2 }} className="absolute -bottom-52 -right-32 h-[45rem] w-[45rem] rounded-full blur-3xl" style={{ background: "radial-gradient(closest-side, rgba(34,211,238,.25), transparent)" }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,.06)_1px,transparent_1px)] [background-size:24px_24px]" />
    </div>
  );
}
