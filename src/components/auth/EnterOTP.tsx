import React, { useEffect, useState } from "react";
import HeaderText from "../ui/HeaderText";
import Button from "../ui/Button";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import OTPInput from "react-otp-input";

const EnterOTP = ({
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
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);

  const { handleSubmit } = useForm({
    mode: "onChange",
  });
  useEffect(() => {
    setHandleBack(() => () => {
      setShowSection({
        forgotPassword: true,
        enterOTP: false,
        newPassword: false,
      });
    });
  }, [setHandleBack]);

  const onSubmit = () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);

      setShowSection((prev) => ({
        ...prev,
        forgotPassword: false,
        enterOTP: false,
        newPassword: true,
      }));
    }, 2000);
  };

  return (
    <div>
      <HeaderText
        headingText="Enter OTP"
        subText="We have sent the OTP code to 87******47"
        alignText="text-left"
      />
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 w-full md:w-[465px]"
      >
        <OTPInput
          value={otp}
          onChange={setOtp}
          numInputs={6}
          renderInput={(props) => <input {...props} />}
          inputStyle={{
            borderBottom: "1px solid rgba(0, 0, 0, 0.3)",
            height: "3rem",
            width: "3rem",
            fontSize: "2rem",
            margin: "0 5px",
          }}
        />
        <div className="w-full flex items-center justify-center my-4">
          <Button
            type="submit"
            className="w-[300px] text-sm font-semibold"
            icon={false}
            loading={loading}
          >
            Proceed
          </Button>
        </div>
      </form>
      <div className="w-full flex items-center justify-center my-5 text-sm">
        <p>Didn`&apos;`t receive the OTP? </p>
        <button
          onClick={() =>
            toast.success("OTP resent! Please check your email", {
              position: "top-right",
              autoClose: 5000,
            })
          }
          className="ml-1 text-primary-blue"
        >
          Resend OTP
        </button>
      </div>
    </div>
  );
};

export default EnterOTP;
