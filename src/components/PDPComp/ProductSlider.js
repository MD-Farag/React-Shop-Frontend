import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs, EffectFade } from 'swiper';
import 'swiper/swiper.min.css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ProductSlider = ({ imgs, thumbs }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='flex flex-col-reverse mb-[20px] md:flex-col-reverse xl:flex-row max-w-[100vw]'>
            <Swiper
                onSwiper={setThumbsSwiper}
                spaceBetween={20}
                slidesPerView={4}
                autoplay={true}
                freeMode={true}
                direction={'horizontal'}
                breakpoints={{
                    1280: {
                        direction: 'vertical',
                    },
                }}
                modules={[FreeMode, Navigation, Thumbs, EffectFade]}
                className='swiperThumbs max-xl:w-full m-0 xl:!mr-[5px] 2xl:!mr-0'>
                {thumbs &&
                    thumbs.map((thumb) => (
                        <SwiperSlide key={thumb.id}>
                            <img src={thumb.src} alt='' className='max-xl:w-full xl:h-full' />
                        </SwiperSlide>
                    ))}
            </Swiper>
            <Swiper watchSlidesProgress={true} loop={true} loopedSlides={10} centeredSlides={true} grabCursor={true} spaceBetween={0} thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }} modules={[FreeMode, Thumbs, EffectFade]} className='swiperMain max-xl:mb-5 max-xl:w-full xl:w-[75%] md:max-h-[770px]'>
                {imgs &&
                    imgs.map((img) => (
                        <SwiperSlide key={img.id}>
                            <img src={img.src} alt='' className='max-md:w-full' />
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    )
}

export default ProductSlider