import {useState} from 'react'

export default function Discount() {
    var [price, setPrice] = useState(0)
    var [discount, setDiscount] = useState(0)
  
    function calculate() {
        if (price < 10000)
            setDiscount(price * 0.1)
        else
            setDiscount(price * 0.2)
    }

    function changePrice(event) {
        //console.log(event)
        setPrice(event.target.value)
    }

    return (
        <>
            <h2>Discount Calculation</h2>
            Price : <input type="number" value={price}  onChange={changePrice} />
            <button onClick={calculate}>Calculate</button>
            <h2>Discount = {discount} </h2>
        </>
    );
}
 