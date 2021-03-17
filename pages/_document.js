import Document, {Head, Main,NextScript} from 'next/document';

class MyDocument extends Document {
   render(){
    return(
     <div>

          <html lang = 'en'>
           <head>
            <meta
               name='description'
               content='My SEO react app'
               />

              <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous"/>

           </head>
           <body>
            <Main/>
            <NextScript />
           </body>
          </html>


     </div>
    )
   }
}

export default MyDocument;
