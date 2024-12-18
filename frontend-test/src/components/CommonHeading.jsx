import React from "react";
const CommonHeading = ({
  heading,
  details,
  detailWidth = "w-[100%]",
}) => {
  return (
    <div className="whyheading flex flex-col items-center">
      <h2 className="md:text-[40px] text-[26px] font-bold mb-4 text-primaryHeading text-center">
        {heading}
      </h2>
      <p
        className={
          "text-center text-customGray md:text-lg text-base font-normal md:mb-12 mb-6"
          
        }
      >
        {details}
      </p>
    </div>
  );
};

export default CommonHeading;
