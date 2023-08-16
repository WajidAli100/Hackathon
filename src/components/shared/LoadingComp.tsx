import Image from "next/image"
import { FC } from "react"
import { HeroGirlimg } from "../assets/index"
//import { PreLoader } from "../assets"

const LoadingComp: FC<{ size: string }> = ({ size }) => {
    return (
        <div className={`${size}`}>
            <Image src={HeroGirlimg} alt="Pre loader" />
        </div>
    )
}

export default LoadingComp