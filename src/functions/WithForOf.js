export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = 0
    for(let item of items) {
      sumData += item.data1
    }
    resolve(sumData)
  })
}
