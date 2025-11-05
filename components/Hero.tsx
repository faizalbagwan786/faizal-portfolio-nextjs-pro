'use client'
import Image from "next/image";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "@/components/ui/motion";
import AnimatedBackground from "@/components/AnimatedBackground";

export function Hero() {
  return (
    <section className="relative grid items-center gap-10 md:grid-cols-[auto,1fr] py-6">
      <AnimatedBackground />
      <motion.div variants={stagger} initial="hidden" animate="show" className="flex items-center gap-6">
        <motion.div variants={fadeInUp} className="relative">
          <Image src="/avatar.jpg" width={128} height={128} alt="Faizal Bagwan" className="rounded-full border border-neutral-800 shadow-soft" />
          <span className="absolute -right-2 bottom-0 h-4 w-4 rounded-full bg-glow-400 shadow-glow" />
        </motion.div>
        <div>
          <motion.h1 variants={fadeInUp} className="text-5xl font-bold tracking-tight">Faizal Bagwan</motion.h1>
          <motion.p variants={fadeInUp} className="mt-2 text-lg text-neutral-300">
            DevOps • Cloud • Linux — I build automated, reliable systems with CI/CD, Docker/Kubernetes, and solid Linux fundamentals.
          </motion.p>
          <motion.p variants={fadeInUp} className="mt-2 max-w-2xl text-neutral-400">
            Adobe-certified (Premiere Pro & After Effects). I blend engineering with creative storytelling for docs, tutorials, and product demos.
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-5 flex gap-3">
            <a className="btn-primary" href="/contact">Hire me</a>
            <a className="btn-ghost" href="#projects">View Projects</a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
