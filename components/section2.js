import Link from "next/link";
import Image from "next/image";
import Author from "./_child/author";
import getPosts from "../lib/helper";

export default function Section2() {

    getPosts(2).then(res => console.log(res))
  return (
    <section className='container mx-auto md:px-20 py-10'>
        <h1 className='font-bold text-4xl py-12 text-center'>Latest Posts</h1>

        <div className='grid md:grid-cols-3 lg:grid-cols-3 gap-14'>
            {Post()}
            {Post()}
            {Post()}
        </div>

    </section>
  )
}

function Post() {
    return (
        <div className='item'>
            <div className='images flex justify-center'>
                <Link href={"/"}>

                    <Image 
                        src={"/assets/images/img1.jpg"}
                        width={500}
                        height={350}
                        alt=""
                        className="rounded"
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
                        className="text-xl  font-bold text-gray-800 hover:text-gray-600">All things fall apart when they come too close</Link>
                </div>
                <p className="text-gray-500 py-3">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </p>
                <Author />
            </div>
        </div>
    );
}
