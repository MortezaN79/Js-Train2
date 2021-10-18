function unique(str) {
    let result = '';
    for(let i = 0; i < str.length; i++) {
        if( str[i] !== str[i+1]) {
            result += str[i];
        }
    }
    return result;
}

function unique2(str){
    for (let i = 0; i <str.length-1 ;) {
        if( str[i] === str[i+1]) {
            str = str.substring(0,i)+str.substring(i+1,str.length);
        }
        else
            i++
    }
    return str
}

console.log('unique:  '+unique('aaabgbbbcfffccdded'))
console.log('unique2: '+unique2('aaabgbbbcfffccdded'))
