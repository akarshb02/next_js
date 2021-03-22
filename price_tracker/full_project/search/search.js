import style from './search.module.css'
const Search = ({...rest}) =>{

 return (
  <div className={style.coin_search}>
      
        <input  className={style.coin_input}{...rest} />
        <button className={style.button}>Submit</button>
        
  </div>
 )
}



export default Search;
