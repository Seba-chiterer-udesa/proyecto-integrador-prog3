import React, { Component } from 'react';
import Card from '../../components/card/Card';
/* import Header from '../../components/header/Header'; */


class Encartel extends Component {
   
  constructor() {
    super();
    this.state = {
      cargando: true,
      encartel: [],
      favoritos: [],
      results: [],
      filterBy:'',
    };
  }    

 componentDidMount(){

            if (localStorage.length > 0) {
              this.setState({ favoritos: JSON.parse(localStorage.getItem('favoritos')) || [''] })
            }else {
              localStorage.setItem('favoritos', JSON.stringify(this.state.favoritos))
            }

        const encartel = "https://api.themoviedb.org/3/movie/now_playing?api_key=fcb65972de75954111563f90b05f9fed"
        fetch(encartel)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                 return this.setState({
                encartel: datos.results,
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
          encartel: this.state.encartel.concat(data.results)
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

borrarTarjetaCartel(id){
    
  const resto = this.state.encartel.filter(encartel => encartel.id !== id)
  this.setState({
    encartel: resto
  })

}


filrarEncartel(filtro){
  let filtradas = this.state.encartel.filter(pelicula => pelicula.title.includes(filtro))
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
          {filterBy: e.target.value}, ()=>{this.filtrarEncartel(this.state.filterBy)})
  }
  //console.log (e.target.value)
}  

  render() {
    return ( 
 <>

       <div className='titulo'> 
            <form>
                <input type='search' name='search' placeholder='Buscar en Cartel...' onChange={(e)=>{this.handleChange(e)}} value={this.state.filterBy}/>
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
                 <h2>• PELÍCULAS EN CARTEL •</h2>
                 <button className='vermas' onClick={()=>this.agregarMas()}>Más Peliculas</button>
           </div>
            <section className='contenedor1'>
                   {this.state.cargando === false ? (
                    <p>Cargando</p>
                   ) : (
                    this.state.encartel.map(pelicula =>(
                    <Card key={pelicula.id} pelicula={pelicula} favorito={(pelicula)=> this.handleFavoritos(pelicula)} borrarCard={(personajeBorrar) => this.borrarTarjetaCartel(personajeBorrar)}/>)
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

export default Encartel