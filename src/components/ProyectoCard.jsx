/* eslint-disable react/prop-types */
import { FaGithub } from "react-icons/fa";
function ProyectoCard({ img, titulo }) {
    return (
        <div className="relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-600 rounded-xl group hover:bg-gradient-to-r from-gray-200 to-[#d9ad26]">
            <img src={img} alt="/" className="rounded-xl group-hover:opacity-10 h-full"/>
            <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
                <h3 className="md:text-xl text-xs font-bold font-beba-neue tracking-wider text-center">
                    {titulo}
                </h3>
                <a href="#inicio" className="flex items-center justify-center pt-5">
                    <FaGithub className='cursor-pointer' size={30}/>
                </a>
            </div>
        </div>
    )
}

export default ProyectoCard