import AuthRepository from "../repositories/authRepository";

const AuthUsecase = (authRepository: AuthRepository) => {
  return {
    login: async (email: string, password: string) => {
      return await authRepository.login(email, password);
    },
  };
};

export default AuthUsecase;
