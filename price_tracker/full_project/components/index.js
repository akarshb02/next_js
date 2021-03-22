import styles from '../Coin/coin.module.css'
import Layout from '../Layout';
import Link from 'next/link'
const Coins = ({priceChange,id,...rest}) =>{
 
 return (
  

        <div className={styles.coin_container} >
          
          
            <div className={styles.coin_row}>
            
              <div className={styles.coin}>
              
               <img className={styles.img} src={rest.image} alt={rest.name} />
               <h1 className={styles.coin_h1}>{rest.name}</h1>
             
              </div>
              <Link href='/coin/[id]' as={ `/coin/${id}`}>
             
              <div className={styles.coin_data}>
                <p className={styles.coin_symbol}>{rest.symbol}</p>
                <p className={styles.coin_price}>${rest.price}</p>
                {priceChange < 0 ? (
                  <p className={styles.red}>{priceChange.toFixed(2)}%</p>
                ):(
                <p className={styles.green}>{priceChange.toFixed(2)}%</p>
                )}
                <p className={styles.coin_volume}>${rest.volume}</p>
 
              </div>
                  
         </Link>
            </div>
      
        </div>
      

   

       
 
  
 
 )
}
export default Coins;
