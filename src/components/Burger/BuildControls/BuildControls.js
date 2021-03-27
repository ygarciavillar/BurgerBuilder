import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import Carousel from '../../UI/Carousel/Carousel'
import classes from './BuildControls.module.css'

const BuildControls = (props) => {

    const { ingredients, onSelected, ingSelected, onMore, onLess,
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
        <section>
            <div className={classes.BuildControls}>
                <BuildControl
                    thumbnail={ingSelected}
                    onMore={onMore}
                    onLess={onLess}
                    totalPrice={totalPrice}
                />
                <Carousel show={4} infiniteLoop={true}>
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
        </section>
    )
}

export default BuildControls
