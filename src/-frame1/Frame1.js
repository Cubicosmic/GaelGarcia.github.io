import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

export default function Frame1({ Prev }) {

    const degs = [
        {title: "HTML", text: "El Lenguaje de Marcado de Hipertexto (HTML) es el código que se utiliza para estructurar y desplegar una página web y sus contenidos. Por ejemplo, sus contenidos podrían ser párrafos, una lista con viñetas, o imágenes y tablas de datos."},
        {title: "CSS", text: "Éste un lenguaje que define la apariencia de un documento escrito en un lenguaje de marcado (por ejemplo, HTML). Así, a los elementos de la página web creados con HTML se les dará la apariencia que se desee utilizando CSS: colores, espacios entre elementos, tipos de letra. Es el punto de partida para crear cualquier diseño o animación usados en React js."},
        {title: "JavaScript", text: "JavaScript es el lenguaje de programación que debes usar para añadir características interactivas a tu sitio web, (por ejemplo, juegos, eventos que ocurren cuando los botones son presionados o los datos son introducidos en los formularios, efectos de estilo dinámicos, animación, y mucho más)."},
        {title: "React", text: "¿Qué es React? React es una biblioteca de JavaScript declarativa, eficiente y flexible para construir interfaces de usuario. Permite componer IUs complejas de pequeñas y aisladas piezas de código llamadas “componentes”."},
        {title: "Librerias react react", text: "A pesar de reunirlas en un solo apartado, estas van desde la creación de graficas, formularios, exportacion a pdf, y demás funcionalidades."},
        {title: "Framer motion", text: "Framer Motion es una biblioteca de animación para crear animaciones declarativas en React. Esta web usa esta biblioteca para todas sus animaciones."},
    ];

    const divScroll = useRef(null)
    const { scrollY } = useScroll({container: divScroll})
    const giro = useTransform(scrollY,[0,2000],[0,-360],{clamp: false})

    return (
        <motion.section
            className='w-full h-full fixed flex justify-center items-center overflow-y-scroll overflow-x-hidden'
            style={{prespective: "1000px"}}
            initial={{scale: 1, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.5, opacity: 0}}
            transition={{duration: 1}}
            ref={divScroll}>

            {/* relleno scroll */}<div style={{width: "100%", height: "10000px"}}></div>

            {Prev}

            {/* animación react */}
            <motion.svg 
                className='fixed opacity-30 text-base sm:text-2xl pointer-events-none'
                viewBox='-5 -5 110 110'
                style={{width: "25em", right: "-1em"}}>
                <motion.path
                    fill='none'
                    style={{stroke: "#CFB56B", strokeWidth: "5px"}}
                    initial={{rotate: 0, pathLength: 0}}
                    animate={{ rotate: 180, pathLength: 1}}
                    transition={{
                        repeat: Infinity,
                        duration: 60,
                        ease: "linear",
                        pathLength: {repeatType: "reverse",ease: "easeIn", repeat: Infinity, duration: 6}
                    }}
                    d="
                    M 100 50 C 97 22 3 22 0 50 M 50 42 A 1 1 0 0 0 50 58 M 43 46 A 1 1 0 0 0 57 54 M 43 54 A 1 1 0 0 0 57 46 M 50 58 A 1 1 0 0 0 50 42 M 57 54 A 1 1 0 0 0 43 46 M 57 46 A 1 1 0 0 0 43 54 M 25 93 C 51 105 97 21 75 7 M 25 7 M 75 7 C 49 -5 3 79 25 93 M 75 93 C 97 79 51 -5 25 7 M 0 50 C 3 78 97 78 100 50 M 25 7 C 3 23 49 105 75 93
                    ">
                </motion.path>
            </motion.svg>

            {/* textos */}
            <div className='fixed flex items-center' style={{transformStyle: "preserve-3d", transform: "rotateY(3deg)",left: "7%"}}>
                <motion.div
                    className='absolute text-xs sm:text-3xl lg:text-4xl pointer-events-none'
                    style={{transformStyle: "preserve-3d", width: "22em", height: "50vh", rotateX: giro, scale: 0.8}}>
                    <div
                        className='absolute w-full h-full'
                        style={{transformStyle: "preserve-3d"}}>
                        {degs.map((deg, index) => <div 
                            key={index}
                            className='absolute w-full h-full flex items-center justify-center' 
                            style={{transformStyle: "preserve-3d", transform: "rotateX("+360/degs.length*index+"deg) translateZ(10em)"}}>
                                <div
                                    className='rounded-2xl flex items-center p-5'
                                    style={{background: "rgba(80,80,80,0.9)", border: "3px solid #CFB56B", width: "22em", height: 65/(degs.length)+"em"}}>
                                    <div>
                                        <h3 className='p-3 text-3xl md:text-5xl'>{deg.title}</h3>
                                        <h3 className='p-3 text-lg md:text-2xl text-justify'>{deg.text}</h3>
                                    </div>
                                </div>
                        </div>)}
                    </div>
                </motion.div>
            </div>

        </motion.section>
    )
}