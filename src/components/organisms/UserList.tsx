import { getUsers } from "@/actions/user";
import Text from "../atoms/Text";
import SearchButton from "../molecules/SearchButton";
import Link from "next/link";

const UserList = async () => {
  const users = await getUsers();

  return (
    <div>
      <div>
        <Text>{JSON.stringify(users)}</Text>
      </div>
      <div>
        <Link href="user/1">상세보기</Link>
      </div>
      <SearchButton fetch={getUsers} />
    </div>
  );
};

export default UserList;
