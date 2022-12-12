const RandeomNumberGenerator = require("../RandeomNumberGenerator")

const END = 0
class Car {
    
    #result

    #total

    constructor(name, numberOfAttempts) {
        this.name = name.split(", ")
        this.#result = {}
        this.#total = []
        this.#makeSeveralAttempts(numberOfAttempts)
    }

    #makeSeveralAttempts(numberOfAttempts) {
        let attempts = numberOfAttempts
        while(attempts > END) {
            this.#startRace()
            const copy = Object.assign({},this.#result)
            this.#total.push(copy)
            attempts -= 1
        }
    }


    #startRace() {
        this.name.forEach((car)=> {
          this.#result[car] =  this.#result[car] ?? "";
          this.#result[car] += `${RandeomNumberGenerator.isMoreThanFour()}`
        })
    }

    #winner() {
        const raceLength = Object.entries(this.#result)
        const max = raceLength.reduce((acc,cur) => {
           if(acc.length < cur[1].length) acc = cur[1]
           return acc
        },"")
        return raceLength.reduce((acc,cur) =>{
           if(cur[1].length === max.length) acc.push(cur[0])
           return acc 
        },[])
    }

    getResult() {
        const winner = this.#winner()
        const total = this.#total
        return {winner, total}
    }

    
}

module.exports = Car