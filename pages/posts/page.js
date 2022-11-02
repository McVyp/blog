import Image from "next/image";
import Author from "../../components/_child/author";
import Layout from "../../layout/Layout";

export default function Page() {
  return (
    <Layout>
      <section className='container mx-auto md:px-2 py-16 w-1/2'>
          <div className="flex justify-center">
              <Author />
          </div>
          <div className="post py-10">
              <h1 className="font-bold text-4xl text-center pb-5">Lorem Ipsum</h1>
              <p className="text-gray-500 text-xl text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              <div className="py-10">
                  <Image 
                    src={"/assets/images/img1.jpg"}
                    width={900}
                    height={600}
                    alt=""
                  />
              </div>
              <div className="content text-gray-600 text-lg flex flex-co gap-4">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
              </div>
          </div>
      </section>
    </Layout>
  )
}
