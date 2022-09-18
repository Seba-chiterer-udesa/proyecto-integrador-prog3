import React, { Component } from 'react';
import Card from '../../components/card/Card';


class Populares extends Component {
   
  constructor() {
    super();
    this.state = {
      cargando: true,
      populares: [],
      favoritos: [],
      results: [],
      filterBy: '',
    };
  }    

  componentDidMount(){

    if (localStorage.length > 0) {
      this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) || [''] })
    } else {
      localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
    }

    const populares = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(populares)
        .then((res)=> res.json())
        .then(datos =>{ 
            console.log(datos)
             return this.setState({
            populares: datos.results,
            more: datos.page
        })})
        .catch( err => console.log(err))    
    
 }

 agregarMas(){
  const more = `https://api.themoviedb.org/3/movie/popular?api_key=c0945689b0a582e110971301d6ea8be2&language=es&page=${this.state.more+1}`
  fetch(more)
      .then((res)=>res.json())
      .then(data=>this.setState({
          more:data.page,
          populares: this.state.populares.concat(data.results)
      }))
      .catch((error)=>{console.log(error)})
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

  const resto = this.state.populares.filter(populares => populares.id !== id)
  this.setState({
    populares: resto,
  })
    }


  filrarPopulares(filtro){
      let filtradas = this.state.populares.filter(((pelicula) => {return pelicula.title.toLowerCase().includes(filtro.toLowerCase())} ))
      this.setState({results: filtradas})      
  }

  handleChange(e){
      if (e.target.value.length === 0) {
          e.preventDefault()
          this.setState(
              {filterBy: '',
              results: [],
          })
      } else {
          this.setState(
              {filterBy: e.target.value}, 
              ()=>{this.filtrarPopulares(this.state.filterBy)})
      }
      //console.log (e.target.value)
  }  

  render() {
    return (
      <>

       <div className='titulo'> 
            <form>
                <input type='search' name='search' placeholder='Buscar Populares...' onChange={(e)=>{this.handleChange(e)}} value={this.state.filterBy}/>
            </form>
       </div>

       {this.state.results.length  ?  

        <>

          <div className="titulo">
             <h2>• RESULTADOS DE BUSQUEDA • </h2>
          </div>  
    
          <section className='contenedor'>
                    {this.state.cargando === false ? (
                     <p>Cargando</p>
                   ) : (
                    this.state.results.map(results =>(
                      <Card key={results.id} pelicula={results} favorito={(results)=> this.handleFavoritos(results)}/>)
                  )
                   )   
                    }      
          </section>

        </>
        :
        <>
            <div className="titulo">
                      <h2>• PELÍCULAS POPULARES •</h2>
                      <button className='vermas' onClick={()=>this.agregarMas()}>Más Peliculas</button>
            </div>
            <section className='contenedor'>
                    {this.state.cargando === false ? (
                     <p>Cargando</p>
                    ) : (
                    this.state.populares.map(pelicula =>(
                    <Card key={pelicula.id} pelicula={pelicula} favorito={(pelicula)=> this.handleFavoritos(pelicula)} borrarCard={(personajeBorrar) => this.borrarTarjeta(personajeBorrar)}/>)
                    )
                  )  
                }      
            </section>
    
         </>
        
         }
      </>
    )
  }
}

export default Populares