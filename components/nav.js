import Link from 'next/link';

const Nav =()=>(
 <div>
 <img src='/static/logo.png'alt='logo' height='50' width='100'/>
    <Link href='/'>
    <a>Home</a></Link>

    <Link href='/about'>
    <a>about</a></Link>


 <style jsx>{`
  a,img {
       padding:5px
    }
 `}
  </style>
  </div>
)

export default Nav;
