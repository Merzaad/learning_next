import * as React from "react"
const App = () => {
  const [title, setTitle] = React.useState("done")
  const [count, setCount] = React.useState(0)

  const delay = () =>
    new Promise((resolve) => {
      setTimeout(() => resolve(1), 2000)
    })

  const clickHandler = async () => {
    if (title === "calling") return
    setTitle("calling")
    const res = await delay()
    setCount((prev) => prev + res)
    setTitle("done")
  }

  const btnTxt = title === "done" ? "+" : "..."

  React.useEffect(() => {
    console.log("counted")
  }, [count])

  return (
    <div style={{ textAlign: "center" }}>
      <h1>{title}</h1>
      <p>{count}</p>
      <button onClick={clickHandler}>{btnTxt}</button>
      <hr />
    </div>
  )
}
export default App
