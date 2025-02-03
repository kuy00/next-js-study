import UserRepository from "../repositories/userRepository";

const UserUsecase = (userRepository: UserRepository) => {
  return {
    getUesrs: async () => {
      return await userRepository.get();
    },
  };
};

export default UserUsecase;
