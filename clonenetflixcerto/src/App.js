import React, {useEffect, useState} from 'react';
import tmdb from './tmdb';
import movieRow from './components/movieRow';


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
    <div className="page">
      <section className="Lists">
        {movielist.map((item, key)=>( 
          <movieRow key={key}/>
        ))}
      </section>
    </div>
  )
}