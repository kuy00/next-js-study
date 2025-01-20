import { getUsers } from "@/services/user";
import Text from "../atoms/Text";

const UserList = async () => {
  const users = await getUsers();

  return <Text>{JSON.stringify(users)}</Text>;
};

export default UserList;
