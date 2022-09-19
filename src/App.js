import React from 'react';
import Nav from './components/nav/Nav'
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
    <Nav/>

    <Switch>
          <Route path="/" exact component={Home} />
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
