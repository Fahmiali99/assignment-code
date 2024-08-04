import React from 'react'
import { FaLongArrowAltDown } from 'react-icons/fa'

function ComponentCreate({
    inputData,
    handleChange,
    dropdownCity,
    dropdownCountry,
    handleCitySelect,
    handleCountrySelect,
    handleShowCity,
    handleShowCountry,
    handleSubmit,
    show,
    showCity,
    showCountry,
    setShow,
    validateForm,
    location,}) {
    return (
        <div className={`w-full flex justify-center items-center fixed inset-0 z-50 bg-black bg-opacity-50 ${show ? "block" : "hidden"}`}>
            <div className="relative p-4 w-full max-w-6xl max-h-full">
                <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                    <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Make Vacation Plans</h3>
                        <button
                            onClick={() => setShow(false)}
                            type="button"
                            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                            data-modal-hide="default-modal"
                        >
                            <svg
                                className="w-3 h-3"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 14 14"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="p-4 md:p-5 space-y-4">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Name <span className="text-error">*</span></label>
                                <input value={inputData.name} onChange={handleChange} type="text" name="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white p-3 focus:border-primary" required />
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div ref={dropdownCountry}>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Country <span className="text-error">*</span></label>
                                    <button onClick={handleShowCountry} type="button" className="focus:ring-1 mt-1 inline-flex justify-between items-center w-full h-[50px] px-4 py-2 font-body font-medium text-primary-dark text-sm md:text-md border border-gray-300 rounded-lg focus:ring-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white focus:border-primary">
                                        {inputData.country ? inputData.country : "Select Country"}
                                        <FaLongArrowAltDown className={`${ showCountry ? "transform rotate-180 text-gray-400" : "" } transition-transform duration-300 text-gray-400`} />
                                    </button>
                                    <div className="relative">
                                        {showCountry && (
                                            <div className=" absolute w-full mt-2 rounded-lg max-h-60 overflow-y-auto bg-white shadow dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                                                {location.data.map((country, index) => (
                                                    <button key={index} onClick={() => handleCountrySelect(country)} type="button" className=" text-gray-500 dark:text-gray-400  block w-full text-left px-4 py-2 font-body font-medium text-primary-dark text-sm md:text-md hover:bg-gray-100 dark:hover:bg-gray-700">
                                                        {country.country}
                                                    </button>
                                                ))}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div ref={dropdownCity}>
                                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">City <span className="text-error">*</span></label>
                                    <button onClick={handleShowCity} type="button" className="focus:ring-1 mt-1 inline-flex justify-between items-center w-full h-[50px] px-4 py-2 font-body font-medium text-primary-dark text-sm md:text-md border border-gray-300 rounded-lg focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-800 dark:border-gray-600 dark:text-white" disabled={!inputData.country}>
                                        {inputData.city ? inputData.city : "Select City"}
                                        <FaLongArrowAltDown className={`${ showCity ? "transform rotate-180 text-gray-400" : "" } transition-transform duration-300 text-gray-400`}/>
                                    </button>
                                    <div className=" relative">
                                        {showCity && inputData.country && (
                                            <div className=" absolute w-full mt-2 rounded-lg max-h-60 overflow-y-auto bg-white shadow dark:bg-gray-800 dark:border-gray-600 dark:text-white">
                                                {location.data.filter((country) => country.country === 
                                                    inputData.country)[0]?.cities .map((city, index) => (
                                                        <button key={index} onClick={() => handleCitySelect(city)} type="button" className="text-gray-500 dark:text-gray-400  block w-full text-left px-4 py-2 font-body font-medium text-primary-dark text-sm md:text-md hover:bg-gray-100 dark:hover:bg-gray-700">
                                                            {city}
                                                        </button>
                                                    )
                                                )}
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Budget <span className="text-error">*</span></label>
                                <input value={inputData.budget} onChange={handleChange} placeholder="Rp. 00" type="number" name="budget" className="focus:border-primary mt-1 block w-full rounded-md border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white p-3" required />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-400">Date <span className="text-error">*</span></label>
                                <input value={inputData.date} onChange={handleChange} type="date" name="date" className="mt-1 block w-full rounded-md focus:border-primary border-gray-300 shadow-sm dark:bg-gray-800 dark:border-gray-600 dark:text-white p-3" required />
                            </div>
                        </div>
                        <div className="flex items-center border-t border-gray-200 rounded-b dark:border-gray-600 mt-6">
                            <div className="p-4 md:p-5">
                                <button type="submit" className={`text-white focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ${validateForm() ? "bg-primary hover:bg-purple-600 dark:bg-purple-600 dark:hover:bg-purple-600 dark:focus:ring-purple-700" : "bg-gray-400 cursor-not-allowed"}`} disabled={!validateForm()} >Submit</button>
                                <button onClick={() => setShow(false)} type="button" className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:border-primary focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Cancel</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default ComponentCreate