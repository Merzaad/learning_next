
const promiseMaker = (dly) =>
new Promise((resolve) => {
  setTimeout(() => {
    resolve(`resolved + ${dly} sec timeout`)
  }, dly * 1000)
})

const fetchData = (delay) => {
  let data
  const fetch = async () => {
    data = await promiseMaker(delay)
  }
  const closure = () => {
    if (!data) throw fetch()
    return data
  }
  return closure
}


const Api = (delay) => {
  return {
    fetch: fetchData(delay),
  }
}

export default Api
