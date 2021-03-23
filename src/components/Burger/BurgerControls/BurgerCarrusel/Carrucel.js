import React from 'react'

import classes from "./Carrucel.module.css"

const Carrucel = ({ children }) => {
    return (
        <div className={classes.Carrucel}>
            {children}
        </div>
    )
}

export default Carrucel
