import React from 'react'
import { motion } from "framer-motion"

export default function Frame2({ Prev }) {


    return (
        <motion.section
            className='fixed w-full h-full overflow-y-scroll text-xs sm:text-3xl'
            style={{prespective: "1000px"}}
            initial={{scale: 0.1, opacity: 0}}
            animate={{scale: 1, opacity: 1}}
            exit={{scale: 0.1, opacity: 0}}
            transition={{duration: 1.5}}>
            
            {Prev}

            {/*imgs.map((img, id) => 
                <img className='sm:p-0 md:p-10 sm:w-full md:w-1/2 h-auto mx-auto mb-10 border-4' key={id} alt=':c' src={img}/>
    )*/}

        </motion.section>
    )
}