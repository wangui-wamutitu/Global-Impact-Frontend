import Button from "@/components/Button";
import HeaderText from "@/components/HeaderText";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="w-full h-[100vh] flex flex-col items-center">

      <Image
        className="dark:invert my-10"
        src="/gi-logo.png"
        alt="Global Impact logo"
        width={100}
        height={38}
        priority
      />
      <HeaderText
        headingText="Welcome to Global Impact!"
        subText="Shop vetted wellness products, support ethical clinics, and earn rewards—all in one secure app."
      />

      <Image
        className="dark:invert"
        src="/gi-landing-auth-page.png"
        alt="Global Impact landing page image"
        width={230}
        height={45}
        priority
      />
      <Button text={"Get Started"} showIcon={true} />
      <div className='w-full flex items-center justify-center my-5'>
        <p>Already have an account? </p>
        <Link href={'/login'} className='ml-1 text-primary-blue'>Login</Link>
      </div>
    </div>
  );
}
