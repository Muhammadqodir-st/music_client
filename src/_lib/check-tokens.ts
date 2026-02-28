"use server"

import { cookies } from "next/headers"

export default async function checkTokens() {
    const store = await cookies();

    const accessToken = store.get("accessToken")?.value;
    const refreshToken = store.get("refreshToken")?.value;

    if (!refreshToken) return null;

    const pats: string[] = []

    if (accessToken) {
        pats.push(`accessToken=${encodeURIComponent(accessToken)}`);
    };

    pats.push(`refreshToken=${encodeURIComponent(refreshToken)}`);

    return pats.join("; ");
};