"use client"

import { ArrowUpFromLine, House, ListMusic, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
    const pathname = usePathname()


    return (
        <div className="w-60 h-full sticky top-0 border-r p-5">
            <div className="flex flex-col gap-5">
                <ul>
                    <li className="p-2">
                        <Link href={'/'} className={`flex items-center gap-2 font-bold ${pathname === "/" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                            <House size={20} />
                            Home
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link href={'/'} className={`flex items-center gap-2 font-bold ${pathname === "/a" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                            <ArrowUpFromLine size={20} />
                            Upload
                        </Link>
                    </li>
                    <li className="p-2">
                        <Link href={'/'} className={`flex items-center gap-2 font-bold ${pathname === "/a" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                            <ListMusic size={20} />
                            Playlist
                        </Link>
                    </li>
                </ul>

            </div>
        </div>
    );
};