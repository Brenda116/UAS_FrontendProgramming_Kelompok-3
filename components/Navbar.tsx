"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
    const [open, setOpen] = useState(false);
    const router = useRouter();

    const handleLogout = async () => {
        localStorage.removeItem("token");
        document.cookie = "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
        window.location.href = "/login";
        router.push("/login");
    };

    return (
        <main className="font-playfair bg-[var(--red)] fixed w-full z-1000 flex items-center justify-between px-6 py-4 shadow-md">
            <Link href="/">
                <Image
                src="/images/Logo.png"
                alt="NOTTE AZZURA"
                width={80}
                height={40}
                className="object-contain cursor-pointer"
                />
            </Link>
            <div
                className="text-(--cream) text-2xl font-bold cursor-pointer md:hidden"
                onClick={() => setOpen(!open)}
            >
                ☰
            </div>
            <nav className={`text-(--cream) md:flex md:items-center md:gap-10 md:static absolute top-full left-0 w-full md:w-auto bg-[rgba(130,31,6,0.7)] md:bg-transparent backdrop-blur-md md:backdrop-blur-0 shadow-md md:shadow-none flex flex-col items-center gap-8 md:flex-row transition-all duration-300 overflow-hidden ${open ? "max-h-100 py-4" : "max-h-0 md:max-h-none"}`}>
                <Link href="/">Home</Link>
                <Link href="/menu">Menu</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
                <Link href="/contactloc">Contact</Link>
                <Link href="/faq">FAQ</Link>
                <button onClick={ handleLogout } className="cursor-pointer">
                    Logout
                </button>
            </nav>
        </main>
    );
}