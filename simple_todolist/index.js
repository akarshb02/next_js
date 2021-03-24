import Head from 'next/head'
import {useState} from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {

  const [todo,setTodo] = useState(['todo1,todo2'])
  const [press,setPress] = useState()

const handleChange =(e)=>{
    e.preventDefault();
    setPress(e.target.value)
  }

  const handleSubmit=()=>{
    setTodo([...todo,press])
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>To-do</title>
     
      </Head>

      <input className={styles.input} type='text' value={press} onChange={handleChange}/>
      <button className={styles.button} onClick={handleSubmit}>Add</button>
    

      {todo.map(items=>(<li><strong>{items}</strong></li>))}

    </div>
  )
}
