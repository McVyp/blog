import Link from "next/link";
import Image from "next/image";
import Author from "./author";
export default function Related() {
  return (
    <section className="pt-20">
        <h1 className='font-bold text-3xl py-12'>Related</h1>
        <div className="flex flex-col gap-10">
            {Post()}
            {Post()}
            {Post()}
        </div>

    </section>
  )
}

function Post() {
    return (
        <div className="flex gap-5">
            <div className='image flex flex-cols justify-start'>
                <Link href={"/"}>
                    <a>
                        <Image 
                            src={"/assets/images/img1.jpg"}
                            width={300}
                            height={200}
                            alt=""
                            className="rounded"
                        />
                    </a>
              </Link>
            </div>
            <div className='info flex justify-center flex-col'>
              <div className="category">
                    <Link href={"/"}><a className="text-orange-600 hover:text-orange-800">Indoors, Tings to Do</a></Link>
                    <Link href={"/"}><a className="text-gray-600 hover:text-gray-800">- Nov 2, 2022</a></Link>
              </div>
              <div className="title">
                    <Link href={"/"}><a className="text-xl font-bold text-gray-800 hover:text-gray-600">All things fall apart when they come too close</a></Link>
            </div>
            <Author />
        </div>
        </div>

    )
}
