import ExperienciaCard from "./ExperienciaCard"

function Experiencia() {
    const experiencias = [
        {
            id: 1,
            fecha: '2023',
            titulo:'Sistema de Diseños Curriculares',
            duracion: '4 meses',
            descripcion: 'Creación de un sistema de diseños curriculares(SDC) para generar archivos de word de planes de estudio dentro de una universidad, creando un entorno de trabajo con el manejo de sus facultades, carreras y el historial cuidando la integridad de los datos con roles de usuario.'
        },
        {
            id: 2,
            fecha: '2022',
            titulo:'Portal educativo',
            duracion: '3 meses',
            descripcion: 'Creación de un prototipo de un portal educativo que contaba con el manejo de roles tanto alumno y profesor y el manejo de notas con su respectiva visualización.'
        },
        {
            id: 3,
            fecha: '2021',
            titulo:'Control de ventas',
            duracion: '4 meses',
            descripcion: 'Creación de un control de ventas para un emprendimiento de venta de pantalones, en esta se realizaban cruds para la gestión de datos y mostrar al final algunas estadisticas de tendencia algunos ejemplos: top marcas vendidas, top ventas, top tallas mas buscadas todas estas filtradas en una determinada fecha.'
        },
        
    ]
    return (
        <div id="experiencia" className="max-w-[1040px] mx-auto p-4 py-16 text-black/80 dark:text-white/80">
            <h1 className="sm:text-4xl text-2xl text-center font-bold font-beba-neue my-10">Experiencia</h1>
            {experiencias ? experiencias.map((exp) =>(
                <ExperienciaCard key={exp.id} experiencia={exp}/>
            )) : <p>No existe experiencia..</p> }
        </div>
    )
}

export default Experiencia