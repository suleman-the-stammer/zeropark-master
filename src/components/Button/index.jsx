import React from "react";
import "./Button.scss";

const Button = ({ children, variant, ...rest }) => {
  const buttonClass =
    variant === "outlined" ? "StyledButton outlined" : "StyledButton";

  return (
    <button
      // disabled={variant === "disabled"}
      className={buttonClass}
      {...rest}>
      {children}
    </button>
  );
};

export default Button;
