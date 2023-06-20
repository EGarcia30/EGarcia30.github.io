import ProyectoCard from "./ProyectoCard"
import ventaImg from "../assets/img/ControlVentas.jpeg"
import portafolioImg from "../assets/img/portafolio.png"
import portalImg from "../assets/img/PortalEducativo.png"
import sistemaImg from "../assets/img/sdc.jpeg"

function Proyecto() {
    return (
        <div id='proyecto' className="max-w-[1040px] mx-auto p-4 py-16 text-black/80 dark:text-white/80">
            <h1 className="md:text-4xl text-2xl font-bold text-center font-beba-neue my-10">Proyectos</h1>
            <div className="grid sm:grid-cols-2 gap-12">
                <ProyectoCard img={ventaImg} titulo='Control de venta'/>
                <ProyectoCard img={portafolioImg} titulo='Portafolio'/>
                <ProyectoCard img={sistemaImg} titulo='Sistema de diseño curricular'/>
                <ProyectoCard img={portalImg} titulo='Portal educativo'/>
            </div>
        </div>
    )
}

export default Proyecto