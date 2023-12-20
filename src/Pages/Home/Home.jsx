import React, { Component } from 'react';

import Navbar from '../../Components/Navbar/Navbar.jsx';
import Banner from '../../Components/Banner/Banner.jsx';
import RowPost from '../../Components/Rowpost/RowPost.jsx';
import {horrorMovies, action, originals} from "../../constant/url";


class Home extends Component {

render() {

return (

    <div>



       <Navbar />
       <Banner /> 
        <RowPost url={originals} title="Originals"  isSmall={false} />
        <RowPost url={action} title="Action" isSmall={true} />
        <RowPost url={horrorMovies} title="Horror" isSmall={true} />

    </div>

)




}


}



export default Home;
