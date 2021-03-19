import Head from 'next/head'
import Coins from '../Components/Coin'
import CoinList from '../Components/CoinList'
import Search from '../Components/Search'

import styles from '../styles/Home.module.css'

export default function Home({apiJson}) {

  return (
    <div>
      <Head>
        <title>Create Next App</title>
    
      </Head>
     <Search  type="text" placeholder="search"/>
      <CoinList apiJson = {apiJson}/>
      
    </div>
  )
}
export const getServerSideProps = async () =>{
  const apiRes = await fetch('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false');
  const apiJson = await apiRes.json();

  return {
    props:{
      apiJson
    }
  }
}






