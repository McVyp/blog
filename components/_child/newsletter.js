export default function Newsletter(){
    return (
        <section className="bg-gray-50 mt-20">
            <div className="container mx-auto md:px-20 py-16 text-center">
                <h1 className="font-bold text-3xl">Subscribe To Newsletter</h1>
                <div className="py-4">
                    <input type="text" className="shadow border rounded w-9/12 py-3 px-3 text-gray-700 focus:outline-none focus:shadow-outline" placeholder="Enter your Email"/>
                </div>

                <button className="bg-purple-300 hover:bg-purple-400 px-20 py-3 rounded-full transition ease delay-200 text-gray-50 text-xl ">
                Subscribe
                </button>
            </div>
        </section>
    )
}