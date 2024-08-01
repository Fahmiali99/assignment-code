import React, { useEffect, useState } from 'react';
import { RiSunLine, RiMoonClearLine } from 'react-icons/ri';
import { useTheme } from 'next-themes'

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className="text-gray-500 dark:text-white transition duration-200 ease-in-out text-base hover:bg-purple-100 dark:hover:bg-gray-700 rounded-lg cursor-pointer p-2 dark:hover:text-primary hover:text-primary">
            {theme === 'dark' ? (
                <RiSunLine
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className=" h-6 w-6"
                    aria-hidden="true"
                />
            ) : (
                <RiMoonClearLine
                    onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                    className="h-6 w-6"
                    aria-hidden="true"
                />
            )}
        </div>
    );
};

export default ThemeSwitch;