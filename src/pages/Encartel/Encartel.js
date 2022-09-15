import React, { Component } from 'react';
import Card from '../../components/card/Card';
/* import Header from '../../components/header/Header'; */

class Encartel extends Component {
   
  constructor() {
    super();
    this.state = {
      cargando: true,
      encartel: [],
    };
  }    

 componentDidMount(){

        const encartel = "https://api.themoviedb.org/3/movie/now_playing?api_key=fcb65972de75954111563f90b05f9fed"
        fetch(encartel)
            .then((res)=> res.json())
            .then(datos =>{ 
                console.log(datos)
                 return this.setState({
                encartel: datos.results,
            })})
            .catch( err => console.log(err))
 }


  render() {
    return ( 
<>
    <div class="titulo">
          <h2>• PELÍCULAS EN CARTEL •</h2>
    </div>
    <section className='contenedor1'>
            {this.state.cargando === false ? (
             <p>Cargando</p>
            ) : (
            this.state.encartel.map(pelicula =>(
             <Card key={pelicula.id} pelicula={pelicula}/>)
          )
           )  
            }
    </section>
</>
 
    )      
  }
}

export default Encartel