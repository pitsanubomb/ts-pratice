export const getPrimeFactors = (number) => {
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
