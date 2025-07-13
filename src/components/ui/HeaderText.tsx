import React from "react";

type THeaderText = {
  headingText: string;
  subText: string;
  alignText: "text-left" | "text-center" | "text-right";
};

const HeaderText = ({ headingText, subText, alignText }: THeaderText) => {
  return (
    <div
      className={`${
        alignText === "text-center" ? "w-[300px] md:w-full" : "w-full"
      } flex flex-col`}
    >
      <h1
        className={`${alignText} text-primary-dark mb-5 text-2xl md:text-3xl font-semibold`}
      >
        {headingText}
      </h1>
      <p className={`mb-5 ${alignText} text-secondary-dark`}>{subText}</p>
    </div>
  );
};

export default HeaderText;
