import { fetcher } from "../fetcher";

// sign-up
export function signUp(data: { name: string, email: string }) {
    return fetcher("/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(data)
    });
};

// sign-in
export function signIn(data: { email: string }) {
    return fetcher("/auth/sign-in", {
        method: "POST",
        body: JSON.stringify(data)
    });
};

// verify 
export function verifyToken(data: { token: string }) {
    return fetcher(`/auth/verify?token=${encodeURI(data.token)}`)
};