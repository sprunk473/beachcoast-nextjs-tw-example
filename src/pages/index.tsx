import { Inter } from "next/font/google";
import React from "react";
import Link from "next/link";
import { Typewriter } from "react-simple-typewriter";
import Head from 'next/head';

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-zinc-800 ${inter.className} relative justify-center items-center flex`}>
      <Head>
        <title>incompetent.dev</title>
        <meta name="description" content="private solutions" />
        <meta property="og:image" content="incomp.png" />
        <link rel="icon" href="incomp.png" />
        <meta property="og:title" content="incompetent.dev" />
        <meta property="og:description" content="private solutions" />
        <meta property="og:image" content="incomp.png" />
      </Head>
      <div className="relative overflow-hidden">
        <main className="">
          <div className="text-center">
            <span className="text-4xl md:text-4xl font-bold">
              <span className="bg-gradient-to-r from-emerald-300 to-emerald-600 text-transparent bg-clip-text">
                incompetent.dev
              </span>
            </span>




            <h1 className="md:text-lg justify-center tracking-tight font- text-gray-900 mb-4 mt-2 inline flex">

              <span className="block text-zinc-300">creating solutions for your </span>{' '}

              <div className="block text-emerald-500 ml-1">
                <Typewriter
                  words={['fivem server', 'discord server']}
                  loop={false}
                  cursor
                  cursorStyle='_'
                  typeSpeed={100}
                  deleteSpeed={65}
                  delaySpeed={1000}
                />
              </div>


            </h1>
            <div className="flex justify-center space-x-2">
            <Link href="https://discord.gg/CczE95fWs3" className="group flex items-center justify-center hover:scale-95 py-1.5 px-5 bg-zinc-600 hover:bg-zinc-700 transition duration-150 rounded-3xl text-zinc-200 font-medium">
  <img src="discord-mark-white.png" alt="Game Panel Icon" className="w-5 mr-2 pointer-events-none" draggable="true" />
  discord
</Link>

              <Link href="https://pterodactyl.incompetent.dev/" className="group flex items-center justify-center hover:scale-95 py-1.5 px-5 bg-emerald-600 hover:bg-emerald-700 transition duration-150 rounded-3xl text-zinc-950 font-medium">
                game panel
              </Link>
            </div>


          </div>
        </main>
      </div>
    </div>
  );
}
