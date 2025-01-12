import { FormEvent } from "react";
import { useInput } from "./useInput";

export const useLogin = () => {
  const id = useInput();
  const pw = useInput();

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault();
    const data = await fetch("user/api", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: id.value,
        password: pw.value,
      }),
    });
    const token = await data.json();
    console.log(token);
  };

  return {
    id,
    pw,
    onSubmit,
  };
};
