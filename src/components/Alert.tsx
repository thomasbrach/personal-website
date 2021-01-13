import React from "react";
import { Alert as MuiAlert, AlertProps } from "@material-ui/lab";

type Props = {
  severity: "error" | "success" | "info" | "warning" | undefined;
  message: string;
} & AlertProps;

const Alert = (props: Props) => {
  const { severity, message, ...rest } = props;
  return (
    <MuiAlert severity={severity} {...rest}>
      {message}
    </MuiAlert>
  );
};

export default Alert;
