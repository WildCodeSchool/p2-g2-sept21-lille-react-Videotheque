import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Carousel from './components/carousel/Carousel';
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/header/Header';
import Footer from './components/Footer/footer';
import './App.css';
import FilterButton from './components/filterButton/FilterButton';
import Eye from './components/eye/Eye';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Carousel />
            <SearchBar />
            <Eye />
            <FilterButton />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
