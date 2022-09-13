import React, {Component} from 'react';
import Card from '../../components/card/Card';
/* import Header from '../../components/header/Header'; */

class Home extends Component {

  constructor() {
    super();
    this.state = {
      cargando: true,
      populares: [],
      encartel: [],
      filtradas: [],
      filtradasBy:[],
      favoritos: []
    };
  }    

 componentDidMount(){
    const populares = "https://api.themoviedb.org/3/movie/popular?api_key=fcb65972de75954111563f90b05f9fed"
    fetch(populares)
        .then((res)=> res.json())
        .then(datos =>{ 
            console.log(datos)
             return this.setState({
            populares: datos.results,
        })})
        .catch( err => console.log(err))

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
 filtrarPeliculas(filtro){

  if(filtro== ''){
    return 
  }
  else{


    const url = `https://api.themoviedb.org/3/search/movie/?api_key=93e508f17b507f9418365fe0a4069252&query=${filtro}`
    fetch(url)
        .then((res)=> res.json())
        .then(datos =>{ 
            
            this.setState({filtradas: datos.results})

        })
        .catch( err => console.log(err))
      }
 }

 handleChange(e){
  this.setState({
    filterBy: e.target.value
  },()=>{
    this.filtrarPeliculas(this.state.filterBy)
  })
 }

 agregarMas() {
  // Logica para agregar mas personajes
 }

  render() {
    return ( 
<>
{/* <div className= "header-busqueda">
                        <form action="" method="GET">
                            <input type="search" name="busqueda"  placeholder="Buscar películas o series"
                             />
                            <p className="alert"></p>
                        </form>
                        <a href="./results.html"><i className="fas fa-search lupa"></i></a>
                </div> */}

                {/* {this.state.filterBy==""?<> */} 
    <div className="titulo">
          <h2>• LO MÁS VISTO EN PELÍCULAS •</h2>
    </div>
    <section className='contenedor'>
            {this.state.cargando === false ? (
             <p>Cargando</p>
            ) : (
            this.state.populares.map(pelicula =>(
               <Card key={pelicula.id} pelicula={pelicula}/>)
           )
           )  
            }
            
    </section>
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
// :<>   <div className='card-container'>
// {this.state.cargando === false ? (
//       <p>Cargando</p>
//     ) : (
//   this.state.filtradas.map(filtrada =>(
//       <Pelicula 
  
//        key={filtrada.id}
//        pelicula={filtrada}
//        favorito={(filtrada)=> this.handleFavoritos (filtrada)}
//        />)
 
//       )
  
//   )
  
//     }
// </div> 

// </>}

    
    )
          
    
  }
}
export default Home;