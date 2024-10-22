import React from 'react'
import { Navbar } from '@/components/Navbar/Navbar'
export const Sidebar = () => {
    return (
        <div id="menu" className="bg-gray-900  z-10 text-slate-300 w-64 left-0 h-screen ">
            <div id="logo" className="my-4 px-6">
                <h1 className="text-lg md:text-2xl font-bold text-white">Dash<span className="text-blue-500">8</span>.</h1>
                <p className="text-slate-500 text-sm">Manage your actions and activities</p>
            </div>
            <div id="profile" className="px-6 py-10">
                <p className="text-slate-500">Welcome back,</p>
                <a href="#" className="inline-flex space-x-2 items-center">
                    <span className="text-sm md:text-base font-bold">
                        Carlos Calderon
                    </span>
                </a>
            </div>
            <Navbar />
        </div>
    )
}
