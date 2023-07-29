import { HeroGirlimg } from '@/components/assets/index'
import Image from 'next/image'
import { BsCart2 } from "react-icons/bs"
import React from 'react'

const Hero = () => {
    const btnTxt = "Start\n Shoping";
    return (
        // Main div hero section
        <div className='py-5 flex justify-between items-center'>
            {/* left hero section */}
            <div className='space-y-5 max-w-sm'>
                <button className='bg-[#FFECE3] text-purple-700 rounded-md px-3 py-2'> Sale 70%</button>
                <h1 className='text-4xl md:text-6xl text-gray-800 font-bold'>An Industrial Take on Streetwear</h1>
                <p className='text-gray-600'>Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.</p>
                <button className='rounded-sm text-lg flex gap-4 items-center right-1 ring-slate-800 bg-gray-900 text-white font-semibold py-3 px-5'>
                    <BsCart2 size={20} /> <p className='whitespace-pre-line leading-6'>{btnTxt}</p>
                </button>
                <div className='flex gap-4'>
                    <div className='w-12 md:w-24'>
                        <Image width={100} height={100} alt='bazar' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured1.66abddd4.png%26w%3D128%26q%3D75&w=128&q=75"} />
                    </div>
                    <div className='w-12 md:w-24'>
                        <Image width={100} height={100} alt='bazar' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured2.247cd605.png%26w%3D128%26q%3D75&w=128&q=75"} />
                    </div>
                    <div className='w-12 md:w-24'>
                        <Image width={100} height={100} alt='bazar' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured3.6076521d.png%26w%3D128%26q%3D75&w=128&q=75"} />
                    </div>
                    <div className='w-12 md:w-24'>
                        <Image width={100} height={100} alt='bazar' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252FFeatured4.0489f1fc.png%26w%3D128%26q%3D75&w=128&q=75"} />
                    </div>
                </div>
            </div>

            {/* right div hero section */}
            <div className='bg-[#FFECE3] rounded-full hidden md:flex'>
                <Image src={HeroGirlimg} alt="girl" />
            </div>
        </div>
    )
}

export default Hero