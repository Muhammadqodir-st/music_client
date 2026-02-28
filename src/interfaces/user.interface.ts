
export interface IUser {
    id: string;
    name: string;
    email: string;
    avatar?: string;
    provider: string;
    googleId?: "email" | "google";
    createdAt: Date;
}