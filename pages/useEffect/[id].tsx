import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/Home.module.scss'
import Card from '../../components/Card'

const Dynamic: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className={styles.container}>
        <Card>{id}</Card>
    </div>
  )
}
export default Dynamic
