import React from 'react'

import useWindowSize from '../../../helper/useWindowSize'
import BuildControl from './BuildControl/BuildControl'
import Carousel from '../../UI/Carousel/Carousel'
import classes from './BuildControls.module.css'

const BuildControls = (props) => {

    const [width] = useWindowSize()

    const itemToShow = Math.round((width) * 0.7 / 180)

    const { ingredients, onSelected, ingSelected, ingAdded, onMore, onLess,
        purchasable, totalPrice, onPurchase } = props

    const carouselItems = ingredients.map((ing) => {
        return <div
            key={`${ing.id}${ing.name}`}
            onClick={() => onSelected(ing.id)}
        >
            <img src={ing.src} alt={ing.name}></img>
        </div>
    })

    return (
        < section >
            <div className={classes.BuildControls}>
                <BuildControl
                    thumbnail={ingSelected}
                    ingAdded={ingAdded}
                    onMore={onMore}
                    onLess={onLess}
                    totalPrice={totalPrice}

                />
                <Carousel show={itemToShow} infiniteLoop={true}>
                    {carouselItems}
                </Carousel>

                <button
                    className={classes.OrderButton}
                    disabled={!purchasable}
                    onClick={() => onPurchase()}
                >
                    ORDER NOW
                </button>
            </div>
        </section >
    )
}

export default BuildControls
