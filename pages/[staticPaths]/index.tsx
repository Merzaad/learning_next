import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Card from '../../components/Card'
import { useRouter } from 'next/router'
type dataType = {
  data: string[]
}
const StaticProps = (props: dataType) => {
  const router = useRouter()

  return (
    <div className={styles.container}>
      path : {router.query.staticPaths}
      {props.data.map((data, index) => (
        <Link href={`/nested/${data}`} key={index}>
          <Card>{data}</Card>
        </Link>
      ))}
    </div>
  )
}

export function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          staticPaths: 'staticPath',
        },
      },
    ],
  }
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
