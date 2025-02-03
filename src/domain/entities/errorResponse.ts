import { z } from "zod";

export const errorResponseSchema = z.object({
  statusCode: z.number(),
  response: z.any(),
});

export type ErrorResponse = z.infer<typeof errorResponseSchema>;
