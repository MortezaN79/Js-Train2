const deleteArr= (arr1,arr2) => {
    //return arr1.filter((item) => arr2.indexOf(item) ===-1)
     return arr1.filter ((item) => !arr2.some(item2 => item2===item))
    // return arr1.filter ((item) => arr2.every(item2 =>item2 !== item))
}
arr1=[1,2,3,4,5,6]
arr2=[2,3]
 console.log(deleteArr(arr1,arr2))