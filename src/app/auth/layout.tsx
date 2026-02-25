// next
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-8/10 h-190 rounded-2xl border border-white flex items-center p-1.5">
                {/* Image */}
                <Image className="h-full object-cover rounded-2xl" src="/assets/AuthBackground.png" alt="Auth backround image" width={850} height={700} />

                {/* children */}
                <div className="flex-1 flex h-full items-center justify-center">
                    {children}
                </div>
            </div>
        </div>
    )
}