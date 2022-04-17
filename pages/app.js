import * as React from "react"
import fetchingApi from "./api/api"
//testtttttttttttttt
const state1 = fetchingApi(3)
const state2 = fetchingApi(4)

function Data1() {
  const data = state1.fetch()
  return <h1>{data}</h1>
}

function Data2() {
  const test = ()=> state2.fetch()
  const [data, setData] = React.useState(test)
  console.log(data)
  return <h1>{data}</h1>
}

const App = () => (
  <React.Suspense fallback={<h1>Loading...</h1>}>
    <Data1 />
    <React.Suspense fallback={<h1>Loading...</h1>}>
      <Data2 />
    </React.Suspense>
  </React.Suspense>
)

export default App
