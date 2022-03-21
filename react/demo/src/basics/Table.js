import React from 'react'
import PropTypes from 'prop-types'

export default function Table(props) {
    var result = []

    let length = props.length ? props.length : 10;
    let num = props.number

    for (let i = 1; i <= length; i++)
        result.push(num * i)
 

    return (
        <>
            <h2>Table</h2>
            <table className="table table-bordered  text-center">
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Multiplier</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        result.map((v, idx) => <tr key={idx}><td>{num}</td><td>{idx + 1}</td><td>{v}</td></tr>)
                    }
                </tbody>
            </table>
        </>
    )
}


Table.propTypes = {
    number: PropTypes.number,
    length : PropTypes.number
}