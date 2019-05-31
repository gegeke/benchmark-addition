export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = 0
    items.forEach(item => { sumData += item.data1 })
    resolve(sumData)
  })
}
