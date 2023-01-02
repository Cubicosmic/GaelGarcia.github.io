import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

export default function Frame3({ Prev }) {
    
    const divScroll = useRef(null)
    const { scrollY } = useScroll({container: divScroll})

    /* text frames */
    const textFrames = [[0,0,2000]]
    /* transforms */
    const path1 = useTransform(scrollY, [0, 20000], [0,1])
    const yNave = useTransform(scrollY, [0,2000, 6000], [150,150,0])
    const xNave = useTransform(scrollY, [3500,4000,4500,7000], ["0em","-5em","-5em","0em"])
    const yPlanet = useTransform(scrollY, [2500, 6500],[-700,700])
    
    return (
        <motion.section
        className='fixed w-full h-full overflow-y-scroll flex justify-center items-center text-xs sm:text-3xl'
        animate={{opacity: [0,1], y: [-200, 0]}}
        exit={{ opacity: 0 }}
        transition={{duration: 1}}
        ref={divScroll}>

            {/* relleno scroll */}<div style={{width: "100%", height: "10000px"}}></div>

            {Prev}

            <div 
                className='fixed w-full top-0 left-0 flex justify-center items-center pointer-events-none' 
                style={{height: "100vh"}}>

                
                {/* nave */}
                <motion.svg 
                    className='absolute'
                    viewBox='0 0 200 400'
                    style={{width: "10em", y: yNave, x: xNave}}>
                    <motion.path
                        fill='none'
                        style={{stroke: "#CFB56B", pathLength: path1}}
                        d="m 100 65 C 105 70 125 90 125 110 L 125 125 M 140 100 M 140 100 C 135 105 125 115 125 125 L 125 191 M 100 120 C 107 120 115 140 115 160 L 115 260 M 100 120 C 93 120 85 140 85 160 L 85 260 M 85 160 C 65 235 35 245 30 270 M 115 160 C 135 235 165 245 170 270 M 102 287 C 102 276 104 265 108 260 L 115 260 C 120 265 124 275 125 285 L 119 285 L 108 286 L 102 287 L 108 286 L 119 285 C 121 288 121 291 120 295 C 119 291 118 291 117 290 C 118 295 117 297 116 300 C 114 289 113 298 114 303 C 110 296 111 294 111 290 C 109 293 110 294 110 298 C 107 293 107 289 108 286 M 98 287 C 98 276 96 265 92 260 L 85 260 C 80 265 76 275 75 285 L 81 285 L 92 286 L 98 287 L 92 286 L 81 285 C 80 288 79 291 80 295 C 81 291 82 291 83 290 C 82 295 83 297 84 300 C 86 289 87 298 86 303 C 90 296 89 294 89 290 C 91 293 90 294 90 298 C 93 293 93 289 92 286 M 85 260 L 115 260 L 100 260 L 100 260 L 100 252 C 98 265 96 280 100 301 C 104 280 102 265 100 252 M 79 270 L 30 270 L 30 272 L 78 272 M 121 270 L 170 270 L 170 272 L 122 272 M 100 120 C 98 120 95 121 91 130 C 94 131 96 132 100 132 M 100 120 C 102 120 105 121 109 130 C 106 131 104 132 100 132 M 99 143 L 90 149 L 90 152 L 94 152 C 94 150 97 148 99 148 L 99 143 M 101 143 L 110 148 L 110 152 L 106 152 C 106 150 103 148 101 148 L 101 143 M 100 65 C 95 70 75 90 75 110 L 75 125 M 60 100 C 65 105 75 115 75 125 L 75 191 M 60 100 C 55 105 45 115 45 125 L 45 243 M 140 100 C 145 105 155 115 155 125 L 155 243 M 45 272 L 45 280 L 60 280 L 45 280 C 45 285 43 287 40 290 L 60 290 L 45 290 L 40 295 L 60 295 L 50 295 C 40 300 50 305 50 310 C 50 300 57 303 54 315 C 59 307 62 310 60 320 M 75 272 L 75 280 L 60 280 L 75 280 C 75 285 77 287 80 290 L 60 290 L 75 290 L 80 295 L 60 295 L 70 295 C 76 300 70 305 68 312 C 68 300 62 315 60 320 M 125 272 L 125 280 L 140 280 L 125 280 C 125 285 123 287 120 290 L 140 290 L 125 290 L 120 295 L 140 295 L 130 295 C 124 300 130 305 132 312 C 132 300 138 315 140 320 M 155 272 L 155 280 L 140 280 L 155 280 C 155 285 157 287 160 290 L 140 290 L 155 290 L 160 295 L 140 295 L 150 295 C 160 300 150 305 150 310 C 150 300 143 303 146 315 C 141 307 138 310 140 320"
                    ></motion.path>
                </motion.svg>
                <motion.svg className='absolute' viewBox='0 0 100 100' style={{width: "15em", y: yPlanet, x: "10em"}}>
                    <motion.path
                        fill='none'
                        style={{stroke: "#CFB56B", strokeWidth: "0.3"}}
                        d="M 50 0 A 1 1 0 0 0 50 100 A 1 1 0 0 0 50 0 M 1 40 C 15 68 85 69 100 45 M 4 70 C 21 95 87 92 96 70 M 50 0 C 55 10 55 90 50 100 M 63 2 C 34 5 19 62 30 96 M 37 2 C 77 5 79 65 75 93 M 14 15 C 15 39 86 40 86 15 M 14 85 C -11 0 68 -4 86 15 M 90 80 C 103 4 42 -6 14 15"
                    ></motion.path>
                </motion.svg>

            </div>

        </motion.section>
    )
}