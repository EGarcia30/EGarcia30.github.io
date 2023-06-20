import { BsFillBootstrapFill } from "react-icons/bs";
import { DiJavascript1, DiReact, DiPhp } from "react-icons/di";
import { SiTailwindcss, SiLaravel, SiMariadb, SiMicrosoftsqlserver } from "react-icons/si";

function Habilidades() {
    return (
        <div id='habilidades' className="max-w-[1040px] mx-auto p-4 py-16 text-black/80 dark:text-white/80">
            <h1 className="md:text-4xl text-2xl font-bold text-center font-beba-neue my-10">Habilidades</h1>
            <div className="grid grid-cols-auto place-items-center gap-8">
                <SiMariadb size={40} className="text-"/>
                <SiMicrosoftsqlserver size={40} className="text-red-600"/>
                <BsFillBootstrapFill size={40} className="text-violet-600"/>
                <SiTailwindcss size={40} className="text-sky-600"/>
                <DiJavascript1 size={40} className="text-[#d9ad26]"/>
                <DiReact size={40} className="text-sky-600"/>
                <DiPhp size={50} className="text-[#4F5B93]" />
                <SiLaravel size={40} className="text-red-600"/>
            </div>
        </div>
    )
}

export default Habilidades