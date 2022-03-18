import { useState } from 'react'

export default function DiscountObject() {
    var [data, setData] = useState({ price: 0, discount: 0 })

    function calculate() {
        if (data.price < 10000)
            setData({ ...data, discount: data.price * 0.1 })
        else
            setData({ ...data, discount: data.price * 0.2 })
        console.log(data)
    }

    function changePrice(event) {
        setData({ ...data, price: event.target.value })
        console.log(data)
    }

    return (
        <>
            <h2>Discount Calculation</h2>
            Price : <input type="number" value={data.price} onChange={changePrice} />
            <button onClick={calculate}>Calculate</button>
            <h2>Discount = {data.discount} </h2>
        </>
    );
}
