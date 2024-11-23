import { Button, theme } from "antd";
import React from "react";

function CustomButton({
  children,
  style,
  ...other
}: {
  children: React.ReactNode;
  style?: React.CSSProperties;
}) {
  const { token } = theme.useToken();
  return (
    <Button
      style={{
        width: "fit-content",
        backgroundColor: token.colorTextSecondary,
        color: "#fff",
        outline: "none",
        border: "",
        boxSizing: "border-box",
        borderRadius: 30,
        padding: 25,
        ...style,
      }}
      {...other}
    >
      {children}
    </Button>
  );
}

export default CustomButton;
