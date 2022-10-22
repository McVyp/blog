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
    return(
        <div className='grid'>
            <div className='images'>
                <Link href={"/"}>
                    <a>
                        <Image 
                            src={"/assets/images/img1.jpg"}
                            width={600}
                            height={400}
                            alt=""
                        />
                    </a>
                </Link>
            </div>
            <div className='info flex justify-center flex-col py-4'>
                <div className="category">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Indoors, Tings to Do</a></Link>
                    <Link href={"/"}><a className="text-gray-600 hover:text-gray-800">- Nov 2, 2022</a></Link>
                </div>
                <div className="title">
                    <Link href={"/"}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">All things fall apart when they come too close</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Author />
            </div>
        </div>
    )
}
