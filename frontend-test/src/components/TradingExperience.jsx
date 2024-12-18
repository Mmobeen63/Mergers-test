import React from "react";
import logo1 from "/assets/marketing.svg";
import logo2 from "/assets/analysis-text-link.svg";
import logo3 from "/assets/global.svg";
import InfoCard from "./InfoCard";
export default function TradingExperience() {
  return (
    <>
      <div className="bg-[white]">
        <div className="w-[90%] max-w-[1280px] mx-auto py-[120px] text-[#0A0A14] flex flex-col justify-center items-center">
          <h2 className="text-[26px] md:text-[40px] leading-[130%] text-center font-bold">
          What We Offer
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-[60px]">
            <div className="">
              <InfoCard
                icon={logo1}
                heading={"Marketing Tools & Support"}
                desc_1={
                  "High-quality banners, landing pages, and advertising materials tailored to attract traders"
                }
                bgColor="bg-[#F5F5F5]"
                paddingTop="py-6"
              />
            </div>
            <div className="">
              <InfoCard
                icon={logo2}
                heading={"Detailed Reporting"}
                desc_1={
                  "Access real-time analytics to track your referred clients' trades and earnings through your dashboard"
                }
                bgColor="bg-[#F5F5F5]"
                paddingTop="py-6"
              />
            </div>
            <div className="">
              <InfoCard
                icon={logo3}
                heading={"Access to a Global Market"}
                desc_1={
                  "Join a network spanning over various countries, offering 800+ trading instruments and competitive terms"
                }
                bgColor="bg-[#F5F5F5]"
                paddingTop="py-6"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
