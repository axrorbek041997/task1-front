import Form from 'react-bootstrap/Form';

const BaseFileUpload = ({ file, value }) => {

    return (
        <Form.Group controlId="formFileLg" className="mb-3">
            <Form.Control value={value} onChange={(e) => file(e.target.files[0])} type="file" size="lg" placeholder='File upload' />
        </Form.Group>
    )
}

export default BaseFileUpload