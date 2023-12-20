import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.js';
import $ from 'jquery';

import Home from './Pages/Home/Home.jsx';
import Banner from './Components/Banner/Banner.jsx'

//entry tasks


import axios from 'axios';


import {
    
BrowserRouter as Router,
Switch ,
Route ,
Link

} from 'react-router-dom';



class App extends Component {

render() {

return (


<Router>

<Switch>


<Route exact path="/">

 <Home />

</Route>

<Route exact path="/Banner">

 <Banner />

</Route>


</Switch>

</Router>


)




}


}



export default App;
