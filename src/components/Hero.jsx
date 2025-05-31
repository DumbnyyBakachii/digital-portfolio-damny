import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="snap-start w-screen h-screen flex items-center justify-center bg-gradient-to-br from-indigo-900 to-purple-800 text-white">
      <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="text-center px-10">
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Danny Qusyairy</h1>
        <p className="text-xl mb-6">Web Designer & Future UX Engineer</p>
        <a href="#projects" className="inline-block bg-white text-indigo-900 px-6 py-2 rounded-full text-lg font-semibold shadow hover:scale-105 transition">
          Explore My Work →
        </a>
      </motion.div>
    </section>
  );
}
