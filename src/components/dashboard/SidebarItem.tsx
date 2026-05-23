"use client"

import React from 'react'
import { LucideIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import Link from 'next/link';

type Props = {
    icon: LucideIcon;
    label: string;
    href: string;
}

export default function SidebarItem({ icon: Icon, label, href }: Props) {
    const pathname = usePathname();

    const active = pathname === href;
    return (
        <Link 
            href={href}
            className={clsx(
                "flex items-center gap-3 rounded-lg px-4 py-3 text-sm font-medium transition hover:bg-zinc-800",
                active && "bg-zinc-800"
            )}
        >
            <Icon className="h-5 w-5"/>
            {label}
        </Link>
    )
}