import styles from '../../styles/Home.module.scss'
import Card from '../../components/Card'
import { NextPage } from 'next'
import React from 'react'

type dataType = {
  number: number
}
const ServerSideProps: NextPage<dataType> = (props) => {
  const [number, setCount] = React.useState(props.number)
  const [testRender, setTestRender] = React.useState(0)
  const calculation = (counts: number) => {
    const time = new Date().getTime()
    const array: number[] = []
    for (let i = 0; i < counts; i++) {
      array.push(i)
    }
    console.log(`finish calculation: ${new Date().getTime() - time}`)
    return array
  }
  // const test = calculation(counts)
  const testMemo = React.useMemo(() => calculation(number), [number])
  return (
    <div className={styles.container}>
      <Card>{`length: ${testMemo.length}`}</Card>
      <Card>{`test: ${testRender}`}</Card>
      <button type="button" onClick={() => setTestRender((prev) => prev + 1)}>
        testRender
      </button>
      <button type="button" onClick={() => setCount((prev) => prev + 1)}>
        testCount
      </button>
    </div>
  )
}

export async function getServerSideProps() {
  const promise = () =>
    new Promise<dataType>((resolve) => setTimeout(() => resolve({ number: 999999 }), 3000))
  const result = await promise()
  return {
    props: {
      ...result,
    },
  }
}

export default ServerSideProps
