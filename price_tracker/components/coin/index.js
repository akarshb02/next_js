import styles from '../Coin/coin.module.css'
const Coins = ({priceChange,...rest}) =>{
 
 return (
  <div className='coin_continer' >
  <div className='coin_row'>
  <div className="coin">
   <h2 className={styles.main}>{rest.name}</h2>
   <img className={styles.img} src={rest.image} />
   <h4>current_price : ${rest.price}</h4>
   <p>symbol :<strong>{rest.symbol}</strong></p>
   <p className='coin_valume'>voliume:${rest.volume}</p>

   {priceChange < 0 ? (

    <p className={styles.red}>{priceChange.toFixed(2)}%</p>
   ):(
    <p className={styles.green}>{priceChange.toFixed(2)}%</p>
 )}
 
  </div>
  </div>
  </div>
 )
}
export default Coins;
