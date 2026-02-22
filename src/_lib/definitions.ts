import { z } from 'zod'

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