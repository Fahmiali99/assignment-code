import React from 'react'

function FooterBar() {
  return (
    <footer className="flex justify-center text-center rounded-lg my-4">
        <div className="w-full md:py-8">
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://www.fahmialihusni.com" className="hover:underline">Fahmi</a>. All Rights Reserved.</span>
        </div>
    </footer>
  )
}

export default FooterBar