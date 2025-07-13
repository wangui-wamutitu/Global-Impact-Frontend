"use client";

import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import { useRouter } from "next/navigation";
import Button from "../ui/Button";
import Link from "next/link";
import { useState } from "react";
import { toast } from "react-toastify";

type FormValues = {
  email: string;
  password: string;
  confirmpassword: string;
};

export default function SignupForm() {
  const [isTermsAccepted, setIsTermsAccepted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    mode: "onChange",
  });

  const password = watch("password");
  const router = useRouter();

  const onSubmit = (data: FormValues) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      console.log("Form data:", data);

      if (!isTermsAccepted) {
        toast.error("Accept terms and conditions first.");
        return;
      }

      //on sending data to the db and getting a token back, route to protected route
      toast.success("Successful sign up!");
      router.push("/dashboard");
    }, 2000);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-4 w-full md:w-[465px]"
    >
      <Input
        type="email"
        label="Email Address"
        placeholder="name@example.com"
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
            message: "Please enter a valid email address",
          },
        })}
        error={errors?.email}
      />

      <Input
        type="password"
        label="Password"
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 8,
            message: "Must be at least 8 characters",
          },
        })}
        error={errors?.password}
      />
      <Input
        type="password"
        label="Confirm Password"
        {...register("confirmpassword", {
          required: "Confirm Password is required",
          validate: (value) =>
            value === password || "Both passwords must match",
        })}
        error={errors?.confirmpassword}
      />
      <div className="flex items-center gap-2 my-4">
        <input
          type="checkbox"
          onChange={() => setIsTermsAccepted(!isTermsAccepted)}
          className="h-4 w-4 accent-primary-blue"
        />
        <label className="text-sm text-secondary-dark">
          I accept the{" "}
          <span className="font-semibold text-primary-dark cursor-pointer hover:underline">
            Terms of Use
          </span>{" "}
          &{" "}
          <span className="font-semibold text-primary-dark cursor-pointer hover:underline">
            Privacy Policy
          </span>
          .
        </label>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          type="submit"
          className="w-[350px] text-sm font-semibold"
          icon={false}
          loading={loading}
        >
          Sign Up
        </Button>
      </div>
      <div className="w-full flex items-center justify-center my-5 text-sm">
        <p>Already have an account? </p>
        <Link href={"/login"} className="ml-1 text-primary-blue">
          Login
        </Link>
      </div>
    </form>
  );
}
