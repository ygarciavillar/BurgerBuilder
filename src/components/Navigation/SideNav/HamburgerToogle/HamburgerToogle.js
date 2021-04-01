import React, { useState } from 'react'
import { createPortal } from 'react-dom'

import SideNav from '../../SideNav/SideNav'
import classes from './HamburgerToogle.module.css'

const HamburgerToogle = () => {
    const [open, setOpen] = useState(false)

    let attachedClasses = [classes.NavToogle]
    if (open) {
        attachedClasses = [classes.NavToogle, classes.Open]
    }
    return createPortal(
        <>
            <div
                className={attachedClasses.join(' ')}
                onClick={() => setOpen(!open)}>
                <div />
                <div />
                <div />
            </div>
            <SideNav open={open} />
        </>, document.getElementById('modal')

    )
}

export default HamburgerToogle
