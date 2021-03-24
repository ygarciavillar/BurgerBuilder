import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: [
            { id: 1, name: 'meat', src: 'images/ingredients/meat.png', count: 0, price: 3 },
            { id: 2, name: 'queso', src: 'images/ingredients/queso.png', count: 0, price: 1 },
            { id: 3, name: 'Cebolla', src: 'images/ingredients/cebolla.png', count: 0, price: 0.5 },
            { id: 4, name: 'bacon', src: 'images/ingredients/bacon.png', count: 0, price: 2 },
            { id: 5, name: 'Tomatoes', src: 'images/ingredients/tomates.png', count: 0, price: 0.3 },
            { id: 6, name: 'Chicken', src: 'images/ingredients/pollo.png', count: 0, price: 2 },
            { id: 7, name: 'Lechuga', src: 'images/ingredients/lechuga.png', count: 0, price: 0.5 },
            { id: 8, name: 'Pepinillos', src: 'images/ingredients/pepinillos.png', count: 0, price: 0.2 }
        ],
        list: [],
        IngredSelected: null
    }

    photoSelected = (id) => {
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

        this.setState(prev => ({
            list: [ing.name, ...prev.list],
            ingredients: update,
            IngredSelected: { ...ing, count: ing.count + 1 }

        }))
        console.log(this.state)
    }

    less = (ing) => {
        const update = this.state.ingredients.map(ingred => {
            if (ingred.id === ing.id) {
                return { ...ingred, count: ingred.count - 1 }
            }
            return ingred
        })

        const newList = [...this.state.list]
        const index = newList.indexOf(ing.name)
        newList.splice(index, 1);

        this.setState(prev => ({
            list: newList,
            ingredients: update,
            IngredSelected: { ...ing, count: ing.count - 1 }

        }))
        console.log(this.state)
    }

    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.list} />
                <BurgerControls
                    ingredients={this.state.ingredients}
                    onSelected={this.photoSelected}
                    ingSelected={this.state.IngredSelected}
                    onMore={this.more}
                    onLess={this.less} />
            </Fragment>
        )
    }
}

export default BurgerBuilder
