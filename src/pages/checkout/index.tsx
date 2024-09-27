import Navbar from "@/components/Navbar";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTotalCost } from "@/context/TotalCostContext";
import Footer from "@/components/Footer";

const Checkout = () => {
    const [timeLeft, setTimeLeft] = useState(180 * 1000);
    const [dueDate, setDueDate] = useState("");

    const { totalCost } = useTotalCost();

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTimeLeft((prevTime) => (prevTime > 0 ? prevTime - 100 : 0));
        }, 100);

        return () => clearInterval(intervalId);
    }, []);

    useEffect(() => {
        const date = new Date();
        const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        setDueDate(date.toLocaleDateString('id-ID', options));
    }, []);

    useEffect(() => {
        if (timeLeft === 0) {
            alert("Waktu pembayaran habis, silakan coba lagi.");
        }
    }, [timeLeft]);

    const formatTimeLeft = (time: number) => {
        const minutes = Math.floor(time / 60000);
        const seconds = Math.floor((time % 60000) / 1000);
        const milliseconds = Math.floor((time % 1000) / 10);
        return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}:${String(milliseconds).padStart(2, '0')}`;
    };


    return (
        <>
            <Navbar />
            <div className="flex flex-col items-center mt-5 mb-10 gap-3">
                <Image
                    src="/general-konfirmasi.b43eea01.svg.png"
                    width={400}
                    height={400}
                    alt="Logo"
                />
                <h1 className="text-2xl font-bold text-gray-500">Lakukan Pembayaran Dalam</h1>
                <span className="text-2xl font-bold text-red-500">{formatTimeLeft(timeLeft)}</span>
                <p className="text-gray-500 text-xl">Jatuh Tempo:</p>
                <p className="text-gray-500 font-bold text-2xl">{dueDate}</p>
                <div className="flex flex-col  w-[800px] border border-gray-200 rounded-lg mt-4">
                    <div className="bg-gray-100 flex justify-between p-3 items-center">
                        <p className="text-xl font-bold text-gray-600">Bank BRI</p>
                        <Image
                            src="/BRI.png"
                            alt="Logo Bank Mandiri"
                            width={60}
                            height={20}
                            className="h-[40px]"
                        />
                    </div>
                    <div className="border-b border-gray-200 flex justify-between p-3 items-center">
                        <p className="text-lg text-gray-600">Nomor Virtual Account</p>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-bold text-gray-600">11-33-XXXXXXX-9  </p>
                            <span className="text-[#0092ac] border-b border-[#0092ac] cursor-pointer">Salin</span>
                            <i className='bx bx-copy text-[#0092ac]'></i>
                        </div>

                    </div>
                    <div className=" flex justify-between p-3 items-center">
                        <p className="text-lg text-gray-600">Total Harga</p>
                        <div className="flex items-center gap-2">
                            <p className="text-lg font-bold text-gray-600">${totalCost.toFixed(2)}</p>
                            <span className="text-[#0092ac] border-b border-[#0092ac] cursor-pointer">Salin</span>
                            <i className='bx bx-copy text-[#0092ac]'></i>
                        </div>
                    </div>
                </div>
                <div className="flex gap-3 w-[800px] mt-3">
                    <button className="rounded-lg border border-[#0092ac] font-bold text-[#0092ac] hover:bg-[#0092ac] hover:text-white w-full h-12">Bayar Sekarang</button>
                    <button className="bg-[#0092ac] text-white font-bold rounded-lg w-full">Cek Status Pesanan</button>
                </div>
                <div className="flex flex-col  w-[800px]  mt-7 gap-5">
                    <p className="text-xl font-bold text-gray-600">Cara Pembayaran</p>
                    <div className=" flex justify-between items-center">
                        <p className="text-lg text-gray-600 font-bold">ATM</p>
                        <p className="text-3xl font-bold text-gray-600">
                            <i className='bx bx-chevron-down' ></i>
                        </p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <p className="text-lg text-gray-600 font-bold">IBANK</p>
                        <p className="text-3xl font-bold text-gray-600">
                            <i className='bx bx-chevron-down' ></i>
                        </p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <p className="text-lg text-gray-600 font-bold">MBANK</p>
                        <p className="text-3xl font-bold text-gray-600">
                            <i className='bx bx-chevron-down' ></i>
                        </p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <p className="text-lg text-gray-600 font-bold">ATM - BANK LAIN</p>
                        <p className="text-3xl font-bold text-gray-600">
                            <i className='bx bx-chevron-down' ></i>
                        </p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <p className="text-lg text-gray-600 font-bold">INTERNET BANKING - BANK LAIN</p>
                        <p className="text-3xl font-bold text-gray-600">
                            <i className='bx bx-chevron-down' ></i>
                        </p>
                    </div>
                    <div className=" flex justify-between items-center">
                        <p className="text-lg text-gray-600 font-bold">MOBILE BANKING - BANK LAIN</p>
                        <p className="text-3xl font-bold text-gray-600">
                            <i className='bx bx-chevron-down' ></i>
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Checkout;