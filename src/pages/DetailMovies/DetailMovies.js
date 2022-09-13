import React, { Component } from 'react'

class DetailMovies extends Component {

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id,
            pelicula: {}
        }
    }

    componentDidMount(){
        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=fcb65972de75954111563f90b05f9fed`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                return this.state
        ({
                
            pelicula: data
            })
        })
            .catch(err => console.log(err))
    }

  render(){
    return (
    <>
        <img src={this.state.pelicula.image} alt={this.state.pelicula.name}/>
        <h1>Detalle de {this.state.pelicula.name}</h1>
        <p>Estreno: {this.state.pelicula.estreno}</p>
    <p>Rating: {this.state.pelicula.rating}</p>
    <p>duracion: {this.state.pelicula.duracion}</p>
    <p>sinopsis: {this.state.pelicula.sinopsis}</p>
    <p>genero: {this.state.pelicula.genero}</p>
   
        
    </>
  )
}
}

export default DetailMovies;