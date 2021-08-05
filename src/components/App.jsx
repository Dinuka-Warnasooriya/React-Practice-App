import React from "react";
import { BrowserRouter, Route ,Switch} from "react-router-dom";

import NameList from "./NameList/NameList";
import HeaderBar from "./Header/HeaderBar";
import Home from "./Home/Home";
import About from "./Home/About/About";


function App(){
    return(
    <div>
        <BrowserRouter>
            <HeaderBar/>
            <Switch>
            <Route path="/about">
                <About/>
            </Route>

            <Route path="/namelist">
                <NameList/>
            </Route>

            <Route path="/">
                <Home/>
            </Route>
                 
            </Switch>
           
        </BrowserRouter>
        
        
   
   
    </div>
    
    );
}

export default App;