import './App.css';
import { Switch, Route } from "react-router-dom"
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer"
import NotFound from "./Screens/NotFound/NotFound"
import Home from "./Screens/Home/Home";
import Movies from "./Screens/Movies/Movies"
import Detalle from "./Screens/Detalle/Detalle";

function App() {
  return (
    <div className="App">
      <div class="container">

        <Header />

        <Switch>
          <Route path='/' component={Home} exact={true} />
          
          <Route path='/detail/:id' component={Detalle} exact={true} />

          <Route path='/movies/:tipo' component={Movies} exact={true} />

          <Route path='' component={NotFound} exact={true} />

        </Switch>

        <Footer />

      </div>

    </div>
  );
}

export default App;
