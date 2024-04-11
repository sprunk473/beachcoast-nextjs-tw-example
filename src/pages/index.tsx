import { Inter } from "next/font/google";
import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDiscord } from '@fortawesome/free-brands-svg-icons';
import Link from "next/link";
import { CloudIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={`min-h-screen bg-zinc-800 ${inter.className} relative justify-center items-center flex`}>
      <div className="relative overflow-hidden">
        <main className="">
          <div className="text-center">
            <span className="text-6xl text-zinc-300 font-bold">
              in
              <span className="text-indigo-200">competent</span>
              .dev
            </span>

            <h1 className="md:text-2xl tracking-tight font-extralight text-gray-900 mb-4 mt-2">

              <span className="block text-zinc-300 xl:inline">private</span>{' '}
              <span className="block text-amber-100 xl:inline">development solutions</span>
            </h1>
            <div className="flex justify-center">
              <Link href="https://discord.gg/CczE95fWs3" className="py-1.5 px-5 bg-zinc-600 hover:bg-zinc-500 rounded text-indigo-200 font-medium mr-2"><FontAwesomeIcon icon={faDiscord} /> discord</Link>
              <Link href="https://pterodactyl.incompetent.dev/" className="py-1.5 px-5 bg-zinc-600 hover:bg-zinc-500 rounded text-blue-200 font-medium"><CloudIcon className="w-5 inline" /> game panel</Link>
            </div>


          </div>
        </main>
      </div>
    </div>
  );
}
