import Image from "next/image";
import Author from "../../components/_child/author";
import Related from "../../components/_child/related";
import Layout from "../../layout/Layout";
import getPosts from "../../lib/helper";

export default function Page({title, img, subtitle, description, author}) {

  return (
    <Layout>
      <section className='container mx-auto md:px-2 py-16 w-1/2'>
          <div className="flex justify-center">
              {author? <Author /> :<></>}
          </div>
          <div className="post py-10">
                    <h1 className='font-bold text-4xl text-center pb-5'>{title || "No Title"}</h1>

                    <p className='text-gray-500 text-xl text-center'>{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600} alt=""
                        />
                    </div>

                    <div className="content text-gray-600 text-lg flex flex-col gap-4">
                        {description || "No Description"}
                    </div>

                </div>
          <Related />
      </section>
    </Layout>
  )
}


export async function getStaticProps({params}){
  const posts = await getPosts(params.postId)
  return {
    props: posts
  }
}

export async function getStaticPaths(){
    const posts = await getPosts();
    const paths = posts.map(value=>
      {
        return {
          params: {
            postId: value.id.toString()
          }
        }
      })

      return {
        paths,
        fallback: false
      }
}