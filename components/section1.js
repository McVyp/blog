import Image from "next/image";
import Link from "next/link";
import Author from "./_child/author";

export default function Section1() {

    const bg = {
        background:"url('/assets/images/banner.png') no-repeat",
        backgroundPosition: "right"
    }
  return (
    <section className='py-16' style={bg}>
        <div className='container mx-auto md:px-20'>
            <h1 className='font-bold text-4xl pb-12 text-center'>Trending</h1>
            {Slide()}
        </div>
    </section>

  )
}

function Slide() {
    return (
        <div className='grid md:grid-cols-2'>
            <div className='image'>
                <Link href={"/"}>
                    <a>
                        <Image 
                            src={"/assets/images/img1.jpg"}
                            width={600}
                            height={600}
                            alt=""
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
                    <Link href={"/"}><a className="text-3xl md:text-6xl font-bold text-gray-800 hover:text-gray-600">All things fall apart when they come too close</a></Link>
                </div>
                <p className="text-gray-500 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Author />
            </div>
        </div>
    )
}
