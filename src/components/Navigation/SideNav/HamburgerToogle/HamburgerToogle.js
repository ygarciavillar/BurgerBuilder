import React from 'react'
import { createPortal } from 'react-dom'

import SideNav from '../../SideNav/SideNav'
import classes from './HamburgerToogle.module.css'
import useToggler from '../../../../helper/useToggler'

const HamburgerToogle = () => {
    const [open, toggle] = useToggler(false)

    let attachedClasses = [classes.NavToogle]
    if (open) {
        attachedClasses = [classes.NavToogle, classes.Open]
    }
    return createPortal(
        <>
            <div
                className={attachedClasses.join(' ')}
                onClick={toggle}>
                <div />
                <div />
                <div />
            </div>
            <SideNav open={open} />
        </>, document.getElementById('modal')

    )
}

export default HamburgerToogle
