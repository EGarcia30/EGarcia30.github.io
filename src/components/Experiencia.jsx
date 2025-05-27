import ExperienciaCard from "./ExperienciaCard"

function Experiencia() {
    const experiencias = [
        {
            id: 1,
            fecha:'Actualidad',
            titulo:'Sistema Compras, Inventario y Ventas',
            duracion:'1 mes',
            descripcion: 'En proceso de creación de un sistema de ventas, que puedan administrar compras e inventario con integracion de facturación electronica y poder manejar la contabilidad de los tipos de facturas adquiridas y generadas.'
        },
        {
            id: 2,
            fecha:'2025',
            titulo:'Sistema Control y Seguimiento Documental de Pre Especialidades',
            duracion:'2 meses',
            descripcion: 'Realizar la conformacíon de grupos que proceden a defender su pre especialidad, poder mantener su seguimiento atraves de estados y manejo de dictamen final y finalizar segun su resultado imprimos su acta en PDF/Word que puede ser aprobado o reprobado.'
        },
        {
            id: 3,
            fecha:'2024',
            titulo:'Sistema de facturación',
            duracion:'3 meses',
            descripcion: 'Agregar nuevos modulos y funcionalidades dentro del sistema de facturación ya creado, estas fueron Sujetos no excluidos, pedidos, rutas, bodegas, compras, proovedores, cuentas por cobrar/pagar y validaciones nuevas con javascript o jquery sobre rango de fechas, entregas, clientes, bodegas, impresiones masivas en PDF/JSON de DTES por rango de fechas.'
        },
        {
            id: 4,
            fecha:'2024',
            titulo:'Punto de venta',
            duracion:'3 meses',
            descripcion: 'Creación de punto de venta, listar inventario, listar productos de posible venta, finalizar venta con impresión de su DTE consumiendo API de tercero, añadiendo cortes de caja por turno, diario, y por rango de fechas.'
        },
        {
            id: 5,
            fecha:'2023',
            titulo:'Biblioteca en linea',
            duracion:'2 meses',
            descripcion: 'Creación de una pagina web, y una intranet que permite a usuarios visualizar libros de su interes y poder descargarlos en pdf.'
        },
        {
            id: 6,
            fecha: '2023',
            titulo:'Sistema de Diseños Curriculares',
            duracion: '4 meses',
            descripcion: 'Creación de un sistema de diseños curriculares(SDC) para generar archivos de word de planes de estudio dentro de una universidad, creando un entorno de trabajo con el manejo de sus facultades, carreras y el historial cuidando la integridad de los datos con roles de usuario.'
        },
        {
            id: 7,
            fecha: '2022',
            titulo:'Portal educativo',
            duracion: '3 meses',
            descripcion: 'Creación de un prototipo de un portal educativo que contaba con el manejo de roles tanto alumno y profesor y el manejo de notas con su respectiva visualización.'
        },
        {
            id: 8,
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