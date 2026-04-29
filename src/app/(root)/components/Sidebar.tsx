"use client"

import { House, SquarePlus } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    // path
    const pathname = usePathname()

    return (
        <div className="w-70 px-8 py-5 border-r border-gray-900">
            <ul className="flex flex-col gap-3">
                <li>
                    <Link className={`flex items-center gap-2  rounded-lg py-1 px-3 border border-transparent hover:border-violet-700 ${pathname === "/" ? "bg-violet-700" : "bg-none"}`} href={'/'}><House size={23} /><p className="font-bold">Home</p></Link>
                </li>
                <li>
                    <Link className={`flex items-center gap-2  rounded-lg py-1 px-3 border border-transparent hover:border-violet-700 ${pathname === "/create" ? "bg-violet-700" : "bg-none"}`} href={'/'}><SquarePlus size={23} /><p className="font-bold">Create song</p></Link>
                </li>
            </ul>
        </div>
    );
};