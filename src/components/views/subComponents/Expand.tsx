
import { FC } from 'react'
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import Link from "next/link"
import { useState } from "react"
import { HiOutlineChevronDown } from "react-icons/hi"

const Expand: FC<{ item: NavbarItemType }> = ({ item }) => {
    const [isExpended, setExpended] = useState<boolean>(false);
    const [isTimeout, setTimeOut] = useState<boolean>(false);

    function handleExpand() {
        setExpended(!isExpended);
        setTimeout(() => {
            setTimeOut(true)
        }, 500);
    }

    return (
        <li className={`${isExpended ? "h-48" : "h-12"}  list-none`}>
            <div onClick={handleExpand} className="flex items-center py-2 px-3 hover:bg-gray-200 rounded-md duration-300 justify-between">
                <Link href={item.href}>{item.label}</Link>
                {item.isDropDown ? <HiOutlineChevronDown className="-rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
            </div>
            <div className="flex flex-col space-y-2">
                {isExpended && item.dropDownData?.map((subItem: NavbarItemType, index: number) => (
                    <Link key={index} className="px-5 hover:bg-gray-3100 rounded-md py-1 duration-300" href={subItem.href}>
                        {subItem.label}
                    </Link>

                ))}
            </div>
        </li>


    )
}

export default Expand