"use client"

// lucide 
import { Search, } from "lucide-react";

// shadcn
import { Popover, PopoverContent, PopoverTrigger } from "../../../../components/ui/popover";

// next
import Image from "next/image";
import Link from "next/link";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { usePathname } from "next/navigation";


export default function Header() {
    const user = useSelector((state: RootState) => state.user.data);
    const pathname = usePathname();

    return (
        <header className="w-full py-3">
            <div className="flex items-center justify-between px-5">
                <Link href={'/'}>
                    <Image src="/assets/logo3.png" alt="logo" width={40} height={40} />
                </Link>

                {/* search */}
                <label className="w-6/12 flex items-center border py-2 px-3 rounded-full gap-3" htmlFor="searachInput">
                    <Search className="cursor-pointer" size={20} />
                    <input className="flex-1 outline-0" type="text" id="searachInput" />
                </label>


                {/* user avatar */}
                <Popover>
                    <PopoverTrigger className="cursor-pointer">
                        <Image className="rounded-full" src={user?.avatar || "/assets/google.webp"} alt={user?.name || "name"} width={33} height={33} />
                    </PopoverTrigger>
                    <PopoverContent className="py-3 px-5" align="end">
                        <ul>
                            <li className="p-2">
                                <Link href={'/'} className={`font-bold ${pathname === "/a" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                    Profile
                                </Link>
                            </li>
                            <li className="p-2">
                                <Link href={'/'} className={`font-bold ${pathname === "/a" ? "text-white" : "text-gray-400 hover:text-white"}`}>
                                    Log out
                                </Link>
                            </li>
                        </ul>
                    </PopoverContent>
                </Popover>

            </div>
        </header>
    );
};