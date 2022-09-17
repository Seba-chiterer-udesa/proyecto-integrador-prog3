import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Card extends Component {

  constructor(props){
      super(props)
      this.state = {
         description: false,
      }
  }

  vermas() {
    if (this.state.description) { 
      this.setState({description: false })
    }else{
      this.setState({description: true })
    }
    console.log("vermas")
  }

 
  render() {
    let {poster_path, title, id} = this.props.pelicula
      return (
        <div className="hijo">
        <div className="imagen-port">

            <Link to={`/movies/id/${id}`}><img src={`https://image.tmdb.org/t/p/original${poster_path}`} alt={poster_path}/></Link>
            <h3>{title}</h3>  

            <div className='buttons'>

            <button className='button'><Link to={`/movies/id/${id}`}>Detalle</Link></button>
            <button className='button' onClick= {()=> this.props.favorito(this.props.pelicula)}>Favoritos</button>
            <button className='button' onClick={()=> this.props.borrarCard(id)}>Borrar</button> 
            {this.state.description === true ? <p> {this.props.pelicula.overview} <button className='buttonvermas' onClick={()=> this.vermas()}>Ver menos</button>  </p> : <button className='buttonvermas' onClick={()=> this.vermas()}>Ver mas</button> }

            </div>                          
            
            
        </div>
    </div>

      )
  }
}

export default Card;