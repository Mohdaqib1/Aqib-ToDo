import './App.css';

import FirstComponents from './Components/FirstComponents';


import { BrowserRouter as Router, Switch , Route , Link} from "react-router-dom";
 
export default function App() {
  
  return (







    <Router>
      <div>
      <header>
        <h1 className="he">Wellcome Todo</h1>
       
        <Link to="/" > <h4 className="he1">--Go First Page</h4>   <p/></Link>
     </header>
     











        <Switch>
          <Route path="/secondcomponents" component>
            <FirstComponents   />
          </Route>
         
          <Route path="/">
            <Home  />          
          </Route>
        </Switch>
      </div>
    </Router>
  );
}






function Home() {
  return(
    <div>
     <div className="da">
         <h2 >
             Add Item
         </h2><p/>
         <Link to="/secondcomponents" ><button className="bu">click</button>   <p/></Link>
           
        
    </div>
    </div>
);
}


