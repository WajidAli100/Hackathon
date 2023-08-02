import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import { FC } from "react"
import { Slug } from "sanity"

const Catalog: FC<{ params: { Slug: string } }> = ({ params }) => {
    return (
        <div>
            {params.Slug}
        </div>
    )
}

export default Catalog