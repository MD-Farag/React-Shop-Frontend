import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import SingleProduct from './SingleProduct';
import { useFetch } from '../../hooks/useFetch';
import { Link } from 'react-router-dom';

const Selected = () => {

    const API_URL = process.env.REACT_APP_BACKEND_URL;
    // const { data, isPending, error } = useFetch('http://localhost:3000/selectedItems');
    // const { data, isPending, error } = useFetch('http://localhost:5000/api/selectedItems');
    const { data, isPending, error } = useFetch(`${API_URL}/api/selectedItems`);

    return (
        <div className='mb-10 lg:mb-20 max-[1630px]:px-3'>
            <div className='flex justify-between mb-12 items-center'>
                <span className='text-base sm:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl font-light'>Selected just for you</span>
                <Link to='/category/selectedItems' className='text-sm min-[375px]:text-base sm:text-lg lg:text-xl uppercase border border-[#D8D8D8] rounded-full bg-white px-4 py-2.5 sm:px-6 sm:py-3 lg:px-8 lg:py-4'>
                    Show more
                </Link>
            </div>
            {error && <p className='text-black'>{error}</p>}
            {isPending && <p className='text-black'>Loading...</p>}
            {data && (
                <Swiper
                    navigation={{
                        nextEl: '.image-swiper-button-next',
                        prevEl: '.image-swiper-button-prev',
                    }}
                    slidesPerView={4}
                    // pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    breakpoints={{
                        1024: {
                            spaceBetween: 50,
                            slidesPerView: 4,
                        },
                        768: {
                            spaceBetween: 30,
                            slidesPerView: 3,
                        },
                        640: {
                            spaceBetween: 25,
                            slidesPerView: 2,
                        },
                        300: {
                            spaceBetween: 25,
                            slidesPerView: 1,
                        },
                    }}>
                    {data.map((item) => (
                        <SwiperSlide className='rounded-lg' key={item.id}>
                            <SingleProduct id={item.id} name={item.name} img={item.imgs[0].src} bfrPrice={item.bfrPrice} aftrPrice={item.aftrPrice} sale={item.sale} />
                        </SwiperSlide>
                    ))}

                    <div className='shadow-md image-swiper-button-next absolute right-0 top-[50%] -translate-y-[50%] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] xl:w-[65px] xl:h-[65px] 2xl:w-[70px] 2xl:h-[70px] z-10 flex items-center justify-center rounded-tl-lg rounded-bl-lg'></div>
                    <div className='shadow-md image-swiper-button-prev absolute left-0 top-[50%] -translate-y-[50%] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px] lg:w-[55px] lg:h-[55px] xl:w-[65px] xl:h-[65px] 2xl:w-[70px] 2xl:h-[70px] z-10 flex items-center justify-center rounded-tr-lg rounded-br-lg'></div>
                </Swiper>
            )}
        </div>
    )
}

export default Selected