import { UserList } from "@/domain/entities/user";
import UserRepository from "@/domain/repositories/userRepository";
import apiClient from "../apiClient";
import { HTTPError } from "ky";
import { errorResponseSchema } from "@/domain/entities/errorResponse";

const UserRepositoryImpl = (): UserRepository => {
  return {
    get: async () => {
      try {
        const result = await apiClient.get("users?delay=3").json<UserList>();

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

export default UserRepositoryImpl;
