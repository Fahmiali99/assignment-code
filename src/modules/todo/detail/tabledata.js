import BadgeStatus from '@/common/badgestatus';
import React from 'react'
import { FaEdit, FaTrash } from "react-icons/fa";
import Moment from "react-moment";
import FilterData from '@/common/filterdata';
import Loader from '@/common/loader';
import { formatPrice } from '@/common/formatprice';

function TableData({ data, handleEdit, handleDeleteId, params, selectedFilter, setSelectedFilter, holidaydata}) {
  return (
    <div className="  rounded-lg mt-12 border dark:border-gray-800 border-gray-100">
        <div className="relative overflow-x-auto  rounded-lg">
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
                <thead className="bg-gray-50 uppercase dark:bg-gray-700 text-xs text-[#667085] dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-4 py-5">No</th>
                        <th scope="col" className="px-6 py-5">Nama</th>
                        <th scope="col" className="px-6 py-5">Country</th>
                        <th scope="col" className="px-6 py-5">City</th>
                        <th scope="col" className="px-6 py-5">Budget</th>
                        <th scope="col" className="px-6 py-5">Holiday Date</th>
                        <th scope="col" className="px-6 py-5">
                            <FilterData selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter} params={params} holidaydata={holidaydata} />
                        </th>
                        <th scope="col" className="px-6 py-3">Aksi</th>
                    </tr>
                </thead>
                <tbody>
                    {data?.length ? data?.map((data, i) => {
                        return (
                            <tr key={i} className={`border-b ${i % 2 == 0 ? `odd:bg-white dark:text-white  odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700` : `odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700 dark:text-white`}`}>
                                <th className="px-4 py-4 font-medium whitespace-nowrap">{i + 1}</th>
                                <th className="px-6 py-4 font-medium whitespace-nowrap">{data?.name}</th>
                                <th className="px-6 py-4 font-medium whitespace-nowrap"><Moment format="DD MMM, YYYY">{data?.date}</Moment></th>
                                <th className="px-6 py-4 font-medium whitespace-nowrap">{data?.country}</th>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">{data?.city}</td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap">Rp. {formatPrice(data?.budget)}</td>
                                <td className="px-6 py-4 font-medium whitespace-nowrap"><BadgeStatus status={data?.status}/></td>
                                <td className="px-6 py-4">
                                    <div className="flex items-center">
                                        <button onClick={() => handleEdit(data.id)} aria-label="revision" id="revision" className="bg-[#EFEFFD] hover:bg-purple-100 p-4 mr-2 rounded-full">
                                            <FaEdit className="text-primary h-3.5 w-3.5  hover:text-purple-600 duration-200" />
                                        </button>
                                        <button onClick={() => handleDeleteId(data?.id)} aria-label="delete" id="delete" className="bg-[#FFF2F2] hover:bg-red-100 p-4 rounded-full">
                                            <FaTrash className="text-error h-3.5 w-3.5 hover:text-red-600 duration-200" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        );})
                    : <Loader />}
                </tbody>
            </table>
      </div>
    </div>
  )
}

export default TableData;