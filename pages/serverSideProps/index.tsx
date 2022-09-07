import styles from '../../styles/Home.module.scss'
import styles2 from '../../styles/Card.module.scss'
import { NextPage } from 'next'
import React from 'react'
import axios from 'axios'

type dataType = {
  data: { blocks: number | string }
  context: { market_price_usd: number | string }
}
const ServerSideProps: NextPage<dataType> = ({ data, context }) => {
  return (
    <div className={styles.container}>
      <div className={styles2.card}>
        <h1>{`blocks: ${data.blocks || data}`}</h1>
      </div>
      <div className={styles2.card}>
        <h1>{`price: ${context.market_price_usd || context}`}</h1>
      </div>
    </div>
  )
}

export async function getServerSideProps() {
  let result: dataType =  {
    data: { blocks: 'initial' },
    context: { market_price_usd: 'initial' }
  }
  await axios
    .get('https://api.blockchair.com/ethereum/stats')
    .then((response) => {
      result = {
        data: response.data.data,
        context: response.data.context,
      }
    })
    .catch(() => {
      result = {
        data: { blocks: 'error' },
        context: { market_price_usd: 'error' }
      }
    })
  return {
    props: result,
  }
}

export default ServerSideProps
