import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import FicheFilm from './components/FicheFilm/FicheFilm';
import Categories from './components/Categories/Categories';
import Watchlist from './components/watchlist/Watchlist';
import './App.css';
import AboutUs from './components/AboutUs/AboutUs';

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

          <Route exact path="/FicheFilm/:id">
            <Header />
            <FicheFilm />
            <Footer />
          </Route>

          <Route path="/Categories">
            <Header />
            <Categories />
            <Footer />
          </Route>

          <Route path="/Watchlist">
            <Header />
            <Watchlist />
            <Footer />
          </Route>
          <Route path="/AboutUs">
            <Header />
            <AboutUs />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
