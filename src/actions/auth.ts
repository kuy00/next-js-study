"use server";

import { AuthSchema } from "@/domain/entities/auth";
import AuthUsecase from "@/domain/uescase/authUsecase";
import AuthRepositoryImpl from "@/infrastructure/api/repositories/authRepositoryImpl";

export const login = async (email: string, password: string) => {
  const authRepository = AuthRepositoryImpl();
  const authUsecase = AuthUsecase(authRepository);

  try {
    const result = await authUsecase.login(email, password);
    return AuthSchema.parse(result);
  } catch (error) {
    console.error(error);
    throw new Error("로그인 오류");
  }
};
