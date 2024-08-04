import React from 'react';

export default function Searching({  setParams, searchTerm, setSearchTerm }) {
    const handleSearch = (e) => {
        e.preventDefault();
        setParams((prev) => ({ ...prev, search: searchTerm, page: 1 }));
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    return (
        <form className="w-full md:w-full lg:w-4/12 " >
            <input
                onClick={handleSearch}
                type="search"
                id="default-search"
                className="block w-full p-2.5 ps-5 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-purple-500 dark:focus:border-purple-500"
                placeholder="Searching ..."
                value={searchTerm}
                onChange={handleSearchChange}
                required
            />
            <button type="submit" className="hidden">Search</button>
        </form>
    );
}
