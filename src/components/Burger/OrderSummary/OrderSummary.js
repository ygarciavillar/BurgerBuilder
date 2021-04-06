import React from 'react'

import Button from '../../UI/Button/Button'
import classes from './OrderSummary.module.css'

const OrderSummary = ({ order, price, modalClosed, purchaseHandler }) => {

    const ingredSummary = Object.keys(order).map(ing => {
        return (
            <li key={`${ing}`}>
                <span style={{ textTransform: 'capitalize' }}>{ing}</span>: {order[ing]}
            </li>
        )
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
                    <Button type='Success' handleClick={purchaseHandler}>
                        CONTINUE
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default OrderSummary
