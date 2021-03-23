import React from 'react'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.module.css'

const Burger = ({ ingredients }) => {

    let ingredList = null
    let ingredLength = ingredients.length

    if (ingredients.length > 0) {
        ingredList = ingredients.reverse().map((ing, i) => {
            console.log(ing)
            return <BurgerIngredient
                key={`${ing}${i}`}
                type={ing}
                cls={`${ingredLength}`} />
        })
    }
    else {
        ingredList = <p className={classes.BurgerText}>Please start adding ingredients!</p>
    }


    return (
        <section>
            <div className={classes.Burger}>
                <BurgerIngredient type='breadTop' cls="2" />
                {ingredList}
                <BurgerIngredient type='breadBottom' cls="2" />
            </div>
        </section>
    )
}

export default Burger
