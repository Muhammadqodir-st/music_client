// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <main className="min-h-screen flex flex-col">
            <Header />
            <div>
                <Sidebar />
            </div>
        </main>
    );
};