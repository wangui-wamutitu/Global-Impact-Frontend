"use client";

import { useForm } from "react-hook-form";
import Input from "../ui/Input";
import Link from "next/link";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

export default function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  });
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const onSubmit = (data: any) => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      console.log("Form data:", data);

      //on sending data to the db and getting a token back, route to protected route
      toast.success("Successful log in!");
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
            message: "Must be at least 8 characters.",
          },
        })}
        error={errors?.password}
      />
      <div className="w-full text-right my-3">
        <Link
          href={"/forgot-password"}
          className="text-sm text-primary-dark font-semibold"
        >
          Forgot Password?
        </Link>
      </div>
      <div className="flex items-center gap-2 mb-4">
        <input type="checkbox" className="h-4 w-4 accent-primary-blue" />
        <label className="text-sm text-secondary-dark">
          Remember me and keep me logged in
        </label>
      </div>
      <div className="w-full flex items-center justify-center">
        <Button
          type="submit"
          className="w-[350px] text-sm font-semibold"
          icon={false}
          loading={loading}
        >
          Log In
        </Button>
      </div>
      <div className="w-full flex items-center justify-center my-5 text-sm">
        <p>Don't have an account? </p>
        <Link href={"/signup"} className="ml-1 text-primary-blue">
          Sign Up
        </Link>
      </div>
    </form>
  );
}
