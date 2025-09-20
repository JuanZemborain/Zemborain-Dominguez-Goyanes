import React, { Component } from "react";
import ListaCard from "../../Components/ListaCard/ListaCard";

const apiKey = "68c410ee39188689628bac0d94261464";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        results: [],
        loading: true,
        
    };
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/search/${this.props.match.params.tipo}?api_key=${apiKey}&language=es-ES&include_adult=false&page=1&query=${(this.props.match.params.busqueda)}`)
      .then(response => response.json())
      .then(data => this.setState({results: data.results, loading: false}))
      .catch(() => this.setState({results: []}));
}

  render() {

    return (
      <section>
        <h2>Resultados para “{this.props.match.params.busqueda}”</h2>
        {this.state.loading ? <p> Cargando...</p> : this.state.results.length === 0 ? <p>No encontramos resultados.</p> : <ListaCard data={this.state.results}/>}
      </section>
    );
  }
}


export default SearchResults;