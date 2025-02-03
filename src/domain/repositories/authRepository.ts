import { Auth } from "../entities/auth";
import { ErrorResponse } from "../entities/errorResponse";

interface AuthRepository {
  login: (email: string, password: string) => Promise<Auth | ErrorResponse>;
}

export default AuthRepository;
