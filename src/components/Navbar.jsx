import { FaBars } from "react-icons/fa";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { AiOutlineHome, AiOutlineUser, AiOutlineTool, AiOutlineLaptop, AiOutlineCode } from "react-icons/ai";
import { useState } from "react";
/* eslint-disable react/prop-types */
function Navbar({ handleTheme }) {
    const [icon, setIcon] = useState(false);
    const [nav, setNav] = useState(false);

    const handleBtn = () => {
        handleTheme(),
        setIcon(!icon)
    }

    const handleNav = () => {
        setNav(!nav)
    }

    return (
        <div className="fixed w-full bg-white dark:bg-[#1e1e20] z-10">
            <div className="max-w-[1220px] mx-auto p-4">
                <div className="flex justify-between items-center">
                    <a href="#inicio">
                        <p className="font-beba-neue text-4xl font-bold px-2 py-1 text-[#d9ad26]" style={{textShadow: '0px 0px 1px #000'}}>EP</p>
                    </a>
                    <div className="flex justify-center items-center">
                        <span className="me-2 p-3 hover:bg-gray-200 transition ease-in-out duration-700 rounded-lg cursor-pointer dark:hover:bg-black/25" onClick={() => { handleBtn() }}>
                            {icon ? <BsMoonFill size={20} className="text-gray-600" /> : <BsSun size={20} className="text-[#d9ad26]" />}
                        </span>
                        <span className="p-3 cursor-pointer md:hidden z-[99]" onClick={() => { handleNav() }}>
                            <FaBars size={20} className="text-gray-600" />
                        </span>
                    </div>
                </div>
            </div>
            {nav ?
                <div className="fixed top-0 w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20 md:hidden dark:bg-black/80 text-gray-600">
                    <a href="#inicio" onClick={() => { handleNav() }}
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer dark:bg-[#d9ad26] dark:shadow-[#d9ac2665]">
                        <AiOutlineHome  className="text-gray-600"/>
                        <span className="pl-4 font-beba-neue font-semibold">Inicio</span>
                    </a>
                    <a href="#perfil" onClick={() => { handleNav() }}
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer dark:bg-[#d9ad26] dark:shadow-[#d9ac2665]">
                        <AiOutlineUser  className="text-gray-600"/>
                        <span className="pl-4 font-beba-neue font-semibold">Sobre mi</span>
                    </a>
                    <a href="#experiencia" onClick={() => { handleNav() }}
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer dark:bg-[#d9ad26] dark:shadow-[#d9ac2665]">
                        <AiOutlineLaptop  className="text-gray-600"/>
                        <span className="pl-4 font-beba-neue font-semibold">Experiencia</span>
                    </a>
                    <a href="#habilidades" onClick={() => { handleNav() }}
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer dark:bg-[#d9ad26] dark:shadow-[#d9ac2665]">
                        <AiOutlineTool  className="text-gray-600"/>
                        <span className="pl-4 font-beba-neue font-semibold">Habilidades</span>
                    </a>
                    <a href="#proyecto" onClick={() => { handleNav() }}
                        className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer dark:bg-[#d9ad26] dark:shadow-[#d9ac2665]">
                        <AiOutlineCode className="text-gray-600"/>
                        <span className="pl-4 font-beba-neue font-semibold">Proyectos</span>
                    </a>
                </div> : ''
            }
            <div className="md:block hidden fixed bottom-14 w-full z-10">
                <div className="flex justify-center max-w-fit mx-auto px-1 rounded-lg bg-black/10 backdrop-blur-3xl dark:bg-white/10">
                    <a href="#inicio" className="rounded-lg shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:bg-[#1e1e20] dark:shadow-black/70">
                        <AiOutlineHome className="text-[#d9ad26]"/>
                    </a>
                    <a href="#perfil" className="rounded-lg shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:bg-[#1e1e20] dark:shadow-black/70">
                        <AiOutlineUser className="text-[#d9ad26]"/>
                    </a>
                    <a href="#experiencia" className="rounded-lg shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:bg-[#1e1e20] dark:shadow-black/70">
                        <AiOutlineLaptop className="text-[#d9ad26]"/>
                    </a>
                    <a href="#habilidades" className="rounded-lg shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:bg-[#1e1e20] dark:shadow-black/70">
                        <AiOutlineTool className="text-[#d9ad26]"/>
                    </a>
                    <a href="#proyecto" className="rounded-lg shadow-lg bg-gray-100 shadow-gray-700 m-2 p-4 cursor-pointer hover:scale-110 ease-in-out duration-300 dark:bg-[#1e1e20] dark:shadow-black/70">
                        <AiOutlineCode className="text-[#d9ad26]"/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Navbar