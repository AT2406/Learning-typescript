// import * as path from 'path'
import * as fs from 'fs'

const testDirectory = 'D:\\coding test'

// fs.existsSync(directory) // checks if the directory exists

export function arrayOfItemsInDirectory(directory) {
  const arrayOfSongs = []
  const items = fs.readdirSync(directory)
  items.forEach(item => {
    fs.readdirSync(`${testDirectory}\\${item}`).forEach(file => {
      arrayOfSongs.push(file)
    })
  })
  console.log(arrayOfSongs.length)
}

// if (fs.existsSync(`${testDirectory}\\${file}`)) {
//   return console.log(true)
//   } else {
//     return console.log(false)
//   }

function runTest(directory) {
  arrayOfItemsInDirectory(directory)
}

console.log(runTest(testDirectory))
