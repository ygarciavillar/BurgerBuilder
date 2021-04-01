import React from 'react'
import { createPortal } from 'react-dom'

import Backdrop from '../Backdrop/Backdrop'
import classes from './Modal.module.css'

class Modal extends React.Component {

    shouldComponentUpdate(prevProp, prevState) {
        return prevProp.isOpen !== this.props.isOpen
    }

    render() {
        if (!this.props.isOpen) return null

        return createPortal(
            <>
                <Backdrop isOpen={this.props.isOpen} clicked={this.props.modalClosed} />
                <div
                    className={classes.Modal}>
                    {this.props.children}
                </div >
            </>,
            document.getElementById('modal')

        )
    }
}

/*
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

*/

export default Modal
