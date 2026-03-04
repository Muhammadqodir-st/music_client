import Image from "next/image";

export default function StoreUserLoader() {
    return (
        <div className="fixed inset-0 flex flex-col items-center justify-between z-50 py-5 bg-[#030712]">
            <span />
            <Image src="/assets/logo3.png" alt="Loader logo" width={170} height={170} />
            <p>Loading your account...</p>
        </div>
    );
};