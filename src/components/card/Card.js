import React from 'react'
import {Link} from 'react-router-dom'
function Card({pelicula}) {
let {poster_path, title, overview, id} = pelicula

const borrar = () => {
  console.log(borrar)
}

  return (

    <div className="hijo">
        <div className="imagen-port">
            <img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/>
            <h4>{title}</h4>
            <p>{overview}</p>
            <button onClick={borrar}>Borrar</button>
            <button><Link to={`/DetailMovies/id/${id}`}>Detalle</Link></button>
            <button><Link to={`//id/${id}`}>Ver Más</Link></button>
       
           

        </div>
    </div>


  )
}

export default Card