import Image from 'next/image'
import React from 'react'

const ProductsType = () => {
    return (
        <div className='py-16 px-2'>
            <div className="text-center space-y-3 mb-10">
                <p className='text-blue-800 text-sm'>PROMOTIONS</p>
                <h2 className='text-3xl font-bold text-gray-800'>Our Promotions Events</h2>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                <div className='w-full px-12 flex flex-col sm:flex-row items-center justify-between col-span-1 md:col-span-2 bg-[#D6D6D8]'>
                    <div className='max-w-[13rem] py-8'>
                        <h3 className='text-3xl font-bold'>GET UP TO 60%</h3>
                        <p className='text-lg'>For the summer season</p>
                    </div>
                    <div className='w-64'>
                        <Image height={1000} width={1000} alt='summer season' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fevent1.6f776995.png%26w%3D384%26q%3D75&w=1080&q=75"} />
                    </div>
                </div>
                <div className='w-ful row-span-1 md:row-span-2 flex flex-col items-center h-full bg-[#EFE1C7]'>
                    <div className='p-4'>
                        <p>Flex Sweatshirt</p>
                        <p> <del>$100.00</del> &nbsp; <b><ins> $75.00</ins></b></p>
                    </div>
                    <div>
                        <Image width={1000} height={1000} alt='summer' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fevent2.b5f201ac.png%26w%3D384%26q%3D75&w=1080&q=75"} />
                    </div>
                </div>
                <div className='w-ful row-span-1 md:row-span-2 flex flex-col items-center h-full bg-[#D7D7D9]'>
                    <div className='p-4'>
                        <p>Flex Sweatshirt</p>
                        <p> <del>$225.00 </del> &nbsp; <b><ins>$190.00</ins></b></p>
                    </div>
                    <div>
                        <Image width={1000} height={1000} alt='summer' src={"https://commerece-e.vercel.app/_next/image?url=https%3A%2F%2Ffull-stack-ecommerce-clothing-web.vercel.app%2F_next%2Fimage%3Furl%3D%252F_next%252Fstatic%252Fmedia%252Fevent3.798fa92b.png%26w%3D384%26q%3D75&w=1080&q=75"} />
                    </div>
                </div>
                <div className='w-ful gap-2 col-auto md:col-span-2 flex flex-col items-center justify-center text-white py-4 md:py-6 px-1 bg-[#212121]'>
                    <h3 className='text-4xl font-extrabold'>GET 30% Off</h3>
                    <p>USE PROMO CODE</p>
                    <button className='bg-[#474747] px-5 py-1 rounded-md'>DINEWEEKENDSALE</button>
                </div>

            </div>
        </div>
    )
}

export default ProductsType