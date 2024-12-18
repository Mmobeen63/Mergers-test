import React from 'react'

const InfoCard = ({
  icon,
  heading,
  desc_1,
  details,
  paddingTop = 'py-6',
  linkText,
  linkHref = '/',
  linkIcon,
  bgColor = '#F5F5F5',
  buttonText,
  buttonOnclick,
  buttonIcon
}) => {
  return (
    <div
      className={`${bgColor}  rounded-lg px-6 ${paddingTop} md:w-full max-md:w-full w-10/12 text-[#0A0A14] flex flex-col justify-between`}
    >
      <div className='flex flex-col space-y-[8px]'>
        {icon && (
          <img
            className={'max-md:w-[24px] h-[36px] pb-[6px]'}
            src={icon}
            height={36}
            width={36}
            alt='icon'
          />
        )}

        <h2 className='text-[20px] md:text-[24px] font-semibold text-black text-left pb-3'>
          {heading}
        </h2>
        {desc_1 && 
        <p style={{ textAlign: 'left' }} className='text-[#54545B] pb-6'>
          {desc_1}
        </p>
        }
        <p className='text-[#54545B]'>{details}</p>
      </div>
      {linkText && (
  <button
    href={linkHref}
    className="group flex items-center text-[18px] font-semibold hover:text-yellow-400 transition-all"
  >
    {linkText}
    {linkIcon && (
      <div className="ml-3 flex items-center max-md:w-[24px] h-[24px] group-hover:translate-x-2 transition-all">
        <svg
          className="group-hover:stroke-yellow-400 transition-all"
          width="18"
          height="13"
          viewBox="0 0 18 13"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M16.0002 6.5L1.00024 6.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 1.5L16.2929 5.79289C16.6262 6.12623 16.7929 6.29289 16.7929 6.5C16.7929 6.70711 16.6262 6.87377 16.2929 7.20711L12 11.5"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    )}
  </button>
)}


      {buttonText && (
        <button
          className='flex items-center mt-[4%] text-[18px] font-semibold hover:text-yellow-400'
          onClick={buttonOnclick}
        >
          {buttonText}
          {buttonIcon && (
            <img
              src={buttonIcon}
              className='ml-3 max-md:w-[24px] h-[24px]'
              height={36}
              width={36}
              alt='icon'
            />
          )}
        </button>
      )}
    </div>
  )
}

export default InfoCard

{
  /* <InfoCard
icon="assets/whyRinxo/icons/headphones.svg"
heading="Need More Help?"
details="Our support team is here to assist you with any questions or issues you may have. Reach out to us for help with trading, account management, and more."
linkText="Help Center"
linkHref="/about"
linkIcon="assets/whyRinxo/icons/headphones.svg"
/> */
}
