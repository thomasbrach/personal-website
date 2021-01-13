import React, { InputHTMLAttributes } from "react";
import { TextField } from "@material-ui/core";
import { useField } from "formik";

type Props = {
  name: string;
  label: string;
  inputSize?: "small" | "medium" | undefined;
  required?: boolean;
  multiline?: boolean;
  fullWidth?: boolean;
  rows?: number;
} & InputHTMLAttributes<HTMLInputElement>;

const FormTextInput = (props: Props) => {
  const {
    type,
    label,
    placeholder,
    inputSize,
    required,
    rows,
    multiline,
    fullWidth,
    ...rest
  } = props;
  const [field, meta] = useField(rest);
  const errorText = meta.error && meta.touched ? "Required field" : "";

  return (
    <TextField
      type={type}
      label={label}
      placeholder={placeholder}
      variant="outlined"
      size={inputSize}
      margin="normal"
      fullWidth={fullWidth}
      required={required}
      multiline={multiline}
      rows={rows}
      helperText={errorText}
      error={!!errorText}
      {...field}
    />
  );
};

export default FormTextInput;
