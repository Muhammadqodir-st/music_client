import { Search } from "lucide-react";
import Image from "next/image";

export default function Header() {
    return (
        <div className="w-full px-4 py-6 flex">
            <Image src="/assets/101.png" alt="logo" width={100} height={100} />

            <label className="flex border rounded-full px-3" htmlFor="">
                <input className="outline-0" type="text" />
                <Search />
            </label>
        </div>
    );
};