import React from "react";
import styles from "./trade.module.css";
import InfoWithIcon from "./InfoWithIcon";
const WhyTradeSection = () => {
  const data = [
    {
      title: "Unlimited Commission Potential",
      iconUrl: "/assets/money-bag-02.png",
      desc: "The more clients you refer, the higher your commission will be",
    },
    {
      title: "Daily Payouts",
      iconUrl: "/assets/dollar-receive-01.png",
      desc: "Receive commissions daily, with instant withdrawals available",
    },
    {
      title: "Advanced Tools",
      iconUrl: "/assets/configuration-02.png",
      desc: "Access marketing tools, reports, dashboards, and real-time market updates",
    },
    {
      title: "Comprehensive Support",
      iconUrl: "/assets/headphones.png",
      desc: "A dedicated support team available 24/7 at your service to assist you with marketing strategies",
    },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h3>Why Join Our IB Program?</h3>
        <div className={styles.cardContainer}>
          {data?.length > 0 &&
            data?.map((item, index) => (
              <div className={styles.infoContainer} key={index}>
                <InfoWithIcon
                  title={item?.title}
                  desc={item?.desc}
                  iconUrl={item?.iconUrl}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default WhyTradeSection;
