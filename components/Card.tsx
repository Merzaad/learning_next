import { ReactElement } from 'react'
import styles from './Card.module.scss'
type propType = {
  children: ReactElement | string | undefined | string[]
}

const Card = (prop: propType) => {
  return <div className={styles.card}>{prop.children}</div>
}

export default Card
