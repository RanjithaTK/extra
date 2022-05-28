let array = [1, 2, 3, 4, 3, 2, 1]
function LonelyInteger(array) {
  for (let i = 0; i < array.length; i++) {
    let count = 0
    for (let j = 0; j < array.length; j++) {
      if (array[i] === array[j]) {
        count++
      }
    }
    if (count === 1) {
      return array[i]
    }
  }
}
console.log(LonelyInteger(array))

// let array = [1, 2, 3, 4, 3, 2, 1]
// function LonelyInteger(array) {
//   for (let i = 0; i < array.length; i++) {
//     for (let j = 1; j < array.length; j++) {
//       if (array[i] == array[j]) {
//         continue
//       } else {
//         return array[i]
//       }
//     }
//   }
// }
// console.log(LonelyInteger(array))
