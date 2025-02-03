import { FormEvent } from "react";
import { useInput } from "./useInput";
import { login } from "@/actions/auth";

export const useLogin = () => {
  const id = useInput();
  const pw = useInput();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    try {
      const result = await login(id.value, pw.value);

      console.log(result);
      location.href = "/user";
    } catch (error) {
      alert(error);
    }
  };

  return {
    id,
    pw,
    onSubmit,
  };
};
