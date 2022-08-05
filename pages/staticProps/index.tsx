import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Card from '../../components/Card'
type dataType = {
  data: string[]
}
const StaticProps = (props: dataType) => {
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

export async function getStaticProps() {
  const promise = () =>
    new Promise<dataType>((resolve) =>
      setTimeout(() => resolve({ data: ['F', 'The', 'System'] }), 3000)
    )
  const test = await promise()
  return {
    props: {
      ...test,
    },
  }
}

export default StaticProps
