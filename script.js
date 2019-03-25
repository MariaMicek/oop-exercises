function average(array) {
    let sum
    let average
    array.reduce(
        (reduced, element, index, array) => sum = reduced + element, 0
    )
    average = sum / array.length
    return average
}

const myArray = [1, 2, 3, 10, 5]
console.log(average(myArray))