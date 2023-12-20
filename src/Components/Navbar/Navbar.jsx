import React, { Component } from 'react';
import './Navbar.css';

import logo from '../../assets/logo/logo.jpg';
import avatar from '../../assets/logo/avatar.png';

class Navbar extends Component {

render() {

return (
<>

<header className='navbar1'>

    <img className="logo" src={logo} />      
    <img className="avatar" src={avatar} /> 
 

</header>
</>

)




}


}



export default Navbar;
