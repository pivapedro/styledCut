import React, { useEffect, useState } from "react";

import { Container } from "./styles";

interface PropsInput {
  opitions: 
    Array<{
      name: string;
      value?: string;
    }>
  ;
  defaultValue?: string | number;

  setValue: (e: string) => any;
  errors?:
    | Array<{
        description: string;
        errorType: string;
        inputName: string;
      }>
    | []
    | undefined
    | null;
  validationStatus?: "error" | "sucess" | "validating";
  inputRef?: React.RefObject<HTMLInputElement>;
  label: string;
  disabled?: boolean | undefined;
  [x: string]: any;
}
export const Select: React.FC<PropsInput> = ({
  setValue,
  errors,
  alerts,
  sucess,
  defaultValue,
  children,
  label,
  opitions,
  validationStatus,
  inputRef,
  disabled,
  ...attrs
}) => {
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);

  return (
    <Container
      className={
        errors && errors.length
          ? "error"
          : ""
      }
      {...attrs}
    >
      {errors && errors.length
        ? errors.map((error, index) =>
            index === 1 ? <span>{error.description}</span> : null
          )
        : null}
      <select
        defaultValue={defaultValue}
        onChange={(e) => setInputValue(e.target.value)}
        value={inputValue}
        disabled={disabled}
      >
        {opitions.map((option, index) => (
          <option  value={option.value || index}>{option.name}</option>
        ))}
      </select>
      {errors && Boolean(errors.length)
        ? errors.map((error, index) => {
            return (
              <span>
                {errors.length > 1 && errors.length > index + 1
                  ? `${error.description}, `
                  : `${error.description}.`}
              </span>
            );
          })
        : null}
      {children}
    </Container>
  );
};
