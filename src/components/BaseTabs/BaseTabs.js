import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import BaseTable from '../BaseTable/BaseTable';
import BasePagination from '../BasePagination/BasePagination';
import BaseFormCreate from '../BaseCreatetable/BaseCreatetable';
import BaseSearchPage from '../BaseSearchPage/BaseSearchPage';
import { getUsers, getLength } from '../../data/users'
import './BaseTabs.css'

function BaseTabs() {
    const [key, setKey] = useState('neu');

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(5)

    let totalPage = Math.ceil(getLength() / limit)

    const handlePageChange = (value) => {
        if (value === "... ") {
            setPage(1)
        } else if (value === "previous") {
            if (page !== 1) setPage(page - 1)
        } else if (value === 'next') {
            if (page !== totalPage) setPage(page + 1)
        } else if (value === " ...") {
            setPage(totalPage)
        } else {
            setPage(value)
        }
    }

    return (

        <div className='position-relative pe-3' >
            <Tabs
                id="controlled-tab-example"
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="bg_tab_header"
            >
                <Tab tabClassName='text-dark border-0 rounded-0' eventKey="neu" title="+ NEU">
                    <BaseFormCreate />
                </Tab>
                <Tab tabClassName='text-dark border-0 rounded-0' eventKey="ubersicht" title="Übersicht">
                    <BaseTable data={getUsers(page, limit)} />
                    <div className='d-flex justify-content-center paginationTable'>
                        <BasePagination totalPage={totalPage} page={page} limit={limit} siblings={1} onPageChange={handlePageChange} />
                    </div>
                </Tab>
                <Tab tabClassName='text-dark border-0 rounded-0' eventKey="suche" title="Suche">
                    <BaseSearchPage />
                </Tab>
            </Tabs>
            <span className='position-absolute top-0 end-0 translate-middle-x d-flex align-items-center mt-2' >Date // Time</span>
        </div>
    );
}

export default BaseTabs;