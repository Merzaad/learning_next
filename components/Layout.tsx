import { Fragment, ReactElement } from 'react'
import styles from '../styles/Layout.module.scss'
import Link from 'next/link'
type propType = {
  children: ReactElement
}
const Layout = (prop: propType) => {
  return (
    <Fragment>
      <div className={styles.navbar}>
        <div className={styles.homeButton}>
          <Link href="/">Home</Link>
        </div>
      </div>
      <Fragment>{prop.children}</Fragment>
    </Fragment>
  )
}
export default Layout
