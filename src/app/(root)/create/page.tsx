"use client"

import { Camera, Music2, Pause, Play } from "lucide-react";
import Image from "next/image";
import { useActionState, useRef, useState } from "react";
import { create } from "./actions";
import ButtonLoader from "@/components/loaders/ButtonLoader";
import Modal from "@/components/Modal";

const initialState = {
    ok: false,
    message: "",
    fieldErrors: {} as Record<string, string[]>
};

export default function Page() {
    const [state, formActions, pending] = useActionState(create, initialState);

    const [artwork, setArtwork] = useState<string>("/assets/defualtArtwork.png");
    const [title, setTitle] = useState<string>("Eye of the tiger");
    const [song, setSong] = useState<string | null>(null);
    const [isPlaying, setIsPlaying] = useState(false);

    const audioRef = useRef<HTMLAudioElement | null>(null);

    const handlePlay = () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
        } else {
            audioRef.current.play();
            setIsPlaying(true);
        }
    };

    return (
        <Modal>
            <div className="w-full max-w-4xl rounded-3xl border border-zinc-800 bg-zinc-950 p-5 flex flex-col lg:flex-row gap-5 shadow-2xl">

                {/* LEFT */}
                <div className="w-full flex flex-col gap-4">

                    <div className="relative overflow-hidden rounded-3xl border border-zinc-800">
                        <Image
                            src={artwork}
                            alt="artwork"
                            width={400}
                            height={400}
                            className="w-full aspect-square object-cover"
                        />

                        {song && (
                            <button
                                type="button"
                                onClick={handlePlay}
                                className="absolute bottom-4 right-4 w-14 h-14 rounded-full bg-violet-700 hover:bg-violet-600 transition flex items-center justify-center shadow-lg"
                            >
                                {isPlaying ? (
                                    <Pause size={22} />
                                ) : (
                                    <Play size={22} className="ml-1" />
                                )}
                            </button>
                        )}
                    </div>

                    <div className="px-1">
                        <h2 className="text-xl font-bold truncate">
                            {title || "Untitled"}
                        </h2>

                        <p className="text-sm text-zinc-400 mt-1">
                            Upload your music and artwork
                        </p>
                    </div>

                    {song && (
                        <audio
                            ref={audioRef}
                            src={song}
                            onEnded={() => setIsPlaying(false)}
                            className="hidden"
                        />
                    )}
                </div>

                {/* RIGHT */}
                <form
                    action={formActions}
                    className="flex-1 flex flex-col gap-4"
                >

                    {/* artwork */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-zinc-300">
                            Artwork
                        </p>

                        <label
                            htmlFor="artworkInput"
                            className="h-28 rounded-2xl border-2 border-dashed border-zinc-700 hover:border-violet-600 transition cursor-pointer flex flex-col items-center justify-center gap-2 bg-zinc-900"
                        >
                            <Camera className="text-violet-500" size={28} />

                            <span className="text-sm text-zinc-400">
                                Upload cover image
                            </span>
                        </label>

                        <input
                            id="artworkInput"
                            type="file"
                            name="artwork"
                            className="hidden"
                            accept="image/*"
                            onChange={(e: any) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                setArtwork(URL.createObjectURL(file));
                            }}
                        />

                        {state.fieldErrors?.artwork && (
                            <p className="text-sm text-red-500">
                                {state.fieldErrors.artwork}
                            </p>
                        )}
                    </div>

                    {/* title */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-zinc-300">
                            Title
                        </p>

                        <input
                            type="text"
                            name="title"
                            placeholder="Enter music title"
                            className="h-12 px-4 rounded-2xl bg-zinc-900 border border-zinc-800 outline-none focus:border-violet-600 transition"
                            onChange={(e: any) => {
                                setTitle(e.target.value);
                            }}
                        />

                        {state.fieldErrors?.title && (
                            <p className="text-sm text-red-500">
                                {state.fieldErrors.title}
                            </p>
                        )}
                    </div>

                    {/* song */}
                    <div className="flex flex-col gap-2">
                        <p className="text-sm font-semibold text-zinc-300">
                            Song
                        </p>

                        <label
                            htmlFor="songInput"
                            className="h-28 rounded-2xl border-2 border-dashed border-zinc-700 hover:border-violet-600 transition cursor-pointer flex flex-col items-center justify-center gap-2 bg-zinc-900"
                        >
                            <Music2 className="text-violet-500" size={28} />

                            <span className="text-sm text-zinc-400">
                                Upload audio file
                            </span>
                        </label>

                        <input
                            id="songInput"
                            type="file"
                            name="song"
                            className="hidden"
                            accept="audio/*"
                            onChange={(e) => {
                                const file = e.target.files?.[0];
                                if (!file) return;

                                setSong(URL.createObjectURL(file));
                            }}
                        />

                        {state.fieldErrors?.song && (
                            <p className="text-sm text-red-500">
                                {state.fieldErrors.song}
                            </p>
                        )}
                    </div>

                    {/* message */}
                    {state.message && (
                        <div
                            className={`text-sm rounded-xl px-4 py-3 border ${state.ok
                                    ? "bg-green-500/10 border-green-500/20 text-green-400"
                                    : "bg-red-500/10 border-red-500/20 text-red-400"
                                }`}
                        >
                            {state.message}
                        </div>
                    )}

                    {/* button */}
                    <button
                        type="submit"
                        disabled={pending}
                        className="h-12 rounded-2xl bg-violet-700 hover:bg-violet-600 transition disabled:opacity-70 font-semibold flex items-center justify-center"
                    >
                        {pending ? <ButtonLoader /> : "Upload Music"}
                    </button>
                </form>
            </div>
        </Modal>
    );
}