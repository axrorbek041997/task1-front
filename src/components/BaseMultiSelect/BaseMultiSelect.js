
import Multiselect from 'multiselect-react-dropdown';
import "./BaseMultiSelect.css"

const BaseMultiSelect = ({ single, select, placeholder, value, options }) => {


    // const options = [
    //     { name: 'Option 1', id: 1 },
    //     { name: 'Option 2️', id: 2 },
    //     { name: 'Option 3', id: 3 },
    //     { name: 'Option 4', id: 4 },
    //     { name: 'Option 5', id: 5 },
    //     { name: 'Option 6', id: 6 },
    //     { name: 'Option 7', id: 7 },
    //     { name: 'Option 8', id: 8 },
    //     { name: 'Option 9', id: 9 },
    //     { name: 'Option 10', id: 10 },
    //     { name: 'Option 11', id: 11 },
    //     { name: 'Option 12️', id: 12 },
    //     { name: 'Option 13', id: 13 },
    //     { name: 'Option 14', id: 14 },
    //     { name: 'Option 15', id: 15 },
    //     { name: 'Option 16', id: 16 },
    //     { name: 'Option 17', id: 17 },
    //     { name: 'Option 18', id: 18 },
    //     { name: 'Option 19', id: 19 },
    //     { name: 'Option 20', id: 20 }
    // ]


    return (
        <>
            <Multiselect
                className='select_cus'
                style={{ borderRadius: '50px' }}
                singleSelect={single}
                options={options}
                selectedValues={value}
                onSelect={select}
                displayValue="name"
                placeholder={placeholder}
                closeIcon='cancel'
            />
        </>
    )
}
export default BaseMultiSelect