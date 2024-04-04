import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { LogoNoBackground } from '@/assets/images';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';
import { MenuIcon,CancelIcon } from '@/assets/logo';
import $ from "jquery";



const Header = () => {
    const router = useRouter();
    const [ showMenu, setShowMenu ] = useState(false);

    const handleShowMenu = () => {
        setShowMenu(!showMenu);
        if(showMenu){
            $("#menu").slideUp()
        }else{
            $("#menu").slideDown()
        }
    }
  return (
    <div className="sticky w-full h-fit py-6 top-0 flex items-center bg-secondary px-4 md:px-16 justify-between z-10">
        <div className="w-full">
            <div className="w-full flex items-center justify-between">
                <Link href="/">
                    <Image 
                        src={LogoNoBackground}
                        alt='Logo image'
                        width={150}
                        height={150}
                    />
                </Link>
                <div className="md:hidden">
                    {!showMenu 
                        && <Image 
                                src={MenuIcon} 
                                alt="Menu Icon" 
                                className="cursor-pointer" 
                                width={40} 
                                height={40} 
                                onClick={() => handleShowMenu()}
                    />}
                    {showMenu 
                        && <Image 
                                src={CancelIcon} 
                                alt="cancel Icon" 
                                width={40} 
                                height={40}
                                onClick={() => handleShowMenu()}
                    />}
            </div>
            </div>
            <ul className="hidden flex-col items-center justify-between g-12 w-1/2 md:hidden mt-4 px-4" id='menu'>
                <li className='py-2'>
                    <Link href="/about" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50 flex items-center gap-2">
                        <i className="bi bi-people-fill"></i>
                        About
                    </Link>
                </li>
                <li className='py-2'>
                    <Link href="/resources" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50 flex items-center gap-2">
                    <i className="bi bi-gear-wide-connected"></i>
                        Resources
                    </Link>
                </li>
                <li className='py-2'>
                    <Link href="/enroll" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50 flex items-center gap-2">
                        <i className="bi bi-house-add-fill"></i>
                        Enroll
                    </Link>
                </li>
                <li className='py-2'>
                    <Link href="/events" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50 flex items-center gap-2">
                        <i className="bi bi-calendar-event-fill"></i>
                        Events
                    </Link>
                </li>
                <li className='py-2'>
                    <Link href="/contact" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50 flex items-center gap-2">
                        <i className="bi bi-envelope-fill"></i>
                        Contact
                    </Link>
                </li>
                <li className='py-2'>
                    <Link href="/Donate" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-70">
                        <Button type="primary" onClick={() => router.push("/donate")} className="h-12 w-32 font-bold text-secondary">
                            Donate
                        </Button>
                    </Link>
                </li>
            </ul>
        </div>

        <ul className="items-center justify-between g-12 w-full hidden md:flex">
            <li className='mr-6'>
                <Link href="/about" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50">
                    About
                </Link>
            </li>
            <li>
                <Link href="/resources" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50">
                    Resources
                </Link>
            </li>
            <li>
                <Link href="/enroll" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50">
                    Enroll
                </Link>
            </li>
            <li>
                <Link href="/events" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50">
                    Events
                </Link>
            </li>
            <li>
                <Link href="/contact" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-50">
                    Contact
                </Link>
            </li>
            <li>
                <Link href="/Donate" className="text-primary text-lg font-semibold transition-opacity duration-1000 hover:opacity-70">
                    <Button type="primary" onClick={() => router.push("/donate")} className="h-12 w-32 font-bold text-secondary">
                        Donate
                    </Button>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Header