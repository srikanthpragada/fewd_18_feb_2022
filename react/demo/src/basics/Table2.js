import React,{ useState } from 'react'

export default function TableDOM() {
    // Access a DOM element 
    const results = React.createRef();
    const resultTable = React.createRef();
    // State
    var [number, setNumber] = useState(10);
 
    function changeNumber(event) {
        setNumber(event.target.value)
    }
   
    function showTable() {
        var output = "" 
        for (let i = 1; i <= 10; i++) {
            output += `<tr><td>${number}</td><td>${i}</td><td>${i * number}</td></tr>`;
        }
        results.current.innerHTML = output;
        resultTable.current.style.visibility = 'visible';
    }
 
    return (
        <>
            <h2>Table</h2>
            <input type="number" value={number} onChange={changeNumber} />
            <button onClick={showTable}>Show Table</button>
            <p></p>
            <table ref={resultTable} className="table table-bordered  text-center"
                   style={{ visibility: 'hidden' }}>
                <thead>
                    <tr>
                        <th>Number</th>
                        <th>Multiplier</th>
                        <th>Result</th>
                    </tr>
                </thead>
                <tbody ref={results}>
                </tbody>
            </table>
        </>
    )
}
