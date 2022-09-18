import React, { Component } from 'react'

class DetailMovies extends Component {

    constructor(props){
        super(props)
        this.state={
            id: this.props.match.params.id, /* Preguntar que es ese match */
            pelicula: {},
            favoritos: [],
        }
    }

    componentDidMount(){
        
        if (localStorage.length > 0) {
            this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) || [''] })
          } else {
            localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
          }

        fetch(`https://api.themoviedb.org/3/movie/${this.state.id}?api_key=fcb65972de75954111563f90b05f9fed`)
            .then(res => res.json())
            .then(data => this.setState({
                pelicula: data,
            }))
            .catch(error => console.log(error))
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

  render(){
   
    const imagen = 'https://image.tmdb.org/t/p/w342'

    return (
     <>
        <div className="titulo">
          <h2>• {this.state.pelicula.title} •</h2>
        </div>
      <section className='contenedor'>
        <div className="hijo-detail-series">
            <div className="imagen-port series">
                <img src={`${imagen}${this.state.pelicula.poster_path}`} alt={`${this.state.pelicula.title}`}/>
                <h3>{this.state.pelicula.title}</h3>
                {/* <p>${generos}</p> */}
            </div>
            <div className="detailseriessinopsis-container">                      
                <h3 className="movie"> Género: {this.state.pelicula.genre}</h3>
                <h3 className="movie"> Fecha de estreno: {this.state.pelicula.release_date}</h3>
                <h3 className="movie"> Calificacion: {this.state.pelicula.vote_average}</h3>
                <h3 className="movie"> Duración: {this.state.pelicula.runtime}</h3>
                <h3 className="movie"> Sinópsis: {this.state.pelicula.overview}</h3>
                <div className="boton-favoritos">
                    <div className="detail-favoritos">
                        <i className="fas fa-star star" id="star"></i>
                        <button className="fav">Agregar a Favoritos</button>   
                    </div>
                </div>
             </div>
        </div>
    </section>
     </>   
   
  )


}


}

export default DetailMovies;