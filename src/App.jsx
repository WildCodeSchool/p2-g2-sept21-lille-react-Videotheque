import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

import FicheFilm from './components/FicheFilm/FicheFilm';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <Header />
            <Carousel />
            <SearchBar />
            <Footer />
          </Route>

          <Route path="/FicheFilm/:id">
            <Header />
            <FicheFilm />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
