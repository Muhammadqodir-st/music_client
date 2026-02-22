"use client"

import Image from "next/image";
import Link from "next/link";

import { useActionState } from "react";
import { signup } from "./actions";
import ButtonLoader from "@/components/loaders/ButtonLoader";

const initalState = {
    ok: false,
    message: "",
    fieldErrors: {} as Record<string, string[]>
};

export default function Page() {
    const [state, formAction, pending] = useActionState(signup, initalState);

    return (
        <div className="w-100 flex flex-col gap-5">
            <p className="text-center text-4xl font-bold">Welcome to Music</p>

            <button className="w-full p-2 rounded-lg border flex items-center justify-center gap-5 cursor-pointer">
                <Image src="/assets/google.webp" alt="Google icon" width={24} height={24} />
                <p className="text-center font-bold">Sign Up with a Google</p>
            </button>

            <div className="w-full flex items-center justify-center gap-3 px-1">
                <div className="flex-1 h-px bg-white"></div>
                <p className="font-bold">OR</p>
                <div className="flex-1 h-px bg-white"></div>
            </div>

            <form className="w-full flex flex-col gap-5" action={formAction}>
                <label>
                    <input className="w-full py-2 px-4 rounded-lg border" type="text" name="name" placeholder="Sonny Hayes" />
                </label>

                {state.fieldErrors?.name && <p className="text-red-500 text-sm">{state.fieldErrors.name}</p>}

                <label>
                    <input className="w-full py-2 px-4 rounded-lg border" type="text" name="email" placeholder="email@example.com" />
                </label>

                {state.fieldErrors?.email && <div className="text-red-500 text-sm">{state.fieldErrors.email.map((error, id) => <p key={id}>{error}</p>)}</div>}

                {state.message &&
                    <div className={["text-sm", state.ok ? "text-green-700" : "text-red-500"].join(" ")}>
                        {state.message}
                    </div>
                }

                <button disabled={pending} type="submit" className={`w-full ${pending ? 'p-3' : 'p-2'} rounded-lg bg-[#1E90FF] hover:bg-[#157be0] disabled:bg-[#095caf] flex items-center justify-center cursor-pointer`}>
                    {pending ? <ButtonLoader /> : "Sign Up"}
                </button>
            </form>

            <Link className="text-sm font-bold underline text-blue-600" href={'/auth/sign-in'}>Already have an account?</Link>
        </div>
    );
};