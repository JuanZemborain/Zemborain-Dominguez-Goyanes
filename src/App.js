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

function App() {
  return (
    <div className="App">
      <div className="container">

        <Header />

        <Switch>
          <Route path='/' component={Home} exact={true} />
          
          <Route path='/detalle/movie/:id' component={Detalle} exact={true} />

          <Route path='/movies/popular' component={MoviesPopular} exact={true} />

          <Route path='/movies/now_playing' component={MoviesNow} exact={true} />

          <Route path='/movies/:tipo' component={Movies} exact={true} />

          <Route path='/buscar/:pelicula' component={SearchResults} />

          <Route path="/favoritos" exact={true} component={Favoritos}/>

          <Route component={NotFound} />

        </Switch>

        <Footer />

      </div>

    </div>
  );
}

export default App;
