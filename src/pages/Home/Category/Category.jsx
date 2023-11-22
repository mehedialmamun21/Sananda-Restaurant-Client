import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';

import slide1 from "../../../assets/home/slide1.jpg"
import slide2 from "../../../assets/home/slide2.jpg"
import slide3 from "../../../assets/home/slide3.jpg"
import slide4 from "../../../assets/home/slide4.jpg"
import slide5 from "../../../assets/home/slide5.jpg"
import SectionTitle from "../../../components/SectionTitle/SectionTitle"

const Category = () => {
    return (
        <section>
            <SectionTitle
                heading={"Order Online"}
                subHeading={"From 11:00 am To 10:00 pm"}
            ></SectionTitle>

            <Swiper
                slidesPerView={5}
                spaceBetween={10}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <img src={slide1} style={{ height: '340px' }} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white font-serif'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} style={{ height: '340px' }} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white font-serif'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} style={{ height: '340px' }} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white font-serif'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} style={{ height: '340px' }} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white font-serif'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} style={{ height: '340px' }} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white font-serif'>Salads</h3>
                </SwiperSlide>
            </Swiper>

        </section>
    );
};

export default Category;





{/* <Swiper
                slidesPerView={4}
                spaceBetween={20}
                centeredSlides={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper mb-20"
            >
                <SwiperSlide>
                    <img src={slide1} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide2} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white'>Pizzas</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide3} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white'>Soups</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide4} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white'>Desserts</h3>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={slide5} alt="" />
                    <h3 className='text-2xl text-center uppercase -mt-16 text-white'>Salads</h3>
                </SwiperSlide>
            </Swiper> */}