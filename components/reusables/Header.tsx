import React from 'react';
import { useRouter } from 'next/router';
import { LogoNoBackground } from '@/assets/images';
import { Button } from 'antd';
import Image from 'next/image';
import Link from 'next/link';



const Header = () => {
    const router = useRouter();
  return (
    <div className="static w-full top-0 flex items-center h-20 bg-secondary px-16 justify-between">
        <div className="logo">
            <Link href="/">
                <Image 
                    src={LogoNoBackground}
                    alt='Logo image'
                    width={150}
                    height={150}
                />
            </Link>
        </div>
        <ul className="flex items-center justify-between g-12 w-1/2">
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