
import Multiselect from 'multiselect-react-dropdown';

const BaseMultiSelect = () => {

    const options = [{ name: 'Option 1', id: 1 }, { name: 'Option 2️', id: 2 }]

    return (
        <>
            <Multiselect
                options={options} // Options to display in the dropdown
                selectedValues='' // Preselected value to persist in dropdown
                onSelect='' // Function will trigger on select event
                onRemove='' // Function will trigger on remove event
                displayValue="name" // Property name to display in the dropdown options
            />
        </>
    )
}
export default BaseMultiSelect