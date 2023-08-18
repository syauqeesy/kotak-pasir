import { useState, FormEvent } from "react";

function useForm(
  defaultValue: string = ""
): [string, (event: FormEvent<HTMLInputElement>) => void] {
  const [value, setValue] = useState<string>(defaultValue);

  function valueChangeHandler(event: FormEvent<HTMLInputElement>) {
    setValue(event.currentTarget.value);
  }

  return [value, valueChangeHandler];
}

export default useForm;
