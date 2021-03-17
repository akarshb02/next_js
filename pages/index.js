import Link from "next/link";
import Head from "next/head";

import Layout from '../components/Layout';

const mystyle = { color: 'red', border: '5px solid black', padding: '6px' }

function index() {
    return (
        <Layout mainTitle="This is  main title" 
         footer="copyright 2021">
        <Head>
            <title>Home page</title>

        </Head>

        <h1> hello </h1> 

        <Link href='/about'>
                about
        </Link>
        <p> Lorem ipsum </p>  


         <style jsx>{`
            
                p{
                    color:orange
                }
            `}
        
        </style>

        
        </Layout>
    );     
}

export default index;
