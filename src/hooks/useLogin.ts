import { FormEvent } from "react";
import { useInput } from "./useInput";
import { TokenInfo } from "@/types/api/auth";

export const useLogin = () => {
  const id = useInput();
  const pw = useInput();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const data = await fetch("api/auth", {
        method: "POST",
        body: JSON.stringify({
          email: id.value,
          password: pw.value,
        }),
      });
      const tokenInfo: TokenInfo = await data.json();

      console.log(tokenInfo);

      // location.href = "/user";
    } catch (error) {
      console.log(error);
    }
  };

  return {
    id,
    pw,
    onSubmit,
  };
};
