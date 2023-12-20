import React, { useEffect, useState } from 'react';
import './Banner.css'; 
import Axios from '../../constant/Axios';
import { imageUrl, trending } from '../../constant/url';


const Banner = () => {


const [movies, setMovies] = useState([]);

useEffect(()=>{

  Axios.get( `${trending}` ).then((response)=>{
      setMovies(response.data.results[0])
    }).catch((err)=>{
      console.log(err)
    })

},[]);


console.log("====movies===", movies)


  return (
    <div className="ba-main">
    <div style={{backgroundImage:`url(${movies ? imageUrl + movies.backdrop_path: ""})`}} className="Banner2">
       
       <div className="content">
           <h1 className="title">{movies.length !== 0 ? movies.title : ""}</h1>

           <div className="banner_buttons">
               <button className="button1">Play</button>
               <button className="button1">My list</button>
               <p className="banner-p">{movies.length !== 0 ? movies.overview : ""}</p>
           </div>

       </div>

 <div className="fade_bottom"></div>
    </div>
    </div>
  ) 
  }
export default Banner;
