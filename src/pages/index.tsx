import { Inter } from "next/font/google";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { CloudIcon } from "@heroicons/react/24/outline";
import { Typewriter } from "react-simple-typewriter";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-zinc-800 ${inter.className} relative justify-center items-center flex`}>
      <div className="relative overflow-hidden">
        <main className="">
          <div className="text-center">
            <span className="text-6xl font-bold">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-600 text-transparent bg-clip-text">
                incompetent.dev
              </span>
            </span>




            <h1 className="md:text-2xl tracking-tight font-light text-gray-900 mb-4 mt-2">

              <span className="block text-zinc-300 xl:inline">creating solutions for your </span>{' '}

              <div className="block text-emerald-500 xl:inline">
                <Typewriter
                  words={['fivem server', 'discord bot']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={65}
                  delaySpeed={1000}
                />
              </div>


            </h1>
            <div className="flex justify-center ">
              <Link href="https://discord.gg/CczE95fWs3" className="py-1.5 px-5 bg-zinc-600 hover:bg-zinc-700 rounded-3xl transition duration-150 text-zinc-300 font-medium mr-2"><FontAwesomeIcon icon={faDiscord} /> discord</Link>
              <Link href="https://pterodactyl.incompetent.dev/" className="py-1.5 px-5 bg-emerald-600 hover:bg-emerald-700 transition duration-150 rounded-3xl text-black font-medium">game panel</Link>
            </div>


          </div>
        </main>
      </div>
    </div>
  );
}
