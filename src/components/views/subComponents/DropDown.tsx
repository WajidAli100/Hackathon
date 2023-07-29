import { NavbarItemType } from '@/components/utils/NavbarArrayandTypes'
import Link from 'next/link'
import React, { FC } from 'react'

const DropDown: FC<{ item: NavbarItemType }> = ({ item }) => {
  return (
    <ul>
      {item.dropDownData?.map((item: NavbarItemType, index: number) => (
        <li key={index} className='hover:ml-2 duration-200 group-hover:translate-y-0 -translate-y-8'>
          <Link href={item.href}>{item.label}</Link>
        </li>
      ))}
    </ul>
  )
}

export default DropDown