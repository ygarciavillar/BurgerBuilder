import React from 'react'
import { createPortal } from 'react-dom'

import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'

const Modal = ({ children, isOpen, modalClosed }) => {
    if (!isOpen) return null

    return createPortal(
        <>
            <Backdrop isOpen={isOpen} clicked={modalClosed} />
            <div
                className={classes.Modal}>
                {children}
            </div >
        </>,
        document.getElementById('modal')

    )
}

export default Modal
