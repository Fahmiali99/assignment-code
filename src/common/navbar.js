import React from 'react'
import { useRouter } from 'next/router'
import logo from "@/../public/assets/logo.webp"
import Image from 'next/image'
import dynamic from 'next/dynamic'
import Link from 'next/link'
const ThemeSwitch = dynamic(() => import("./themeswitch"), { ssr: false });

function NavigationBar() {
    const router = useRouter()

    const navbar = [
        {
            title: "Implementation",
            href: "/"
        },
        {
            title: "Psb One",
            href: "/psbone"
        },
        {
            title: "Psb Two",
            href: "/psbtwo"
        },
    ]
  return (
    <nav className='pt-4 '>
        <div className=" flex flex-wrap items-center justify-between p-4 border-gray-100 dark:border-gray-800  border shadow-md  rounded-xl dark:bg-gray-800">
            <a href="https://flowbite.com/" className="flex items-center space-x-0 rtl:space-x-reverse">
                <Image src={logo} className="h-10 w-10 me-4" alt="Flowbite Logo" width={20} height={20} />
                <span className="self-center text-2xl font-semibold whitespace-nowrap text-gray-900 dark:text-white">fahmi</span>
            </a>
            <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-900 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                <span className="sr-only">Open main menu</span>
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
                </svg>
            </button>
            <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                <ul className="font-medium flex items-center flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 text-md">
                    {navbar.map((e, i) => (
                        <div key={i} >
                            <Link href={e.href} className={router.pathname === e.href ? "active text-primary dark:text-primary ": "text-gray-500 dark:text-purple-200 dark:hover:text-primary hover:text-primary duration-150 "} >{e.title}</Link>
                        </div>
                    ))}
                    <ThemeSwitch />
                </ul>
            </div>
        </div>
    </nav>
  )
}

export default NavigationBar