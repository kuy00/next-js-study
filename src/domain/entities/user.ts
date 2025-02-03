import { z } from "zod";
import { MetaSchema } from "./meta";

export const UserSchema = z.object({
  id: z.number(),
  email: z.string(),
  first_name: z.string(),
  last_name: z.string(),
  avatar: z.string(),
});

export type User = z.infer<typeof UserSchema>;

export const UserListShema = MetaSchema.extend({
  data: z.array(UserSchema),
});

export type UserList = z.infer<typeof UserListShema>;
