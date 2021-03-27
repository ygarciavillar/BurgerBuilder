import React from 'react'

import classes from './Backdrop.module.css'

const backdrop = ({ isOpen, clicked }) =>
    isOpen ?
        <div
            className={classes.Backdrop}
            onClick={clicked}
        ></div>
        : null


export default backdrop
