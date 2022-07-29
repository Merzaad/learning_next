import { NextPage } from 'next'
import { useRouter } from 'next/router'
import styles from '../../styles/Css.module.scss'
import Link from 'next/link'

const Dynamic: NextPage = () => {
  const router = useRouter()
  const { id } = router.query
  return (
    <div className={styles.container}>
      <Link href="/nested">
      <div className={styles.card}>{id}</div>
      </Link>
    </div>
  )
}
export default Dynamic
