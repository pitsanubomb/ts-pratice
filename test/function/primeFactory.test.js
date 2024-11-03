const { getTwoDistinctPrimeFactors, getThreeDistinctPrimeFactors, isPrime } = require('../../function/primeFactory')

describe('Two Distinct Prime Factors', () => {

    // Success Case
    test('Should find two distinct prime factors with sample number', () => {
        // Test case 10 = 2 x 5 
        const primeDistinctOne = getTwoDistinctPrimeFactors(10);
        expect(primeDistinctOne).toEqual([{ prime: 2, exponent: 1 }, { prime: 5, exponent: 1 }])

        // Test case 40 = 2^3 x 5 
        const primeDistinctTwo = getTwoDistinctPrimeFactors(40);
        expect(primeDistinctTwo).toEqual([{ prime: 2, exponent: 3 }, { prime: 5, exponent: 1 }])

        // Test case 100 = 2^2 x 5^2 
        const primeDistinctTree = getTwoDistinctPrimeFactors(100);
        expect(primeDistinctTree).toEqual([{ prime: 2, exponent: 2 }, { prime: 5, exponent: 2 }])
    })

    test('Should factor are prime and Verify two distinct', () => {
        const testCase = [10, 40, 100];

        // Start test
        testCase.forEach(number => {
            const factors = getTwoDistinctPrimeFactors(number);

            // Verify is distinct two factor
            expect(factors.length).toBe(2)
            expect(factors[0].prime).not.toEqual(factors[1].prime)

            // Verify is prime number
            expect(isPrime(factors[0].prime)).toBe(true)
            expect(isPrime(factors[1].prime)).toBe(true)
        })
    })

    // Error case
    test('should throw error for numbers without exactly two prime factor', () => {
        const testCase = [17, 97, 372]

        // Start test
        testCase.forEach(number => {
            expect(() => { getTwoDistinctPrimeFactors(number) }).toThrow("Number is can't have two distinct prime factors", { number })
        })
    })

    test('should throw error for numbers is wrong type', () => {
        // Start test
        expect(() => { getTwoDistinctPrimeFactors('12') }).toThrow("Input must be number")
    })

    test('should throw error for numbers is must be positive', () => {
        const testCase = [-1, -2, -3]

        // Start test
        testCase.forEach(number => {
            expect(() => { getTwoDistinctPrimeFactors(number) }).toThrow("Input must be positive")
        })
    })

    test('should throw error for numbers is must be > 1', () => {
        const testCase = [0, 1]

        // Start test
        testCase.forEach(number => {
            expect(() => { getTwoDistinctPrimeFactors(number) }).toThrow("Input must be > 1")
        })
    })
})



describe('Three Distinct Prime Factors', () => {

    // Success Case
    test('Should find three distinct prime factors with sample number', () => {
        // Test case 644 = 2^2 x 7 x 23 
        const primeDistinctOne = getThreeDistinctPrimeFactors(644);
        expect(primeDistinctOne).toEqual([{ prime: 2, exponent: 2 }, { prime: 7, exponent: 1 }, { prime: 23, exponent: 1 }])

        // Test case 645 = 3 x 5 x 43 
        const primeDistinctTwo = getThreeDistinctPrimeFactors(645);
        expect(primeDistinctTwo).toEqual([{ prime: 3, exponent: 1 }, { prime: 5, exponent: 1 }, { prime: 43, exponent: 1 }])

        // Test case 646 = 2 x 17 x 19 
        const primeDistinctThree = getThreeDistinctPrimeFactors(646);
        expect(primeDistinctThree).toEqual([{ prime: 2, exponent: 1 }, { prime: 17, exponent: 1 }, { prime: 19, exponent: 1 }])
    })

    test('Should factor are prime and Verify three distinct', () => {
        const testCase = [644, 645, 646];

        // Start test
        testCase.forEach(number => {
            const factors = getThreeDistinctPrimeFactors(number);

            // Verify is distinct two factor
            expect(factors.length).toBe(3)
            expect(factors[0].prime).not.toEqual(factors[1].prime)
            expect(factors[0].prime).not.toEqual(factors[2].prime)
            expect(factors[1].prime).not.toEqual(factors[2].prime)

            // Verify is prime number
            expect(isPrime(factors[0].prime)).toBe(true)
            expect(isPrime(factors[1].prime)).toBe(true)
            expect(isPrime(factors[2].prime)).toBe(true)
        })
    })

    // Error case
    test('should throw error for numbers without exactly three prime factor', () => {
        const testCase = [17, 20, 100]

        // Start test
        testCase.forEach(number => {
            expect(() => { getThreeDistinctPrimeFactors(number) }).toThrow("Number is can't have three distinct prime factors", { number })
        })
    })

    test('should throw error for numbers is wrong type', () => {
        // Start test
        expect(() => { getThreeDistinctPrimeFactors('12') }).toThrow("Input must be number")
    })

    test('should throw error for numbers is must be positive', () => {
        const testCase = [-1, -2, -3]

        // Start test
        testCase.forEach(number => {
            expect(() => { getThreeDistinctPrimeFactors(number) }).toThrow("Input must be positive")
        })
    })

    test('should throw error for numbers is must be > 1', () => {
        const testCase = [0, 1]

        // Start test
        testCase.forEach(number => {
            expect(() => { getThreeDistinctPrimeFactors(number) }).toThrow("Input must be > 1")
        })
    })
})
