import { z } from 'zod'

const MAX_IMAGE_SIZE = 5 * 1024 * 1024;
const MAX_AUDIO_SIZE = 20 * 1024 * 1024;

const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/webp"];
const ACCEPTED_AUDIO_TYPES = ["audio/mpeg", "audio/wav"];

export const SignUpFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(1, "Name is required")
        .max(40, "Name is too long")
        .refine((v) => v.length > 0, "Name is required"),
    email: z
        .string()
        .trim()
        .min(1, "Email is required")
        .email("Invalid email address")
});

export const SignInFormSchema = z.object({
    email: z.string().trim().min(1, "Email is required").email("Invalid email address")
});

export const ArtworkSchema = z
    .instanceof(File)
    .optional()
    .refine(
        (file) => !file || file.size <= MAX_IMAGE_SIZE,
        "Artwork must be less than 5MB"
    )
    .refine(
        (file) => !file || ACCEPTED_IMAGE_TYPES.includes(file.type),
        "Invalid artwork format"
    );

export const SongSchema = z
    .instanceof(File, { message: "Song is required" })
    .refine(
        (file) => file.size <= MAX_AUDIO_SIZE,
        "Song must be less than 20MB"
    )
    .refine(
        (file) => ACCEPTED_AUDIO_TYPES.includes(file.type),
        "Invalid song format"
    );

export const CreateMusicFormSchema = z.object({
    title: z
        .string()
        .trim()
        .min(1, "Title is required")
        .refine((v) => v.length > 0, "Title is required"),
    artwork: ArtworkSchema,
    song: SongSchema
});