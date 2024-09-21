// pages/product/detail/order/[id].tsx
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import Footer from "@/components/Footer";
import CardOrder from "@/components/CardOrder";

// Define the type for product
interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    };
}

const OrderDetail = () => {
    const [product, setProduct] = useState<Product | null>(null);
    const [loading, setLoading] = useState(true);
    const router = useRouter();
    const { id } = router.query;
    const count = parseInt(router.query.count as string) || 1;

    const shippingCost = 15.00;
    const shippingTax = 50.00;
    const protectionCost = 5.00;
    const totalPrice = product ? product.price * count : 0;
    const totalCost = totalPrice + shippingCost + shippingTax + protectionCost;

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
            <div className="flex justify-center items-start gap-7 mt-5 mb-10">
                <div className="flex flex-col gap-5">
                    <h1 className="text-3xl text-gray-700 font-bold">Pengiriman</h1>
                    <div className="w-[900px] border border-gray-200 rounded-lg shadow-lg p-4">
                        <div className="flex flex-col p-4 gap-2">
                            <h1 className="text-2xl font-bold text-gray-700">Alamat Pengiriman</h1>
                            <div className="flex items-center gap-2">
                                <span className="text-[#0092ac] text-lg p-1 font-medium"><i className='bx bxs-map-pin'></i></span>
                                <p className="text-lg font-medium text-gray-700">Jose Ahmad (Alamat Utama)</p>
                            </div>
                            <p className="text-lg font-medium text-gray-700">+62812XXXXXXX</p>
                            <p className="text-lg font-medium text-gray-700">Jl. Melati No. 15, RT 04/RW 06, Kelurahan Gajahmungkur, Kecamatan Gajahmungkur, Kota Semarang, Jawa Tengah, 50241, Indonesia</p>
                            <button className="px-6 w-full h-12 rounded-lg border border-[#0092ac] font-semibold text-[#0092ac] hover:bg-[#0092ac] hover:text-white">
                                Pilih Alamat Lain
                            </button>
                        </div>
                    </div>
                    <CardOrder
                        title={product.title}
                        image={product.image}
                        price={product.price}
                        count={count}
                    />
                </div>

                <div className="flex flex-col items-start gap-5 my-14">
                    <div className="w-[460px] h-[450px] border border-gray-200 rounded-2xl shadow-lg p-4">
                        <div className="flex flex-col p-4 gap-4">
                            <p className="text-2xl font-bold text-gray-700">Ringkasan Belanja</p>
                            <div className="flex flex-col  gap-1">
                                <div className="flex justify-between gap-3">
                                    <p className="text-lg font-bold text-gray-600">Total Harga ({count} barang)</p>
                                    <p className="text-lg font-bold text-gray-700">${totalPrice.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <p className="text-lg font-medium text-gray-600">Total Ongkos Kirim</p>
                                    <p className="text-lg font-medium text-gray-700">${shippingCost.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <p className="text-lg font-medium text-gray-600">Ppn Pengiriman</p>
                                    <p className="text-lg font-medium text-gray-700">${shippingTax.toFixed(2)}</p>
                                </div>
                                <div className="flex justify-between gap-3">
                                    <p className="text-lg font-medium text-gray-600">Total Biaya Proteksi</p>
                                    <p className="text-lg font-medium text-gray-700">${protectionCost.toFixed(2)}</p>
                                </div>
                                <span className="border border-t-1 border-gray-100 mt-2"></span>
                                <div className="flex justify-between gap-3 my-2">
                                    <p className="text-lg font-bold text-gray-600">Total Biaya</p>
                                    <p className="text-lg font-bold text-gray-600">${totalCost.toFixed(2)}</p>
                                </div>
                                <span className="border border-b-1 border-gray-100"></span>
                            </div>
                            <div className="w-full border border-[#F7931E] border-dashed rounded-xl bg-[#FEF2E6] h-12 flex items-center gap-3 px-3 justify-between">
                                <div className="flex items-center gap-3">
                                    <Image src="/discount.png" width={25} height={25} className="h-[25px]" alt="Discount" />
                                    <p className="text-gray-700 font-medium">Hemat Besar dengan Voucher</p>
                                </div>
                                <span className="text-[#F7931E]">
                                    <i className="bx bx-chevron-right"></i>
                                </span>
                            </div>
                            <Link
                                href={{
                                    pathname: `/product/checkout/${product.title}/${product.id}`,
                                    query: { count: count },
                                }}
                            >
                                <button className="w-full rounded-xl bg-[#0092ac] font-bold text-white h-12 mt-5">
                                    Pilih Pembayaran
                                </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
            <Footer />
        </>
    );
};

export default OrderDetail;
