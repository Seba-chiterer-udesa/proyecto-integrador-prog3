import React from 'react' 
import {Link} from 'react-router-dom'

export default function Nav() {

  return (

    <header>
        <nav>
                <div className="burguermenu">
                            
                </div>
                <div className="box-footer">
                <div className="box-footer">
                    <div className="logo">
                        <img src="/img/logo.png" alt="logo"/>
                    </div>
                    <div className="terms">
                    </div>
                </div>  
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
