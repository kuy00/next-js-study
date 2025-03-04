import Text from "@/components/atoms/Text";
import UserList from "@/components/organisms/UserList";
import Link from "next/link";
import { Suspense } from "react";

const User = () => {
  return (
    <Suspense fallback={<Text>Loading...</Text>}>
      <UserList />
      <Link href="/test2" prefetch={false}>
        인터셉터
      </Link>
    </Suspense>
  );
};

export default User;
