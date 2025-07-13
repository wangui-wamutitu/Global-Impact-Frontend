"use client";

import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { ImSpinner2 } from "react-icons/im";
import clsx from "clsx";

type ButtonProps = {
  children: React.ReactNode;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  className?: string;
  loading?: boolean;
  loadingText?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button = ({
  children,
  icon = <FaArrowRight />,
  iconPosition = "right",
  fullWidth = false,
  className,
  loading = false,
  loadingText = "Loading...",
  disabled,
  ...props
}: ButtonProps) => {
  const isDisabled = loading || disabled;

  return (
    <button
      className={clsx(
        "bg-primary-blue text-white rounded-3xl py-2 px-4 flex items-center justify-between gap-2",
        fullWidth && "w-full",
        isDisabled && "opacity-60 cursor-not-allowed",
        className
      )}
      disabled={isDisabled}
      {...props}
    >
      {!icon || iconPosition === "right" ? <div></div> : null}
      {icon && iconPosition === "left" && !loading && (
        <span className="flex items-center justify-center w-[32px] h-[32px] bg-white/30 rounded-full">
          {icon}
        </span>
      )}

      <span className="flex items-center gap-2">
        {loading ? (
          <>
            <ImSpinner2 className="animate-spin text-white text-lg" />
            {loadingText && <span>{loadingText}</span>}
          </>
        ) : (
          children
        )}
      </span>

      {icon && iconPosition === "right" && !loading && (
        <span className="flex items-center justify-center w-[32px] h-[32px] bg-white/30 rounded-full">
          {icon}
        </span>
      )}
      {!icon || iconPosition === "left" ? <div></div> : null}
    </button>
  );
};

export default Button;
