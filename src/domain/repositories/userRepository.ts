import { ErrorResponse } from "../entities/errorResponse";
import { UserList } from "../entities/user";

interface UserRepository {
  get: () => Promise<UserList | ErrorResponse>;
}

export default UserRepository;
