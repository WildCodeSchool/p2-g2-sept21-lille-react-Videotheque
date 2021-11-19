import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/searchBar/SearchBar';
import Watchlist from './components/watchlist/Watchlist';
import Header from './components/header/Header';
import FicheFilm from './components/FicheFilm/FicheFilm';
import Footer from './components/footer/Footer';
import Categories from './components/Categories/Categories';
import './App.css';

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
          <Route path="/Categories">
            <Header />
            <Categories />
          </Route>
          <Route path="/Watchlist">
            <Header />
            <Watchlist />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
