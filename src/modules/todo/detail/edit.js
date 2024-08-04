import { putHolidayList } from "@/lib/fetchApi";
import { setEditHoliday } from "@/store/holiday";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import ComponentEdit from "../component/compedit";

function ModalEdit({ location, setEditId, editId }) {
    const dropdownCountry = useRef(null);
    const dropdownCity = useRef(null);
    const dropdownStatus = useRef(null);
    const dispatch = useDispatch();
    const { holidaydata } = useSelector((state) => state.holidaydata);
    const holiday = Array.isArray(holidaydata) ? holidaydata.find((item) => item.id === editId) : "";
    const [showCountry, setShowCountry] = useState(false);
    const [showCity, setShowCity] = useState(false);
    const [showStatus, setShowStatus] = useState(false);
    const [inputData, setInputData] = useState({
        name: holiday?.name || "",
        country: holiday?.country || "",
        city: holiday?.city || "",
        budget: holiday?.budget || "",
        date: holiday?.date || "",
        status: holiday?.status === 'true' || false,
    });

    useEffect(() => {
        if (holiday) {
            setInputData({
                name: holiday?.name || "",
                country: holiday?.country || "",
                city: holiday?.city || "",
                budget: holiday?.budget || "",
                date: holiday?.date || "",
                status: holiday?.status === 'true' || false,
            });
        }
    }, [holiday]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData((prevData) => ({
            ...prevData,
            [name]: name === 'status' ? value === 'true' : value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await putHolidayList(editId, inputData);
            dispatch(setEditHoliday(response));
            setEditId(null);
            toast.success("Successfully Edited", { position: toast.POSITION.BOTTOM_LEFT });
        } catch (error) {
            toast.error("Failed to Edit", { position: toast.POSITION.BOTTOM_LEFT });
        }
    };

    const validateForm = () => (
        inputData.name && inputData.country && inputData.city && inputData.budget && inputData.date
    );

    const handleCountrySelect = (country) => {
        setInputData((prevData) => ({
            ...prevData, 
            country: country.country, 
            city: ""
        }));
        setShowCountry(false);
        setShowCity(false);
    };

    const handleCitySelect = (city) => {
        setInputData((prevData) => ({ ...prevData, city }));
        setShowCity(false);
    };

    const handleShowCountry = () => setShowCountry(!showCountry);
    const handleShowCity = () => setShowCity(!showCity);
    const handleStatusSelect = (status) => {
        setInputData((prevData) => ({ ...prevData, status }));
        setShowStatus(false);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownCountry.current && !dropdownCountry.current.contains(event.target)
            ) {
                setShowCountry(false);
            }
        }

        function handleClickOutsideCity(event) {
            if (
                dropdownCity.current && !dropdownCity.current.contains(event.target)
            ) {
                setShowCity(false);
            }
        }

        function handleClickOutsideStatus(event) {
            if (
                dropdownStatus.current && !dropdownStatus.current.contains(event.target)
            ) {
                setShowStatus(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mousedown", handleClickOutsideCity);
        document.addEventListener("mousedown", handleClickOutsideStatus);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("mousedown", handleClickOutsideCity);
            document.removeEventListener("mousedown", handleClickOutsideStatus);
        };
    }, []);

    return (
        <ComponentEdit 
            editId={editId} 
            setEditId={setEditId}
            inputData={inputData}
            handleChange={handleChange}
            dropdownCity={dropdownCity}
            dropdownCountry={dropdownCountry}
            handleCitySelect={handleCitySelect}
            handleCountrySelect={handleCountrySelect}
            handleShowCity={handleShowCity}
            handleShowCountry={handleShowCountry}
            handleStatusSelect={handleStatusSelect}
            location={location}
            showCountry={showCountry}
            handleSubmit={handleSubmit}
            showStatus={showStatus}
            showCity={showCity}
            dropdownStatus={dropdownStatus}
            setShowStatus={setShowStatus}
        />
    );
}

export default ModalEdit;
