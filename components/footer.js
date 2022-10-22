import { ImFacebook2, ImGithub, ImTwitter } from "react-icons/im";
import Link from "next/link";
import Newsletter from "./_child/newsletter";
export default function Footer() {

   const bg= {
    backgroundImage: "url('/assets/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
   }
  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
        <div className="container mx-auto flex justify-center py-12">
            <div className="py-5">
                <div className="flex gap-6 justify-center">
                  <Link href={"/"}><a><ImFacebook2 color="#888888" /></a></Link>
                  <Link href={"/"}><a><ImGithub color="#888888" /></a></Link>
                  <Link href={"/"}><a><ImTwitter color="#888888" /></a></Link>
                </div>
            </div>
            <p className="py-5 text-gray-400">Copyright &copy;2022 All rights reserved</p>
            <p className="text-gray-400 text-center">Terms & Condition</p>
        </div>
    </footer>
  )
}
