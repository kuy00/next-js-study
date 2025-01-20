"use client";

import { getusers } from "@/services/user";
import { useSuspenseQuery } from "@tanstack/react-query";
import Text from "../atoms/Text";

const UserList = () => {
  const users = useSuspenseQuery({
    queryKey: ["users"],
    queryFn: getusers,
  });

  return <Text>{JSON.stringify(users)}</Text>;
};

export default UserList;
