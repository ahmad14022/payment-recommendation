import Image from "next/image";
import localFont from "next/font/local";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <div
      className={`${geistSans.variable} ${geistMono.variable} flex flex-col justify-center items-center min-h-screen bg-gray-900 text-gray-200 p-8`}
    >
      <div className="flex flex-col gap-8 items-end">
        <h1 className="text-6xl font-extrabold mb-4 text-center animate-fade-in">
          Selamat Datang di Projek Team 16 🙋🏻‍♂️
        </h1>
        <Link href="/product">
          <button className="flex items-center text-2xl text-white border-b-2 border-transparent hover:border-white transition duration-300">
            Klik disini yaa
            <i className='bx bx-right-arrow-alt ml-3 text-2xl'></i>
          </button>
        </Link>
      </div>
      <style jsx>{`
        @keyframes fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        .animate-fade-in {
          animation: fade-in 1s ease-in-out forwards;
        }
      `}</style>
    </div>
  );
}
