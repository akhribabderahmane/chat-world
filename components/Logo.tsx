import React from 'react'
import AppLogo from '@logos/logo.png'
import { AspectRatio } from './ui/aspect-ratio'
import Image from 'next/image'
import Link from 'next/link'
const Logo = () => {
  return (
    <Link href='/' prefetch={false} className=' overflow-hidden w-fit'>
       <div className=' w-72 h-20 flex items-center mr-8 '>
        <AspectRatio  ratio={16/9} className=' flex flex-row gap-1 items-center justify-center'>
        <Image priority src={AppLogo} width={70} height={70} alt='logo' className=' pb-4'></Image>
        <p className=' text-2xl font-semibold '>La Console</p>
        </AspectRatio>
       </div>
    </Link>
  )
}

export default Logo