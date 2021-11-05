import { BrowserRouter, Route, Switch } from 'react-router-dom';
import SearchBar from './components/searchBar/SearchBar';
import Header from './components/header/Header';
import './App.css';
import Footer from './components/Footer/footer';
import Carousel from './components/carousel/Carousel';

function App() {
  return (
    <div className="main">
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Header />
            <Carousel />
            <SearchBar />
            <Footer />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
