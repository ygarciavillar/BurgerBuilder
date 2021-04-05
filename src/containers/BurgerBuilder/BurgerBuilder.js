import React, { Component, Fragment } from 'react'

import Burger from '../../components/Burger/Burger'
import BuildControls from '../../components/Burger/BuildControls/BuildControls'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

import Modal from '../../components/UI/Modal/Modal'
import Spinner from '../../components/UI/Spinner/Spinner'

import axios from '../../axios-orders'
import { withAxiosErrorHandler } from '../../hoc/withAxiosErrorHandler'

class BurgerBuilder extends Component {
    state = {
        ingredients: null,
        list: [],
        IngredSelected: null,
        totalPrice: 4,
        purchasable: false,
        showModal: false,
        loading: false,
        error: null
    }

    componentDidMount() {
        axios.get('/ingredients.json')
            .then(resp => this.setState(
                { ingredients: Object.values(resp.data) }))
            .catch(error => this.setState({ error: error }))
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
        this.setState(prev => ({
            showModal: !prev.showModal
        }))
    }

    purchaseHandler = () => {
        this.setState({ loading: true })
        const ingred = this.state.ingredients.filter((ing) => ing.count > 0)
        const order = {
            ingredients: ingred,
            price: this.state.totalPrice,
            customer: {
                name: 'Yoandri Garcia',
                address: {
                    street: "Avellaneda 282",
                    zipCode: 33132,
                    country: 'United State',
                },
                email: 'test@exmaple.com',
                deliveryMethod: 'fastest',
            }
        }
        axios.post('/order.json', order)
            .then(response => {
                this.setState({ loading: false, showModal: false, list: [] })
            })
            .catch(error => {
                this.setState({ loading: false, showModal: false })
            })

    }

    render() {

        let burger = this.state.error ?
            <p style={{ color: 'red', fontSize: '1.2rem', textAlign: 'center' }}>
                🥺 Ingredients can't be loaded! Please check your Internet connections..</p>
            : <Spinner />
        let modalContent = null

        if (this.state.ingredients) {
            let ingSelected = this.state.IngredSelected
            if (!ingSelected) {
                ingSelected = this.state.ingredients[0]
            }

            const price = new Intl.NumberFormat('en-US',
                { style: 'currency', currency: 'USD' }
            ).format(this.state.totalPrice);

            burger = (
                <Fragment>
                    <Burger ingredients={this.state.list} />
                    <BuildControls
                        ingredients={this.state.ingredients}
                        onSelected={this.photoSelected}
                        ingSelected={ingSelected}
                        onMore={this.more}
                        onLess={this.less}
                        purchasable={this.state.purchasable}
                        totalPrice={price}
                        onPurchase={this.modalHandler} />
                </Fragment>
            )
            modalContent = <OrderSummary
                ingredients={this.state.ingredients}
                price={price}
                modalClosed={this.modalHandler}
                purchaseHandler={this.purchaseHandler}
            />

        }

        if (this.state.loading) {
            modalContent = <Spinner />
        }



        return (
            <Fragment>
                <Modal isOpen={this.state.showModal} modalClosed={this.modalHandler}>
                    {modalContent}
                </Modal>
                {burger}
            </Fragment>
        )
    }
}

export default withAxiosErrorHandler(BurgerBuilder, axios)
