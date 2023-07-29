'use client'
import { RxHamburgerMenu } from "react-icons/rx"
import { AiOutlineClose } from "react-icons/ai"
import { NavbarArray, NavbarItemType } from "@/components/utils/NavbarArrayandTypes"
import Image from "next/image"
import Link from "next/link"
import { BiSearch } from "react-icons/bi"
import { BsCart2 } from "react-icons/bs"
import { HiOutlineChevronDown } from "react-icons/hi"
import DropDown from "../subComponents/DropDown"
import { useState } from "react"
import Expand from "../subComponents/Expand"


const Navbar = () => {
    const [isNavbaropen, setNavbaropen] = useState<boolean>(false);
    const [cardItemNumber, setcardItemNumber] = useState<number>(0);
    return (
        <div className="bg-[#ffffffba] z-50 sticky top-0 backdrop-blur-lg">
            <div className="py-6 flex items-center justify-between space-x-12">
                <div className="flex-shrink-0">
                    <Image src={"/Logo.webp"} width={200} height={200} alt="logo" />
                </div>
                <div className="hidden lg:flex w-full justify-between items-center">
                    <ul className="flex space-x-4 font-medium text-lg">
                        {NavbarArray.map((item: NavbarItemType, index: number) => (
                            <li key={index} className="flex items-center gap-1 relative rounded-md px-3 py-1 hover:bg-gray-100 cursor-pointer group">
                                <Link href={item.href}>{item.label}</Link>
                                {item.isDropDown ? <HiOutlineChevronDown className="-rotate-180 group-hover:rotate-0 duration-300" size={15} /> : ""}
                                {item.isDropDown && <div className={`invisible group-hover:visible p-6 top-8 left-0 py-2 px-6 min-w-[8rem] absolute bg-gray-100`}>
                                    <DropDown item={item} />
                                </div>}
                            </li>
                        ))}
                    </ul>
                    <div className="border flex items-center text-gray-600 px-3 rounded-md">
                        <BiSearch />
                        <input type="text" className="focus:outline-none pr-5 pl-1 py-1" placeholder="Search in our Store" />
                    </div>
                    <div className="flex flex-shrink-0 relative w-11 h-11 items-center justify-center rounded-full bg-gray-300">
                        <div className="w-4 h-4 absolute text-xs font-light top-1 bg-red-400 rounded-full right-2 flex items-center justify-center">
                            {cardItemNumber}
                        </div>
                        <BsCart2 size={24} />
                    </div>
                </div>
                <div className="cursor-pointer" onClick={() => setNavbaropen(!isNavbaropen)}>
                    {isNavbaropen ?
                        <div className="flex lg:hidden">
                            <AiOutlineClose size={25} />
                        </div>
                        :
                        <div className="flex lg:hidden ">
                            <RxHamburgerMenu size={25} />
                        </div>
                    }
                </div>

            </div>
            {
                isNavbaropen && <MobileNavbar />
            }
        </div>
    )
}

export default Navbar

const MobileNavbar = () => {

    return (
        <div className="w-full px-6 py-4 bg-gray-100">
            {
                NavbarArray.map((item: NavbarItemType, index: number) => {
                    return (
                        <Expand key={index} item={item} />
                    )
                }

                )
            }
        </div>


    )
}
