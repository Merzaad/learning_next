import * as React from "react"
import delayApiMaker from "./api/api"
import { CircularProgress } from "@mui/material"
import styles from "../styles/Home.module.css"


const App = () => {
  //link to closure
  const api1 = delayApiMaker(2)
  const api2 = delayApiMaker(4)

  //using closure
  const Component1 = () => {
    const data = api1.fetch()
    return <h1>{data}</h1>
  }

  const Component2 = () => {
    const test = () => api2.fetch()
    const [data, setData] = React.useState(test)
    console.log(data)
    return <h1>{data}</h1>
  }
  
  return (
    <div className={styles.main}>
      <React.Suspense fallback={<CircularProgress />}>
        <Component1 />
        <React.Suspense fallback={<CircularProgress />}>
          <Component2 />
        </React.Suspense>
      </React.Suspense>
    </div>
  )
}

export default App
