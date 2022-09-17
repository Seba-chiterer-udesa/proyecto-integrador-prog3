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
    if (localStorage.length > 0) {
      this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) || [''] })
    } else {
      localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
    }
  }

  handleFavoritos(card){
    if (this.state.favoritos.some(fav => card.id === fav.id)) {
        this.setState({favoritos: this.state.favoritos.filter(item => item.id !== card.id)}, () => {//asincronismo del this.State ",()"
            localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
        })
        console.log(this.state.favoritos.filter(item => item.id !== card.id))
    } else {                                                               
        this.setState({favoritos: [...this.state.favoritos, card]}, () => { //el "..." significa traeme todo lo que estaba en el array favoritos y el ", card" significaa que le agrego la nueva card que te estoy pasando
            localStorage.setItem("favoritos", JSON.stringify(this.state.favoritos))
        })
    }
  }

  borrarTarjeta(id){

    const resto = this.state.favoritos.filter(favoritos => favoritos.id !== id)
    this.setState({
      favoritos: resto,
    })
  
      }

  render() {
    return (
      <>
         <div className="titulo">
            <h2>• FAVORITOS •</h2>
         </div>  

        <section className='contenedor'>

        { this.state.favoritos.length > 0 ? this.state.favoritos.map(pelicula => <Card key={pelicula.id} pelicula={pelicula} favorito={(pelicula) => this.handleFavoritos(pelicula)} borrarCard={(personajeBorrar) => this.borrarTarjeta(personajeBorrar)} />):<p> cargando</p>}

        </section>


      </>
    )
  }
}

export default Favoritos