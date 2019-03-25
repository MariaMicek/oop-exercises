function average(array) {
    let sum
    let average
    array.reduce(
        (reduced, element) => sum = reduced + element, 0
    )
    average = sum / array.length
    return average
}

function median(array){
    let median
    const arraySorted = array.concat().sort((x,y) => x - y)

    if (array.length % 2 === 0){
        const arr1 = arraySorted.concat()
        const arr2 = arraySorted.slice(array.length / 2)
        median = (arr1[array.length - 1] + arr2[0]) / 2
    } else {
        const middleIndex = arraySorted.slice((arraySorted.length - 1) / 2)
        median = middleIndex[0]
    }
   
    return median
}

function minNumber(array){

    const newArray = array.sort((x,y) => x - y)
    return newArray[0]

}

function maxNumber(array){

    const newArray = array.sort((x,y) => x - y)
    return newArray[newArray.length -1]

}

const myArray = [1, 2, 0, 3, 5, 15]
console.log(average(myArray))
console.log(median(myArray))
console.log(minNumber(myArray))
console.log(maxNumber(myArray))


