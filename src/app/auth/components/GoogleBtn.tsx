"use client"

import Image from "next/image";


export default function GoogleBtn() {
    const googleLogin = () => {
        window.location.href = `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/google/callback`
    };

    return (
        <button onClick={googleLogin} className="w-full p-2 rounded-lg border border-gray-400 flex items-center justify-center gap-5 cursor-pointer">
            <Image src="/assets/google.webp" alt="Google icon" width={24} height={24} />
            <p className="text-center font-bold text-gray-500 dark:text-white">Sign In with a Google</p>
        </button>
    );
};