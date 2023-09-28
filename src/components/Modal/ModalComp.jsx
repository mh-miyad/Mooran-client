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
                <Modal.Header> <p className='md:text-2xl lg:text-4xl font-extrabold  uppercase text-pink-500 drop-shadow-xl  tracking-wider mx-10'>
                    Cart   Items </p></Modal.Header>
                <Modal.Body className=''>
                    <CartDetails setOpenModal={setOpenModal} />
                </Modal.Body>

            </Modal>


        </div>
    )
}

export default ModalComp