import aboutImg from "../assets/img/about.png"

function Perfil() {
    return (
        <div id='perfil' className="max-w-[1040px] mx-auto p-4 py-16 text-black/80 dark:text-white/80">
            <div className="flex flex-wrap items-center justify-center">
                <div className="sm:pe-10 pe-0 md:pb-0 pb-6 flex flex-col">
                    <h1 className="md:text-4xl text-2xl font-bold text-center font-beba-neue mt-8">Sobre mi</h1>
                    <p className="md:text-lg text-sm font-normal font-montserrat max-w-[500px] p-2">Graduado de Técnico en ingenieria de Software, <b className="text-[#d9ad26]">autodidacta</b> en el desarrollo de mis habilidades como programador, mis tecnologias favoritas a desarrollar son en el frontend: <b className="text-[#d9ad26]">Javascript</b> y del lado del servidor: <b className="text-[#d9ad26]">c# y php</b>, un joven apasionado por el desarrollo de aplicaciones y paginas web, otras aficiones hacer deporte y jugar videojuegos.</p>
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