import Image from "next/image";

const Login = () => {
    return (
        <div className="flex justify-center items-center h-screen">
            <div className="flex border border-gray-300 rounded-lg">
                <Image src="/bg-login.png" width={600} height={600} alt="Login" className="rounded-l-lg" />
                <div className="w-[700px] p-12 flex justify-center items-center h-full">
                    <div className="flex flex-col gap-5 w-full">
                        <div className="flex justify-between items-center mb-3">
                            <h1 className="text-3xl font-bold text-gray-600">Login</h1>
                            <Image src="/logo.svg" width={200} height={200} alt="Logo" />
                        </div>
                        <div className="flex flex-col gap-6 h-full justify-center">
                            <div className="flex flex-col gap-3">
                                <label className="text-xl font-bold text-gray-600">Alamat email</label>
                                <input className="border border-gray-300 h-12 p-3 rounded-md outline-none" type="text" placeholder="johndoe@email.com" />
                            </div>
                            <div className="flex flex-col gap-3">
                                <label className="text-xl font-bold text-gray-600">Kata Sandi</label>
                                <input className="border border-gray-300 h-12 p-3 rounded-md leading-tight outline-none" type="password" placeholder="Enter your password" />
                            </div>
                            <button className="flex-grow rounded-lg text-gray-400 bg-gray-100 hover:bg-[#0092ac] font-medium tracking-wide hover:text-white h-12 text-xl">
                                Login
                            </button>
                            <div className="flex justify-center">
                                <p className="text-gray-600 text-lg">Lupa kata sandi? <span className="text-[#0092ac] font-bold cursor-pointer">Klik disini</span> </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Login;
