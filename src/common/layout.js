import React from 'react'
import NavigationBar from './navbar'
import FooterBar from './footer'

function Layout({children}) {
  return (
    <div className='bg-white dark:bg-gray-900 '>
        <div className='container mx-auto px-4'>
            <NavigationBar />
            <main>{children}</main>
            <FooterBar />
        </div>
    </div>
  )
}

export default Layout