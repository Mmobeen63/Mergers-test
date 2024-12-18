import React from 'react'
import styles from './payment.module.css'
const PaymentTicker = () => {
  const icons = [
    '/assets/bitcoin.svg',
    '/assets/usdt-icon.svg',
    '/assets/erc20.svg',
    '/assets/applePay.svg',
    '/assets/mastercard-icon.svg',
    '/assets/visa-icon.svg',
  ]
  return (
    <div className={styles.container}>
        <h2 className='lg:text-[40px] text-[26px] text-primaryHeading leading-[130px] my-10 font-bold'>
            Multiple Payment Options
        </h2>
      <div
        className={`${styles.innerContainer} lg:w-[75%] w-[90%] max-w-[1240px] `}
        >
        {icons?.length > 0 &&
          icons?.map((url, index) => (
            <div key={index} className=''>
              <img
                // className={styles.icon}
                style={{ objectFit: 'contain' , objectPosition: 'center' , height: '100%' , width: '100%' }}
                key={index}
                alt='icon'
                src={url}
                width={60}
                height={43}
              />
            </div>
          ))}
      </div>
    </div>
  )
}

export default PaymentTicker
