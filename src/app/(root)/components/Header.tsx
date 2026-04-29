"use client"

import { RootState } from "@/store/store";
import { Search, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useSelector } from "react-redux";


export default function Header() {
    // user
    const user = useSelector((state: RootState) => state.user.data);

    return (
        <header className="w-full px-8 py-4 flex items-center justify-between border-b border-gray-900">
            <Link href={'/'}>
                <Image src="/assets/101.png" alt="logo" width={100} height={100} />
            </Link>

            <label className="flex rounded-full px-3 py-1.5 border border-gray-500" htmlFor="">
                <input className="outline-0 px-2" type="text" />
                <Search className="text-gray-400 cursor-pointer" />
            </label>

            <Link href={'/'}>
                <Image className="rounded-full" src={user?.avatar || '/assets/defualtUser.png'} alt="User avatar" width={38} height={38} />
            </Link>
        </header>
    );
};