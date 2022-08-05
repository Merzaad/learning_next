import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Card from '../../components/Card'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
type dataType = string[]
const Nested: NextPage = () => {
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
    <div className={styles.container}>
      {data.map((data, index) => (
        <Link href={`/nested/${data}`} key={index}>
          <Card>{data}</Card>
        </Link>
      ))}
    </div>
  )
}

export default Nested
