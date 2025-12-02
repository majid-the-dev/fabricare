import React from 'react';
import Logo from '@/public/assets/logo.png';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <nav className='border-b border-slate-200 py-5'>
        <div className='w-full max-w-7xl mx-auto flex items-center justify-between px-4'>
            <Link href={"/"} className=''>
                <Image src={Logo} alt="Logo" width={150} height={150} />
            </Link>
            <div className='flex items-center gap-4'>
                <Link href={"/"} className='text-slate-600'>
                    Tips & Art
                </Link>
                <Link href={"/"} className='text-slate-500'>
                    About
                </Link>
                <Link href={"/"} className='text-slate-500'>
                    Contact
                </Link>
            </div>
        </div>
    </nav>
  )
}

export default Header;