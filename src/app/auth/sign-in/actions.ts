"use server"

import { SignInFormSchema } from "@/_lib/definitions"
import { signIn } from "@/api/service/auth";

type actionState = {
    ok: boolean,
    message: string,
    fieldErrors?: Record<string, string[]>
};

export async function signin(prevState: actionState | undefined, formData: FormData) {
    const validateResult = SignInFormSchema.safeParse({
        email: formData.get("email")
    });

    if (!validateResult.success) {
        return {
            ok: false,
            message: "Validations errors occurred.",
            fieldErrors: validateResult.error.flatten().fieldErrors
        };
    };

    const { email } = validateResult.data;

    try {
        await signIn({ email });
        return {
            ok: true,
            message: "Link sent! Please check your email to complete the sign-in process."
        };
    } catch (error: any) {
        return {
            ok: false,
            message: error?.message || "Filed to sign in"
        };
    };
};