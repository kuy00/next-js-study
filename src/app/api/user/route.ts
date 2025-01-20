import { getUsers } from "@/services/user";

export const GET = async () => {
  try {
    return await getUsers();
  } catch (error) {
    console.error(error);
    return Response.json({ error: "server error" }, { status: 500 });
  }
};
