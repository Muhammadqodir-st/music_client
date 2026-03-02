// components
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="min-h-screen flex">
            <Sidebar />
            <div className="flex-1">
                <Header />
                {children}
            </div>
        </div>
    )
}