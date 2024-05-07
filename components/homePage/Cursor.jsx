import React, { useRef } from 'react';
import styles from "@/styles/Cursor.module.css";

import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs'

const CursorTrail = () => {
    const container = useRef();
    const img = useRef();

    const manageMouseMove = (event) => {
        const { clientX, clientY } = event;
        const containerPosition = container.current.getBoundingClientRect();
        const x = clientX - containerPosition.x;
        const y = clientY - containerPosition.y;

        // Check if img.current exists before accessing its style property
        if (img.current) {
            img.current.style.top = y + "px";
            img.current.style.left = x + "px";
            draw(x, y);
        }
    };

    const draw = (x, y) => {
        const div = document.createElement("div");
        div.classList.add(styles['circle']);
        div.style.top = y + "px";
        div.style.left = x + "px";
        container.current.appendChild(div);






        if (container.current.childNodes.length > 300) {

            erase();

        }

        else {

            setTimeout(() => {

                erase();

            }, 800)

        }






    };

    const erase = () => {

        container.current.removeChild(container.current.childNodes[1])

    }

    const stopPropagation = (event) => {
        event.stopPropagation();
        console.log("Hello")
    };



    return (
        <div className={styles.main}>
            <div ref={container} onMouseMove={manageMouseMove} onClick={stopPropagation} className={styles.container}>
                <div className='max-w-screen-xl  m-auto py-6'>

                    <header className='flex justify-between p-4 items-center'>
                        <div className='space-x-4 text-lg'>
                            <span className={styles.buttonMain}>
                                Sktch together
                            </span>
                            <span className={styles.buttonMain}>
                                Overview
                            </span>
                            <span>
                                Made By Anurag Sharma
                            </span>
                        </div>
                        <div className='space-x-4'>
                            <Button variant={'ghost'} className='text-base'>
                                <SignInButton className={styles.buttonMain} >
                                    Sign in
                                </SignInButton >
                            </Button>
                            <Button className='bg-pink-500 text-base'>
                                <SignInButton className={styles.buttonMain} >
                                    Sign up
                                </SignInButton >
                            </Button>
                        </div>
                    </header>
                    <div className='flex p-4 mt-8 '>
                        <div className='flex-[0.5] '>
                            <div className='flex flex-col justify-center h-96 '>

                                <p className='lg:text-7xl text-4xl pt-6 font-bold whitespace-nowrap'>
                                    Tutor with <br /> anyone, anywhere .
                                </p>
                                <span className='lg:text-2xl text-xl text-zinc-800 pt-10 tracking-wide w-[34vw]'>
                                    Scribble Together is a simple, fast-to-share online whiteboard. It’s great for handwriting equations, drawing diagrams, and marking up PDFs.
                                </span>
                            </div>

                            <button className='bg-pink-500 px-10 py-5 m-8 lg:text-3xl text-lg text-white font-semibold rounded-2xl'>
                                <SignInButton className={styles.buttonMain} >
                                    Try a whiteboard now
                                </SignInButton >
                            </button>

                        </div>
                        <div className='flex-[0.6] mt-8'>
                            <video src="/content/homeAnimation.mp4" autoPlay loop playsInline muted />
                        </div>
                    </div>



                </div>
                <img ref={img} className={styles.img} src="/images/circle.png" alt="Cursor"></img>

            </div>
        </div>
    );
};

export default CursorTrail;