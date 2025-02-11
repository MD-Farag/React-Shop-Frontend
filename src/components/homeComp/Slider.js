import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from "swiper"

//  styles
import 'swiper/css';
import 'swiper/css/pagination';
import { useFetch } from "../../hooks/useFetch";
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import SwiperNavBtns from './SwiperNavBtns';

const Slider = () => {
    const API_URL = process.env.REACT_APP_BACKEND_URL;
    // const { data: slides, isPending, error } = useFetch("http://localhost:3000/slides")
    // const { data: slides, isPending, error } = useFetch("http://localhost:5000/api/slides")
    const { data: slides, isPending, error } = useFetch(`${API_URL}/api/slides`)

    return (
        <Swiper
            className='shadow-md min-[1618px]:rounded-b-lg'
            navigation={{
                nextEl: '.image-swiper-button-next',
                prevEl: '.image-swiper-button-prev',
            }}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}>
            {error && <p className='text-black'>{error}</p>}
            {isPending && <p className='text-black'>Loading...</p>}
            {slides &&
                slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <Link to={`/category/${slide.category}`}>
                            <img src={slide.imageLg} alt='' className='brightness-[0.7] hidden sm:block' />
                            <img src={slide.imageSm} alt='' className='brightness-[0.7] sm:hidden' />
                            <p className='text-left absolute top-[35%] left-[10%] text-[43px] text-white font-bold leading-[48px] min-[460px]:left-[16%] min-[460px]:text-[50px] min-[460px]:leading-[55px] min-[575px]:left-[18%] min-[575px]:text-[55px] min-[575px]:leading-[60px] sm:top-[30%] sm:left-[22%] sm:w-[350px] sm:text-[40px] sm:leading-[42px] md:top-[27%] md:text-[45px] md:leading-[50px] md:w-[420px] lg:text-[55px] lg:top-[26%] lg:w-[450px] lg:leading-[60px] xl:text-[66px] xl:top-[25%] xl:leading-[70px]'>
                                {slide.title}
                            </p>
                            <button className='flex text-base text-white uppercase items-center absolute top-[75%] left-[10%] min-[460px]:top-[70%] min-[460px]:left-[16%] min-[575px]:top-[65%] min-[575px]:left-[18%] sm:top-[75%] sm:left-[22%] md:top-[73%] md:text-lg lg:top-[69%] xl:top-[65%]'>
                                <img src={slide.shopIcon} alt='shop icon' className='mr-5 bg-[#FBB03B] rounded-full p-2 w-[35px]' />
                                {slide.callToAction}
                            </button>
                        </Link>
                    </SwiperSlide>
                ))}
            <SwiperNavBtns />
        </Swiper>
    )
}

export default Slider