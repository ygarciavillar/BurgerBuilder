import React from 'react'

import classes from './BuildControl.module.css'

const BurgerControl = ({ thumbnail, onMore, onLess, total }) => {

    const price = new Intl.NumberFormat('en-US',
        { style: 'currency', currency: 'USD' }
    ).format(total);

    return (
        <div className={classes.BuildControl}>
            <p className={classes.TextGreen}>Current Price: <strong>{price}</strong></p>
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
