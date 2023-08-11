import React, { FC } from 'react'
import { oneProductType } from '../utils/ProductsDataArraysAndTypes'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../../../sanity/lib/client'
import Image from 'next/image'
import Link from 'next/link'

const builder = imageUrlBuilder(client)

function urlFor(source: any) {
    return builder.image(source)
}
const Card: FC<{ singleProductData: oneProductType }> = ({ singleProductData }) => {


    return (
        <Link href={`/catalog/${singleProductData.slug.current}`}>
            <div className='max-w-sm min-w-[24rem] space-y-3'>
                <div className='w-96'>
                    <Image width={200} height={200} alt={singleProductData.image[0].alt} src={urlFor(singleProductData.image[0]).width(1000).height(1000).url()} />
                </div>
                <div className='space-y-2 font-semibold'>
                    <h4>{singleProductData.productName}</h4>
                    <p>${singleProductData.price}</p>
                </div>
            </div>
        </Link>
    )
}

export default Card