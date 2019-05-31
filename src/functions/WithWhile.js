export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = 0
    let i = noItems
    while(i--) {
      sumData += items[i].data1
    }
    resolve(sumData)
  })
}
