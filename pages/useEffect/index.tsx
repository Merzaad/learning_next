import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Card from '../../components/Card'
import { NextPage } from 'next'
import { Fragment, useEffect, useState } from 'react'
import Head from 'next/head'
type dataType = string[]
const UseEffect: NextPage = () => {
  const [data, setData] = useState<dataType>([])
  useEffect(() => {
    const promise = () =>
      new Promise<string[]>((resolve) => setTimeout(() => resolve(['Yes', 'No', 'Maybe']), 3000))
    const fetch = async () => {
      const result = await promise()
      setData(result)
    }
    fetch()
  }, [])
  return (
    <Fragment>
      <Head>
        <title>useEffect Page</title>
        <meta name="description" content="useEffect Page meta description" />
      </Head>
      <div className={styles.container}>
        {data.map((data, index) => (
          <Link href={`/nested/${data}`} key={index} className={styles.link}>
            <Card>{data}</Card>
          </Link>
        ))}
      </div>
    </Fragment>
  )
}

export default UseEffect
