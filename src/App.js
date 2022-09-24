import React from "react";
import { Route, Switch } from "react-router-dom";

import Landing from "./componentes/Landing/Landing.jsx";
import Home from "./componentes/Home/Home.jsx"
import About from "./componentes/About/About.jsx"
import Create from "./componentes/Create/Create.jsx"
import MyList from "./componentes/MyList/MyList.jsx";
import CountriesDetail from "./componentes/CountriesDetail/CountriesDetail.jsx"
import Error from "./Error/Error.jsx";
import AllActivity from "./componentes/AllActivity/AllActivity.jsx";


import "./app.css";



function App() {
  return (
    <React.Fragment>


     <Switch>
      <Route exact path="/" component={Landing} />

      <Route exact path="/home" component={Home} /> 

      <Route path="/create" component={Create} /> 

      <Route path="/about" component={About} />

      <Route path="/mylist" component={MyList}/>

      <Route path="/activities" component={AllActivity}/>

      <Route  path="/detail/:id" component={CountriesDetail} />

      <Route  path="*" component={Error} />
      
      </Switch>


    </React.Fragment>
  );
}

export default App;
