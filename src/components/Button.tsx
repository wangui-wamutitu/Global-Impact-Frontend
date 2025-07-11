import React from "react";
import { FaArrowRight } from "react-icons/fa6";

type TButton = {
  text: string;
  showIcon: boolean;
};

const Button = ({ text, showIcon }: TButton) => {
  return (
    <div className="w-full flex items-center justify-center">
      <button className="w-[350px] bg-primary-blue rounded-3xl flex items-center justify-between border-none outline-none py-2 pr-2 cursor-pointer text-white">
        <div className='mr-10'></div>
        {text}{" "}
        {showIcon ? (
          <span className="w-[35px] h-[35px] bg-[#ffffff60] rounded-full cursor-pointer flex items-center justify-center">
            {" "}
            <FaArrowRight color="white" />{" "}
          </span>
        ) : null}
      </button>
    </div>
  );
};

export default Button;
