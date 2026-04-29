"use client"

import { RootState } from "@/store/store";
import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function Header() {
    // user
    const user = useSelector((state: RootState) => state.user.data)

    return (
        <header className="w-full px-5 py-6 flex items-center justify-between">
            <Link href={'/'}>
                <Image src="/assets/101.png" alt="logo" width={100} height={100} />
            </Link>

            <label className="flex rounded-full px-3 py-1.5 border border-gray-500" htmlFor="">
                <input className="outline-0 px-2" type="text" />
                <Search className="text-gray-400 cursor-pointer" />
            </label>

            <span />
        </header>
    );
};