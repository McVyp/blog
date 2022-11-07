import Image from 'next/image'
import Link from 'next/link'
export default function Author() {
  return (
      <div className="author flex py-5">
          
          <div class="m-1 mr-2 w-12 h-12 relative flex justify-center items-center rounded-full bg-gray-500 text-xl text-white">
          <Image  
              src={"/assets/images/makima.jpg"}
              layout="fill"
              alt=""
              className='rounded-full'
          />
          </div>
          <div className='flex flex-col justify-center px-4'>
              <Link
                  href={"/"}
                  className='text-xl font-bold text-gray-800 hover:text-gray-600'>Makima</Link>
              <span className='text-sm text-gray-600'>CEO</span>
          </div>

      </div>
  );
}
