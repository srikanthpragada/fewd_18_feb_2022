
export default function Greet() {
    var message = "Good Evening"
    var hours = new Date().getHours() 

    if (hours < 12)
        message = "Good Morning"
    else
        if (hours < 17)
            message = "Good Afternoon"

    return <h1 style={{color: 'red', fontSize:'30pt'}}>{message}</h1>
}