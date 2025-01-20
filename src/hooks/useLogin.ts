import { FormEvent } from "react";
import { useInput } from "./useInput";
import { TokenInfo } from "@/types/api/auth";

export const useLogin = () => {
  const id = useInput();
  const pw = useInput();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = await fetch("user/api", {
      method: "POST",
      body: JSON.stringify({
        email: id.value,
        password: pw.value,
      }),
    });
    const tokenInfo: TokenInfo = await data.json();

    console.log(tokenInfo);

    location.href = "/user";
  };

  return {
    id,
    pw,
    onSubmit,
  };
};
