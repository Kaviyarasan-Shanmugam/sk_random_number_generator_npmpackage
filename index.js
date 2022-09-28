//Random number generator
const randomNumber = (min = 0, max = 100) => {
    return Math.round(Math.random() * (max - min) + min)
}

export default randomNumber