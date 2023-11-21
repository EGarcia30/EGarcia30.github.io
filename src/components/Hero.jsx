import { TypeAnimation } from 'react-type-animation';
import { BsCodeSlash,BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript1, DiReact, DiPhp } from "react-icons/di";
import { SiTailwindcss, SiLaravel, SiMariadb } from "react-icons/si";
import { FaInstagram, FaWhatsapp, FaGithub } from "react-icons/fa";

function Hero() {
    return (
        <div id="inicio">
            {/* <img className='w-full h-screen object-cover object-center' src={heroImg} alt="portafolio" /> */}
            <div className='w-full h-screen'>
                <div className='max-w-[700px] mx-auto h-full w-full flex flex-col justify-center md:items-start items-center text-black/80 dark:text-white/80 z-10'>
                    <p className='text-sm font-beba-neue font-bold'>Hola me llamo,</p>
                    <h1 className='sm:text-6xl text-4xl font-beba-neue font-bold'>Erick Penado</h1>
                    <h2 className='sm:text-4xl text-xl font-montserrat font-bold'>Soy <TypeAnimation
                        sequence={[
                            // Same substring at the start will only be typed out once, initially
                            'Técnico en Software',
                            2000, // wait 1s before replacing "Mice" with "Hamsters"
                            'Programador Web',
                            1000,
                        ]}
                        wrapper="div"
                        cursor={true}
                        speed={40}
                        style={{ fontSize: '1em', display: 'inline-block', color: '#d9ad26', textShadow: '0px 0px 1px #000000' }}
                        repeat={Infinity}
                    />
                    </h2>
                    <div className='flex justify-between pt-6 max-w-[200px] w-full'>
                        <a href="https://github.com/EGarcia30">
                            <FaGithub className='cursor-pointer' size={20}/>
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=71113846">
                            <FaWhatsapp className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.instagram.com/erick.garcia8/">
                            <FaInstagram className='cursor-pointer' size={20}/>
                        </a>

                    </div>
                </div>
                <div className='w-full fixed left-0 top-0 flex justify-around items-center gap-10'>
                    <BsCodeSlash size={40} className='text-[#d9ad26] text-opacity-75 animate-up md:block hidden' />
                    <BsFillBootstrapFill size={40} className='text-[#d9ad26] text-opacity-75 animate-up-200 md:block hidden' />
                    <DiJavascript1 size={40} className='text-[#d9ad26] text-opacity-75 animate-down' />
                    <DiReact size={40} className='text-[#d9ad26] text-opacity-75 animate-down-200' />
                    <SiTailwindcss size={40} className='text-[#d9ad26] text-opacity-75 animate-up-600 md:block hidden' />
                    <DiPhp size={50} className='text-[#d9ad26] text-opacity-75 animate-down-600' />
                    <SiLaravel size={40} className='text-[#d9ad26] text-opacity-75 animate-up md:block hidden' />
                    <SiMariadb size={40} className='text-[#d9ad26] text-opacity-75 animate-up-200' />

                </div>
            </div>

        </div>
    )
}

export default Hero