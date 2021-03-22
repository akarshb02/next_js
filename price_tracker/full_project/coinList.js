import Coins from "./Coin";

const CoinList  = ({apiJson})  =>{
 console.log();
 return(
  <div>
        {apiJson.map(data =>{
          return(
          <Coins 
           key = {data.id}
           name ={data.name}
           price = {data.current_price}
           image = {data.image}
           symbol = {data.symbol}
           volume = {data.total_volume}
           priceChange = {data.market_cap_change_percentage_24h}
          />
          )

          })}
  </div>
 )
}
export default CoinList;
