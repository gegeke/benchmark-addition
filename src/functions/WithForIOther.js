export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = 0
    for (let i = 0; i < noItems; i++) {
      sumData += items[i].data1
    }
    resolve(sumData)
  })
}
