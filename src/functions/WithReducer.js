export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    const sumData = items.reduce((acc, curr) => {return acc + curr.data1}, 0)
    resolve(sumData)
  })
}
