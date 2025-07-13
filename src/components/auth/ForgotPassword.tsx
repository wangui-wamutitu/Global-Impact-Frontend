import React, { useEffect, useState } from "react";
import HeaderText from "../ui/HeaderText";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";

type FormValues = {
  email: string;
};

const ForgotPassword = ({
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
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onChange",
  });
  useEffect(() => {
    setHandleBack(() => () => {
      router.push("/login");
    });
  }, [setHandleBack]);

  const onSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setShowSection((prev) => ({
        ...prev,
        forgotPassword: false,
        enterOTP: true,
        newPassword: false,
      }));
      toast.success("OTP sent! Please check your email", {
        position: "top-right",
        autoClose: 5000,
      });
    }, 2000);
  };

  return (
    <div>
      <HeaderText
        headingText="Forgot Password"
        subText="Not to worry! Enter email address associated with your account and we’ll send a link to reset your password."
        alignText="text-left"
      />
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

        <div className="w-full flex items-center justify-center my-4">
          <Button
            type="submit"
            className="w-[300px] text-sm font-semibold"
            icon={false}
            loading={loading}
          >
            Submit
          </Button>
        </div>
      </form>
      <div className="w-full flex items-center justify-center">
        <button
          onClick={() =>
            toast.success("OTP sent! Please check your email", {
              position: "top-right",
              autoClose: 5000,
            })
          }
          className="text-primary-blue cursor-pointer hover:underline"
          type="button"
        >
          Send OTP
        </button>
      </div>
    </div>
  );
};

export default ForgotPassword;
