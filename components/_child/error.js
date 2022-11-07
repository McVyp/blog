import Image from "next/image"
export default function Error() {
  return (
    <div className="text-center py-10">
        <h1 className="text-3xl font-bold text-red-600 drop-shadow-lg py-10">Something Went Wrong</h1>
        <Image src={"/assets/images/404.png"} 
            width={400}
            height={400}
            alt="Error"
        />
    </div>
  )
}
