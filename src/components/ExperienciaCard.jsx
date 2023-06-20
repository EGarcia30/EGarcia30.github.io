/* eslint-disable react/prop-types */

function ExperienciaCard({ experiencia }) {
    return (
        <ol className="flex flex-col relative border-s border-gray-600">
            <li className="mb-10 ms-6">
                <div className="absolute w-3 h-3 bg-gray-600 rounded-full mt-1.5 -left-1.5 border-white"/>
                <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm font-beba-neue">
                    <span className="inline-block px-2 py-1 font-semibold text-[#1e1e20] bg-[#d9ad26] rounded-md">{experiencia.fecha}</span>
                    <span className="md:text-lg text-sm font-semibold text-[#d9ad26]">{experiencia.titulo}</span>
                    <span className="my-1 text-xs font-normal leading-none text-gray-600">{experiencia.duracion}</span>
                </p>
                <p className="my-2 text-base font-normal font-montserrat text-[#1e1e20] dark:text-white/60">{experiencia.descripcion}</p>
            </li>
        </ol>
    )
}

export default ExperienciaCard