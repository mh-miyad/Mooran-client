import React from 'react'

import { Button, Modal } from 'flowbite-react';
import CartDetails from './CartDetails';
const ModalComp = ({ openModal, setOpenModal }) => {
    return (
        <div>
            <Modal
                show={openModal}
                position={"top-right"}
                onClose={() => setOpenModal(false)}
            >
                <Modal.Header>Small modal</Modal.Header>
                <Modal.Body>
                    <CartDetails />
                </Modal.Body>
                <Modal.Footer>

                    <Button color="failure" onClick={() => setOpenModal(false)}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>


        </div>
    )
}

export default ModalComp