import { ChangeEvent, useCallback, useState } from "react";

export const useInput = (initValue: string = "") => {
  const [value, setValue] = useState(initValue);

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return {
    value,
    handleChange,
  };
};
