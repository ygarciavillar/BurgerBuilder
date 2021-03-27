import React from 'react'

import classes from './BuildControl.module.css'

const BurgerControl = ({ thumbnail, onMore, onLess, totalPrice }) => {



    return (
        <div className={classes.BuildControl}>
            <p className={classes.TextGreen}>
                Current Price: <strong>{totalPrice}</strong>
            </p>
            <div className={classes.Split}>
                <button
                    className={classes.Less}
                    disabled={thumbnail.count <= 0}
                    onClick={() => onLess(thumbnail)}
                > -
                   </button>


                {thumbnail &&
                    <img src={thumbnail.src}
                        alt={thumbnail.name}
                        className={classes.Thumbnail} />

                }
                <button
                    className={classes.More}
                    onClick={() => onMore(thumbnail)}>
                    + </button>
            </div>
        </div>
    )
}

export default BurgerControl
