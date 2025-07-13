import Button from "@/components/ui/Button";
import HeaderText from "@/components/ui/HeaderText";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const LoginPage = () => {
  return (
    <section>
      <Image
        className="dark:invert my-6"
        src="/favicon.png"
        alt="Global Impact forgot password"
        width={70}
        height={38}
        priority
      />
      <HeaderText
        headingText="Welcome Back"
        subText="Log in to continue shopping, earning rewards, and supporting trusted wellness providers."
        alignText="text-left"
      />
      <LoginForm />
    </section>
  );
};

export default LoginPage;
