"use client";

import React, { useState } from "react";
import Image from "next/image";
import ForgotPassword from "@/components/auth/ForgotPassword";
import EnterOTP from "@/components/auth/EnterOTP";
import CreateNewPassword from "@/components/auth/CreateNewPassword";
import { IoArrowBack } from "react-icons/io5";

const ForgotPasswordPage = () => {
  const [showSection, setShowSection] = useState({
    forgotPassword: true,
    enterOTP: false,
    newPassword: false,
  });

  const [handleBack, setHandleBack] = useState<() => void>(() => () => {});

  return (
    <section>
      <button className="absolute top-5 left-4 z-10" onClick={handleBack}>
        <IoArrowBack color="#2B6587" size={28} />
      </button>

      <div className="w-full flex items-center justify-center">
        <Image
          className="dark:invert my-6"
          src="/gi-forgot-password.png"
          alt="Global Impact forgot password"
          width={140}
          height={38}
          priority
        />
      </div>

      {showSection.forgotPassword && (
        <ForgotPassword
          setShowSection={setShowSection}
          setHandleBack={setHandleBack}
        />
      )}
      {showSection.enterOTP && (
        <EnterOTP
          setShowSection={setShowSection}
          setHandleBack={setHandleBack}
        />
      )}
      {showSection.newPassword && (
        <CreateNewPassword
          setShowSection={setShowSection}
          setHandleBack={setHandleBack}
        />
      )}
    </section>
  );
};

export default ForgotPasswordPage;
