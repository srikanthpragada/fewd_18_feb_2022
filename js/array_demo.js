
let names = ["JavaScript", "Java", "Python"]

names.push("C#")
names.splice(0,1,"TypeScript")


for (let idx in names)
{
    console.log(`Value at ${idx} is ${names[idx]}`)
}

for (let name of names) {
    console.log(name)
}