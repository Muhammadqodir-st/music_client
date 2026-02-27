"use client"

import { verifyToken } from "@/api/service/auth";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function VerifyClient() {
    const searchParams = useSearchParams();
    const token = searchParams.get("token");
    const router = useRouter();

    useEffect(() => {
        if (!token) router.replace('/auth/sign-up')
    }, [token, router]);

    const { isPending, error } = useQuery({
        queryKey: ["access-token", token],
        enabled: !!token,
        queryFn: async () => verifyToken({ token: token as string }),
        retry: false
    });

    useEffect(() => {
        if (!isPending && !error && token) {
            router.replace("/")
        }
    }, [isPending, error, token, router]);

    if (isPending) return null;

    if (error) return <div>error</div>;

    return null;
};