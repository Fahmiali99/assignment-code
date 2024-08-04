import React from 'react'
import { ColorRing, ThreeDots } from 'react-loader-spinner'

function Loader() {
  return (
    <tr className="w-full h-full dark:bg-gray-900">
        <th scope="row" className="px-4 py-16" />
        <th scope="row" className="px-6 py-16" />
        <th scope="row" className="px-6 py-16" />
        <th scope="row" className="px-6 py-16" />
        <th scope="row" className="px-6 py-16" ><ColorRing visible={true} height="70" width="70" ariaLabel="color-ring-loading" wrapperStyle={{}} wrapperClass="color-ring-wrapper" colors={['#8b5cf6','#8b5cf6', '#8b5cf6', '#8b5cf6', '#8b5cf6']}/></th>
        <th scope="row" className="px-6 py-16" />
        <th scope="row" className="px-6 py-16" />
        <th scope="row" className="px-6 py-16" />
    </tr>
  )
}

export default Loader;