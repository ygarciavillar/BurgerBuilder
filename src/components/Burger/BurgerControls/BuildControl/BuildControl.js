import React from 'react'

import classes from './BuildControl.module.css'

const BurgerControl = ({ thumbnail, onMore, onLess }) => {

    return (
        <div className={classes.BuildControl}>

            {thumbnail &&
                <p
                    className={thumbnail.count > 0 ? classes.TextGreen : classes.TextRed}>
                    {thumbnail.count}
                </p>}

            <div className={classes.Split}>
                {(thumbnail && thumbnail.count > 0) &&
                    <button
                        className={classes.Less}
                        onClick={() => onLess(thumbnail)}
                    > Less
                   </button>
                }


                {thumbnail &&
                    <img src={thumbnail.src}
                        alt={thumbnail.name}
                        className={classes.Thumbnail} />

                }
                <button
                    className={classes.More}
                    onClick={() => onMore(thumbnail)}>
                    More </button>
            </div>
        </div>
    )
}

export default BurgerControl
