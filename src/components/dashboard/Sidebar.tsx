"use client";
import { LayoutDashboard, Library, MessageSquare, Settings } from 'lucide-react';
import React from 'react'
import SidebarItem from './SidebarItem';

type Props = {}

const routes = [
    {
        icon: LayoutDashboard,
        label: "Dashboard",
        href: "/dashboard"
    },
    {
        icon: MessageSquare,
        label: "AI Chat",
        href: "/chat"
    },
    {
        icon: Library,
        label: "Prompts Library",
        href: "/prompts"
    },
    {
        icon: Settings,
        label: "Settings",
        href: "/settings"
    }
]

export default function Sidebar({}: Props) {
    return (
        <aside className="hidden md:flex h-screen w-72 flex-col border-r bg-zinc-950 text-white dark:border-zinc-800">
            <div className="p-6">
                <h1 className="text-2xl font-bold">Brain Freeze</h1>
            </div>

            <nav className="flex flex-col gap-2 px-4">
                {routes.map((route) => (
                    <SidebarItem
                        key={route.href}
                        icon={route.icon}
                        label={route.label}
                        href={route.href}
                    />
                ))}
            </nav>
        </aside>   
    )
}