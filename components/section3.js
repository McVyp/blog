import { Swiper, SwiperSlide } from "swiper/react"
import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Error from "./_child/error"
import Loading from "./_child/loading"

export default function section3() {

    const { data, isLoading, isError } = fetcher('api/popular')
    
    if(isLoading) return <Loading />;
    if(isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-16">
        <h1 className="font-bold text-4xl py-12 text-center">Most Popular</h1>

        {/* swiper */}
        <Swiper
            breakpoints={{
                640:{
                    slidesPerView: 2,
                    spaceBetweeen: 30
                }
            }}
        >
            {
                    data.map((value, index) => (
                        <SwiperSlide key={index}><Post data={value}></Post></SwiperSlide>
                    ))
            }
        </Swiper>

    </section>
  )
}


function Post({ data }){

    const { id, title, category, img, description, published, author } = data;

    return (
        <div className="grid px-4">
            <div className="images">
                <Link href={`/posts/${id}`}><a><Image src={img || ""} width={600} height={400} alt=""/></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-3xl md:text-4xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                {description || "No Description"}
                </p>
                { author ? <Author {...author}/> : <></>}
            </div>
        </div>
    )
}