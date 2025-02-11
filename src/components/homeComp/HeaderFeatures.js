import React from 'react'
import { useFetch } from '../../hooks/useFetch';

const HeaderFeatures = () => {
    const API_URL = process.env.REACT_APP_BACKEND_URL;
    // const { data: features, isPending, error } = useFetch('http://localhost:3000/headerFeatures');
    // const { data: features, isPending, error } = useFetch('http://localhost:5000/api/headerFeatures');
    const { data: features, isPending, error } = useFetch(`${API_URL}/api/headerFeatures`);

    return (
        <div className='hidden sm:flex lg:absolute lg:left-0 lg:bottom-0 lg:w-[77%] xl:w-[80%] bg-[#FFFFFF] lg:z-10 lg:rounded-tr-[80px] justify-end min-[1618px]:rounded-bl-lg'>
            {error && <p className='text-black'>{error}</p>}
            {isPending && <p className='text-black'>Loading...</p>}
            {features && (
                <div className='grid sm:grid-cols-3 max-xl:mx-auto lg:w-[96%] xl:w-[85%] pt-6 lg:pt-2 lg:pb-2 2xl:pt-4 2xl:pb-2 2xl:pr-14'>
                    {features.map((feature) => (
                        <div key={feature.id} className='text-left flex flex-col max-lg:items-center max-lg:text-center lg:flex-row items-start px-2 py-3 lg:px-3 lg:py-4'>
                            <div className='mr-4 2xl:mr-6'>
                                <img src={feature.icon} alt='shipping' className='max-2xl:w-[35px] max-lg:mb-4 2xl:w-[50px]' />
                            </div>
                            <div>
                                <h3 className='text-slate-900 text-xs lg:text-sm 2xl:text-base font-medium tracking-tight'>{feature.title}</h3>
                                <p className='text-slate-500 mt-2 text-[11.5px] lg:text-xs 2xl:text-sm max-w[156px] lg:max-w-[160px] 2xl:max-w-[185px]'>{feature.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    )
}

export default HeaderFeatures


