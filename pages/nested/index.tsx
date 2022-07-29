import styles from '../../styles/Css.module.scss'
import Link from 'next/link'
export default function Nested() {
  return (
    <div className={styles.container}>
      <Link href="/nested/YES" className={styles.card}>
        <div className={styles.card}>YES</div>
      </Link>
      <Link href="/nested/NO">
        <div className={styles.card}>NO</div>
      </Link>
      <Link href="/nested/MAYBE" className={styles.card}>
        <div className={styles.card}>MAYBE</div>
      </Link>
    </div>
  )
}
