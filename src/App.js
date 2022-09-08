import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import DetailMovies from './pages/DetailMovies/DetailMovies';
import NotFound from './pages/NotFound/NotFound';
import Favoritos from './pages/Favoritos/Favoritos';
import Populares from './pages/Populares/Populares';
import Encartel from './pages/Encartel/Encartel';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>

    <Switch>
          <Route path="/" exact='true' component={Home} />
          <Route path="/populares"  component={Populares} />
          <Route path="/encartel"  component={Encartel} />
          <Route path="/favourites" component={Favoritos} />
          <Route path="/movies/id/:id" component={DetailMovies} />
          <Route component={NotFound}/>
    </Switch>

    <Footer/>
    </>
  );
}

export default App;
