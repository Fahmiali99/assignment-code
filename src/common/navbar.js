import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import logo from "@/../public/assets/logo.webp"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { IoGitCompare } from "react-icons/io5";
import { IoLogoWebComponent } from "react-icons/io5";
import { SiWebmoney } from "react-icons/si";
const ThemeSwitch = dynamic(() => import("./themeswitch"), { ssr: false });

function NavigationBar() {
    const router = useRouter()
    const [navbarShow, setNavbarShow] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

    const navbar = [
        {
            title: "ToDo",
            href: "/",
            icon: <SiWebmoney />
        },
        {
            title: "Psb One",
            href: "/psbone",
            icon: <IoGitCompare />
        },
        {
            title: "Psb Two",
            href: "/psbtwo",
            icon: <IoLogoWebComponent />
        },
    ]

    const handleHumberger = () => {
        setNavbarShow(!navbarShow)
    }

    useEffect(() => {
        const handleScroll = () => {
            if (typeof window !== 'undefined') {
                if (window.scrollY > lastScrollY) {
                    setIsVisible(false);
                } else {
                    setIsVisible(true);
                }
                setLastScrollY(window.scrollY);
            }
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, [lastScrollY]);
    

  return (
    <nav className={`container mx-auto fixed top-0 left-0 right-0 z-50 pt-4 px-4 transition-transform duration-300 ${isVisible ? 'transform translate-y-0' : 'transform -translate-y-full'}`}>
        <div className=' bg-white dark:bg-gray-900 rounded-xl'>
            <div className=" flex flex-wrap items-center justify-between p-4 border-gray-100 dark:border-gray-800  border shadow-md  rounded-xl dark:bg-gray-800">
                <Link href="/" className="flex items-center space-x-0 rtl:space-x-reverse">
                    <Image src={logo} className="h-10 w-10 me-4" alt="Flowbite Logo" width={20} height={20} />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">fahmi</span>
                </Link>
                <button onClick={handleHumberger} data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                    <span className="sr-only">Open main menu</span>
                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
                    </svg>
                </button>
                <div className={`w-full md:block md:w-auto ${navbarShow ? 'block' : 'hidden'}`} id="navbar-default">
                    <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-xl md:flex-row md:space-x-10 rtl:space-x-reverse md:mt-0 md:border-0 text-md">
                        {navbar.map((e, i) => (
                            <div key={i} className='p-2 m-2 md:p-0 md:m-0 w-full md:w-auto'>
                                <Link href={e.href} className={router.pathname === e.href ? "active text-primary dark:text-primary ": "text-gray-500 dark:text-purple-200 dark:hover:text-primary hover:text-primary duration-150 "} >
                                    <div className='flex items-center gap-3'>
                                        <span className=' text-xl '>{e.icon}</span>
                                        <h1>{e.title}</h1>
                                    </div>
                                </Link>
                            </div>
                        ))}
                        <ThemeSwitch />
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar