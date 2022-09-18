import React from 'react' 
import {Link} from 'react-router-dom'

export default function Nav() {

  return (

    <header>
        <nav>
                <div className="burguermenu">
                            
                </div>
                <div id="logo" > 
                    <Link to="/"> <img className="logo" src="/img/logo.png"/>       </Link>
                    
                     </div>
                
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/">Inicio</Link>
                </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/populares">Populares</Link>
                </div>
                <div className="header-nav">
                    <Link className="header-nav" aria-current="page" to="/encartel">En Cartel</Link>
                </div>  
                <div className="header-nav">
                    <Link className="header-nav" to='/favourites' aria-current="page">Favoritos</Link>
                </div>
          </nav>
    </header>
            
  )
}
