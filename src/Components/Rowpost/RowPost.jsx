import React, {useEffect, useState } from 'react';
import Axios from '../../constant/Axios';
import poster from '../../assets/posters/1.jpg';
import './RowPost.css';
import { api_key } from '../../constant/ApiKey';
import { imageUrl } from '../../constant/url';
import YouTube from 'react-youtube';


const RowPost = (props) => {

  const [rowPost, setRowPost] = useState([]);
  const [idPost, setID] = useState([]);

  useEffect(()=>{

    Axios.get(props.url)
    .then((response)=>{
        setRowPost(response.data.results)
      }).catch((err)=>{
        console.log(err)
      })
  
  },[]);

  const handleTrailers = (movie)=>{

Axios.get(
  `movie/${movie.id}/videos?api_key=${api_key}&language=en-US`
  ).then((response)=>{
     console.log("====hhhh===", response.data.results[0].key)
     setID(response.data.results[0].key)
     console.log("========my data======", response.data.results[0].key)

  }).catch((error)=>{
    console.log(error)
  });

  };

  const opts = {
   height:'390',
   width:'1000',
   playerVars: {
     autoplay: 0,
   }
  };

  console.log("test dataaa aaaa", idPost)
  return (
    <div className='RowPost'>
        <h2 className='post-title'>{props.title}</h2>
        <div className='posters'>

        {rowPost.map((movie)=>{
            return(
             <img onClick={()=>handleTrailers(movie)} className={props.isSmall === true ? "small-posters" : "poster"} src={`${imageUrl + movie.backdrop_path}`} alt=""/>
            );
        })}
        
        </div>
        {idPost && <YouTube videoId={idPost} opts={opts}  />}
    </div>
  )
}

export default RowPost;
