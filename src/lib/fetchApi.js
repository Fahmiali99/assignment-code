import { FETCH_HOLIDAY, FETCH_LOCATION } from "@/constans/urlApi"
import axios from "axios"

export const getHolidayList = async (data) => {
    const response =  await axios.get(FETCH_HOLIDAY, data, {
        headers: {
            'Content-Type': "application/json"
        },
    });
    return response?.data;
}

export const postHolidayList = async (data) => {
    const response = await axios.post(FETCH_HOLIDAY, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response?.data;
};

export const putHolidayList = async (id, data) => {
    const response = await axios.put(`${FETCH_HOLIDAY}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response?.data;
};

export const deleteHolidayList = async (id, data) => {
    const response = await axios.delete(`${FETCH_HOLIDAY}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
    return response?.data;
};

export const getLocation = async (data) => {
    const response =  await axios.get(FETCH_LOCATION, data, {
        headers: {
            'Content-Type': "application/json"
        },
    });
    return response?.data;
}