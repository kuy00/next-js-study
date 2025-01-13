import { HTTPError } from "ky";
import apiClient from "../../../../utils/apiClient";

export const GET = async () => {
  return Response.json("test");
};

export const POST = async (request: Request) => {
  const body = await request.json();

  try {
    const data = await apiClient
      .post("login", {
        json: body,
      })
      .json();
    return Response.json(data);
  } catch (error) {
    if (error instanceof HTTPError) {
      const errorJson = await error.response.json();
      return Response.json(errorJson, { status: error.response.status });
    }

    throw error;
  }
};
