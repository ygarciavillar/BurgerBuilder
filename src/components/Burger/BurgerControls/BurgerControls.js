import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import Carousel from './BurgerCarousel/Carousel'
const BurgerControls = ({ ingredients, onSelected, ingSelected, onMore, onLess }) => {

    const carouselItems = ingredients.map((ing) => {
        return <div
            key={`${ing.id}${ing.name}`}
            onClick={() => onSelected(ing.id)}
        >
            <img src={ing.src} alt={ing.name}></img>
        </div>
    })

    return (
        <section style={{}}>
            <BuildControl thumbnail={ingSelected} onMore={onMore} onLess={onLess} />
            <Carousel show={4} infiniteLoop={true}>
                {carouselItems}
            </Carousel>
        </section>
    )
}

export default BurgerControls
