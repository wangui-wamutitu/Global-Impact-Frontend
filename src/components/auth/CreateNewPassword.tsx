"use client";

import React, { useEffect, useState } from "react";
import HeaderText from "../ui/HeaderText";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = { password: string; confirmpassword: string };

const CreateNewPassword = ({
  setShowSection,
  setHandleBack,
}: {
  setShowSection: React.Dispatch<
    React.SetStateAction<{
      forgotPassword: boolean;
      enterOTP: boolean;
      newPassword: boolean;
    }>
  >;
  setHandleBack: React.Dispatch<React.SetStateAction<() => void>>;
}) => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setHandleBack(() => () => {
      setShowSection({
        forgotPassword: false,
        enterOTP: true,
        newPassword: false,
      });
    });
  }, [setHandleBack]);
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

      //on successful change of password...
      toast.success("Successfully changed password");
      router.push("/login");
    }, 2000);
  };
  return (
    <div>
      <HeaderText
        headingText="Create New Password"
        subText="Your new password must be different from previous used passwords and must be of at least 8 characters."
        alignText="text-left"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full md:w-[465px]"
      >
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
        <div className="w-full flex items-center justify-center mt-4">
          <Button
            type="submit"
            className="w-[300px] text-sm font-semibold"
            icon={false}
            loading={loading}
          >
            Update Password
          </Button>
        </div>
      </form>
    </div>
  );
};

export default CreateNewPassword;
