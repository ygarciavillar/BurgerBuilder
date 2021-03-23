import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import Carrucel from './BurgerCarrusel/Carrucel'
const BurgerControls = (props) => {

    return (
        <section style={{}}>
            <BuildControl thumbnail='bacon' />
            <Carrucel>
                <img src='images/ingredients/bacon.png' alt="bacon"></img>
                <img src='images/ingredients/queso.png' alt="bacon"></img>
                <img src='images/ingredients/cebolla.png' alt="bacon"></img>
                <img src='images/ingredients/meat.png' alt="bacon"></img>
            </Carrucel>
        </section>
    )
}

export default BurgerControls
