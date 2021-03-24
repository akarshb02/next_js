import style from './search.module.css'
import React,{useState} from 'react';
import Link from 'next/link';
import Coins from '../Coin';

import Layout from '../Layout';

const Search = () =>{
      let [search,setSearch] = useState('')
      const [print,setPrint] = useState()
      const [submit,setSubmit] = useState('Submit')
      const router = useRouter();
    
       

const handleChange = (e)=>{
      e.preventDefault();
      setPrint(false);
      setSearch(e.target.value)
}


 return (
      
      
            <Link href={'/coins/[id]'} as={`/coins/${search}`}>
                  <div className={style.coin_search}>
                        <input className={style.coin_input} placeholder="Search" value={
                              print?<h1>{search}</h1>:null}
                        onChange={handleChange}/>
                        <button className={style.button} onClick={()=>{
                              setTimeout(true)
                        }}>{submit}</button>
                        </div>
                      
            </Link>

           
      
            
  
            

    

 )
}


      
export default Search;
