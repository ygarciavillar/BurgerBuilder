import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'
import Modal from '../../components/UI/Modal/Modal'

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            { id: 1, name: 'meat', src: 'images/ingredients/meat.png', count: 0, price: 1.5 },
            { id: 2, name: 'cheese', src: 'images/ingredients/cheese.png', count: 0, price: 0.5 },
            { id: 3, name: 'onion', src: 'images/ingredients/onion.png', count: 0, price: 0.5 },
            { id: 4, name: 'bacon', src: 'images/ingredients/bacon.png', count: 0, price: 0.7 },
            { id: 5, name: 'tomatoes', src: 'images/ingredients/tomatoes.png', count: 0, price: 0.3 },
            { id: 6, name: 'chicken', src: 'images/ingredients/chicken.png', count: 0, price: 1.3 },
            { id: 7, name: 'salad', src: 'images/ingredients/salad.png', count: 0, price: 0.3 },
            { id: 8, name: 'pickle', src: 'images/ingredients/pickle.png', count: 0, price: 0.2 }
        ],
        list: [],
        IngredSelected: { id: 1, name: 'meat', src: 'images/ingredients/meat.png', count: 0, price: 1.5 },
        totalPrice: 4,
        purchasable: false,
        showModal: false,
    }

    photoSelected = id => {
        const selected = this.state.ingredients.find(ing => ing.id === id)
        this.setState({
            IngredSelected: selected
        })
    }

    more = (ing) => {
        const update = this.state.ingredients.map(ingred => {
            if (ingred.id === ing.id) {
                return { ...ingred, count: ingred.count + 1 }
            }
            return ingred
        })

        const newPrice = this.state.totalPrice + ing.price
        const newList = [ing.name, ...this.state.list]

        this.setState({
            list: newList,
            ingredients: update,
            IngredSelected: { ...ing, count: ing.count + 1 },
            totalPrice: newPrice,
            purchasable: newList.length > 0
        })
    }

    less = ing => {
        const update = this.state.ingredients.map(ingred => {
            if (ingred.id === ing.id) {
                return { ...ingred, count: ingred.count - 1 }
            }
            return ingred
        })

        const newList = [...this.state.list]
        const index = newList.indexOf(ing.name)
        newList.splice(index, 1);

        const newPrice = this.state.totalPrice - ing.price

        this.setState({
            list: newList,
            ingredients: update,
            IngredSelected: { ...ing, count: ing.count - 1 },
            totalPrice: newPrice,
            purchasable: newList.length > 0
        })
    }

    modalHandler = () => {
        this.setState((prev) => ({
            showModal: !prev.showModal
        }))
    }

    purchaseHandler = () => {
        /*Method for handling the button continue in Modal summary */
    }

    render() {

        const price = new Intl.NumberFormat('en-US',
            { style: 'currency', currency: 'USD' }
        ).format(this.state.totalPrice);

        return (
            <Fragment>
                <Modal isOpen={this.state.showModal} modalClosed={this.modalHandler}>
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={price}
                        modalClosed={this.modalHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.list} />
                <BuildControls
                    ingredients={this.state.ingredients}
                    onSelected={this.photoSelected}
                    ingSelected={this.state.IngredSelected}
                    onMore={this.more}
                    onLess={this.less}
                    purchasable={this.state.purchasable}
                    totalPrice={price}
                    onPurchase={this.modalHandler} />
            </Fragment>
        )
    }
}

export default BurgerBuilder
