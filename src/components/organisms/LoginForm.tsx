"use client";

import { useLogin } from "@/hooks/useLogin";
import InputField from "../molecules/InputField";
import ButtonInnerText from "../molecules/ButtonInnerText";

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
          autoFocus={true}
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
        <ButtonInnerText
          text="login"
          buttonClassName="w-full bg-white rounded-md"
          textClassName="text-2xl text-black"
        />
      </div>
    </form>
  );
};

export default LoginForm;
