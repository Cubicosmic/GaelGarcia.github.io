import React, { useState } from 'react'
import { AnimatePresence, motion } from "framer-motion"

export default function Frame0({ setPage }) {

    const path = [
        "M 5 40 L 95 40 L 50 95 L 5 40 L 20 20 L 35 40 L 50 20 L 65 40 L 80 20 L 95 40 L 80 20 L 20 20 L 35 40 L 50 95 L 65 40",
        "M 50 35 A 1 1 0 0 0 5 46 C 8 63 50 90 50 100 C 50 90 91 63 95 45 A 1 1 0 0 0 50 35",
    ]

    const [hoverAnimation,setHoverAnimation] = useState(0)

    return (
        <motion.section 
            className='frame-inicial w-full h-full fixed flex justify-center items-center'
            style={{prespective: "1000px"}}
            initial={{scale: 1, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.5, opacity: 0}}
            transition={{duration: 1}}>

            {/* cuadro del centro */}
            <motion.div 
                onMouseEnter={()=> setHoverAnimation(0)}
                className='relative overflow-hidden z-50'
                style={{
                    borderWidth: "4px",
                    borderColor: "#CFB56B"
                }}
                animate={{
                    width: ["0%","70%","70%"],
                    height: ["0%","0%","30%"],
                }}
                transition={{
                    duration: 2.5,
                    delay: 1,
                    ease: "easeInOut"
                }}>

                {/* titulo */}
                <motion.h1 
                    className='absolute bottom-1/2 w-full text-center mb-2 text-3xl md:text-5xl'
                    style={{color: "#CFB56B"}}
                    animate={{
                        opacity: [0,1],
                        x: ["-100%","0%"]
                    }}
                    transition={{
                        duration: 1,
                        delay: 2.5,
                        ease: "easeOut"
                    }}>
                    Gael García
                </motion.h1>
                <motion.h1 
                    className='absolute top-1/2 w-full text-center mt-2 text-3xl md:text-5xl'
                    animate={{
                        opacity: [0,1],
                        x: ["100%","0%"]
                    }}
                    transition={{
                        duration: 1,
                        delay: 2.5,
                        ease: "easeOut"
                    }}>
                    Desarrollador web
                </motion.h1>

            </motion.div>

            {/* navegador */}
            <motion.nav
                className='flex justify-around absolute text-xs sm:text-2xl z-40'
                style={{width: "70%", bottom: "65%", color: "#CFB56B"}}
                animate={{
                    opacity: [0,1]
                }}
                transition={{
                    duration: 0.5,
                    delay: 3,
                    ease: "linear"
                }}>

                <button 
                    className='flex justify-center items-center'
                    onMouseEnter={()=> setHoverAnimation(1)}
                    style={{width: "33%"}}
                    onClick={() => setPage(1)}>

                        <AnimatePresence>
                            {hoverAnimation === 1 && <motion.div
                                className='absolute flex items-center justify-center pointer-events-none'
                                style={{zIndex: -5}}>

                                    <motion.svg 
                                        className='absolute'
                                        viewBox='0 0 100 100'
                                        initial={{width: "80em"}}
                                        animate={{width: "15em", transition: {duration: 1.3}}}>
                                        <motion.path
                                            fill='none'
                                            style={{stroke: "#CFB56B"}}
                                            initial={{pathLength: 0, strokeWidth: "0.05px"}}
                                            animate={{pathLength: 1, strokeWidth: "0.5px", transition: { pathLength: {duration: 15}, strokeWidth: {duration: 3}}}}
                                            exit={{pathLength: 0, rotate: 90, transition: {duration: 1, ease: "easeOut"}}}
                                            d="
                                                M 50 50 L 50 45 L 50 40 L 50 35 L 50 30 L 50 25 A 1 1 0 0 0 50 20 A 1 1 0 0 0 50 25 M 50 50 L 50 45 L 55 40 L 60 40 L 65 35 L 70 30 L 70 25 L 75 20 L 80 15 A 1 1 0 0 0 83 12 A 1 1 0 0 0 80 15 M 50 50 M 50 50 L 50 45 L 50 40 L 45 35 L 45 30 L 45 25 L 40 20 L 40 15 L 35 10 L 30 5 M 50 50 L 45 45 L 45 40 L 40 35 L 40 30 L 35 25 L 30 20 L 30 15 L 25 10 L 23 8 M 50 50 L 45 45 L 45 40 L 40 35 L 35 30 L 30 25 L 25 20 L 22 17 L 22 17 A 1 1 0 0 0 18 13 A 1 1 0 0 0 22 17 M 50 50 L 50 45 L 50 40 L 45 35 L 45 30 L 45 25 L 45 20 L 50 15 L 50 10 L 50 5 A 1 1 0 0 0 50 0 A 1 1 0 0 0 50 5 M 50 50 L 45 45 L 45 40 L 40 35 L 40 30 L 40 25 L 36 21 A 1 1 0 0 0 34 19 A 1 1 0 0 0 36 21 M 50 50 L 50 45 L 50 40 L 45 35 L 45 30 L 45 25 L 40 20 L 35 15 L 31 11 A 1 1 0 0 0 29 9 A 1 1 0 0 0 31 11 M 50 50 L 50 45 L 50 40 L 45 35 L 45 30 L 45 25 L 45 20 L 45 15 L 45 10 L 40 5 L 37 2 M 50 50 L 45 50 L 40 55 L 35 55 L 30 55 L 25 60 L 20 65 L 15 65 L 10 70 L 6 74 M 50 50 L 45 45 L 40 40 L 35 35 L 30 35 L 25 35 L 20 30 L 15 25 L 12 22 A 1 1 0 0 0 10 20 A 1 1 0 0 0 12 22 M 50 50 L 45 50 L 40 45 L 36 41 A 1 1 0 0 0 34 39 A 1 1 0 0 0 36 41 M 50 50 L 45 50 L 40 45 L 35 45 L 30 40 L 25 40 L 20 40 L 15 35 L 10 30 L 8 28 A 1 1 0 0 0 6 26 A 1 1 0 0 0 8 28 M 50 50 L 45 50 L 40 50 L 35 50 L 30 45 L 26 45 A 1 1 0 0 0 24 45 A 1 1 0 0 0 26 45 M 50 50 L 45 50 L 40 50 L 35 50 L 30 50 L 25 50 L 20 45 L 15 45 L 10 40 L 5 40 L 2 37 M 50 50 L 45 50 L 40 50 L 35 50 L 30 50 L 25 50 L 20 50 L 15 55 L 10 55 L 5 50 L 0 50 M 50 50 L 45 50 L 40 50 L 35 50 L 30 50 L 25 50 L 21 54 A 1 1 0 0 0 19 56 A 1 1 0 0 0 21 54 M 50 50 L 45 50 L 40 55 L 35 55 L 30 55 L 26 55 A 1 1 0 0 0 24 55 A 1 1 0 0 0 26 55 M 50 50 L 45 50 L 40 55 L 35 55 L 30 55 L 25 60 L 20 60 L 15 60 L 10 60 L 5 55 A 1 1 0 0 0 0 55 A 1 1 0 0 0 5 55 M 50 50 L 50 55 L 50 60 L 55 65 L 55 70 L 55 75 L 55 80 L 50 85 L 50 90 L 50 95 A 1 1 0 0 0 50 100 A 1 1 0 0 0 50 95 M 50 50 L 45 55 L 40 60 L 40 65 L 40 70 L 35 75 L 30 80 L 25 80 L 20 80 L 15 85 M 50 45 M 50 50 L 55 55 L 60 60 L 65 60 L 70 60 L 75 60 L 80 65 L 85 70 L 90 75 L 92 77 M 50 50 L 55 50 L 60 55 L 64 55 A 1 1 0 0 0 66 55 A 1 1 0 0 0 64 55 M 50 50 L 55 50 L 60 50 L 65 50 L 70 55 L 75 55 L 80 55 L 85 50 L 90 45 L 95 45 L 98 45 A 1 1 0 0 0 100 45 A 1 1 0 0 0 98 45 M 50 0 M 50 50 L 54 46 A 1 1 0 0 0 56 44 A 1 1 0 0 0 54 46 M 50 50 L 55 50 L 60 45 L 65 40 L 70 35 M 50 50 L 55 50 L 60 50 L 65 50 L 70 50 L 75 50 A 1 1 0 0 0 80 50 A 1 1 0 0 0 75 50 M 50 50 L 50 45 L 50 40 L 50 35 L 55 30 L 55 25 L 55 20 L 55 15 L 55 11 A 1 1 0 0 0 55 8 A 1 1 0 0 0 55 11 M 50 50 L 55 55 L 60 60 L 65 65 L 65 70 L 70 75 L 70 80 L 77 87 A 1 1 0 0 0 80 90 A 1 1 0 0 0 77 87 M 50 50 L 50 55 L 45 60 L 45 65 L 45 70 L 45 75 L 49 79 A 1 1 0 0 0 51 81 A 1 1 0 0 0 49 79 M 50 50 L 45 50 L 40 55 L 35 60 L 31 60 A 1 1 0 0 0 29 60 A 1 1 0 0 0 31 60 M 50 50 L 50 55 L 50 60 L 50 65 L 50 71 A 1 1 0 0 0 50 75 A 1 1 0 0 0 50 71 M 50 50 L 50 55 L 55 60 L 59 64 A 1 1 0 0 0 61 66 A 1 1 0 0 0 59 64 M 50 50 L 45 55 L 40 60 L 35 65 L 35 69 A 1 1 0 0 0 35 71 A 1 1 0 0 0 35 69 M 50 50 L 45 50 L 40 55 L 35 60 L 30 65 L 26 65 A 1 1 0 0 0 24 66 A 1 1 0 0 0 26 65 M 50 50 L 45 50 L 40 55 L 35 60 L 30 65 L 25 70 L 20 75 L 15 75 L 13 77 A 1 1 0 0 0 10 80 A 1 1 0 0 0 13 77 M 50 50 L 45 55 L 40 60 L 35 65 L 30 70 L 26 74 A 1 1 0 0 0 24 76 A 1 1 0 0 0 26 74 M 50 50 L 45 55 L 40 60 L 35 65 L 30 70 L 30 74 A 1 1 0 0 0 30 76 A 1 1 0 0 0 30 74 M 50 50 L 50 45 L 50 40 L 45 35 L 45 30 L 45 25 L 45 20 L 45 15 L 40 10 A 1 1 0 0 0 38 8 A 1 1 0 0 0 40 10 M 50 50 L 45 45 L 40 40 L 35 35 L 27 27 A 1 1 0 0 0 25 25 A 1 1 0 0 0 27 27 M 50 50 L 45 45 L 40 40 L 35 35 L 30 35 L 25 30 L 20 25 L 16 21 M 50 50 L 45 50 L 40 45 L 35 45 L 30 40 L 25 40 L 20 35 L 15 30 M 50 50 L 45 50 L 40 50 L 35 50 L 30 50 L 25 50 L 20 45 L 15 40 L 11 36 A 1 1 0 0 0 9 34 A 1 1 0 0 0 11 36 M 50 50 L 45 50 L 40 50 L 35 50 L 30 50 L 25 50 L 20 50 L 15 50 A 1 1 0 0 0 10 50 A 1 1 0 0 0 15 50 M 50 50 L 45 50 L 40 50 L 35 50 L 30 50 L 25 50 L 20 45 L 15 45 L 10 45 L 4 45 A 1 1 0 0 0 1 45 A 1 1 0 0 0 4 45 M 50 50 L 45 50 L 40 55 L 35 55 L 30 55 L 25 60 L 20 65 L 16 69 A 1 1 0 0 0 14 71 A 1 1 0 0 0 16 69 M 50 50 L 45 50 L 40 55 L 35 55 L 30 55 L 25 60 L 20 65 L 20 70 M 50 50 L 45 50 L 40 55 L 35 55 L 30 55 L 25 60 L 20 60 L 15 60 L 10 65 L 7 65 A 1 1 0 0 0 3 65 A 1 1 0 0 0 7 65 M 50 50 L 50 55 L 45 60 L 45 65 L 45 70 L 45 75 L 45 80 L 45 85 L 45 90 M 50 50 L 50 55 L 45 60 L 45 65 L 45 70 L 40 75 L 35 80 L 30 85 L 25 85 L 22 85 A 1 1 0 0 0 19 85 A 1 1 0 0 0 22 85 M 50 50 L 50 55 L 45 60 L 45 65 L 45 70 L 45 75 L 40 80 L 40 85 L 40 90 L 40 95 A 1 1 0 0 0 40 98 A 1 1 0 0 0 40 95 M 50 50 L 50 55 L 45 60 L 45 65 L 45 70 L 45 75 L 40 80 L 35 85 L 30 90 A 1 1 0 0 0 27 94 A 1 1 0 0 0 30 90 M 50 50 L 50 55 L 45 60 L 45 65 L 45 70 L 45 75 L 40 80 L 40 85 L 35 90 L 35 97 M 50 50 L 50 45 L 55 40 L 60 35 L 64 31 A 1 1 0 0 0 66 29 A 1 1 0 0 0 64 31 M 50 50 L 50 45 L 55 40 L 55 35 M 50 50 L 50 45 L 55 40 L 60 35 L 60 30 L 60 25 L 65 20 L 70 15 L 76 9 M 50 50 L 50 45 L 55 40 L 60 35 L 60 30 L 60 25 L 60 20 L 65 15 L 72 8 A 1 1 0 0 0 74 6 A 1 1 0 0 0 72 8 M 50 50 L 50 45 L 50 40 L 50 35 L 55 30 L 55 25 L 55 20 L 55 15 L 60 10 L 60 5 L 60 1 M 50 50 L 50 45 L 55 40 L 60 35 L 60 30 L 60 25 L 60 20 L 60 15 M 50 50 L 50 45 L 50 40 L 50 35 L 55 30 L 55 25 L 55 20 L 55 15 L 60 10 L 64 6 A 1 1 0 0 0 66 4 A 1 1 0 0 0 64 6 M 50 50 L 50 45 L 55 40 L 60 35 L 60 30 L 60 25 L 60 20 L 65 15 L 65 10 M 50 50 L 55 50 L 60 50 L 65 45 L 70 45 L 75 45 L 80 45 L 85 45 M 50 50 L 55 50 L 60 50 L 65 45 L 70 40 L 75 35 L 80 30 L 85 25 L 92 25 M 50 50 L 50 45 L 55 40 L 60 40 L 65 35 L 70 30 L 75 25 L 80 20 M 50 50 L 50 45 L 55 40 L 60 40 L 65 35 L 70 30 L 75 30 L 80 25 L 85 20 A 1 1 0 0 0 87 18 A 1 1 0 0 0 85 20 M 50 50 L 55 50 L 60 50 L 65 45 L 70 40 L 75 35 L 80 30 L 85 30 L 90 30 A 1 1 0 0 0 95 30 A 1 1 0 0 0 90 30 M 50 50 L 55 50 L 60 50 L 65 45 L 70 45 L 74 41 A 1 1 0 0 0 76 39 A 1 1 0 0 0 74 41 M 50 50 L 55 50 L 60 50 L 65 45 L 70 45 L 75 45 L 80 40 L 80 35 M 50 50 L 55 50 L 60 50 L 65 45 L 70 45 L 75 45 L 80 40 L 84 36 A 1 1 0 0 0 86 34 A 1 1 0 0 0 84 36 M 50 50 L 55 50 L 60 50 L 65 45 L 70 45 L 75 45 L 80 40 L 85 40 L 90 40 L 98 40 M 50 50 L 55 50 L 60 50 L 65 45 L 70 45 L 75 45 L 80 40 L 85 40 L 90 40 L 95 35 M 50 50 L 50 55 L 50 60 L 55 65 L 60 70 L 64 74 A 1 1 0 0 0 66 76 A 1 1 0 0 0 64 74 M 50 50 L 50 55 L 50 60 L 55 65 L 60 70 L 60 75 L 60 80 L 65 85 L 72 92 A 1 1 0 0 0 74 94 A 1 1 0 0 0 72 92 M 50 50 L 50 55 L 50 60 L 55 65 L 60 70 L 60 75 L 65 80 L 70 85 L 73 88 M 50 50 L 50 55 L 50 60 L 55 65 L 55 70 L 55 75 L 55 80 L 55 85 L 55 89 A 1 1 0 0 0 55 91 A 1 1 0 0 0 55 89 M 50 50 L 50 55 L 50 60 L 55 65 L 55 70 L 55 75 L 55 80 L 60 85 L 60 90 L 55 95 L 55 99 M 50 50 L 50 55 L 50 60 L 55 65 L 55 70 L 55 75 L 55 80 L 60 85 L 65 90 L 69 94 M 50 50 L 50 55 L 50 60 L 55 65 L 55 70 L 55 75 L 55 80 L 60 85 L 60 90 L 60 95 A 1 1 0 0 0 60 98 A 1 1 0 0 0 60 95 M 50 50 L 50 55 L 50 60 L 55 65 L 55 70 L 55 75 L 55 80 L 60 85 L 60 90 L 65 95 M 50 50 L 55 55 L 60 60 L 65 60 L 70 60 L 75 60 L 80 60 L 85 60 L 90 60 L 95 60 A 1 1 0 0 0 98 60 A 1 1 0 0 0 95 60 M 50 50 L 55 50 L 60 50 L 65 50 L 70 55 L 75 55 L 80 55 L 85 55 L 90 55 A 1 1 0 0 0 95 55 A 1 1 0 0 0 90 55 M 50 50 L 55 50 L 60 50 L 65 50 L 70 55 L 75 55 L 80 55 L 85 50 L 90 50 L 95 50 L 99 50 M 50 50 L 55 55 L 60 60 L 65 60 L 70 60 L 75 60 L 80 65 L 85 65 L 90 65 L 95 65 L 95 65 L 95 65 L 95 65 L 95 65 L 95 65 L 95 65 L 96 65 M 50 50 L 55 55 L 60 60 L 65 60 L 70 60 L 75 60 L 80 65 L 85 65 L 90 70 A 1 1 0 0 0 92 72 A 1 1 0 0 0 90 70 M 50 50 L 55 55 L 60 60 L 65 65 L 70 70 L 75 75 L 80 80 L 85 85 M 50 50 L 55 55 L 60 60 L 65 65 L 65 70 L 70 75 L 74 79 A 1 1 0 0 0 76 81 A 1 1 0 0 0 74 79 M 50 50 L 55 55 L 60 60 L 65 65 L 70 65 L 75 65 L 79 69 A 1 1 0 0 0 81 71 A 1 1 0 0 0 79 69 M 50 50 L 55 55 L 60 60 L 65 65 L 70 65 L 75 70 L 80 75 L 85 75 L 87 77 A 1 1 0 0 0 89 79 A 1 1 0 0 0 87 77 M 50 50 L 55 55 L 60 60 L 65 65 L 70 65 L 75 70 L 80 75 L 85 80
                                            ">
                                        </motion.path>
                                    </motion.svg>

                                </motion.div>}
                        </AnimatePresence>

                        TECNOLOGÍAS

                </button>
                
                {/*<button                     
                    className='flex justify-center items-center'
                    onMouseEnter={()=> setHoverAnimation(2)}
                    style={{width: "33"}}
                    onClick={() => setPage(2)}>

                        <AnimatePresence>
                            {hoverAnimation === 2 && <motion.div
                                className='absolute flex items-center justify-center pointer-events-none'
                                style={{zIndex: -5}}>

                                    <motion.svg 
                                        className='absolute bg-white'
                                        viewBox='0 0 100 100'
                                        animate={{width: "16em", transition: {duration: 1.3}}}>
                                        <motion.path fill='none' style={{stroke: "#CFB56B"}} d={path} />
                                    </motion.svg>

                                </motion.div>}
                        </AnimatePresence>

                        PROYECTOS

                    </button>*/}
                    
                <button 
                    className='flex justify-center items-center'
                    style={{width: "33%"}}
                    onMouseEnter={()=> setHoverAnimation(3)}
                    onClick={() => setPage(3)}>

                    <AnimatePresence>
                        {hoverAnimation === 3 && <motion.div
                            className='absolute flex items-center justify-center pointer-events-none'
                            initial={{scale: 0, rotate: 0}}
                            animate={{scale: 1, rotate: 360}}
                            exit={{scale:0, rotate: 720}}
                            transition={{duration: 1, ease: "easeOut"}}>

                            <motion.div
                                className='rounded-full absolute'
                                style={{width: "8em", height: "8em", border: "3px dashed #CFB56B", transform: "translateX(100px)"}}
                                animate={{rotate: [0,360]}}
                                transition={{repeat: Infinity, duration: 20, ease: "linear"}}>
                            </motion.div>
                            <motion.div
                                className='rounded-full absolute'
                                style={{width: "10em", height: "10em", border: "2px solid #CFB56B"}}
                                animate={{rotate: [0,360]}}
                                transition={{repeat: Infinity, duration: 35, ease: "linear"}}>
                                    <div 
                                        className='w-4 h-4 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-2/3'
                                        style={{background: "#CFB56B"}}></div>
                            </motion.div>
                            <motion.div
                                className='rounded-full absolute'
                                style={{width: "16em", height: "16em", border: "2px solid #CFB56B"}}
                                animate={{rotate: [100,460]}}
                                transition={{repeat: Infinity, duration: 60, ease: "linear"}}>
                                    <div 
                                        className='w-6 h-6 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-2/3 flex justify-center items-center'
                                        style={{background: "#CFB56B"}}>
                                            <motion.div
                                                className='rounded-full absolute'
                                                style={{width: "2.5em", height: "2.5em", border: "2px dashed #CFB56B"}}
                                                animate={{rotate: [100,460]}}
                                                transition={{repeat: Infinity, duration: 5, ease: "linear"}}>
                                                    <div 
                                                        className='w-3 h-3 rounded-full absolute left-1/2 -translate-x-1/2 -translate-y-2/3'
                                                        style={{background: "#CFB56B"}}>
                                                    </div>
                                            </motion.div>
                                    </div>
                            </motion.div>

                        </motion.div>}
                    </AnimatePresence>

                    TRAYECTORIA

                </button>

            </motion.nav>

            {/* texto de abajo */}
            <motion.h2 
                className='absolute pt-3 text-base sm:text-xl text-center'
                style={{top: "65%", width: "70%", color: "#CFB56B"}}
                animate={{
                    opacity: [0,1]
                }}
                transition={{
                    duration: 0.5,
                    delay: 3,
                    ease: "linear"
                }}>
                Soy un desarrollador front-end de Ciudad de México. Tengo una gran pasión por los efectos de interfaz de usuario, las animaciones y la creación de experiencias de usuario intuitivas y dinámicas.
            </motion.h2>

        </motion.section>
    )
}