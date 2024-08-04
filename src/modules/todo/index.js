import Layout from '@/common/layout';
import { deleteHolidayList, getHolidayList, getLocation } from '@/lib/fetchApi';
import { setDeleteHoliday, setHoliday } from '@/store/holiday';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import TableData from './detail/tabledata';
import Header from '@/common/header';
import ButtonCreate from '@/common/buttoncreate';
import ModalCreate from './detail/create';
import ModalEdit from './detail/edit';
import Swal from 'sweetalert2';
import Searching from '@/common/searching';
import Pagination from '@/common/pagination';
import { setLocation } from '@/store/location';

function TodoPage() {
    const dispatch = useDispatch();
    const { holidaydata } = useSelector((state) => state.holidaydata);
    const { location } = useSelector((state) => state.location);
    const [show, setShow] = useState(false);
    const [editId, setEditId] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedFilter, setSelectedFilter] = useState([]);
    const [params, setParams] = useState({
        page: 1,
        limit: 7,
        search: "",
    });

    useEffect(() => {
        getHolidayList().then((data) => {
            dispatch(setHoliday(data));
        });

        getLocation().then((data) => {
            dispatch(setLocation(data))
        })
    }, [dispatch]);

    const handleDeleteId = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to return it!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#8b5cf6",
            cancelButtonColor: "#64748b",
            confirmButtonText: "Delete",
            cancelButtonText: "Cancel"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await deleteHolidayList(id);
                dispatch(setDeleteHoliday(id));
                const updatedMembers = holidaydata.filter((e) => e.id !== id);
                dispatch(setHoliday(updatedMembers));
                Swal.fire({
                    title: "Deleted!",
                    text: "Your file has been deleted.",
                    icon: "success",
                });
            }
        });
    };

    const filteredData = (Array.isArray(holidaydata) ? holidaydata : [])
        .filter((item) => item.name.toLowerCase().includes(searchTerm.toLowerCase()))
        .filter((item) => selectedFilter.length === 0 || selectedFilter.includes(item.status)); 

    const prevPage = () => {
        if (params.page > 1) {
            setParams((prev) => ({ ...prev, page: params.page - 1 }));
        }
    };

    const nextPage = () => {
        if (params.page < Math.ceil(holidaydata.length / params.limit)) {
            setParams((prev) => ({ ...prev, page: params.page + 1 }));
        }
    };

    const gotoPage = (num) => {
        setParams((prev) => ({ ...prev, page: num }));
    };

    const handleModalCreate = () => {
        setShow(!show);
    };

    const handleEditId = (id) => {
        setEditId(editId === id ? null : id);
    };

    return (
        <Layout>
            <Header title="ToDo | Fahmi"/>
            <div className='w-full min-h-[calc(90vh-3rem)]'>
                <h1 className='text-2xl lg:text-3xl font-bold pt-36 md:pt-44 text-center lg:text-start'>Holiday List</h1>
                <div className='flex justify-between items-center pt-10'>
                    <Searching
                        setParams={setParams}
                        searchTerm={searchTerm}
                        setSearchTerm={setSearchTerm}
                    />
                    <ButtonCreate handleModal={handleModalCreate} />
                </div>
                <TableData 
                    data={filteredData.slice((params.page - 1) * params.limit, params.page * params.limit)} 
                    handleEdit={handleEditId} 
                    handleDeleteId={handleDeleteId}
                    params={params} selectedFilter={selectedFilter} setSelectedFilter={setSelectedFilter}
                    holidaydata={holidaydata}
                />
                <Pagination page={params.page}
                    prevPage={prevPage}
                    nextPage={nextPage}
                    gotoPage={gotoPage} 
                    length={filteredData.length} 
                />
            </div>
            <ModalCreate location={location} show={show} setShow={setShow}/>
            <ModalEdit editId={editId} setEditId={setEditId} location={location}/>
        </Layout>
    );
}

export default TodoPage;

