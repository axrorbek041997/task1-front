import Form from 'react-bootstrap/Form';

const BaseSelect = ({ size = 'lg', select, options = [] }) => {


    return (
        <Form.Select onChange={(e) => select(e.target.value)} size={size} >
            <option>Wählen</option>
            {
                options.map((item, i) => {
                    return (
                        <option key={item + i} >{item}</option>
                    )
                })
            }
        </Form.Select>
    )
}

export default BaseSelect;