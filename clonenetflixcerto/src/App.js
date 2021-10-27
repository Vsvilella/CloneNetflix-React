import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';


export default () =>{
  const [movielist, setMovieList] = useState([]);

useEffect(() =>{ 
  const loadAll = async() =>{
    //pegando a lista total
    let list = await tmdb.getHomeList();
    console.log(list);
    setMovieList(list);
  }

  
  loadAll();
}, []);

  return(
    <div>
      Teste
    </div>
  )
}