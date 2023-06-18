const message = 'coffee';

export function testFunction(value: string = message) {
    return `Do you want some ${value}`
}

const x = testFunction(message)
console.log(x)