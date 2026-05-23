import React from 'react'

type Props = {}

export default function Navbar() {
    return (
        <header className="flex h-16 items-center justify-between border-b bg-white px-8">
            <h2 className="text-xl font-semibold">
                Dashboard
            </h2>

            <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center">
                    A
                </div>
            </div>
        </header>
    );
}