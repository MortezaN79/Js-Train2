function rec (str){
    if(typeof str !== 'string')
        return 'error: Input is not string'
    return str ? rec(str.substr(1)) + str[0] : str ;
}


let userInput = '';
const readline = require('readline').createInterface({
    input: process.stdin,
    output:process.stdout
})
function getInput(){
    readline.question(`Enter String: (enter 'exit' to finish): `,
        input => {
            userInput = input;
            console.log(rec(userInput))
            if(userInput.toLowerCase()==='exit'){
                readline.close()
            } else{
                getInput()
            }
        })
}
getInput()


