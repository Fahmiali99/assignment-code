import { postHolidayList } from "@/lib/fetchApi";
import { setCreateHoliday } from "@/store/holiday";
import React, { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import ComponentCreate from "../component/compcreate";

function ModalCreate({ location, setShow, show }) {
    const dropdownCountry = useRef(null);
    const dropdownCity = useRef(null);
    const dispatch = useDispatch();
    const [showCountry, setShowCountry] = useState(false);
    const [showCity, setShowCity] = useState(false);
    const [inputData, setInputData] = useState({
        name: "",
        country: "",
        city: "",
        budget: "",
        date: "",
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInputData({
            ...inputData, [name]: value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await postHolidayList(inputData);
            dispatch(setCreateHoliday(response));
            toast.success("Successfully Added", {
                position: toast.POSITION.BOTTOM_LEFT,
            });
            setShow(false);
        } catch (error) {
            toast.error("Failed to Add", {
                position: toast.POSITION.BOTTOM_LEFT,
            });
        }
    };

    const validateForm = () => {
        return (
            inputData.name.length > 0 &&
            inputData.country.length > 0 &&
            inputData.city.length > 0 &&
            inputData.budget.length > 0 &&
            inputData.date.length > 0
        );
    };

    const handleCountrySelect = (country) => {
        setInputData({
            ...inputData, country: country.country, city: "", 
        });
        setShowCountry(false);
        setShowCity(false);
    };

    const handleCitySelect = (city) => {
        setInputData({ ...inputData, city: city });
        setShowCity(false);
    };

    const handleShowCountry = () => {
        setShowCountry(!showCountry);
    };

    const handleShowCity = () => {
        setShowCity(!showCity);
    };

    useEffect(() => {
        function handleClickOutside(event) {
            if (
                dropdownCountry.current && !dropdownCountry.current.contains(event.target)
            ) {
                setShowCountry(false);
            }
        }

        function handleClickOutsides(event) {
            if (
                dropdownCity.current && !dropdownCity.current.contains(event.target)
            ) {
                setShowCity(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("mousedown", handleClickOutsides);
        return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("mousedown", handleClickOutsides);
        };
    }, [setShowCity, setShowCountry]);
    return (
        <>
            <ComponentCreate 
                inputData={inputData}
                handleChange={handleChange}
                dropdownCity={dropdownCity}
                dropdownCountry={dropdownCountry}
                handleCitySelect={handleCitySelect}
                handleCountrySelect={handleCountrySelect}
                handleShowCity={handleShowCity}
                handleShowCountry={handleShowCountry}
                handleSubmit={handleSubmit}
                show={show}
                showCity={showCity}
                showCountry={showCountry}
                setShow={setShow}
                location={location}
                validateForm={validateForm}
            />

        </>
    );
}

export default ModalCreate;
