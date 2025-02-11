import { Link } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import SaleMark from '../commonComp/SaleMark';

const DefaultSale = () => {
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  // const { data: defaultSale, isPending, error } = useFetch('http://localhost:3000/defaultSale');
  // const { data: defaultSale, isPending, error } = useFetch('http://localhost:5000/api/defaultSale');
  const { data: defaultSale, isPending, error } = useFetch(`${API_URL}/api/defaultSale`);

  return (
    <div className='mb-10 lg:mb-20 grid sm:grid-cols-2 gap-6 sm:gap-3 md:gap-4 2xl:gap-8 lg:grid-cols-4 max-w-[1600px] mx-auto text-white max-[1630px]:px-3'>
      {error && <p className='text-black'>{error}</p>}
      {isPending && <p className='text-black'>Loading...</p>}
      {defaultSale && (
        <>
          <div className='relative sm:col-span-2'>
            <img src={defaultSale[0].img} alt='' className='h-full w-full brightness-[0.7] rounded-lg shadow-md' />
            <div className='text-left absolute flex flex-col items-start left-[4%] top-[50%] max-sm:-translate-y-[50%] sm:top-[40%] lg:top-[40%] lg:left-[10%]'>
              <p className='w-[85%] mb-6 text-2xl min-[375px]:mb-8 min-[375px]:text-3xl sm:text-4xl lg:text-2xl xl:text-3xl'>{defaultSale[0].text}</p>
              <Link to='/category/newArrivals' className='py-2.5 px-4 min-[375px]:py-3 min-[375px]:px-5 md:py-3 md:px-8 bg-white text-black rounded-full text-sm sm:text-base md:text-lg'>
                {defaultSale[0].action}
              </Link>
            </div>
          </div>
          <div className='relative sm:col-span-1'>
            <img src={defaultSale[1].img} alt='' className='h-full w-full brightness-[0.7] rounded-lg shadow-md' />
            <div className='text-left absolute flex flex-col items-start left-[4%] top-[50%] sm:top-[40%] lg:top-[40%] lg:left-[10%]'>
              <p className='w-[85%] mb-6 text-2xl min-[375px]:mb-8 min-[375px]:text-3xl sm:text-4xl lg:text-2xl xl:text-3xl'>{defaultSale[1].text}</p>
              <Link to='/category/basic' className='py-2.5 px-4 min-[375px]:py-3 min-[375px]:px-5 md:py-3 md:px-8 bg-white text-black rounded-full text-sm sm:text-base md:text-lg'>
                {defaultSale[1].action}
              </Link>
            </div>
          </div>
          <div className='relative sm:col-span-1'>
            <img src={defaultSale[2].img} alt='' className='h-full w-full brightness-[0.7] rounded-lg shadow-md' />
            <SaleMark position='absolute' left='left-[4%] lg:left-[10%]' top='top-10' save={'-50'} />
            <div className='text-left absolute flex flex-col items-start left-[4%] top-[50%] sm:top-[40%] lg:top-[40%] lg:left-[10%]'>
              <p className='w-[85%] mb-6 text-2xl min-[375px]:mb-8 min-[375px]:text-3xl sm:text-4xl lg:text-2xl xl:text-3xl'>{defaultSale[2].text}</p>
              <Link to='/category/sale' className='py-2.5 px-4 min-[375px]:py-3 min-[375px]:px-5 md:py-3 md:px-8 bg-white text-black rounded-full text-sm sm:text-base md:text-lg'>
                {defaultSale[2].action}
              </Link>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default DefaultSale