import Head from 'next/head'
import React, { useState } from 'react';
import Coins from '../Components/Coin'
import CoinList from '../Components/CoinList'
import Search from '../Components/Search'

import styles from '../styles/Home.module.css';
import Layout from '../Components/Layout';

export default function Home({ apiJson }) {

        const data =  self.apiJson;

    const [search, setSearch] = useState('')

         data = apiJson.filter(coin => {

        return coin.id.toLowerCase().includes(search.toLowerCase())

    })

    const handleChange = e => {
        e.preventDefault()
        setSearch(e.target.value);
    }

    return (

        <>
        <Search type = "text"
        placeholder = "search"
        onChange = { handleChange }/>  
         <CoinList apiJson = { data }
        />


        </>
    )
}
export const getServerSideProps = async(context) => {
    const { id } = context.query
    const apiRes = await fetch(`https://api.coingecko.com/api/v3/coins/bitcoin`);

    const apiJson = await apiRes.json();


    


   

return {
        props: {
            apiJson
            
            
        }
    }
}
