import Link from "next/link";
import Image from "next/image";
import Author from "./author";
import Fetcher from '../../lib/fetcher'
import Error from ".././_child/error"
import Loading from ".././_child/loading"

export default function Related() {

    const { data, isLoading, isError } = Fetcher('api/popular')
    
    if(isLoading) return <Loading />;
    if(isError) return <Error />

  return (
    <section className="pt-20">
        <h1 className='font-bold text-3xl py-12'>Related</h1>
        <div className="flex flex-col gap-10">
            {
                data.map((value,index)=>(                    
                    <Post  key={index} data={value}/>
                ))
            }        
        </div>

    </section>
  )
}

function Post({data}) {
    const {id, title, category, img, published, author } = data;
    return (
        <div className="flex gap-5">
            <div className='image flex flex-cols justify-start'>
                <Link href={`posts/${id}`}>

                    <Image 
                        src={img || "/"}
                        width={300}
                        height={200}
                        alt=""
                        className="rounded"
                    />

                </Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}><a className="text-orange-600 hover:text-orange-800">{category || "No Category"}</a></Link>
                    <Link href={`/posts/${id}`}><a className="text-gray-800 hover:text-gray-600">- {published || ""}</a></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</a></Link>
                </div>
                { author ? <Author {...author} /> : <></>}
            </div>
        </div>
    );
}
