export const addSingle = (items, noItems) => {
  return new Promise((resolve) => {
    let iterations = parseInt(noItems / 8, 10)
    // get remainder
    let i = noItems % 8
    let sumData = 0

    if (i > 0) {
      while(i) {
        sumData += items[i--].data1
      }
    }

    i = noItems - i - 1

    do {
      sumData += items[i--].data1
      sumData += items[i--].data1
      sumData += items[i--].data1
      sumData += items[i--].data1
      sumData += items[i--].data1
      sumData += items[i--].data1
      sumData += items[i--].data1
      sumData += items[i--].data1
    } while (--iterations > 0)

    resolve(sumData)
  })
}
