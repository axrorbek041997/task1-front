import { Modal, Button, Form } from 'react-bootstrap';
import { Fragment } from 'react';
import Table from 'react-bootstrap/Table';
import './BaseTable.css'
import { useState } from 'react';


const BaseTable = ({ data, darkMode }) => {
    const [iconPosDatum, setIconPosDatum] = useState(true)
    const [iconPosUhrzeit, setIconPosUhrzeit] = useState(true)
    const [iconPosSchicht, setIconPosSchicht] = useState(true)
    const [iconPosStatus, setIconPosStatus] = useState(true)
    const [iconPosMa, setIconPosMa] = useState(true)
    const [iconPosMashine, setIconPosMashine] = useState(true)
    const [show, setShow] = useState(false);
    const [noteComment, setNoteComment] = useState('')
    const [noteCommentSave, setNoteCommentSave] = useState('')

    const statusColor = (status) => {
        if (status === 'Info') {
            return ''
        } else if (status === 'Anweisung') {
            return 'warning'
        } else {
            return 'danger'
        }

    }

    const handelSort = (str) => {
        if (str === 'datum') setIconPosDatum(!iconPosDatum)
        if (str === 'uhrzeit') setIconPosUhrzeit(!iconPosUhrzeit)
        if (str === 'schicht') setIconPosSchicht(!iconPosSchicht)
        if (str === 'status') setIconPosStatus(!iconPosStatus)
        if (str === 'ma') setIconPosMa(!iconPosMa)
        if (str === 'mashine') setIconPosMashine(!iconPosMashine)


        // console.log(str)
    }

    const handleClose = (str) => {
        setShow(false)
        if (str === 'cancel') {
            setNoteCommentSave('')
        } else {
            setNoteCommentSave(noteComment)
        }
    };
    const handleShow = () => setShow(true);
    return (
        <>
            <Table variant={`${darkMode ? 'dark' : 'with'}`} className='my-3 border border-white' responsive="sm" striped bordered hover>
                <thead className='bg_table_header text-white' >
                    <tr>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Datum</span>
                                <span role="button" onClick={() => handelSort('datum')} className={`d-flex align-items-center ${iconPosDatum ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' style={{ widows: "100%" }} >
                                <span>Uhrzeit</span>
                                <span role="button" onClick={() => handelSort('uhrzeit')} className={`d-flex align-items-center ${iconPosUhrzeit ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Schicht</span>
                                <span role="button" onClick={() => handelSort('schicht')} className={`d-flex align-items-center ${iconPosSchicht ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Status</span>
                                <span role="button" onClick={() => handelSort('status')} className={`d-flex align-items-center ${iconPosStatus ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>MA</span>
                                <span role="button" onClick={() => handelSort('ma')} className={`d-flex align-items-center ${iconPosMa ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th>
                            <div className='d-flex align-items-center justify-content-between' >
                                <span>Maschine</span>
                                <span role="button" onClick={() => handelSort('mashine')} className={`d-flex align-items-center ${iconPosMashine ? 'icon_position' : ''}`} >
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-triangle-fill" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M7.022 1.566a1.13 1.13 0 0 1 1.96 0l6.857 11.667c.457.778-.092 1.767-.98 1.767H1.144c-.889 0-1.437-.99-.98-1.767L7.022 1.566z" />
                                    </svg>
                                </span>
                            </div>
                        </th>
                        <th className='width-not' >Notiz</th>
                        <th>Comment</th>
                        <th>Bild</th>
                    </tr>
                </thead>
                <tbody className='bg_tbody'>
                    {
                        data.map((item, i) => {
                            return item !== undefined ? (
                                <Fragment key={item?.id + i}>
                                    <tr>
                                        <td colSpan={9} className='bg_space' ></td>
                                    </tr>
                                    <tr className='bg_table_body' >
                                        <td>{item?.id}</td>
                                        <td>Mark</td>
                                        <td>Otto</td>
                                        <td className={`bg-${statusColor(item?.status)}`} >@mdo</td>
                                        <td>1</td>
                                        <td>Mark</td>
                                        <td className='width-not' >{item?.description + noteCommentSave}</td>
                                        <td>
                                            <span onClick={handleShow} className='text-white cursor_pointer' >
                                                <svg width="30" height="30" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                                    <path d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16V352c0 8.8 7.2 16 16 16h96zm48 124l-.2 .2-5.1 3.8-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3V474.7v-6.4V468v-4V416H112 64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0H448c35.3 0 64 28.7 64 64V352c0 35.3-28.7 64-64 64H309.3L208 492z" />
                                                </svg>
                                            </span>
                                        </td>
                                        <td className='' >
                                            <div className='d-flex justify-content-center align-items-center' >
                                                {item?.img ? <img width={20} height={20} src={item?.img} alt='avatar' /> : '-'}
                                            </div>
                                        </td>
                                    </tr>
                                </Fragment>
                            ) : null
                        })
                    }
                </tbody>
            </Table>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Notiz</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Control onChange={(e) => setNoteComment(e.target.value)} value={noteComment} as="textarea" rows={3} />
                    </Form.Group>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => handleClose('cancel')}>
                        Abbruch
                    </Button>
                    <Button variant="primary" onClick={() => handleClose('save')}>
                        Speichern
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default BaseTable;