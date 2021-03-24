
import Layout from '../../components/Layout';
import styles from './Coin.module.css';

const Coin = ({ coin }) => {
  return (
  
      <div className={styles.coin_page}>
        <div className={styles.coin_container}>
          <img
            src={coin.image.small}
            alt={coin.name}
            className={styles.coin_image}
          />
          <h1 className={styles.coin_name}>{coin.name}</h1>
          <p>{coin.symbol}</p>
          <p className={styles.coin_current}>
            ${coin.market_data.current_price.usd}
          </p>
        </div>
      </div>
 
  );
};

export default Coin;

export async function getServerSideProps(context) {
    const { id } = context.query;
  
    const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
  
    const data = await res.json();
  
    return {
      props: {
        coin: data
      }
    };
  }
