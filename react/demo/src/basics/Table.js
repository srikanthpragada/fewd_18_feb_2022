import React from 'react'

export default function Table(props) {
    var result = []

    let length = props.length ? props.length : 10;
    let num = parseInt(props.number)

    for (let i = 1; i <= length; i++)
        result.push(num * i)

    //console.log(result)

    // function generateTable(number) {
    //     let num = parseInt(number)
    //     var output = ""
    //     for (let i = 1; i <= 10; i++)
    //         output += `<tr><td>${num}</td><td>${i}</td><td>${i * num}</td></tr>`;

    //     return output
    // }

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
                        result.map((v, idx) => <tr><td>{num}</td><td>{idx + 1}</td><td>{v}</td></tr>)
                    }
                </tbody>
            </table>
        </>
    )
}
