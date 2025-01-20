import apiClient from "@/utils/apiClient";
import { HTTPError } from "ky";

export const login = async (loginForm: { email: string; password: string }) => {
  try {
    const data = await apiClient
      .post("login", {
        json: loginForm,
      })
      .json();

    return Response.json(data);
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorJson = await error.response.json();
      return Response.json(errorJson, { status: error.response.status });
    }
  }
};
