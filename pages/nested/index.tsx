import styles from '../../styles/Home.module.scss'
import Link from 'next/link'
import Card from '../../components/Card'
export default function Nested() {
  return (
    <div className={styles.container}>
      <Link href="/nested/YES">
        <Card>YES</Card>
      </Link>
      <Link href="/nested/NO">
        <Card>NO</Card>
      </Link>
      <Link href="/nested/MAYBE">
        <Card>MAYBE</Card>
      </Link>
    </div>
  )
}
