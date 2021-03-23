import React, { Component, Fragment } from 'react'
import Burger from '../../components/Burger/Burger'
import BurgerControls from '../../components/Burger/BurgerControls/BurgerControls'

class BurgerBuilder extends Component {

    state = {
        ingredients: []
    }
    render() {
        return (
            <Fragment>
                <Burger ingredients={this.state.ingredients} />
                <BurgerControls />
            </Fragment>
        )
    }
}

export default BurgerBuilder
