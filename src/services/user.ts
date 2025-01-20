import { UserResponse } from "@/types/api/user";
import apiClient from "@/utils/apiClient";

export const getUsers = async () => {
  return await apiClient<UserResponse>("users?delay=3").json();
};
