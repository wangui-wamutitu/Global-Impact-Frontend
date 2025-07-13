import Link from "next/link";
import React from "react";

const PrivacyContainer = () => {
  return (
    <div className="w-full flex items-center justify-between text-xs">
      <Link className="uppercase underline" href="#">
        Privacy Policy
      </Link>
      <Link className="uppercase underline" href="#">
        Terms & Conditions
      </Link>
    </div>
  );
};

export default PrivacyContainer;
