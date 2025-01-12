"use client";

import { useLogin } from "@/hooks/useLogin";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import InputField from "../molecules/InputField";

const LoginForm = () => {
  const { id, pw, onSubmit } = useLogin();

  return (
    <form onSubmit={onSubmit}>
      <div className="flex flex-col justify-between h-28 mb-4">
        <InputField
          label="ID"
          type="text"
          placeholder="id"
          value={id.value}
          onChange={id.handleChange}
        />
        <InputField
          label="PW"
          type="password"
          placeholder="password"
          value={pw.value}
          onChange={pw.handleChange}
        />
      </div>

      <div className="px-5">
        <Button className="w-full bg-white rounded-md">
          <Text className="text-2xl text-black">Login</Text>
        </Button>
      </div>
    </form>
  );
};

export default LoginForm;
