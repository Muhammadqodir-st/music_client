"use client"

import Link from "next/link";
import { useActionState } from "react";
import { signin } from "./actions";
import ButtonLoader from "@/components/loaders/ButtonLoader";
import GoogleBtn from "../components/GoogleBtn";

const initalState = {
    ok: false,
    message: "",
    fieldErrors: {} as Record<string, string[]>
};


export default function Page() {
    const [state, formAction, pending] = useActionState(signin, initalState);

    return (
        <div className="w-100 flex flex-col gap-6">
           <p className="text-center text-4xl font-bold text-gray-700 dark:text-white">Welcome to Music</p>

            <GoogleBtn />

            <div className="w-full flex items-center justify-center gap-3 px-1">
                <div className="flex-1 h-px bg-gray-400 dark:bg-white"></div>
                <p className="font-bold text-gray-600 dark:text-white">OR</p>
                <div className="flex-1 h-px bg-gray-400 dark:bg-white"></div>
            </div>

            <form className="w-full flex flex-col gap-7" action={formAction}>
                <label>
                    <input className="w-full py-2 px-4 rounded-lg border border-gray-400" type="text" name="email" placeholder="email@example.com" />
                </label>

                {state.fieldErrors?.email && <div className="text-red-500 text-sm">{state.fieldErrors.email.map((error, id) => <p key={id}>{error}</p>)}</div>}

                {state.message &&
                    <div className={["text-sm", state.ok ? "text-green-700" : "text-red-500"].join(" ")}>
                        {state.message}
                    </div>
                }

                <button disabled={pending} type="submit" className={`w-full ${pending ? 'p-3' : 'p-2'} rounded-lg bg-violet-700 hover:bg-violet-600 disabled:bg-vilet-600 flex items-center justify-center text-white cursor-pointer`}>
                    {pending ? <ButtonLoader /> : "Sign In"}
                </button>
            </form>

            <Link className="text-sm font-bold underline text-violet-600" href={'/auth/sign-up'}>Don't have an account?</Link>
        </div>
    )
}