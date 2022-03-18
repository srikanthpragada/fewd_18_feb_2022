import { Component } from 'react'

export default class Discount extends Component {
    constructor(props) {
        super(props)
        this.state = { price: 0, discount: 0 }

        // this must be done 
        this.changePrice = this.changePrice.bind(this)
        this.calculate = this.calculate.bind(this)
    }

    calculate() {
        if (this.state.price < 10000)
            this.setState({ discount: this.state.price * 0.1 })
        else
            this.setState({ discount: this.state.price * 0.2 })
        console.log(this.state)
    }

    changePrice(event) {
        this.setState({ price: event.target.value })
        console.log(this.state)
    }

    render() {
        return (
            <>
                <h2>Discount Calculation</h2>
                Price : <input type="number" value={this.state.price} onChange={this.changePrice} />
                <button onClick={this.calculate}>Calculate</button>
                <h2>Discount = {this.state.discount} </h2>
            </>
        );
    }
}
