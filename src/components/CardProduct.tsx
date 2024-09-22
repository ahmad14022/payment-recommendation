"use client";

import Link from "next/link";
import React from 'react';
import Image from "next/image";

interface CardProps {
    title: string;
    price: number;
    image?: string;
    url?: string;
    category: string;
    rating: number;
    count: number;
}

export default function Card({ title, url, image, price, category, rating, count }: CardProps) {
    const content = (
        <div className="cursor-pointer flex flex-col items-center justify-between w-full h-full gap-2 relative">
            <div className="w-full">
                {image && (
                    <Image
                        src={image}
                        alt={title}
                        width={200} 
                        height={200}
                        className="w-full h-[200px] object-cover rounded"
                    />
                )}
                {/* Badge kategori dipindahkan di sini */}
                <span className="absolute top-[177px] left-0 bg-teal-500 text-white text-xs font-semibold px-2 py-1 rounded-tr-md z-10">
                    {category}
                </span>
            </div>
            <div className="w-full px-3 py-2 space-y-1">
                <div className="flex flex-col gap-y-1">
                    <span className="line-clamp-2 text-[16px] text-wrap">
                        {title}
                    </span>
                    <p className="text-md font-bold text-wrap">${price}</p>
                    <div className="flex items-center gap-x-1">
                        <span className="text-md font-medium"><i className='bx bxs-star text-yellow-500'></i> {rating} / {count} reviews</span>
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
