import Image from "next/image";
import { useState } from "react";
import { useTotalCost } from "@/context/TotalCostContext";
import Link from "next/link";

interface CardDetailProps {
    title: string;
    image: string;
    price: number;
    category: string;
    rating: number;
    count: number;
    totalPrice: number;
    description: string;
}

export default function CardDetail({
    title,
    image,
    price,
    category,
    rating,
    count,
    description,
}: CardDetailProps) {
    const [showOptions, setShowOptions] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Pilih Bank');
    const { totalCost } = useTotalCost();


    const toggleOptions = () => {
        setShowOptions(!showOptions);
    };

    const handleOptionSelect = (option: string) => {
        setSelectedOption(option);
        setShowOptions(false);
    };

    return (
        <div className="flex justify-center items-center gap-20 mt-3 mb-5">
            <div className="flex flex-col gap-5">
                <h1 className="text-3xl text-gray-700 font-bold">Ringkasan Belanja</h1>
                <div className="w-[900px] border border-gray-200 rounded-lg shadow-lg p-4">
                    <div className="flex flex-col p-4">
                        <div className="flex gap-7">
                            <Image
                                src={image}
                                alt={`Gambar ${title}`}
                                width={200}
                                height={200}
                                className="h-[300px] object-cover rounded"
                            />
                            <div className="flex flex-col gap-3">
                                <p className="text-2xl font-bold text-gray-700">{title}</p>
                                <span className="font-medium text-lg text-gray-700">
                                    {description}
                                </span>
                            </div>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <div className="flex justify-between">
                                <span className="text-xl font-medium text-gray-700">Harga</span>
                                <p className="text-xl font-medium text-gray-700">${price}</p>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xl font-medium text-gray-700">Kategori</span>
                                <p className="text-xl font-medium text-gray-700">{category}</p>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xl font-medium text-gray-700">Rating</span>
                                <p className="text-xl font-medium text-gray-700">{rating}</p>
                            </div>
                            <div className="flex justify-between">
                                <span className="text-xl font-medium text-gray-700">Jumlah</span>
                                <p className="text-xl font-medium text-gray-700">{count}</p>
                            </div>
                            <span className="border-b-2 mt-3"></span>
                            <div className="flex justify-between mt-4">
                                <span className="text-xl font-medium text-gray-700">Total Harga</span>
                                <p className="text-xl font-bold text-[#0092ac]">
                                    ${totalCost.toFixed(2)}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-5">
                <p className="text-2xl font-bold text-gray-700">Metode Pembayaran</p>
                <div className="w-[460px] h-[250px] border border-gray-200 rounded-2xl shadow-lg p-4">
                    <div className="flex flex-col p-4 gap-4">
                        <div className="border border-gray-200 rounded-xl p-4">
                            <div className="flex gap-3 items-center">
                                <Image
                                    src="/BRI.png"
                                    alt="Logo Bank Mandiri" 
                                    width={60}
                                    height={20}
                                    className="h-[40px]"
                                />
                                <span className="text-gray-400 text-lg p-1 font-medium">
                                    Bank BRI 11-33-XXXXXXX-9
                                </span>
                                <p className="text-4xl text-[#0092ac]">
                                    <i className="bx bxs-check-circle"></i>
                                </p>
                            </div>
                            <p className="text-gray-400 text-lg mt-2">
                                Rekomendasi Terbaikmu!
                            </p>
                        </div>
                        <div
                            className="border border-gray-200 rounded-xl p-3 cursor-pointer"
                            onClick={toggleOptions}
                        >
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <p className="text-xl text-[#0092ac]">
                                        <i className="bx bxs-bank"></i>
                                    </p>
                                    <span className="text-gray-400 text-lg font-medium">
                                        {selectedOption}
                                    </span>
                                </div>
                                <p className="text-xl text-gray-400">
                                    <i className="bx bxs-chevron-right"></i>
                                </p>
                            </div>
                        </div>
                        {showOptions && (
                            <div className="border border-gray-200 rounded-xl cursor-pointer bg-white absolute w-[400px]">
                                <ul className="list-none">
                                    {["Bank Mandiri", "Bank BCA", "Bank BNI", "GoPay", "OVO", "ShopeePay"].map(
                                        (option) => (
                                            <li
                                                key={option}
                                                onClick={() => handleOptionSelect(option)}
                                                className="cursor-pointer p-2 hover:bg-gray-100"
                                            >
                                                {option}
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex gap-5 items-center p-5">
                    <div className="flex flex-col gap-2 flex-shrink-0">
                        <p className="text-xl text-[#0092ac] font-bold">${totalCost.toFixed(2)}</p>
                        <p className="text-gray-600 text-lg font-semibold">
                            Lihat Detail Pembayaran
                        </p>
                    </div>
                    <button className="flex-grow items-center justify-center rounded-xl bg-[#0092ac] font-bold text-white h-12">
                        <Link href="/checkout">
                            Bayar
                        </Link>
                    </button>
                </div>
            </div>
        </div>
    );
}
