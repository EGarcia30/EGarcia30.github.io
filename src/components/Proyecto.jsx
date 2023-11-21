import ProyectoCard from "./ProyectoCard"
import ventaImg from "../assets/img/ControlVentas.jpeg"
import portafolioImg from "../assets/img/portafolio.png"
import portalImg from "../assets/img/PortalEducativo.png"
import sistemaImg from "../assets/img/sdc.jpeg"
import veterinariaImg from "../assets/img/veterinaria.png"
import bibliotecaImg from "../assets/img/biblioteca.jpg"

function Proyecto() {
    return (
        <div id='proyecto' className="max-w-[1040px] mx-auto p-4 py-16 text-black/80 dark:text-white/80">
            <h1 className="md:text-4xl text-2xl font-bold text-center font-beba-neue my-10">Proyectos</h1>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProyectoCard img={bibliotecaImg} titulo='Cafe y Biblioteca virtual' link='https://github.com/EGarcia30/biblioteca'/>
                <ProyectoCard img={ventaImg} titulo='Control de venta' link='https://github.com/EGarcia30/WfcontrolVentas'/>
                <ProyectoCard img={portafolioImg} titulo='Portafolio' link='https://github.com/EGarcia30/EGarcia30.github.io'/>
                <ProyectoCard img={sistemaImg} titulo='Sistema de diseño curricular' link='https://github.com/EGarcia30/tesis'/>
                <ProyectoCard img={portalImg} titulo='Portal educativo' link='https://github.com/EGarcia30/portal-educativo'/>
                <ProyectoCard img={veterinariaImg} titulo='Veterinaria' link='https://github.com/EGarcia30/veterinaria'/>
            </div>
        </div>
    )
}

export default Proyecto