import checkTokens from "@/_lib/check-tokens";
import StoreUserQuery from "./StoreUserQuery";
import type { IUser } from "@/interfaces/user.interface";

export default async function StoreUser() {
    const cookieHeader = await checkTokens();

    if (!cookieHeader) return <StoreUserQuery user={null} />;

    const data = await fetch(`http://localhost:8000/auth/profile`, {
        headers: { cookie: cookieHeader },
        method: "GET",
        cache: "no-store"
    });

    if (!data.ok) return <StoreUserQuery user={null} />;

    const user: IUser = await data.json();
    return <StoreUserQuery user={user} />;
};