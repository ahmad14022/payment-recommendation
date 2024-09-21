// pages/product/detail/[id].tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";

type Product = {
    id: number;
    title: string;
    price: number;
    image: string;
    category: string;
    description: string;
    rating: {
        rate: number;
        count: number;
    };
};

const ProductDetail = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const [countProduct, setCountProduct] = useState(1);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        async function fetchProductCheckout() {
            try {
                const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
                setProduct(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching product details:', error);
                setLoading(false);
            }
        }

        if (id) {
            fetchProductCheckout();
        }
    }, [id]);


    if (loading) {
        return <p className="text-center text-gray-500">Loading...</p>;
    }

    if (!product) {
        return <p className="text-center text-red-500">Product not found.</p>;
    }

    return (
        <>
            <Navbar />
            <div>
                <div className="container mx-auto my-auto mt-20 mb-20">
                    <div className="flex gap-8">
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={200}
                            height={200}
                            className="w-[400px] h-[500px] rounded"
                        />
                        <div className="flex flex-col gap-3 w-[700px]">
                            <span className="text-3xl font-medium text-gray-700">{product.title}</span>
                            <span className="text-3xl font-bold text-gray-700">$ {product.price}</span>
                            <span className="text-md font-semibold text-gray-700 border border-gray-300 rounded-lg px-2 py-1 w-[170px]"><i className='bx bxs-star text-yellow-500'></i> {product.rating.rate} / {product.rating.count} reviews</span>
                            <span className="border-b-2 p-2 text-2xl font-normal text-gray-700"></span>
                            <span className="text-2xl font-bold text-gray-700 text-wrap">Description:</span>
                            <span className="text-2xl font-normal text-gray-700 text-wrap">{product.description}</span>
                            <span className="mt-auto text-2xl font-bold text-gray-700">Category:</span>
                            <span className="text-xl font-bold text-gray-700">{product.category}</span>
                        </div>
                        <div className="flex flex-col">
                            <div className="border border-gray-300 rounded-lg w-[400px] h-[400px]">
                                <div className="flex flex-col p-5 gap-3">
                                    <h1 className="text-xl font-semibold text-gray-700">Atur Pembelian</h1>
                                    <h1 className="text-lg text-gray-500">Jumlah Pembelian</h1>
                                    <div className="flex items-center border-[1px] text-paletteText-primary rounded overflow-hidden leading-tight w-fit h-[60px]">
                                        <button
                                            onClick={() => setCountProduct(countProduct - 1)}
                                            disabled={countProduct <= 1}
                                            className="text-gray-500 flex items-center justify-center border-r py-3 px-4 md:p-5 w-12 h-full left-0 cursor-pointer text-2xl font-bold bg-inactive disabled:cursor-not-allowed"
                                        >
                                            -
                                        </button>
                                        <span className="w-20 font-bold text-2xl bg-transparent text-center">{countProduct}</span>
                                        <button
                                            onClick={() => setCountProduct(countProduct + 1)}
                                            className="text-gray-500 flex items-center justify-center border-l py-3 px-4 md:p-5 w-12 h-full right-0 cursor-pointer text-2xl font-bold"
                                        >
                                            +
                                        </button>
                                    </div>

                                    <h1 className="text-lg text-gray-500">Total Harga</h1>
                                    <h1 className="text-3xl font-bold text-[#0092ac]">$ {product.price * countProduct}</h1>
                                    <Link href={`/product/detail/order/${product.id}?count=${countProduct}`}>
                                        <button className="px-6 w-full h-12 rounded-lg bg-[#0092ac] font-bold text-white mt-16">Proceed to Checkout</button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default ProductDetail;
