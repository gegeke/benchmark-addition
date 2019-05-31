export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = _.sumBy(items, el => {return el.data1})
    resolve(sumData)
  })
}
