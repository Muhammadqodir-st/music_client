"use client"

// next
import Image from "next/image";
import { useRouter } from "next/navigation";

// react
import { useEffect } from "react";

// redux
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    const router = useRouter();
    const user = useSelector((state: RootState) => state.user.data)

    useEffect(() => {
        if (user) return router.push("/");
    }, [router, user]);

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-8/10 h-190 rounded-2xl border  flex items-center overflow-hidden">
                {/* Image */}
                <Image className="h-full object-cover" src="/assets/AuthBackground.png" alt="Auth backround image" width={800} height={700} loading="eager" />

                {/* children */}
                <div className="flex-1 flex h-full items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    );
};