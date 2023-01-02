import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import React from 'react'

export default function ParticlesG() {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesLoaded = useCallback(async (container) => {
        await console.log('particulas listas');
    }, []);

    return (
        <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
            fpsLimit: 150,
            interactivity: {
                events: {
                    onClick: {
                    enable: true,
                    mode: "push",
                    },
                    onHover: {
                    enable: true,
                    mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                     quantity: 1,
                    },
                    repulse: {
                     distance: 200,
                     duration: 0.1,
                    },
                },
            },
            particles: {
                color: {
                    value: "#FFFFFF",
                },
                links: {
                    color: "#FFFFFF",
                    distance: 100,
                    enable: true,
                    opacity: 0.5,
                    width: 1,
                },
                collisions: {
                    enable: false,
                },
                move: {
                    directions: "none",
                    enable: true,
                    outModes: {
                    default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                    enable: true,
                    area: 800,
                    },
                    value: 20,
                },
                opacity: {
                    value: 0.7,
                },
                shape: {
                    type: "circle",
                },
                size: {
                    value: { min: 1, max: 5 },
                },
            },
            detectRetina: true,
        }}
        />
    );
};