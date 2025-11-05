'use client'
import type { Variants } from "framer-motion";
export const fadeInUp: Variants = { hidden: { opacity: 0, y: 20 }, show: { opacity: 1, y: 0, transition: { duration: .6, ease: [0.22,1,0.36,1] } } };
export const stagger: Variants = { hidden: {}, show: { transition: { staggerChildren: .08 } } };
