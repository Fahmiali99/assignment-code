import React, { useEffect, useRef, useState } from "react";

function FilterData({ selectedFilter, setSelectedFilter }) {
    const dropdownMenuRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleCheckbox = (filter) => {
        setSelectedFilter((prev) => {
            if (prev.includes(filter)) {
                return prev.filter((item) => item !== filter);
            } else {
                return [...prev, filter];
            }
        });
    };

    const handleShow = () => {
        setShow(!show);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownMenuRef.current &&
                !dropdownMenuRef.current.contains(event.target)
            ) {
                setShow(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <div>
            <button
                onClick={handleShow}
                id="dropdownCheckboxButton"
                className="text-xs text-[#667085] dark:text-gray-400 hover:text-primary dark:hover:text-primary duration-200 uppercase rounded-lg text-center inline-flex items-center"
                type="button"
            >
                Status
                <svg
                    className="w-2.5 h-2.5 ms-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>
            <div ref={dropdownMenuRef} className="relative z-10">
                <div
                    id="dropdownDefaultCheckbox"
                    className={`absolute left-0 top-3 z-10 w-36 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600 ${show ? "block" : "hidden"}`}
                >
                    <ul className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownCheckboxButton">
                        {[
                            { label: "Plan", value: false },
                            { label: "Finish", value: true }
                        ].map(({ label, value }, index) => (
                            <li key={index}>
                                <div className="flex items-center">
                                    <input
                                        id={`checkbox-item-${index}`}
                                        type="checkbox"
                                        checked={selectedFilter.includes(value)}
                                        onChange={() => handleCheckbox(value)}
                                        className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 focus:ring-2"
                                    />
                                    <label
                                        htmlFor={`checkbox-item-${index}`}
                                        className="ms-2.5 text-xs font-medium text-gray-900 dark:text-gray-300"
                                    >
                                        {label}
                                    </label>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default FilterData;
