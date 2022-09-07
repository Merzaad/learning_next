import styles from '../../styles/Home.module.scss'
import styles2 from '../../styles/Card.module.scss'
import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'

type dataType = {
  data?: { blocks: number }
  context?: { market_price_usd: number }
  error?: string
}
const ServerSideProps: NextPage<dataType> = ({ data, context, error }) => {
  return (
    <div className={styles.container}>
      <div className={styles2.card}>
        <p>{`blocks: ${data?.blocks || error}`}</p>
      </div>
      <div className={styles2.card}>
        <p>{`price: ${context?.market_price_usd || error}`}</p>
      </div>
    </div>
  )
}

export async function getServerSideProps(): Promise<{ props: dataType }> {
  let result: dataType = {}
  await axios
    .get('https://api.blockchair.com/etherseum/stats')
    .then((response) => {
      result = {
        data: response.data.data,
        context: response.data.context,
      }
    })
    .catch((error) => {
      result = {
        error: `error ${error.response.status}`,
      }
    })
  return {
    props: result,
  }
}

export default ServerSideProps
