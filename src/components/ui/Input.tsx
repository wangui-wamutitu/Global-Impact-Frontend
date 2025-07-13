"use client";

import { InputHTMLAttributes, forwardRef, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import clsx from "clsx";
import { FieldError, FieldErrorsImpl, Merge } from "react-hook-form";

type InputProps = {
  label?: string;
  error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
  className?: string;
} & InputHTMLAttributes<HTMLInputElement>;

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, className, id, type = "text", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);
    const inputId = id || props.name;

    const isPassword = type === "password";
    const actualType = isPassword ? (showPassword ? "text" : "password") : type;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-1 block text-sm font-medium text-gray-700 dark:text-gray-300"
          >
            {label}
          </label>
        )}
        <div className="relative">
          <input
            id={inputId}
            ref={ref}
            type={actualType}
            className={clsx(
              "block w-full rounded-md border px-3 py-2 text-sm outline-none",
              "border-gray-300 dark:border-gray-700",
              "focus:border-primary-blue",
              error && "border-red-500 focus:border-red-500 focus:ring-red-500",
              className
            )}
            {...props}
          />
          {isPassword && (
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute inset-y-0 right-3 flex items-center text-gray-500"
              tabIndex={-1}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          )}
        </div>
        {error?.message && (
          <p className="text-red-500 text-sm mt-1" role="alert">
            {error.message as string}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
