import { getUsers } from "@/actions/user";
import Text from "../atoms/Text";
import SearchButton from "../molecules/SearchButton";

const UserList = async () => {
  const users = await getUsers();

  return (
    <div>
      <Text>{JSON.stringify(users)}</Text>
      <SearchButton fetch={getUsers} />
    </div>
  );
};

export default UserList;
