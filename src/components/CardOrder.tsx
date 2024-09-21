"use client";

import Link from "next/link";
import React from 'react';
import Image from "next/image";

interface CardProps {
    title: string;
    price: number;
    image?: string;
    url?: string;
    count: number;

}

export default function CardOrder({ title, url, image, price, count, }: CardProps) {
    const content = (
        <div className="flex justify-center items-center gap-20 mt-3">
            <div className="flex flex-col gap-5">
                <div className="w-[900px] border border-gray-200 rounded-lg shadow-lg p-4">
                    <div className="flex flex-col p-4 gap-2">
                        <h1 className="text-2xl font-bold text-gray-700">Pesanan 1</h1>
                        <div className="flex flex-col gap-7">
                            <div className="flex gap-3">
                                <Image src='/shop.png'
                                    width={25}
                                    height={25}
                                    alt="shop"
                                    className="h-[25px]" />
                                <p className="text-xl font-bold text-gray-700">Raja Tas Indonesia</p>
                            </div>
                            <div className="flex gap-4">
                                <Image
                                    src={image ? image : '/default-image.png'} // Gambar default jika image undefined
                                    alt={title}
                                    width={100}
                                    height={100}
                                    className="h-[200px] w-[200px] object-cover rounded"
                                />

                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-lg font-bold text-[#F7931E]">Tersedia 50</p>
                                    <div className="flex justify-between">
                                        <label className="text-lg font-medium text-gray-500">{title}</label>
                                        {/* Menambahkan flex dan gap untuk mengatur posisi count dan price */}
                                        <div className="flex items-end gap-2">
                                            <label className="text-lg font-bold text-gray-700">{count}x</label>
                                            <label className="text-lg font-bold text-gray-700">${price}</label>
                                        </div>
                                    </div>
                                    <label className="bg-[#94D8DD] text-gray-800 p-2 border rounded-xl"><b>Kurir Pribadi</b> (Estimasi 10-12 September) </label>
                                    <label className="border border-[#0092ac] font-bold  text-gray-800 p-2 rounded-xl">Pilihan Pengiriman</label>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );

    return url ? (
        <Link href={url} className="group">
            {content}
        </Link>
    ) : (
        <div className="group">
            {content}
        </div>
    );
}
