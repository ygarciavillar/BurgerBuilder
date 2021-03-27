import React from 'react'
import classes from './Button.module.css'

const button = ({ children, type, handleClick }) => {
    return (
        <button
            className={[classes.Button, classes[type]].join(' ')}
            onClick={handleClick}>
            {children}
        </button>
    )
}

export default button
