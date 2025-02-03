import AuthRepository from "@/domain/repositories/authRepository";
import apiClient from "../clients/apiClient";
import { Auth } from "@/domain/entities/auth";
import { errorResponseSchema } from "@/domain/entities/errorResponse";
import { HTTPError } from "ky";

const AuthRepositoryImpl = (): AuthRepository => {
  return {
    login: async (email: string, password: string) => {
      try {
        const result = await apiClient
          .post("login", {
            json: {
              email: email,
              password: password,
            },
          })
          .json<Auth>();

        return result;
      } catch (error) {
        // TODO : apiClient에서 처리하도록 변경 필요
        let errorResponse;

        if (error instanceof HTTPError) {
          const errorJson = await error.response.json();
          errorResponse = errorResponseSchema.parse({
            statusCode: error.response.status,
            response: errorJson,
          });
        } else {
          errorResponse = errorResponseSchema.parse({
            statusCode: 500,
            response: "runtime error",
          });
        }

        return errorResponse;
      }
    },
  };
};

export default AuthRepositoryImpl;
