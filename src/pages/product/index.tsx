import Card from "@/components/CardProduct";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Image from "next/image";
import Aside from "@/components/Aside";
import Footer from "@/components/Footer";

const Page = () => {
    const [products, setProducts] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await axios.get('https://fakestoreapi.com/products');
                console.log('Data produk:', response.data);
                setProducts(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    return (
        <>
            <Navbar />
            <div className="container-md mb-20">
                <div className="relative min-h-[calc(100vh-100px)] bg-[#0092ac]">
                    {/* Ellipse 1 & 2 Positioned Absolutely */}
                    <Image
                        src='/Ellipse-1.png'
                        alt="Ellipse 1"
                        width={600}
                        height={600}
                        className="absolute bottom-3 right-[320px] z-10"
                    />
                    <Image
                        src='/Ellipse-2.png'
                        alt="Ellipse 2"
                        width={700}
                        height={700}
                        className="absolute bottom-0 right-[270px] z-10"
                    />

                    <Image src='/rounded.png' width={70} height={70} className="absolute top-[90px] right-10" />

                    {/* Hero Content */}
                    <div className="flex justify-around items-center h-full relative z-20">
                        <div className='flex flex-col gap-5'>
                            <h1 className="text-7xl font-extrabold text-white uppercase leading-[80px]">
                                Bersama <br /> maju, <br /> bersama <br /> UMKM
                            </h1>
                            <p className="text-xl text-white font-medium tracking-wider">Dapatkan produk unggulan sambil mendukung usaha lokal.</p>
                            <Link href="/auth/register">
                                <button className="px-8 w-full sm:w-fit h-14 rounded-lg bg-[#F7931E] font-bold text-white text-xl mt-5">
                                    Jelajahi Produk
                                </button>
                            </Link>
                        </div>

                        {/* Hero Image */}
                        <Image
                            src="/hero-1.png"
                            alt="hero image"
                            width={950}
                            height={577}
                            className="min-h-[calc(100vh-100px)] object-cover relative z-20"
                        />
                    </div>
                </div>



                <div className="flex flex-col justify-center items-center mt-7 gap-7">
                    {/* <Image
                        src='/banner.png'
                        alt="banner"
                        width={1390}
                        height={500}
                        className="rounded-lg" // Tailwind CSS class for border-radius
                    /> */}
                    <div className="flex flex-col">
                        <h1 className="text-3xl font-bold text-gray-700">Koleksi Barang Aksesoris</h1>
                        <div className="flex justify-center gap-5">
                            <Aside />
                            <div className="flex justify-center items-center min-h-screen bg-white mt-7">
                                <div className="grid grid-cols-2 gap-[20px] md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                                    {products.length > 0 ? (
                                        products.map((product) => (
                                            <div key={product.id} className="flex flex-col justify-start h-[340px] w-[210px] rounded-lg overflow-hidden bg-white font-ubuntu border border-[#DEE3ED] shadow-[1px_1px_5px_0_rgba(0,0,0,0.1)]">
                                                <Link href={`/product/detail/${product.id}`}>
                                                    <Card
                                                        image={product.image}
                                                        price={product.price}
                                                        title={product.title}
                                                        category={product.category} // Tambahkan category
                                                        rating={product.rating.rate}
                                                        count={product.rating.count}
                                                    />
                                                </Link>
                                            </div>
                                        ))
                                    ) : (
                                        <p className="text-center text-gray-500">No products available.</p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>

        </>
    );
}

export default Page;
