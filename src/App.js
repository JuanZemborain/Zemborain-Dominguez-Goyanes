import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import NotFound from "./Screens/NotFound/NotFound"
import Home from "./Screens/Home/Home";
import Movies from "./Screens/Movies/Movies"
import Detalle from "./Screens/Detalle/Detalle";
import SearchResults from "./Screens/SearchResults/SearchResults";
import MoviesPopular from "./Screens/MoviesPopular/MoviesPopular";
import MoviesNow from "./Screens/MoviesNow/MoviesNow";
import Favoritos from "./Screens/Favoritos/Favoritos"
import SeriesTop from "./Screens/SeriesTop/SeriesTop"
import SeriesAiring from "./Screens/SeriesAiring/SeriesAiring"

function App() {
  return (
    <div className="App">
      <div className="container">

        <Header />

        <Switch>
          <Route path='/' component={Home} exact={true} />
          
          <Route path='/detalle/:tipo/:id' component={Detalle} exact={true} />

          <Route path='/movies/populares' component={MoviesPopular} exact={true} />

          <Route path='/movies/now-playing' component={MoviesNow} exact={true} />

          <Route path='/series/top-rating' component={SeriesTop} exact={true} />

          <Route path='/series/airing-today' component={SeriesAiring} exact={true} />

          <Route path='/movies/:tipo' component={Movies} exact={true} />

          <Route path='/buscar/:tipo/:busqueda' component={SearchResults} />

          <Route path="/favoritos" exact={true} component={Favoritos}/>

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </div>

    </div>
  );
}

export default App;
