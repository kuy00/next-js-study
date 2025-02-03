import { z } from "zod";

export const AuthSchema = z.object({
  token: z.string(),
});

export type Auth = z.infer<typeof AuthSchema>;
