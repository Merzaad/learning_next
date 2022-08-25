import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Card from '../../components/Card'
import { NextPage } from 'next'

type dataType = {
  data: string[]
}
const ServerSideProps: NextPage<dataType> = (props) => {
  return (
    <div className={styles.container}>
      {props.data.map((data, index) => (
        <Link href={`/nested/${data}`} key={index}>
          <Card>{data}</Card>
        </Link>
      ))}
    </div>
  )
}

export async function getServerSideProps() {
  const promise = () =>
    new Promise<dataType>((resolve) => setTimeout(() => resolve({ data: ['Bye', 'World'] }), 3000))
  const test = await promise()
  return {
    props: {
      ...test,
    },
  }
}

export default ServerSideProps
