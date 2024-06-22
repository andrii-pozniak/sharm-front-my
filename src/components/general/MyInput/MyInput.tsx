import React from "react";
import { IFormInput } from "@/types";
import { FieldValues } from "react-hook-form";


// interface MyInputProps extends InputHTMLAttributes<HTMLInputElement> {
//   type: string;
//   label?: string;
//   isRequired?: boolean;
//   placeholder?: string;
//   isPhone?: boolean;
//   error?: string | any;
//   register?: any;
//   defaultValue?: any;
//   onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
//   name?: string;
// }

// eslint-disable-next-line react/display-name
const MyInput =<T extends FieldValues>({
  label,
  name,
  type,
  placeholder,
  register,
  validation,
  isValid,
  error,
  icon,
}: IFormInput<T>) => {
    return (
      <>
      <div className="labelWrapper">
        <label className="label">
          {label} <span className="span">*</span>
        </label>
        <div className="inputWrapper">
          {React.cloneElement(icon, {
            className: `icon ${isValid ? "icon_valid" : ""}`,
          })}
          <input
            className={`input ${error ? "error" : ""} ${
              isValid ? "input_valid" : ""
            }`}
            type={type}
            placeholder={placeholder}
            {...register(name, validation)}
          />
        </div>
      </div>
      {error?.type === "required" && (
        <span className="textError">Введіть {label.toLowerCase()}</span>
      )}
      {error?.type === "minLength" && (
        <span className="textError">Min {validation.minLength} символів</span>
      )}
      {error?.type === "maxLength" && (
        <span className="textError">Max {validation.maxLength} символів</span>
      )}
      {error?.type === "pattern" && (
        <span className="textError">Невірний формат {label.toLowerCase()}</span>
      )}
    </>
  );
};

export default MyInput;
