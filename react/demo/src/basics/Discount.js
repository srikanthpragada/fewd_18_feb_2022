import {useState} from 'react'

export default function Discount() {
    var [price, setPrice] = useState(1000)
    var discount = "";
 
    function calculate() {
        if (price < 10000)
            discount = price * 0.1
        else
            discount = price * 0.2
        
        console.log(discount)
    }

    function changePrice(event) {
        console.log(event)
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
