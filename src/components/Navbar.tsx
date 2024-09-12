"use client";

import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
    return (
        <div className="sticky top-0 bg-white z-50">
            <nav className="justify-between bg-[#F1F3F7] h-11 hidden md:flex">
                <div className="flex px-[22px] z-40 bg-inactive w-full">
                    <div className="flex items-center text-sm font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                        Mitra PaDi UMKM
                    </div>
                    <div className="flex items-center text-sm font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                        Menjadi Penjual
                    </div>
                    <div className="flex items-center text-sm font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                        Info
                    </div>
                    <div className="flex items-center text-sm font-normal text-[#8D8D97] hover:text-secondary-70 hover:font-bold pr-8 cursor-pointer">
                        Pusat Bantuan
                    </div>
                </div>
                <div className="flex px-[22px] z-20 bg-inactive space-x-2">
                    <div className="flex items-center relative my-2">
                        <Image
                            alt="Logo bangga buatan Indonesia"
                            loading="lazy"
                            width={24}
                            height={24}
                            src="/logo-bbi.svg"
                        />
                    </div>
                    <div className="flex items-center relative my-2">
                        <Image
                            alt="BUMN"
                            loading="lazy"
                            width={65}
                            height={12}
                            src="/logo-bumn.svg"
                        />
                    </div>
                </div>
            </nav>
            <div className="flex justify-between items-center p-4 gap-6 w-full border-b-2 bg-white min-h-[100px]">
                <Image src="/logo.svg" alt="Logo" width={100} height={100} />
                <div className="flex justify-center items-center gap-1">
                    <p className="text-lg text-gray-300">
                        <i className="bx bxs-category"></i>
                    </p>
                    <span className="text-lg text-gray-700  font-semibold">Kategori</span>
                </div>
                <div className="relative items-center w-full h-12 text-paletteText-primary px-3 leading-tight hidden sm:flex border-2 rounded-[8px] bg-white">
                    <input
                        className="w-full h-full focus:outline-none bg-transparent placeholder:text-[#8F95B2] text-sm"
                        placeholder="Cari produk, jasa, atau vendor"
                        
                    />
                    <div className="flex items-center justify-center right-0 pl-2">
                        <span className="text-xl">
                            <i className="bx bx-search"></i>
                        </span>
                    </div>
                </div>
                <div className="flex items-center w-full sm:w-fit h-full">
                    <div className="sm:pl-6 lg:pl-0 hidden sm:flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:mt-0 sm:space-x-5 w-full sm:w-fit">
                        <Link href="/auth/login">
                            <button className="px-6 w-full sm:w-fit h-12 rounded-lg border border-[#0092ac] font-bold text-[#0092ac] hover:bg-[#0092ac] hover:text-white">
                                Masuk
                            </button>
                        </Link>
                        <Link href="/auth/register">
                            <button className="px-6 w-full sm:w-fit h-12 rounded-lg bg-[#0092ac] font-bold text-white">
                                Daftar
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
