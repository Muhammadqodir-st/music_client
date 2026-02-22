import { fetcher } from "../fetcher";

// sign-up
export function signUp(data: { name: string, email: string }) {

    console.log(data);
    
    return fetcher("/auth/sign-up", {
        method: "POST",
        body: JSON.stringify(data)
    });
};