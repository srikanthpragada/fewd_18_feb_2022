import React, { useState } from 'react'
import $ from 'jquery'


export default function CountryInfo() {
    var [done, setDone] = useState(false)
    var [country, setCountry] = useState({
        name: '',
        capital: '',
        population: '',
        flag: '',
        region: '',
        area: ''
    })
    var [code, setCode] = useState("IND")

    function changeCode(event) {
        setCode(event.target.value)
    }

    function getCountryInfo() {
        setCountry({})
        setDone(false)
        $.ajax(
            {
                url: `https://restcountries.com/v3.1/alpha/${code}`,
                success: (response) => {
                    var ci = response[0]
                    setCountry({
                        name: ci.name.common,
                        capital: ci.capital[0],
                        population: ci.population,
                        flag: ci.flags.png,
                        area: ci.area,
                        region: ci.region
                    })
                },
                error: (error) => {
                    console.log(error)
                },
                complete: () => setDone(true)
            }
        )

    }
    return (
        <>
            <h2>Country Information</h2>
            Country Code : <input type="text" value={code} onChange={changeCode} />
            &nbsp;
            <button onClick={getCountryInfo}>Go</button>
            <p></p>

            {done && country.name ?
                <div className="row">
                    <div className="col-sm-6">
                        <h3>Name : {country.name}</h3>
                        <h3>Capital : {country.capital}</h3>
                        <h3>Region : {country.region}</h3>
                        <h3>Population : {country.population}</h3>
                        <h3>Area (SKM) : {country.area}</h3>
                    </div>
                    <div className="col-sm-6">
                        <img src={country.flag}
                            alt="Flag"
                            style={{ width: '200px', height: '200px' }} />
                    </div>
                </div>
                :
                done ? <h3>Sorry! Country code not found!</h3> : ''
            }
        </>
    )
}
