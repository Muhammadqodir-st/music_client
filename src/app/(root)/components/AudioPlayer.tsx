"use client"

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function AudioPlayer({ audioSrc }: { audioSrc: string }) {
    const [isPlaying, setIsPlaying] = useState(false)
    const [currentTime, setCurrentTime] = useState(0)
    const [duration, setDuration] = useState(0)

    const audioRef = useRef<HTMLAudioElement | null>(null)

    const handleSeek = (e: any) => {
        if (audioRef.current) {
            audioRef.current.currentTime = e.target.value
            setCurrentTime(e.target.value)
        };
    };

    const handleTimeUpdate = () => {
        if (audioRef.current) {
            setCurrentTime(audioRef.current.currentTime)
            setDuration(audioRef.current.duration)
        };
    }

    const handlePlay = () => {
        audioRef.current!.play();
        setIsPlaying(true);
    };

    const handlePause = () => {
        audioRef.current?.pause();
        setIsPlaying(false);
    };


    function formatDuration(durationSecounds:number) {
        const minutes = Math.floor(durationSecounds / 60)
        const secounds = Math.floor(durationSecounds % 60)
        const formattedSecounds = secounds.toString().padStart(2, "0")
        return `${minutes}:${formattedSecounds}`
    }

    useEffect(() => {
        audioRef.current?.addEventListener("timeupdate", handleTimeUpdate)

        return (() => {
            audioRef.current?.removeEventListener("timeupdate", handleTimeUpdate)
        })
    }, [])

    return (
        <div className="w-full p-2 bg-red-500 flex items-center justify-between">
            <Image src="/assets/rocky.jpg" alt="image" width={150} height={180} />

            <div className="flex flex-col items-center gap-1">
                {/* play pause button */}
                <button className="p-2.5 bg-violet-600 rounded-full cursor-pointer" onClick={() => {isPlaying ? handlePause() : handlePlay()}}>
                    {isPlaying ? <Pause size={23} /> : <Play size={23} />}
                </button>

                <audio ref={audioRef} src={audioSrc} />

                {/* input range */}
                <div className="flex gap-2">
                    <p>{formatDuration(currentTime)}</p>
                    <input type="range" min={0} max={duration} value={currentTime} onChange={handleSeek} />
                    <p>{formatDuration(duration)}</p>
                </div>
            </div>

            <span></span>
        </div>
    );
};