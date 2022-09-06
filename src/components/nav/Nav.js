import React from 'react' 
import {Link} from 'react-router-dom'

export default function Nav() {
  return (
<nav>
<div class="burguermenu">
                    <i class="fas fa-bars burguer"></i>
                </div>
                {/* <div>
                    <Link className="header-nav" aria-current="page" to="/"><img/></Link>
                </div> */}
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/">Inicio</Link>
                </div>
                {/* <div className="header-nav">
                    <a href="./generos.html">Géneros</a> 
                </div> */}
                {/* <div className="header-nav">
                    <a href="./peliculas.html">Películas</a>
                </div> */}
               {/*  <div className="header-nav">
                    <a href="./series.html">Series</a>
                </div>  */}  
                <div className="header-nav">
                    <Link to='/favourites'>Favoritos</Link>
                </div>
                <div className= "header-busqueda">
                        <form action="./results.html" method="GET">
                            <input type="search" name="busqueda" value="" placeholder="Buscar películas o series"/>
                            <p class="alert"></p>
                        </form>
                        <a href="./results.html"><i class="fas fa-search lupa"></i></a>
                </div>
              
                <div className="header-registro">
                    <a href="./register.html"><input type="button" value="Registrarse"/></a>
                 </div> 
                <div className="header-registro">
                    <a href="./login.html"><input type="button" value="Login"/></a>
                </div>
                <div className="registro-logo">
                    <a href="./register.html"><i class="fas fa-user"></i></a>
                </div>
</nav>
  )
}
