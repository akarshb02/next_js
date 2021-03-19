import style from './search.module.css'
const Search = ({...rest}) =>{
 return (
  <div className={style.coin_search}>
  
        <input  className={style.coin_input}{...rest} />
  </div>
 )
}
export default Search;
