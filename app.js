const { getTwoDistinctPrimeFactors, getThreeDistinctPrimeFactors } = require('./function/primeFactory')

// Define Question
const arrayOfTwoDistinctPrimeFactorsQuestion = [14, 15]
const arrayOfTreeDistinctPrimeFactorsQuestion = [644, 645, 646]

// Two Distinct Prime Factor
console.log('Start to Question TwoDistinctPrimeFactors')
arrayOfTwoDistinctPrimeFactorsQuestion.forEach((question) => {
    console.time('GetTwoDistinctPrimeFactors')
    const primeFactors = getTwoDistinctPrimeFactors(question)
    console.timeEnd('GetTwoDistinctPrimeFactors')
    console.log(primeFactors, '\n')
})
console.log('End\n')
console.log('______________________________________________________________________________\n')

// Three Distinct Prime Factor
console.log('Start to Question ThreeDistinctPrimeFactors')
arrayOfTreeDistinctPrimeFactorsQuestion.forEach((question) => {
    console.time('GetThreeDistinctPrimeFactors')
    const primeFactors = getThreeDistinctPrimeFactors(question)
    console.timeEnd('GetThreeDistinctPrimeFactors')
    console.log(primeFactors, '\n')
})
console.log('End')
// Three Distinct Prime Factor

