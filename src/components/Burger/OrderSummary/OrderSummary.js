import React from 'react'

import Button from '../../UI/Button/Button'
import classes from './OrderSummary.module.css'

const OrderSummary = ({ ingredients, price, modalClosed }) => {

    const ingredSummary = ingredients.map(ing => {
        if (ing.count > 0) {
            return (
                <li key={`${ing.key}${ing.name}`}>
                    <span style={{ textTransform: 'capitalize' }}>{ing.name}</span>: {ing.count}
                </li>
            )
        }
        else {
            return null
        }
    })

    return (
        <div className={classes.Summary}>
            <div className={[classes.Header, 'flow-content'].join(' ')} >
                <h3 className={classes.Title}>Your Order</h3>
                <p>A delicious burger with the following ingredients:</p>
            </div>
            <div className={classes.Body}>
                <ul>
                    {ingredSummary}
                </ul>
                <p><strong>Total Price: {price}</strong></p>
            </div>
            <div className={classes.Footer}>
                <p>Continue to Checkout ?</p>
                <div className={classes.Buttons}>
                    <Button type='Danger' handleClick={modalClosed}>
                        CANCEL
                    </Button>
                    <Button type='Success' handleClick={() => alert("Sending Order..")}>
                        CONTINUE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
