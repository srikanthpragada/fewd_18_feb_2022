import React, {useState} from 'react'
import $ from 'jquery'

export default function ShowTime() {
    var [now, setNow] = useState("")

    function showDateTime() {
        $.get("http://worldclockapi.com/api/json/utc/now",
             (response) => setNow(response.currentDateTime)
        )
          
    }
    return (
        <>
            <h1>{now}</h1>
            <button onClick={showDateTime}>Show Date Time</button>
        </>
    )
}


 