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
      this.durationArray = []
      this.minTime = 0
      this.maxTime = 0
      this.totalTime = 0
      this.singleDuration = 0
      const noRuns = this.noruns
      for(let i = noRuns; i--;) {

        // summing function in component
        this.start = Date.now()
        if (!single) {
          this.addUpMultiple()
        } else {
          this.addUpSingle()
        }
        this.end = Date.now()

        const duration = this.end - this.start

        this.durationArray.push(duration)
        this.totalTime += duration
        if (this.minTime !== 0) {
          this.minTime = Math.min(this.minTime, duration)
        } else {
          this.minTime = duration
        }
        this.maxTime = Math.max(this.maxTime, duration)
      }
      this.averageTime = parseInt(this.durationArray.reduce((acc, curr) => {return acc + curr}, 0) / this.noruns, 10)
    }
  }
}
