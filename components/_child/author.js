import Image from 'next/image'
import Link from 'next/link'
export default function Author() {
  return (
    <div className="author flex py-5">
        <Image  
            src={"/assets/images/makima.jpg"}
            height={60}
            width={60}
            alt=""
            className='rounded-full'
        />
        <div className='flex flex-col justify-center px-4'>
            <Link href={"/"}><a className='text-lg font-bold text-gray-800 hover:text-gray-600'>Makima</a></Link>
            <span className='text-sm text-gray-600'>CEO</span>
        </div>

    </div>
  )
}
