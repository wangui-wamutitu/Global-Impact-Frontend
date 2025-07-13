import HeaderText from "@/components/ui/HeaderText";
import SignupForm from "@/components/auth/SignupForm";
import Image from "next/image";
import React from "react";

const SignupPage = () => {
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
        headingText="Join the Global Impact Marketplace"
        subText="It only takes a minute to join the marketplace and unlock exclusive wellness perks."
        alignText="text-left"
      />
      <SignupForm />
    </section>
  );
};

export default SignupPage;
