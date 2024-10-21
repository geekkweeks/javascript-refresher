// See: https://www.youtube.com/watch?v=iDWtuWkuj8g
// .reduce() the element of an array to a single value

const prices = [1, 3, 5, 6, 7]

const total = prices.reduce(sum);

function sum(prev, next) {
    console.log("🚀 ~ sum ~ prev, next:", prev, next)
    return prev + next
}

console.log("🚀 ~ total:", total)


// find max and min value from array int
const grades = [90, 45, 78, 34, 21, 94, 67, 34]

function getMin(accumulator, element) {
    console.log("🚀 ~ getMin ~ accumulator, element:", accumulator, element)
    return Math.min(accumulator, element)
}

function getMax(accumulator, element) {
    console.log("🚀 ~ getMin ~ accumulator, element:", accumulator, element)
    return Math.max(accumulator, element)
}

const maxvalue = grades.reduce(getMax);
const minalue = grades.reduce(getMin);

console.log("🚀 ~ maxvalue:", maxvalue)
console.log("🚀 ~ minalue:", minalue)
