export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = 0
    _.forEach(items, el => { sumData += el.data1 })
    resolve(sumData)
  })
}
