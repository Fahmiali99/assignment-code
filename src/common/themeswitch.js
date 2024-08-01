import React, { useEffect, useState } from 'react';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className="w-full md:w-auto text-gray-500 dark:text-white transition duration-200 ease-in-out text-base hover:bg-purple-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer dark:hover:text-primary hover:text-primary mt-2 md:mt-0">
            {theme === 'dark' ? (
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className=' w-full md:w-auto  flex justify-center focus:outline-none text-white bg-primary hover:bg-purple-800 focus:ring-0 focus:ring-purple-300 font-medium rounded-lg text-sm p-2' aria-label='buttondark'>
                    <RiSunLine
                        className=" h-6 w-6"
                        aria-hidden="true"
                    />
                </button>
            ) : (
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className='w-full md:w-auto flex justify-center focus:outline-none text-primary bg-purple-100 hover:bg-purple-200 focus:ring-0 focus:ring-purple-300 font-medium rounded-lg text-sm p-2' aria-label='buttonlight'>
                    <RiMoonClearLine
                        className="h-6 w-6"
                        aria-hidden="true"
                    />
                </button>
            )}
        </div>
    );
};

export default ThemeSwitch;