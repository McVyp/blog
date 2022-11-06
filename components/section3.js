import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import Link from 'next/link';
import Author from './_child/author';

export default function Section3() {
  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className='font-bold text-4xl py-12 text-center'>Most Popular</h1>
        <Swiper
            slidesPerView={2}
            >
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
            <SwiperSlide>{Post()}</SwiperSlide>
        </Swiper>
    </section>
  )
}

function Post() {
    return (
        <div className='grid'>
            <div className='images'>
                <Link href={"/"}>

                    <Image 
                        src={"/assets/images/img1.jpg"}
                        width={600}
                        height={400}
                        alt=""
                    />

                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className="category">
                    <Link href={"/"} className="text-orange-600 hover:text-orange-800">Indoors, Tings to Do</Link>
                    <Link href={"/"} className="text-gray-600 hover:text-gray-800">- Nov 2, 2022</Link>
                </div>
                <div className="title">
                    <Link
                        href={"/"}
                        className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">All things fall apart when they come too close</Link>
                </div>
                <p className="text-gray-500 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </p>
                <Author />
            </div>
        </div>
    );
}
