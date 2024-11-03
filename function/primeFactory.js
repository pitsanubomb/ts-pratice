/**
 * GetPrimeFactors
 * @param {Number} number 
 * @returns {Map} map of factors and exponent
 */
const getPrimeFactors = (number) => {
    // Define value
    const factors = new Map()
    let divisor = 2;

    while (number > 1) {
        let exponent = 0;
        while (number % divisor === 0) {
            exponent++
            number /= divisor
        }

        if (exponent > 0) factors.set(divisor, exponent)

        divisor++
    }

    return factors;
}

/**
 * GetTwoDistinctPrimeFactors
 * @param {Number} number - Number to find prime factor 
 * @returns {Array<{prime:number,exponent:number},{prime:number,exponent:number}>} - Answer
 */
export const getTwoDistinctPrimeFactors = (number) => {
    // Validate
    if (!Number.isInteger(number)) {
        console.error(`Input is invalid type`, { number })
        throw new Error("Input must be number")
    }
    if (number < 0) {
        console.error(`Input is not positive ${number}`, { number })
        throw new Error("Input must be positive")
    }
    if (number <= 1) {
        console.error(`Input is <=1`, { number })
        throw new Error("Input must be > 1")
    }

    // Call function prime factor
    const primeFactors = getPrimeFactors(number)

    // Validate is Map size  equal 2
    if (primeFactors.size !== 2) {
        console.error(`Number is cant have two distinct prime factors`, { number })
        throw new Error("Number is can't have two distinct prime factors", { number })
    }

    // Format to Answer
    // Convert Map to Array
    const factors = Array.from(primeFactors.entries());

    // Start to show answer
    return [
        { prime: factors[0][0], exponent: factors[0][1] },
        { prime: factors[1][0], exponent: factors[1][1] }
    ]
}

/**
 * GetTwoDistinctPrimeFactors
 * @param {Number} number - Number to find prime factor 
 * @returns {Array<{prime:number,exponent:number},{prime:number,exponent:number},{prime:number,exponent:number}>} - Answer
 */
export const getTreeDistinctPrimeFactors = (number) => {
    // Validate
    if (!Number.isInteger(number)) {
        console.error(`Input is invalid type`, { number })
        throw new Error("Input must be number")
    }
    if (number < 0) {
        console.error(`Input is not positive ${number}`, { number })
        throw new Error("Input must be positive")
    }
    if (number <= 1) {
        console.error(`Input is <=1`, { number })
        throw new Error("Input must be > 1")
    }

    // Call function prime factor
    const primeFactors = getPrimeFactors(number)

    // Validate is Map size  equal 3
    if (primeFactors.size !== 3) {
        console.error(`Number is cant have three distinct prime factors`, { number })
        throw new Error("Number is can't have three distinct prime factors", { number })
    }

    // Format to Answer
    // Convert Map to Array
    const factors = Array.from(primeFactors.entries());

    // Start to show answer
    return [
        { prime: factors[0][0], exponent: factors[0][1] },
        { prime: factors[1][0], exponent: factors[1][1] },
        { prime: factors[2][0], exponent: factors[2][1] }
    ]
}
