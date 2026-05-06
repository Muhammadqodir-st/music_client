"use server"

import { CreateMusicFormSchema } from "@/_lib/definitions"
import { createMusic } from "@/api/service/music";

type actionState = {
    ok: boolean,
    message: string,
    fieldErrors?: Record<string, string[]>
}
export async function create(prevState: actionState | undefined, formData: FormData) {

    console.log(formData);
    
    const validateResult = CreateMusicFormSchema.safeParse({
        title: formData.get("title"),
        artwork: formData.get("artwork"),
        song: formData.get("song")
    });

    if (!validateResult.success) {
        return {
            ok: false,
            message: "Validations errors occurred.",
            fieldErrors: validateResult.error.flatten().fieldErrors
        };
    };

    const { title, artwork, song } = validateResult.data;

    try {
        await createMusic({ title, artwork, song });
        return {
            ok: true,
            message: "Creating music"
        };
    } catch (error: any) {
        return {
            ok: false,
            message: error?.message || "Filed to sign in"
        };
    };
};