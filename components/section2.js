import Link from "next/link"
import Image from "next/image"
import Author from "./_child/author"
import fetcher from '../lib/fetcher'
import Loading from "./_child/loading"
import Error from "./_child/error"

export default function section2() {

    const { data, isLoading, isError } = fetcher('api/posts')
    
    if(isLoading) return <Loading />
    if(isError) return <Error />

  return (
    <section className="container mx-auto md:px-20 py-10">
        <h1 className="font-bold text-4xl py-12 text-center">Latest Posts</h1>

        {/* grid columns */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-14">
            {
                data.map((value, index) => (
                    <Post data={value} key={index}></Post>
                ))
            }
        </div>
    </section>
  )
}


function Post( { data } ){
    const { id, title, category, subtitle, img, published, author } = data;
    return (
        <div className="item">
            <div className="images flex justify-center">
                <Link href={`/posts/${id}`}><a><Image src={img || "/assets/images/img1.jpg"} className="rounded" width={500} height={350} alt=""/></a></Link>
            </div>
            <div className="info flex justify-center flex-col py-4">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "Unknown"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || "Unknown"}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "Title"}</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                    {subtitle||"Unknown"}
                </p>
                { author ? <Author {...author}/> : <></>}
            </div>
        </div>
    )
}