import React from 'react';
import { useFetch } from '../../hooks/useFetch';
import { assets } from '../../assets/assets';

const WhyUs = () => {
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  // const { data: whyUs, isPending, error } = useFetch('http://localhost:3000/whyUs');
  // const { data: whyUs, isPending, error } = useFetch('http://localhost:5000/api/whyUs');
  const { data: whyUs, isPending, error } = useFetch(`${API_URL}/api/whyUs`);

  return (
    <div className='mb-10 lg:mb-20'>
      {error && <p className='text-black'>{error}</p>}
      {isPending && <p className='text-black'>Loading...</p>}
      {whyUs && (
        <>
          <div className='mb-16 mt-10 text-center'>
            <span className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light text-center'>Why should you choose us?</span>
          </div>
          <div className='grid mx-auto w-full sm:grid-cols-2 lg:grid-cols-4 px-2 lg:px-4'>
            {whyUs.map((item) => (
              <div key={item.id} className='text-left flex flex-col mb-6 max-lg:items-center max-lg:text-center items-start px-2 py-3 lg:px-3 lg:py-4'>
                <div className='mr-4 2xl:mr-9'>
                  <img src={item.icon} alt='shipping' className='w-[60px] mb-4' />
                </div>
                <div>
                  <h3 className='text-black font-medium mb-3 text-base md:text-lg 2xl:text-xl'>{item.title}</h3>
                  <p className='text-[#808080] font-light max-md:px-8 max-lg:px-12 text-sm md:text-base 2xl:text-lg'>{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default WhyUs