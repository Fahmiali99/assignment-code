import React from 'react'
import { FaPlus } from 'react-icons/fa'

function ButtonCreate({handleModal}) {
    return (
    <div className="flex items-center">
        <div className="hidden sm:hidden md:hidden lg:block xl:block">
            <button
                onClick={handleModal}
                id="addnow"
                type="button"
                className=" duration-200 flex items-center text-xs text-white bg-primary hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-3 focus:outline-none"
            >
                <FaPlus />
                <span className="pl-2">Create Plan</span>
            </button>
        </div>
        <div className="block sm:block md:block lg:hidden xl:hidden pl-2.5">
            <button
                onClick={handleModal}
                id="addnow"
                type="button"
                className=" duration-200 flex items-center text-xs text-white bg-primary hover:bg-purple-700 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg px-5 py-2.5 focus:outline-none"
            >
                <FaPlus className="m-1.5 text-white" />
            </button>
        </div>
    </div>
  )
}

export default ButtonCreate