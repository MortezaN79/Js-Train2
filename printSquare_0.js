function printSquare(input){
    if(!isNumeric(input)){
        return'Input is not valid integer number please enter valid inputs'
    }
    let square =''
    for (let i = 0; i <input ; i++) {
        if(i===0||i===input-1)square+=('*'.repeat(input)+'\n')
        else square+=('*'+' '.repeat(input-2)+'*'+'\n')
    }
    return square
}
function isNumeric(str) {
    if (typeof str != "string") return false
    if(!isNaN(str)){
        return str == parseInt(str)
    }
    return false
}

let userInput = '';
const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})
function getInput(){
    readline.question(`Type valid number: (enter 'exit' to finish): `,
        input => {
        userInput = input;
            console.log(printSquare(userInput))
            if(userInput.toLowerCase()==='exit'){
                readline.close()
            } else{
                getInput()
            }
        })
}
getInput()
