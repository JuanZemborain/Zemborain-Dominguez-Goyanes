import React, { Component } from "react"

const apiKey = "68c410ee39188689628bac0d94261464"

class Detalle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      loading: true,
      favoritos: false,
      verFavoritos: "Agregar a favoritos",
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/${this.props.match.params.tipo}/${this.props.match.params.id}?api_key=${apiKey}&language=es-ES`)
      .then((response) => response.json())
      .then((data) => {this.setState({ item: data, loading: false })})
      .catch((error) => {console.log('El error fue: ' + error)})
  }

  botonFavorito() {
      if (this.state.favoritos === false) {
          this.agregarFavoritos();
          this.setState({
              favoritos: true,
              verFavoritos: "Sacar de Favoritos"
          });
      } else {
          this.sacarFavoritos();
          this.setState({
              favoritos: false,
              verFavoritos: "Agregar a favoritos"
          });
      }
  }

  agregarFavoritos() {        
      let recuperoStorage = localStorage.getItem("Favoritos");
      let favoritosRecuperados = recuperoStorage ? JSON.parse(recuperoStorage) : [];
      if (!favoritosRecuperados.includes(this.state.id)) {
          favoritosRecuperados.push(this.state.id);
          localStorage.setItem("Favoritos", JSON.stringify(favoritosRecuperados));
      }
  }

  sacarFavoritos() {
      let recuperoStorage = localStorage.getItem("Favoritos");
      let favoritosRecuperados = recuperoStorage ? JSON.parse(recuperoStorage) : [];
      favoritosRecuperados = favoritosRecuperados.filter(favId => favId !== this.state.id);
      localStorage.setItem("Favoritos", JSON.stringify(favoritosRecuperados));
  }

  render() {
    if (this.state.loading) {
      return <p>Cargando...</p>
    } else {

      if (this.props.match.params.tipo === "movie") {
        return (
          <article className="detail container">
            <div className="row">

              <div className="col-md-4">
                {<img src={`https://image.tmdb.org/t/p/w500/${this.state.item.poster_path}`} alt={this.state.item.title} className="img-fluid" />}
              </div>

              <div className="col-md-8">
                <h1> {this.state.item.title} </h1>
                <p> <strong> Calificación: </strong> {this.state.item.vote_average}</p>
                <p> <strong> Fecha de estreno: </strong> {this.state.item.release_date}</p>
                {<p> <strong> Duración: </strong> {this.state.item.runtime} minutos </p>}
                <p> <strong> Géneros: </strong> {this.state.item.genres.map((genre) => genre.name).join(", ")} </p>
                <p> <strong> Sinopsis: </strong> {this.state.item.overview} </p>
                <a href="" className="btn alert-primary">🩶</a>
                <button className="btn alert-primary" onClick={() => this.botonFavorito()}>
                  {this.state.verFavoritos}
                </button>
              </div>

            </div>
          </article>
        )
      } else if (this.props.match.params.tipo === "tv") {
        return (
          <article className="detail container">

            <div className="row">

              <div className="col-md-4">
                {<img src={`https://image.tmdb.org/t/p/w500/${this.state.item.poster_path}`} alt={this.state.item.title} className="img-fluid" />}
              </div>

              <div className="col-md-8">
                <h1> {this.state.item.name} </h1>
                <p> <strong> Calificación: </strong> {this.state.item.vote_average}</p>
                <p> <strong> Fecha de estreno: </strong> {this.state.item.first_air_date}</p>
                <p> <strong> Géneros: </strong> {this.state.item.genres.map((genre) => genre.name).join(", ")} </p>
                <p> <strong> Sinopsis: </strong> {this.state.item.overview} </p>
                <a href="" className="btn alert-primary">🩶</a>
                <button className="btn alert-primary" onClick={() => this.botonFavorito()}>
                  {this.state.verFavoritos}
                </button>
              </div>

            </div>

          </article>
        )
      }
    }
  }
}

export default Detalle