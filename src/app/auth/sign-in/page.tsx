import Image from "next/image";
import Link from "next/link";

export default function Page() {
    return (
        <div className="w-100 flex flex-col gap-5">
            <p className="text-center text-4xl font-bold">Welcome to Music</p>

            <button className="w-full p-2 rounded-lg border flex items-center justify-center gap-5 cursor-pointer">
                <Image src="/assets/google.webp" alt="Google icon" width={24} height={24} />
                <p className="text-center font-bold">Sign In with a Google</p>
            </button>

            <div className="w-full flex items-center justify-center gap-3 px-1">
                <div className="flex-1 h-px bg-white"></div>
                <p className="font-bold">OR</p>
                <div className="flex-1 h-px bg-white"></div>
            </div>

            <form className="w-full flex flex-col gap-5" action="">
                <label>
                    <input className="w-full py-2 px-4 rounded-lg border" type="text" name="email" placeholder="email@example.com" />
                </label>

                <button className="w-full p-2 rounded-lg bg-[#1E90FF] cursor-pointer">Sign In</button>
            </form>

            <Link className="text-sm font-bold underline text-blue-600" href={'/auth/sign-up'}>Don't have an account?</Link>
        </div>
    )
}