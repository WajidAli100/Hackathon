import { responseType } from "@/components/utils/ProductsDataArraysAndTypes";
import ProductDetail from "@/components/views/ProductDetails/index";
import ContextWrapper from "@/global/context/index";
import { data } from "autoprefixer";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { FC } from "react"
import { Slug } from "sanity"

async function fetchPreviewData(slug: string) {
    let res = await fetch(`https://70iorhhu.api.sanity.io/v2023-07-28/data/query/production?query=*%5B_type%3D%3D%22products%22+%26%26+slug.current%3D%3D%22${slug}%22%5D`)
    return res.json();
};

const Catalog = async ({ params }: { params: { slug: string } }) => {
    let data: responseType = await fetchPreviewData(params.slug)
    return (
        <div>
            <ContextWrapper>
                <ProductDetail item={data.result[0]} />
                {/* {params.slug} */}
            </ContextWrapper>
        </div>
    )
}

export default Catalog