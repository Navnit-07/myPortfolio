import React from "react";
import styles from "./CustomButton.module.css";
import clsx from "clsx";

const CustomButton = ({
  children,
  variant = "primary",
  borderRadius = "0.25rem",
  bgColor,
  textColor,
  btnMargin = "20px 0 0 0",
  btnPadding = "8px 15px",
  opacity,
  disabled = false,
  onClick,
}) => {
  const styleOverrides = {
    borderRadius,
    backgroundColor: bgColor,
    color: textColor,
    margin: btnMargin,
    padding: btnPadding,
    opacity: opacity,
  };

  return (
    <button
      className={clsx(styles.btn, styles[`btn-${variant}`])}
      style={styleOverrides}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default CustomButton;
