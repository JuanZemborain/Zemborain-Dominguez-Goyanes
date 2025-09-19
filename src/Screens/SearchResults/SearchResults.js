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
    this.buscar();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.match.params.busqueda !== this.props.match.params.busqueda) {
      this.buscar();
    }
  }

buscar() {
  const query = (this.props.match.params.busqueda);
  
  const tipo = (this.props.match.params.tipo)
  if (!query) { 
    this.setState({ results: [] }) 
} else {
  fetch(`https://api.themoviedb.org/3/search/${tipo}?api_key=${apiKey}&language=es-ES&include_adult=false&page=1&query=${encodeURIComponent(query)}`)
    .then(response => response.json())
    .then(data => this.setState({results: data.results, loading: false}))
    .catch(() => this.setState({results: []}));
}}

  render() {
    const query = (this.props.match.params.busqueda || "").trim();
    const results = this.state.results;


    return (
      <section>
        <h2>Resultados para “{query}”</h2>
        {this.state.loading ? <p> Cargando...</p>:results.length === 0 ? <p>No encontramos resultados.</p> : <ListaCard data={results} tipo= "tv" />}
      </section>
    );
  }
}

export default SearchResults;