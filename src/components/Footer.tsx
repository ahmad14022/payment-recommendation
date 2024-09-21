"use client"

import Image from "next/image"

export default function Footer() {
    return (
        <footer className="bg-[#F6F9FC] text-white py-4">
            <div className="flex flex-col p-24 gap-3">
                <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-gray-600">PaDI UMKM</p>
                        <ul>
                            <li className="text-lg font-medium text-gray-400 mb-2">Tentang Padi UMKM</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Syarat dan Ketentuan</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Kebijakan Privasi</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Finance</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-gray-600">Informasi</p>
                        <ul>
                            <li className="text-lg font-medium text-gray-400 mb-2">FAQ (Tanya Jawab)</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-gray-600">Penjual</p>
                        <ul>
                            <li className="text-lg font-medium text-gray-400 mb-2">Panduan Penjual</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Marketplace</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Tender</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Control Tower</li>
                        </ul>
                    </div>
                    <div className="flex flex-col gap-4">
                        <p className="text-2xl font-bold text-gray-600">Hubungi Kami</p>
                        <ul>
                            <li className="text-lg font-medium text-gray-400 mb-2">Gedung Telkom Direktorat Business and Technology</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Jln. Prof. Dr. Soepomo No. 139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia</li>
                            <li className="text-lg font-medium text-gray-400 mb-3">Senin - Jum&apos;at | 08.00 - 17.00 WIB</li>
                            <li className="text-lg font-medium text-gray-400 mb-5"><Image src="/social-media.png" width={200} height={200} alt="Social Media Icons" /></li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Layanan Pengaduan Konsumen</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">PaDI UMKM</li>
                            <li className="text-lg font-medium text-gray-400 mb-2"><p className="text-xl"><i className="bx bxl-gmail mr-2"></i>cs@padiumkm.id</p></li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Direktorat Jenderal Perlindungan Konsumen dan Tertib Niaga</li>
                            <li className="text-lg font-medium text-gray-400 mb-2">Kementrian Perdagangan RI</li>
                        </ul>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <p className="text-2xl font-bold text-gray-600">Metode Pembayaran</p>
                    <div className="flex gap-2">
                        <Image src="/BRI.png" width={80} height={100} alt="Bank BRI" />
                        <Image src="/BNI.png" width={80} height={100} alt="Bank BNI" />
                        <Image src="/BankBTN.png" width={80} height={100} alt="Bank BTN" />
                        <Image src="/BCA.png" width={80} height={100} alt="Bank BCA" />
                        <Image src="/BSI.png" width={80} height={100} alt="BSI" />
                        <Image src="/Mandiri.png" width={80} height={100} alt="Bank Mandiri" />
                        <Image src="/MasterCard2.png" width={80} height={100} alt="Mastercard" />
                        <Image src="/Visa2.png" width={80} height={100} alt="VISA" />
                        <Image src="/QRIS.png" width={80} height={100} alt="QRIS" />
                        <Image src="/Linkaja.png" width={80} height={100} alt="Link Aja" />
                        <Image src="/Linkaja-1.png" width={80} height={100} alt="Pospay" />
                    </div>
                </div>
            </div>
            <div className="border-t-2 p-3 border-gray-200 px-8">
                <div className="flex flex-col items-center">
                    <label className="text-lg font-medium text-gray-400">&copy; Pasar Digital UMKM Indonesia</label>
                </div>
            </div>
        </footer>
    )
}
