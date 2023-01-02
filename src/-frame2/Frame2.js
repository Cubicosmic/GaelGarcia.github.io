import React from 'react'
import { motion } from "framer-motion"

export default function Frame2({ Prev }) {
    return (
        <motion.section
            className='fixed w-full h-full overflow-y-scroll flex justify-center items-center text-xs sm:text-3xl'
            exit={{ opacity: 0 }}
            transition={{duration: 1}}>
            
            {Prev}

        </motion.section>
    )
}