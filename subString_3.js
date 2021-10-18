function subString (str1 , str2) {
    if(typeof str1 !=='string' || typeof str2 !=='string')
        return -1
    if(str2.length > str1.length)
        return -1

    for( let i=0 ; i < str1.length - str2.length +1 ; i++){
        for(let j=0 ; j<str2.length; j++) {
            if(str1[i+j] !== str2[j]){
                break;
            }
            if(j === str2.length-1){
                return i;
            }
        }
    }
    return -1;
}

console.log(subString ('hello world' , 'world'))