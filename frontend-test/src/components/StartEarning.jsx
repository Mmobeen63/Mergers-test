import React from "react";

/**
 * A reusable component for displaying a call to action for users to
 * sign up for a Rinxo account or try a demo account.
 *
 * @returns {JSX.Element} A JSX element representing the call to
 * action to sign up for a Rinxo account or try a demo account..
 */


const StartEarning = () => {
  return (
    <div className={` w-full py-20  overflow-hidden relative bg-[#FFD700]`}>
      {/* <div className="mx-auto w-[90%] container max-w-[1280px]  "> */}
      <div className="sm:mx-auto sm:w-[90%] max-w-[1280px] mx-[16px] ">
        <div className=" md:text-start text-center  flex flex-col items-center justify-between gap-3">
          <div className=" ">
            <p className="text-[#0A0A14] text-[26px] sm:text-[30px] lg:text-[40px] xl:text-[40px] leading-[130%] float-left  font-bold ">
              Start Your Journey Today
            </p>
          </div>
            <p className="text-center text-primaryHeading text-[16px] leading-7 pb-2">Lead the industry by partnering with Rinxo. Whether you are just starting or want to<br /> scale, our IB Program equips you with everything you need to grow and succeed.</p>
          <div className="flex flex-col w-full sm:w-fit sm:flex-row justify-center gap-5 md:gap-5 mt-5 md:mt-0">
            <button
              href="https://my.rinxo.com/register/trader?link_id=iuhkyc01"
              className="text-white text-lg font-semibold bg-[#0A0A14] hover:bg-[#2D2D38]  active:bg-[#1E1E26] transform active:scale-95 rounded-md h-[60px] flex items-center justify-center px-8 py-4"
            >
              Start Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StartEarning;
