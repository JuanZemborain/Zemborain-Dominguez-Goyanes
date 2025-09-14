import React, { Component } from "react";
import ListaCard from "../../Components/ListaCard/ListaCard";

const apiKey = "68c410ee39188689628bac0d94261464";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        results: [] 
    };
  }

  componentDidMount() {
    this.buscar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.buscar();
    }
  }

buscar() {
  const query = (this.props.match.params.pelicula || "").trim();
  
  if (!query) { 
    this.setState({ results: [] }) 
} else {
  fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&include_adult=false&page=1&query=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => this.setState({ results: data.results ? data.results : [] }))
    .catch(() => this.setState({ results: [] }));
}}

  render() {
    const query = (this.props.match.params.pelicula || "").trim();
    const results = this.state.results;

    return (
      <section>
        <h2>Resultados para “{query}”</h2>
        {query.trim() === "" ? <p>Ingresá una búsqueda.</p> : results.length === 0 ? <p>No encontramos resultados.</p> : <ListaCard data={results} />}
      </section>
    );
  }
}

export default SearchResults;