export const calculate = (state) => {
    console.log(state)

    if(state.operation.includes("/")){
        let newTextbox = state.textbox.split("/")
        let numbers = [];
        newTextbox.forEach((n) => {
            numbers.push(parseFloat(n, 10))
        })
        return (numbers[0] / numbers[1]).toString()
    }

    if(state.operation.includes("*")){
        let newTextbox = state.textbox.split("*")
        let numbers = [];
        newTextbox.forEach((n) => {
            numbers.push(parseFloat(n, 10))
        })
        return (numbers[0] * numbers[1]).toString()
    }

    if(state.operation.includes("+")){
        let newTextbox = state.textbox.split("+")
        let numbers = [];
        newTextbox.forEach((n) => {
            numbers.push(parseFloat(n, 10))
        })
        console.log(numbers)
        return (numbers[0] + numbers[1]).toString()
    }

    if(state.operation.includes("-")){
        let newTextbox = state.textbox.split("-")
        let numbers = [];
        newTextbox.forEach((n) => {
            numbers.push(parseFloat(n, 10))
        })
        return (numbers[0] - numbers[1]).toString()
    }

    return NaN

}