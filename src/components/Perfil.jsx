import aboutImg from "../assets/img/about.png"

function Perfil() {
    return (
        <div id='perfil' className="max-w-[1040px] mx-auto p-4 py-16 text-black/80 dark:text-white/80">
            <div className="flex flex-wrap items-center justify-center">
                <div className="sm:pe-10 pe-0 md:pb-0 pb-6 flex flex-col">
                    <h1 className="md:text-4xl text-2xl font-bold text-center font-beba-neue mt-8">Sobre mi</h1>
                    <p className="md:text-lg text-sm font-normal font-montserrat max-w-[500px] p-2">Graduado de Técnico en ingenieria de Software, <b className="text-[#d9ad26]">autodidacta</b> en el desarrollo de mis habilidades como programador, principales tecnológias en <b className="text-[#d9ad26]">ASP.NET Core, Jquery con AJAX, Boostrap 4+, FETCH para consultas de API REST.</b> He realizado servicios profesionales para la <b className="text-[#d9ad26]">creación</b> de <b className="text-[#d9ad26]">sistemas de control y seguimiento documental de pre especialidades</b> en universidades, <b className="text-[#d9ad26]">colaboración</b> en <b className="text-[#d9ad26]">modulos nuevos de sistema de facturación</b>, <b className="text-[#d9ad26]">creación</b> de <b className="text-[#d9ad26]">puntos de
                    ventas</b>, y <b className="text-[#d9ad26]">creación</b> de <b className="text-[#d9ad26]">sistema de diseño curricular para Pensum</b>.</p>
                </div>
                <div className="relative">
                    <img src={aboutImg} alt="/" className="rounded-xl z-10 h-full"/>
                    <div className="absolute block w-full h-full rounded-xl top-0 left-0 bg-black/30">
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Perfil