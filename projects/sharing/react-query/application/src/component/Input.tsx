import { FormEvent } from "react";

type InputProps = {
  name: string;
  label: string;
  value: string;
  handleOnChange: (event: FormEvent<HTMLInputElement>) => void;
};

function Input({ name, label, value, handleOnChange }: InputProps) {
  return (
    <div className="input flex flex-col mb-6">
      <label className="d-block text-slate-500 cursor-pointer" htmlFor={name}>
        {label}
      </label>
      <input
        className="d-block text-slate-500 px-2 py-1 border-solid border-2 border-teal focus:outline-none"
        type="text"
        name={name}
        id={name}
        value={value}
        onChange={handleOnChange}
        autoComplete="off"
      />
    </div>
  );
}

export default Input;
