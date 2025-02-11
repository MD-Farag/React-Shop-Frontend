import React from 'react';
import SingleProduct from '../commonComp/SingleProduct';
import { useFetch } from '../../hooks/useFetch';

const TodayProducts = () => {
  const API_URL = process.env.REACT_APP_BACKEND_URL;
  // const { data: todayProducts } = useFetch('http://localhost:3000/todayItems');
  // const { data: todayProducts } = useFetch('http://localhost:5000/api/todayItems');
  const { data: todayProducts } = useFetch(`${API_URL}/api/todayItems`);

  return (
    <div className='mb-10 lg:mb-20'>
      <div className='mb-16 mt-10 text-center'>
        <span className='text-lg md:text-xl lg:text-2xl 2xl:text-3xl font-light text-center'>Products in today</span>
      </div>
      <div className='grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 max-[1630px]:px-3'>
        {todayProducts && todayProducts.map((item) => (
          <SingleProduct key={item.id} name={item.name} img={item.imgs[0].src} id={item.id} bfrPrice={item.bfrPrice} aftrPrice={item.aftrPrice} />
        ))}
      </div>
    </div>
  )
}

export default TodayProducts