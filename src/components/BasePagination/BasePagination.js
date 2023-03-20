import Pagination from 'react-bootstrap/Pagination';
import { paginationRange } from '../../utils/index';


function BasePagination(props) {

    // const handleNext = () => {

    // }
    let pageArray = paginationRange(props.totalPage, props.page, props.limit, props.siblings)

    return (
        <Pagination size='lg' >
            <Pagination.Prev onClick={() => props.onPageChange('previous')} >Previous</Pagination.Prev>
            {pageArray.map((value, i) => {
                return value === props.page ?
                    <Pagination.Item onClick={() => props.onPageChange(value)} key={value + i} active >{value}</Pagination.Item>
                    :
                    <Pagination.Item onClick={() => props.onPageChange(value)} key={value + i} >{value}</Pagination.Item>
            })}
            <Pagination.Next onClick={() => props.onPageChange('next')} >Next</Pagination.Next>
        </Pagination>
    );
}

export default BasePagination;