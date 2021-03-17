import Nav from './nav';

const Layout = ({children,mainTitle,footer}) =>(
     <div>
         <Nav/>
         <h1>{mainTitle}</h1>
         <hr/>
         {children}
         <hr/>
         <h2>{footer}</h2>
     </div>
)

export default Layout;
