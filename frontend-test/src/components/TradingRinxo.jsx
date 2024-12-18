import React from "react";
import styles from "./trading.module.css";
import ImageContainer from "./ImageContainer";
import CommonHeading from "./CommonHeading";

const TradingRinxo = ({
  title,
  desc,
  card_1desc,
  card_2desc,
  card_3desc,
  buttonLabel,
}) => {
  return (
    <div className="w-full trading bg-[#F5F5F5] flex flex-col py-10 sm:py-[5%]">
      <div className="w-full px-4 sm:w-[90%] xl:w-[75%] max-w-[1240px] self-center">
        <CommonHeading
          heading={title || "Start Trading with Rinxo"}
          details={
            desc ||
            "Get started with Rinxo’s comprehensive and user friendly platform designed for profit and success."
          }
          detailWidth="md:px-[10%]"
        />
        <div className="image-div-bottom">
          <ImageContainer />
          <div className="pic-card">
            <div className="steps-div-line sm:flex hidden">
              <div
                className={`${styles.yellowLineContainer} rounded-tl-[48px] rounded-bl-[48px]`}
              >
                <img
                  src="/assets/stepsCircle.svg"
                  height={36}
                  width={36}
                  alt="icon"
                  className="mt-[-3%]"
                />
              </div>
              <div className={styles.yellowLineContainer}>
                <img
                  src="/assets/stepsCircle.svg"
                  height={36}
                  width={36}
                  alt="icon"
                  className="mt-[-3%]"
                />
              </div>
              <div
                className={`${styles.yellowLineContainer} rounded-tr-[48px] rounded-br-[48px]`}
              >
                <img
                  src="/assets/stepsCircle.svg"
                  height={36}
                  width={36}
                  alt="icon"
                  className="mt-[-3%]"
                />
              </div>
            </div>
            <div className="steps-div text-center flex mt-3">
              <div
                className={`flex-col items-center sm:flex hidden  ${styles.stepsTextstyle}`}
              >
                <div className={`${styles.customLine}`}></div>
                <div className="text-[18px] md:text-[24px] text-[#0A0A14] font-semibold">
                  Promote Your Partner Link
                </div>
                <div className="text-[#54545B] text-[14px] font-normal">
                  {card_1desc || "Open trading account in a few simple steps."}
                </div>
              </div>
              <div
                className={`flex-col items-center sm:flex hidden ${styles.stepsTextstyle}`}
              >
                <div className={`${styles.customLine}`}></div>
                <div className="text-[18px] md:text-[24px] text-[#0A0A14] font-semibold">
                  Clients Register & Trade
                </div>
                <div className="text-[#54545B] text-[14px] font-normal">
                  {card_2desc || "Securely add funds and get ready to trade."}
                </div>
              </div>
              <div
                className={`sm:flex hidden flex-col items-center ${styles.stepsTextstyle}`}
              >
                <div className={`${styles.customLine}`}></div>
                <div className="text-[18px] md:text-[24px] text-[#0A0A14] font-semibold">
                  You Earn Commission
                </div>
                <div className="text-[#54545B] text-[14px] font-normal">
                  {card_3desc || "Explore and trade global markets."}
                </div>
              </div>
            </div>
          </div>
          {/* <div className="btn-div flex flex-col items-center mt-[5%]">
            <Button
              label={buttonLabel || "Start Trading"}
              onClick={() => {
                window.open(
                  "https://my.rinxo.com/register/trader?link_id=iuhkyc01",
                  "_self"
                );
              }}
            />
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TradingRinxo;
