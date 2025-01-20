import { login } from "@/services/auth";

export const POST = async (request: Request) => {
  try {
    const loginForm = await request.json();
    return await login(loginForm);
  } catch (error) {
    console.error(error);
    return Response.json({ error: "server error" }, { status: 500 });
  }
};
