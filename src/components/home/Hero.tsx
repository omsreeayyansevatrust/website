"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-900 via-blue-800 to-green-700 text-white">
      <div className="absolute inset-0 bg-black/20" />

      <div className="relative container mx-auto px-6 py-24 lg:py-32">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
          >

            <span className="inline-block bg-yellow-400 text-black px-4 py-2 rounded-full font-semibold mb-6">
              Registered Charitable Trust
            </span>

            <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
              Om Sree Ayyan
              <br />
              Seva Trust
            </h1>

            <p className="mt-8 text-xl text-blue-100 leading-9">
              Serving Humanity through Education, Healthcare,
              Environmental Protection and Community Welfare.
            </p>

            <div className="mt-10 flex flex-wrap gap-5">

              <button className="bg-yellow-400 text-black font-semibold px-8 py-4 rounded-full hover:scale-105 transition">
                Become Volunteer
              </button>

              <button className="border border-white px-8 py-4 rounded-full hover:bg-white hover:text-blue-900 transition">
                Learn More
              </button>

            </div>

          </motion.div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity:0, x:80 }}
            animate={{ opacity:1, x:0 }}
            transition={{ duration:.8 }}
            className="flex justify-center"
          >

            <Image
              src="/logo.png"
              alt="Trust Logo"
              width={450}
              height={450}
              priority
              className="drop-shadow-2xl"
            />

          </motion.div>

        </div>

      </div>

    </section>
  );
}