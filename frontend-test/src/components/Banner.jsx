import React from 'react'
import styles from './banner.module.css'
import Badge from './Badge'
const Banner = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.innerContainer}>
          <div className='flex justify-center my-2'>
          <Badge title='Earn up to 40% commission' backgroundColor='#FFD700' />
          </div>
          <h2 className={`${styles.heading}`}>
           Introducing Broker Program
          </h2>
          <h3 className='text-white text-[18px] md:text-[24px] leading-8 text-center py-2'>
           Maximize Your Earnings With Rinxo
          </h3>
          <p className='text-center text-white p-0 md:px-24 opacity-70'>Earn up to 40% commission on the revenue generated by the clients you refer. As a valued partner in our Introducing Broker (IB) Program, your success is directly tied to your referrals, offering limitless earning potential</p>
        </div>
      </div>
    </>
  )
}

export default Banner