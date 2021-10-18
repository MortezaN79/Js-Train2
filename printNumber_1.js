const printNumbers= (input) =>{
    if (!input && input !== 0) {
        return 'input is empty'
    }
    if(!isNumeric(input)){
        return 'Input is not valid number'
    }
    input = input.toString()
    let arrInput = input.split('');

    let result = '';

    arrInput.map(num => {
        result += `${num}: `
        for (let i=0; i < num; i++){
            result +=num
        }
        result += '\n'
    })

    return result;
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
    readline.question(`Enter number: (enter 'exit' to finish): `,
        input => {
            userInput = input;
            console.log(printNumbers(userInput))
            if(userInput.toLowerCase()==='exit'){
                readline.close()
            } else{
                getInput()
            }
        })
}
getInput()
