import React, { Component } from "react";
import ListaCard from "../../Components/ListaCard/ListaCard";

const apiKey = "68c410ee39188689628bac0d94261464";

class SearchResults extends Component {
  constructor(props) {
    super(props);
    this.state = { results: [] };
    this.buscar = this.buscar.bind(this);
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
    const params = new URLSearchParams(this.props.location.search);
    const q = (params.get("pelicula") || "").trim();

    if (!q) { this.setState({ results: [] }); return; }

    fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=es-ES&query=${encodeURIComponent(q)}&include_adult=false&page=1`)
      .then(res => res.json())
      .then(data => this.setState({ results: Array.isArray(data.results) ? data.results : [] }))
      .catch(() => this.setState({ results: [] }));
  }

  render() {
    const params = new URLSearchParams(this.props.location.search);
    const q = params.get("pelicula") || "";
    const { results } = this.state;

    return (
      <section>
        <h2>Resultados para “{q}”</h2>

        {q.trim() === "" ? (
          <p>Ingresá una búsqueda.</p>
        ) : results.length === 0 ? (
          <p>No encontramos resultados.</p>
        ) : (
          <ListaCard data={results} />
        )}
      </section>
    );
  }
}

export default SearchResults;