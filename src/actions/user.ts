"use server";

import { UserListShema } from "@/domain/entities/user";
import UserUsecase from "@/domain/uescase/userUsecase";
import UserRepositoryImpl from "@/infrastructure/api/repositories/userRepositoryImpl";

export const getUsers = async () => {
  const userRepository = UserRepositoryImpl();
  const userUsecase = UserUsecase(userRepository);

  try {
    const result = await userUsecase.getUesrs();
    return UserListShema.parse(result);
  } catch (error) {
    console.error(error);
    throw new Error("유저 조회 실패");
  }
};
