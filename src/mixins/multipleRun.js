export const multipleRun = {
  data() {
    return {
      averageTime: 0,
      minTime: 0,
      maxTime: 0,
      totalTime: 0,
      singleDuration: 0,
      durationArray: []
    }
  },
  methods: {
    runMultiple(single) {
      const self = this
      return new Promise((resolve, reject) => {
        self.durationArray = []
        let minTime = self.minTime = 0
        let maxTime = self.maxTime = 0
        self.totalTime = 0
        self.singleDuration = 0
        const noRuns = self.noruns
        for(let i = noRuns; i--;) {

          // summing function in component
          self.start = Date.now()
          if (!single) {
            self.addUpMultiple()
          } else {
            self.addUpSingle()
          }
          self.end = Date.now()

          const duration = self.end - self.start

          self.durationArray.push(duration)
          self.totalTime += duration
          if (minTime !== 0) {
            self.minTime = Math.min(minTime, duration)
          } else {
            self.minTime = duration
          }
          self.maxTime = Math.max(maxTime, duration)
        }
        this.averageTime = parseInt(this.durationArray.reduce((acc, curr) => {return acc + curr}, 0) / noRuns, 10)
        resolve(this.averageTime)
      })
    },
    resetData() {
      this.averageTime = 0
      this.minTime = 0
      this.maxTime = 0
      this.totalTime = 0
      this.singleDuration = 0
      this.durationArray = []
    }
  }
}
