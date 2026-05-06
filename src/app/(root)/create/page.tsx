"use client"

// lucide
import { Camera, Music } from "lucide-react";
import Image from "next/image";
import { useActionState, useState } from "react";
import { create } from "./actions";
import ButtonLoader from "@/components/loaders/ButtonLoader";

const initialState = {
    ok: false,
    message: "",
    fieldErrors: {} as Record<string, string[]>
};

export default function Page() {
    const [state, formActions, pending] = useActionState(create, initialState);
    const [artwork, setArtwork] = useState(null);
    const [song, setSong] = useState(null);

    return (
        <div className="w-full h-full flex gap-3">

            {/* audio player */}
            <div className="flex flex-col gap-4">
                <Image className="rounded-lg" src="/assets/defualtArtwork.png" alt="artwork" width={300} height={300} />

                <p className="font-bold px-1">Eye of the Tiger</p>


            </div>

            <form action={formActions} className="flex flex-col gap-3">

                <label htmlFor="artworkInput" className="flex flex-col gap-1 cursor-pointer">
                    <p className="text-sm font-bold">artwork</p>
                    <input className="hidden" type="file" name="artowrk" id="artworkInput" />
                    <div className="py-1 px-3 border border-violet-700 rounded-lg flex items-center justify-center">
                        <Camera className="text-violet-600" />
                    </div>

                    {state.fieldErrors?.artwork && <p className="text-red-500 text-sm">{state.fieldErrors.artwork}</p>}
                </label>

                <label htmlFor="titleInput" className="flex flex-col gap-1">
                    <p className="text-sm font-bold">title</p>
                    <input className="outline-0 border py-1 px-3 border-violet-700 rounded-lg" type="text" name="title" id="titleInput" />

                    {state.fieldErrors?.title && <p className="text-red-500 text-sm">{state.fieldErrors.title}</p>}
                </label>

                <label htmlFor="songInput" className="flex flex-col gap-1 cursor-pointer">
                    <p className="text-sm font-bold">song</p>
                    <input className="hidden" type="file" name="song" id="songInput" />
                    <div className="py-1 px-3 border border-violet-700 rounded-lg flex items-center justify-center">
                        <Music className="text-violet-600" />
                    </div>

                    {state.fieldErrors?.song && <p className="text-red-500 text-sm">{state.fieldErrors.song}</p>}
                </label>

                {state.message &&
                    <div className={["text-sm", state.ok ? "text-green-700" : "text-red-500"].join(" ")}>
                        {state.message}
                    </div>
                }

                <button type="submit" disabled={pending} className={`mt-3 ${pending ? "py-2.5" : "py-1.5"} rounded-lg bg-violet-700 font-semibold hover:bg-violet-600 disabled:bg-violet-600 flex items-center justify-center cursor-pointer`}>
                    {pending ? <ButtonLoader /> : "upload"}
                </button>
            </form>
        </div>
    );
};