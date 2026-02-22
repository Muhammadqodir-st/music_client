"use server"

import { SignUpFormSchema } from "@/_lib/definitions";
import { signUp } from "@/api/service/auth";

type actionState = {
    ok: boolean;
    message: string;
    fieldErrors?: Record<string, string[]>
};

export async function signup(prevState: actionState | undefined, formData: FormData) {
    const validateResult = SignUpFormSchema.safeParse({
        name: formData.get("name"),
        email: formData.get("email")
    });

    if (!validateResult.success) {
        return {
            ok: false,
            message: "Validations errors occurred.",
            fieldErrors: validateResult.error.flatten().fieldErrors
        };
    };

    const { name, email } = validateResult.data;

    try {
        await signUp({ name, email })
        
        return {
            ok: true,
            message: "Link sent! Please check your email to complete the sign-up process."
        }
    } catch (error: any) {
        return {
            ok: false,
            message: error?.message || "Field to sign up"
        }
    }
};