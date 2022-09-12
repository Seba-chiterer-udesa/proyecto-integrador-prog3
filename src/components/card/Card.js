import React from 'react'

function Card({pelicula}) {
let {poster_path, title, overview} = pelicula

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
        </div>
    </div>


  )
}

export default Card