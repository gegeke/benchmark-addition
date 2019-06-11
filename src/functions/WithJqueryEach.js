export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let sumData = 0
    $.each(items, (i, el) => {
      sumData += el.data1
    })
    resolve(sumData)
  })
}
