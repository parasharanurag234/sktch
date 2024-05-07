import React from 'react'
import { Button } from '../ui/button'
import { SignInButton } from '@clerk/nextjs'

type Props = {}

function HomePage({ }: Props) {
    return (
        <div className='max-w-screen-xl  m-auto py-6'>
       
            <header className='flex justify-between p-4 items-center'>
                <div className='space-x-4 text-lg'>
                    <span>
                        Sktch together
                    </span>
                    <span>
                        Overview
                    </span>
                    <span>
                        Made By Anurag Sharma
                    </span>
                </div>
                <div className='space-x-4'>
                    <Button variant={'ghost'} className='text-base'>
                        <SignInButton >
                            Sign in
                        </SignInButton >
                    </Button>
                    <Button className='bg-pink-500 text-base'>
                        <SignInButton >
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
                        <SignInButton >
                            Try a whiteboard now
                        </SignInButton >
                    </button>

                </div>
                <div className='flex-[0.6] mt-8'>
                    <video src="/content/homeAnimation.mp4" autoPlay loop playsInline muted />
                </div>
            </div>



        </div>
    )
}

export default HomePage