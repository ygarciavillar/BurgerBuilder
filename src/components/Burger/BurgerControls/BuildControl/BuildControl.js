import React from 'react'

import classes from './BuildControl.module.css'

const BurgerControl = ({ thumbnail, count }) => {

    return (
        <div className={classes.BuildControl}>
            <p className={classes.TextRed}>0</p>
            <div className={classes.Split}>
                <button className={classes.Less} > Less </button>
                <img src={`images/ingredients/${thumbnail}.png`}
                    alt={thumbnail}
                    className={classes.Thumbnail} />
                <button className={classes.More}> More </button>
            </div>
        </div>
    )
}

export default BurgerControl
