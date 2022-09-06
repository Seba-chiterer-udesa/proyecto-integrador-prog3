import React from 'react';
import Header from './components/header/Header'
import Footer from './components/footer/Footer';
import Home from './pages/Home/Home';
import DetailMovies from './pages/DetailMovies/DetailMovies';
import NotFound from './pages/NotFound/NotFound';
import Favoritos from './pages/Favoritos/Favoritos';
import {Switch, Route} from 'react-router-dom'

function App() {
  return (
    <>
    <Header/>

    <Switch>
          <Route path="/" exact >
            <Home />
          </Route>
          <Route path="/favourites" component={Favoritos} />
          
          <Route path="/movies/id/:id" component={DetailMovies} />
          <Route component={NotFound}/>
    </Switch>

    <Footer/>
    </>
  );
}

export default App;
