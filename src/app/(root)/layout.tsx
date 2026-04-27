import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="flex flex-col">
            <Header />
            <div className="flex-1">
                {children}
            </div>
            <AudioPlayer audioSrc={"/music/song.mp3"} />
        </main>
    );
};