"use client"

import { IUser } from "@/interfaces/user.interface";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setUser } from "@/store/features/user.feature";


export default function StoreUserQuery({ user }: { user: IUser | null }) {
    const dispatch = useDispatch();

    useEffect(() => {
        if (user) {
            dispatch(setUser(user))
        };
    }, [user, setUser]);

    return null;
};