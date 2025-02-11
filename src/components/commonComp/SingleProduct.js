import React from 'react';
import SaleMark from './SaleMark';
import { Link } from 'react-router-dom';

const SingleProduct = ({ id, name, img, bfrPrice, aftrPrice, sale }) => {
    return (
        <Link to={`/products/${id}`} className='relative text-left'>
            {sale && <SaleMark save={sale} position='absolute' left='left-[3%] lg:left-[8%]' top='top-10' />}
            <img src={img} alt='' className='w-full shadow-md rounded-lg mb-6' />
            <p className='mb-2 font-ligh pl-2'>{name}</p>
            <div className='pl-2'>
                <span className='text-[#FF0000] mr-8 font-normal'>${aftrPrice}</span>
                {bfrPrice && <span className='text-[#CECECE] font-normal line-through'>${bfrPrice}</span>}
            </div>
        </Link>
    )
}

export default SingleProduct