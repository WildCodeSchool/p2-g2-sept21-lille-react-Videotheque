import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/header/Header';
import './App.css';
import Footer from './components/Footer/footer';
import FicheFilm from './components/FicheFilm/FicheFilm';

function App() {
  return (
    <div className="main">
      <Router>
        <Switch>
          <Route exact path="/Home">
            <Header />
            <SearchBar />
            <Footer />
          </Route>
          <Route path="/FicheFilm">
            <Header />
            <FicheFilm />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
