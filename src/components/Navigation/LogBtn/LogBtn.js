import React from 'react'

import classes from './LogBtn.module.css'
const LogBtn = ({ children }) => {
    return (
        <button className={classes.LogBtn}>
            {children}
        </button>
    )
}

export default LogBtn
