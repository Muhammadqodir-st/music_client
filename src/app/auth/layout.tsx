// next
import Image from "next/image";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="w-120 h-140  rounded-xl p-5">
                <h1 className="text-4xl font-bold text-center">Welcome to Music</h1>

                <button className="w-full py-2 rounded-lg flex items-center justify-center gap-5 border">
                    <Image className="w-7 h-7" src="/assets/google.webp" alt="Google icon" width={50} height={50} />
                </button>

                <div className="w-full flex items-center gap-3">
                    <div className="flex-1 h-px bg-white"></div>
                    <p className="font-bold">OR</p>
                    <div className="flex-1 h-px bg-white"></div>
                </div>

                <div>
                    {children}
                </div>
            </div>
        </div>
    )
}