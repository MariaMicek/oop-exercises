class Calculations {

    constructor(array) {
        this.array = array
        this.arraySorted = this.array.concat().sort((x, y) => x - y)
    }

    average() {
        let sum
        let average
        this.array.reduce(
            (reduced, element) => sum = reduced + element, 0
        )
        average = sum / this.array.length
        
        return average
    }

    median() {
        let median
        
        if (this.array.length % 2 === 0) {
            const arr1 = this.arraySorted.concat()
            const arr2 = arr1.splice(this.array.length / 2, this.array.length / 2)
            median = (arr1[arr1.length - 1] + arr2[0]) / 2

        } else {
            const middleIndex = this.arraySorted.slice((this.array.length - 1) / 2)
            median = middleIndex[0]
        }

        return median
    }

    minNumber() {

        return this.arraySorted[0]

    }

    maxNumber() {

        return this.arraySorted[this.array.length - 1]

    }

    allResults(){

        let objectWithResults = {
            average: this.average(),
            median: this.median(),
            minNumber: this.minNumber(),
            maxNumber: this.maxNumber(),
        }

        return objectWithResults
    }
}


const calculation1 = new Calculations([1,0,2,11,35,16,1,2,3,9,5,75])
console.log(calculation1.allResults())



