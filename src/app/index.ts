const message = 'coffee';

export function testFunction(value: string = message) {
  return `Do you want some ${value}`;
}

// const x = testFunction(message)
// console.log(x)

const obj = { width: 10, height: 15 };
// Why is this NaN? Spelling is hard!
const area = obj.width * obj.height;
console.log(area);
