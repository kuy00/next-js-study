import { FormEvent } from "react";
import { useInput } from "./useInput";

export const useForm = () => {
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
    const token = await data.json();
    console.log(token);
  };

  return {
    id,
    pw,
    onSubmit,
  };
};
