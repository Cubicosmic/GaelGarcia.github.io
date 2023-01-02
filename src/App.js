import React, { useState } from 'react'
import './App.css'
import ParticlesG from './-particles/Particles'
import Frame0 from './-frame0/Frame0'
import { motion, AnimatePresence } from "framer-motion"
import Frame3 from './-frame3/Frame3'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import Frame2 from './-frame2/Frame2'
import Frame1 from './-frame1/Frame1'

export default function App() {

    const [page, setPage] = useState(0)

    const Prev = <motion.button 
            animate={{opacity: [0,1]}}
            onClick={() => setPage(0)}
            className='fixed top-6 left-6 text-2xl'>
            <FontAwesomeIcon icon={faArrowLeft}/>
        </motion.button>

    return (
        <>

            {/* fondo */}
            <div className='fondo'><ParticlesG/></div>
            

            {/* body */}
            <main className='body'>

                <AnimatePresence>{page === 0 && <Frame0 setPage={setPage}/>}</AnimatePresence>

                <AnimatePresence>{page === 1 && <Frame1 Prev={Prev}/>}</AnimatePresence>
                <AnimatePresence>{page === 2 && <Frame2 Prev={Prev}/>}</AnimatePresence>
                <AnimatePresence>{page === 3 && <Frame3 Prev={Prev}/>}</AnimatePresence>

            </main>

        </>
    )
}
