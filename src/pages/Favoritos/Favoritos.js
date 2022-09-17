import React, { Component } from 'react';
/* import Header from '../../components/header/Header'; */
import Card from '../../components/card/Card';

class Favoritos extends Component {
  constructor() {
    super()
    this.state = {
      favoritos: []
    }
  }

  componentDidMount() {
    this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) })
  }

  render() {
    return (
      <>
         <div className="titulo">
            <h2>• FAVORITOS •</h2>
         </div>  

        <section className='contenedor'>

        { this.state.favoritos.length > 0 ? this.state.favoritos.map(pelicula => <Card key={pelicula.id} pelicula={pelicula} favorito={(pelicula) => this.handleFavoritos(pelicula)} />):<p> cargando</p>}

        </section>


      </>
    )
  }
}

export default Favoritos