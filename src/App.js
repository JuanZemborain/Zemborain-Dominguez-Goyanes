import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer"
import NotFound from "./screens/NotFound/NotFound"
import Home from "./screens/Home/Home";
import Movies from "./screens/Movies/Movies"
import Detalle from "./screens/Detalle/Detalle";
import SearchResults from "./screens/SearchResults/SearchResults"

function App() {
  return (
    <div className="App">
      <div className="container">

        <Header />

        <Switch>
          <Route path='/' component={Home} exact={true} />
          
          <Route path='/detalle/movie/:id' component={Detalle} exact={true} />

          <Route path='/movies/:tipo' component={Movies} exact={true} />

          <Route path='' component={NotFound} exact={true} />

          <Route path='/buscar' component={SearchResults}/>

        </Switch>

        <Footer />

      </div>

    </div>
  );
}

export default App;
