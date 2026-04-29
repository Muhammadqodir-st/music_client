import AudioPlayer from "./components/AudioPlayer";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="h-screen flex flex-col">
            <Header />
            {/* <div className="flex-1 flex">
                <Sidebar />
                {children}
            </div> */}
            {/* <AudioPlayer audioSrc="/music/song.mp3" /> */}
        </main>
    );
};