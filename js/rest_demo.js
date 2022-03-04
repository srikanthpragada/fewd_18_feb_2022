
function wish(name) {
    console.log("Hello " + name)
}

// REST Parameter 
function welcome(msg, ...names) {
    for (let n of names)
        console.log(`${msg} ${n}`)
}

// Takes only one param and ignores remaining 
wish("Scott", "Tom", "Kevin")

// REST param demo
welcome("Hi", "Scott", "Tom", "Kevin")
welcome("Welcome", "Bill", "Andy")