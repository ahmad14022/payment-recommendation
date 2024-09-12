export default function Aside() {
    const filters = ["Kategori", "Lokasi", "Rentang Harga", "Tipe Pembayaran", "Stok Produk", "Rating", "Tipe Penjual", "Sertifikat"];

    return (
        <aside className="flex-none md:w-[236px] mt-7">
            <div className="bg-[#F6F9FC] font-bold text-lg text-[#444B55] py-2 px-3 border-[#DEE3ED] border-solid border-[1px] rounded-t-lg font-ubuntu">
                Filter
            </div>
            <div className="divide-y h-full-fit max-h-fit p-0 border-[#DEE3ED] border-solid border-[1px] border-t-0 rounded-b-lg">
                {filters.map((filter, index) => (
                    <div key={index} className="flex flex-col font-ubuntu cursor-pointer text-paletteText-primary select-none active:bg-white">
                        <div className="flex items-center justify-between p-3">
                            <div className="font-bold text-[16px] leading-[21px]">{filter}</div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
}
