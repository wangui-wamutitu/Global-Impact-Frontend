import HeaderText from "@/components/ui/HeaderText";
import LoginForm from "@/components/auth/LoginForm";
import Image from "next/image";
import React from "react";
import Link from "next/link";

const LoginPage = () => {
  return (
    <section>
      <Link href={"/"} className="cursor-pointer">
        <Image
          className="dark:invert my-6"
          src="/favicon.png"
          alt="Global Impact forgot password"
          width={70}
          height={38}
          priority
        />
      </Link>
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
