import { useState, useEffect } from 'react';
import { Table, Form } from 'react-bootstrap';
import BaseSelect from '../BaseSelect/BaseSelect';
import { machine, statusData } from '../../data/users'
import { fetchGetMa, fetchSearch } from '../../api/index'
import BaseTable from '../BaseTable/BaseTable';


import './BaseSearchPage.css'

// const shiftFilter = ['F1', 'S2', 'N3']
const statusFilter = statusData.map(item => item.name)
const machineFilter = machine.map((item, i) => item.name)

function BaseSearchPage({ darkMode, setTableData, setDatLength }) {

    const [maFilter, setMaFilter] = useState([])
    const [searchData, setSearchData] = useState([])
    const [fromDate, setFromDate] = useState('')
    const [toDate, setToDate] = useState('')
    // const [timeFormatSelect, setTimeFormatSelect] = useState('')
    const [statusSelect, setStatusSelect] = useState('')
    const [maSelect, setMaSelect] = useState('')
    const [machineSelect, setMachineSelect] = useState('')

    const handleSelectStatus = (e) => (e !== 'Wählen' ? setStatusSelect(e) : setStatusSelect(''))

    const handleSelectMa = (e) => (e !== 'Wählen' ? setMaSelect(e) : setMaSelect(''))

    const handleSelectMachine = (e) => (e !== 'Wählen' ? setMachineSelect(e) : setMachineSelect(''))

    // if(action === 'schicht') setTimeFormatSelect(e)


    const handleFromDate = (e) => {
        setFromDate(e.target.value)
    }
    const handleToDate = (e) => {
        setToDate(e.target.value)
    }

    const handleSubmit = () => {
        if (fromDate || toDate || statusSelect || maSelect || machineSelect) {
            fetchSearch(fromDate, toDate, statusSelect, maSelect, machineSelect).then(res => {
                setSearchData(res?.data?.items)
            })
        } else {
            setSearchData([])
        }
    }

    useEffect(() => {
        fetchGetMa().then(res => {
            setMaFilter(res.data.ma)
        })
    }, [])

    return (
        <div>
            <Table className='my-4' striped bordered>
                <tbody className={`${darkMode ? 'search_page-dark' : 'search_page'}`} >
                    <tr>
                        <td>
                            <div className='d-flex align-items-center date_picker' >
                                <p className={`fs-5 my-0 px-2 py-1 search_page-text fw-bold bg-transparent text-${darkMode ? 'white' : ''}`} >Datum von:</p>
                                <Form.Control onChange={(e) => handleFromDate(e)} size='sm' className='ms-2 w-50' type="date" />
                            </div>
                        </td>
                        <td>
                            <div className='d-flex align-items-center date_picker' >
                                <p className={`fs-5 my-0 px-2 py-1 search_page-text fw-bold bg-transparent text-${darkMode ? 'white' : ''}`} >Datum bis:</p>
                                <Form.Control onChange={(e) => handleToDate(e)} size='sm' className='ms-2 w-50' type="date" />
                            </div>
                        </td>
                    </tr>
                    <tr>
                        {/* <td className='search_page-text' >
                            <div className='d-flex align-items-center' >
                                <p className={`my-0 me-2 px-2 py-1 fw-bold text-${darkMode ? 'white' : ''}`} >Schicht:</p>
                                <BaseSelect select={(e) => handleSelect(e, 'schicht')} size='sm' options={shiftFilter} />
                            </div>
                        </td> */}
                        <td className='search_page-text' >
                            <div className='d-flex align-items-center' >
                                <p className={`fs-5 my-0 me-2 px-2 py-1 fw-bold text-${darkMode ? 'white' : ''}`} >Status:</p>
                                <BaseSelect select={(e) => handleSelectStatus(e)} size='sm' options={statusFilter} />
                            </div>
                        </td>
                        <td className='search_page-text'>
                            <div className='d-flex align-items-center' >
                                <p className={`fs-5 my-0 me-2 px-2 py-1 fw-bold text-${darkMode ? 'white' : ''}`} >MA:</p>
                                <BaseSelect select={(e) => handleSelectMa(e)} size='sm' options={maFilter} />
                            </div>
                        </td>
                        <td className='search_page-text'>
                            <div className='d-flex align-items-center' >
                                <p className={`fs-5 my-0 me-2 px-2 py-1 fw-bold text-${darkMode ? 'white' : ''}`} >Maschine:</p>
                                <BaseSelect select={(e) => handleSelectMachine(e)} size='sm' options={machineFilter} />
                            </div>
                        </td>
                    </tr>
                </tbody>
            </Table>
            {
                searchData.length > 0 ? <BaseTable darkMode={darkMode} setDatLength={setDatLength} setTableData={setTableData} data={searchData} setSearchData={setSearchData} searchFetch={[fromDate, toDate, statusSelect, maSelect, machineSelect]} /> : null
            }
            <div className='d-flex justify-content-end' >
                <button onClick={handleSubmit} className={darkMode ? 'search_btn-dark' : 'search_btn'} disabled={!(fromDate || toDate || statusSelect || maSelect || machineSelect)} >Suchen..</button>
            </div>
        </div>
    );
}

export default BaseSearchPage;