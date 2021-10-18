const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function move(array, index, offset) {
    const output = [...array];
    const element = output.splice(index, 1)[0];
    let updatedIndex = index + offset;

    if(updatedIndex < 0 || updatedIndex >= array.length)
        return 'error: index + offset is out of range'

    output.splice(updatedIndex, 0, element);

    return output;
}

console.log(move(numbers , 6 ,3))