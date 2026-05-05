"use client"

// lucide
import { Camera, Music } from "lucide-react";
import Image from "next/image";

export default function Page() {
    return (
        <div className="w-full h-full flex items-center justify-center relative">

            {/* sidebar */}
            <div className="w-65 h-full p-3 border-r flex flex-col gap-5 absolute left-0 top-0">
                <p className="font-bold">Create music data</p>

                <form action="" className="flex flex-col gap-3">

                    <label htmlFor="artworkInput" className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm font-bold">artwork</p>
                        <input className="hidden" type="file" id="artworkInput" />
                        <div className="py-1 px-3 border border-violet-700 rounded-lg flex items-center justify-center">
                            <Camera className="text-violet-600" />
                        </div>
                    </label>

                    <label htmlFor="" className="flex flex-col gap-1">
                        <p className="text-sm font-bold">title</p>
                        <input className="outline-0 border py-1 px-3 border-violet-700 rounded-lg" type="text" />
                    </label>

                    <label htmlFor="songInput" className="flex flex-col gap-1 cursor-pointer">
                        <p className="text-sm font-bold">song</p>
                        <input className="hidden" type="file" id="songInput" />
                        <div className="py-1 px-3 border border-violet-700 rounded-lg flex items-center justify-center">
                            <Music className="text-violet-600" />
                        </div>
                    </label>

                    <button className={`mt-3 py-1.5 rounded-lg bg-violet-700 font-semibold hover:bg-violet-600 cursor-pointer`}>create music</button>
                </form>
            </div>

            {/* audio player */}
            <div className="flex flex-col gap-4">
                <Image className="rounded-lg" src="/assets/defualtArtwork.png" alt="artwork" width={300} height={300}/>

                <p className="font-bold px-1">Eye of the Tiger</p>

                
            </div>
        </div>
    );
};