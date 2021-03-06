class Calculations {

    constructor() {
        this.array = []
        this.arraySorted = []
        this.render()
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

    allResults() {

        let objectWithResults = {
            average: this.average(),
            median: this.median(),
            minNumber: this.minNumber(),
            maxNumber: this.maxNumber(),
        }

        return objectWithResults
    }

    render() {
        const div = document.createElement('div')
        const input = document.createElement('input')
        const buttonAdd = document.createElement('button')
        const buttonClear = document.createElement('button')
        const array = document.createElement('p')
        const average = document.createElement('p')
        const median = document.createElement('p')
        const min = document.createElement('p')
        const max = document.createElement('p')

        div.innerText = ''

        input.setAttribute('value', '')

        buttonAdd.innerText = 'ADD'
        buttonClear.innerText = 'CLEAR'
        array.innerText = `Array: `
        average.innerText = `Average: `
        median.innerText = `Median: `
        min.innerText = `Minimum number: `
        max.innerText = `Maximum number: `

        input.addEventListener(
            'input',
            () => {
                this.array = event.target.value.split(" ")
                this.array = this.array.map(element => Number(element))
            }
        )

        buttonAdd.addEventListener(
            'click',
            () => {
                this.array.find(element => {
                    if (isNaN(element)) {
                        alert('Add only numbers and separate them with spaces')
                        div.innerText = ''
                        this.render()
                        }
                })
                this.arraySorted = this.array.concat().sort((x, y) => x - y)
                array.innerText = `Array: ${this.array}`
                average.innerText = `Average: ${this.average()}`
                median.innerText = `Median: ${this.median()}`
                min.innerText = `Minimum number: ${this.minNumber()}`
                max.innerText = `Maximum number: ${this.maxNumber()}`
            }
        )

        buttonClear.addEventListener(
            'click',
            () => {
                div.innerText = ''
                this.render()
            }
        )

        document.body.appendChild(div)
        div.appendChild(input)
        div.appendChild(buttonAdd)
        div.appendChild(buttonClear)
        div.appendChild(array)
        div.appendChild(average)
        div.appendChild(median)
        div.appendChild(min)
        div.appendChild(max)
    }
}


const calculation1 = new Calculations()
console.log(calculation1.allResults())



