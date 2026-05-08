"use client";

import { useRouter } from "next/navigation";

type ModalProps = {
    children: React.ReactNode;
};

export default function Modal({ children }: ModalProps) {
    const router = useRouter();

    return (
        <div
            onClick={() => router.back()}
            className="fixed inset-0 bg-black/50 flex items-center justify-center"
        >
            <div
                onClick={(e) => e.stopPropagation()}
                className="rounded-4xl bg-gray-900 w-2xl max-h-150"
            >
                {children}
            </div>
        </div>
    );
}