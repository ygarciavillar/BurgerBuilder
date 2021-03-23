import React from 'react'
import PropTypes from 'prop-types'


import classes from './BurgerIngredient.module.css'


const BurgerIngredient = ({ type, cls }) => {
    let style = null
    if (cls == 20) {
        style = classes.Images20
    }
    else if (cls == 2) {
        style = classes.Images2
    }


    let ingredient = <img
        src={`images/ingredients/${type}.png`}
        alt=''
        className={style} />

    return ingredient

}

BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
}

export default BurgerIngredient
