import Text from "@/components/atoms/Text";
import UserList from "@/components/organisms/UserList";
import { Suspense } from "react";

const User = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <UserList />
    </Suspense>
  );
};

export default User;
