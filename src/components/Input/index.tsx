import React, { useEffect, useState } from "react";
import InputMask, {
  BeforeMaskedStateChangeStates,
  InputState,
} from "react-input-mask";
import { Container } from "./styles";
import { ReactComponent as Eye } from "../../assets/icon/eye.svg";
import { ReactComponent as EyeSlash } from "../../assets/icon/eye-slash.svg";

import { getFlag } from "../../utils/tokens";

interface PropsInput {
  setValue: (e: string) => any;
  type?: string;
  maskInput?: string;
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
  alwaysShowMask?: boolean;
  maskPlaceholder?: string | null | undefined;
  beforeMaskedStateChange?(states: BeforeMaskedStateChangeStates): InputState;
  label: string;
  placeHolder?: string;
  disabled?: boolean | undefined;
  [x: string]: any;
}

export const Input: React.FC<PropsInput> = ({
  setValue,
  errors,
  children,
  type,
  maskInput,
  validationStatus,
  alwaysShowMask,
  inputRef,
  maskPlaceholder,
  maskChar = "",
  label,
  placeHolder,
  disabled,
  beforeMaskedStateChange,
  ...attrs
}) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [inputType, setInputType] = useState<string | undefined>(type);
  const showPassWord = () => {
    inputType === "password"
      ? setInputType("string")
      : setInputType("password");
  };
  useEffect(() => {
    setValue(inputValue);
  }, [inputValue]);
  return (
    <Container
      className={
        (validationStatus || (errors && Boolean(errors.length))) &&
        type !== "password"
          ? "error"
          : type === "password" &&
            !(validationStatus || (errors && Boolean(errors.length)))
          ? "password"
          : type === "password" &&
            ((errors && Boolean(errors.length)) || validationStatus)
          ? "password error"
          : ""
      }
      {...attrs}
    >
      {label ? label : null}
      {type === "password" ? (
        inputType === "password" ? (
          <EyeSlash onClick={() => showPassWord()} />
        ) : (
          <Eye onClick={() => showPassWord()} />
        )
      ) : null}
      {!!maskInput ? (
        <InputMask
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type={inputType}
          mask={maskInput}
          inputRef={inputRef}
          alwaysShowMask={alwaysShowMask}
          maskPlaceholder={maskPlaceholder}
          beforeMaskedStateChange={beforeMaskedStateChange}
          placeholder={placeHolder}
          maskChar={maskChar}
          className={type === "card" ? getFlag(inputValue.replace(/[^0-9]/g,'')) : undefined}
        />
      ) : (
        <input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          type={inputType}
          ref={inputRef}
          placeholder={placeHolder}
          disabled={disabled}
          className={type === "card" ? getFlag(inputValue.replace(/[^0-9]/g,'')) : undefined}
        />
      )}

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
