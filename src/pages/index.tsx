import { useSession, signIn, signOut } from "next-auth/react"
import React from 'react';
import { Inter } from "next/font/google";
import { EnvelopeIcon, KeyIcon, PaperAirplaneIcon } from '@heroicons/react/24/solid';
import type {
    GetServerSidePropsContext,
    InferGetServerSidePropsType,
} from "next"
import { getCsrfToken } from "next-auth/react"

const inter = Inter({ subsets: ["latin"] });

export default function Component() {
    const { data: session } = useSession()

    if (session) {
        return (
            <>
                Signed in as {session.user.email} / {session.user.name} <br />
                <button onClick={() => signOut()}>Sign out</button>


            </>
        )
    }
    return (
        <div className={` ${inter.className}`}>
            <div className="min-h-screen flex items-center justify-center bg-zinc-700">
                <div className="max-w-md w-full bg-zinc-800 p-8 rounded-md shadow-md">
                    <h2 className="text-2xl font-semibold text-center mb-4 text-zinc-300">
                        Portal Login
                    </h2>
                    <form method="post" action="/api/auth/callback/credentials">
                        <div className="relative mb-4">
                            <label htmlFor="email" className="block text-zinc-200 font-medium mb-2">
                                Email
                            </label>
                            <div className="relative">
                                <input type="email" id="email" name="email" className="text-zinc-200 bg-zinc-600 w-full px-4 py-2 border-2 border-zinc-400 rounded-md focus:outline-none focus:border-blue-500" />
                                <div className="shadow-md absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <EnvelopeIcon className="w-5 text-zinc-400" />
                                </div>
                            </div>
                        </div>

                        <div className="relative mb-6">
                            <label htmlFor="password" className="block text-zinc-200 font-medium mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <input type="password" id="password" name="password" className="text-zinc-200 bg-zinc-600 w-full px-4 py-2 border-2 border-zinc-400 rounded-md focus:outline-none focus:border-blue-500" />
                                <div className="shadow-md absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">
                                    <KeyIcon className="w-5 text-zinc-400" />
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="shadow-md w-full bg-green-700 text-white px-4 py-2 rounded-md flex items-center justify-center hover:bg-green-800 focus:outline-none">
                            <PaperAirplaneIcon className="w-5 mr-2" />
                            Login
                        </button>

                        <div className="mt-6">
                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <div className="w-full border-t border-zinc-300" />
                                </div>
                                <div className="relative flex justify-center text-sm">
                                    <span className="px-2 bg-zinc-800 text-zinc-400">Or continue with</span>
                                </div>
                            </div>
                        </div>
                    </form>

                    <div className="flex flex-col space-y-4 mt-4">
                        <button onClick={() => signIn('discord')} className="shadow-md bg-[#7289DA] text-white px-4 py-2 rounded-md flex items-center justify-center focus:outline-none">
                            <img src="logos/discord.png" alt="Discord Icon" className="w-6 h-6 mr-2 object-contain" />
                            Discord
                        </button>
                    </div>
                    <p className="text-center text-zinc-400 text-sm mt-4">© 2024 Beachcoast. All rights reserved.</p>
                </div>
            </div>
        </div>
    )
}
