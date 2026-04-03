"use client";
import { motion } from "framer-motion";
import { Globe, Users, Zap, Search } from "lucide-react";

export default function Home() {
  const pillars = [
    { icon: <Zap />, title: "Adoption", color: "text-blue-400" },
    { icon: <Users />, title: "Building", color: "text-purple-400" },
    { icon: <Globe />, title: "Connection", color: "text-pink-400" },
    { icon: <Search />, title: "Discovery", color: "text-indigo-400" },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="h-screen flex flex-col justify-center items-center px-4 relative overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="z-10 text-center"
        >
          <h1 className="text-7xl md:text-9xl font-extrabold tracking-tighter mb-4">
            ABCD<span className="text-indigo-500">.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-400 font-light max-w-2xl mx-auto">
            APAC BLOCKCHAIN DAY: The Pulse of Asia's Web3 Evolution.
          </p>
        </motion.div>
        
        {/* 背景光晕 */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-600/20 blur-[120px] rounded-full" />
      </section>

      {/* ABCD Grid */}
      <section className="py-20 max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {pillars.map((item, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              className="p-8 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <div className={`mb-4 ${item.color}`}>{item.icon}</div>
              <h3 className="text-xl font-bold mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm italic">ABCD - {item.title.charAt(0)}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
