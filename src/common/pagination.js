import React from 'react'
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";


function Pagination({ page, prevPage, nextPage, gotoPage, length }) {
    const totalItems = length;
    const maxVisible = 3;
    const pageSize = 7;
    const pageCount = Math.ceil(totalItems / pageSize);
    const visiblePage = Math.min(maxVisible, pageCount);
    const visiblePageStart = Math.max(2, page - Math.floor(visiblePage / 2));
    const visiblePageEnd = Math.min(
        pageCount - 1,
        visiblePageStart + visiblePage - 1
    );
    const visiblePageArray = Array.from(
        { length: visiblePageEnd - visiblePageStart + 1 },
        (_, idx) => idx + visiblePageStart
    );

    return (
        <nav className=" flex justify-between items-center py-4 pt-8 md:pt-12 lg:pt-12 xl:pt-16" aria-label="Table navigation">
            <div className="text-sm font-normal flex gap-1">
                <span className="hidden md:block">Showing</span>
                <span className="font-semibold">{page}</span>
                <span> to </span>
                <span className="font-semibold">{pageCount}</span>
                <span> to of </span>
                <span className="font-semibold ">{totalItems}</span>
                <span> Entries</span>
            </div>
            <ul className="flex items-center text-base">
                <li className="flex items-center pr-2">
                <button id="prev" aria-label="prev" onClick={prevPage} disabled={page === 1} className="hover:text-primary-blue duration-200 ">
                    <div className="flex rounded justify-center items-center hover:bg-primary hover:text-white duration-200 h-7 w-7">
                    <FiChevronLeft className="text-base" />
                    </div>
                </button>
                </li>
                {pageCount <= 7 ? (
                Array.from({ length: pageCount }, (_, idx) => (
                    <li key={idx} className="px-1">
                    <button
                        onClick={() => gotoPage(idx + 1)}
                        className={`h-7 w-7 ${
                        page === idx + 1
                            ? " text-white rounded bg-primary duration-200 ease-in-out"
                            : " hover:text-primary duration-200"
                        } `}
                        id="pagenumber"
                        aria-label="pagenumber"
                    >
                        {idx + 1}
                    </button>
                    </li>
                ))
                ) : (
                <>
                    <li className="px-1">
                    <button
                        id="numidx"
                        aria-label="numidx"
                        onClick={() => gotoPage(1)}
                        className={`h-7 w-7 ${
                        page === 1
                            ? "text-white rounded bg-primary-blue duration-200 ease-in-out"
                            : "text-black hover:text-primary duration-200"
                        }`}
                    >
                        1
                    </button>
                    </li>
                    {page > maxVisible && pageCount >= maxVisible && (
                        <li className="px-1">
                            <button
                                id="detc"
                                aria-label="detc"
                                className="hover:text-primary duration-200 w-7 h-7"
                            >
                            ...
                            </button>
                        </li>
                    )}
                    {visiblePageArray.map((num, idx) => (
                        <li key={idx} className="px-1">
                            <button
                            id="num"
                            aria-label="num"
                            onClick={() => gotoPage(num)}
                            className={`h-7 w-7 ${
                                page === num
                                ? "text-white rounded bg-primary duration-200 ease-in-out"
                                : "text-black hover:text-primary duration-200"
                            } `}
                            >
                            {num}
                            </button>
                        </li>
                    ))}
                    {page <= maxVisible && pageCount > maxVisible && (
                        <li>
                            <button
                            id="detc"
                            aria-label="detc"
                            className="hover:text-primary duration-200 w-7 h-7"
                            >
                            ...
                            </button>
                        </li>
                    )}
                    <li className="px-1">
                        <button
                            id="pagecount"
                            aria-label="pagecount"
                            onClick={() => gotoPage(pageCount)}
                            className={`h-7 w-7 ${
                            page === pageCount
                                ? "text-white rounded bg-primary duration-200 ease-in-out"
                                : "text-black hover:text-primary duration-200"
                            } `}
                        >
                            {pageCount}
                        </button>
                    </li>
                </>
                )}
                <li className="flex items-center pl-2">
                    <button
                        id="next"
                        aria-label="next"
                        onClick={nextPage}
                        disabled={page === pageCount}
                    >
                        <div className="flex rounded justify-center items-center hover:bg-primary hover:text-white duration-200 h-7 w-7">
                        <FiChevronRight className="text-base" />
                        </div>
                    </button>
                </li>
            </ul>
        </nav>
    );
};


export default Pagination