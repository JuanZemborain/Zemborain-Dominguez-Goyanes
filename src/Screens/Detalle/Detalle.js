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
      id: this.props.match.params.id,
      tipo: this.props.match.params.tipo
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/${this.props.match.params.tipo}/${this.props.match.params.id}?api_key=${apiKey}`)
      .then((response) => response.json())
      .then((data) => {this.setState({ item: data, loading: false });

        let recuperoStorage = localStorage.getItem("Favoritos");
        let favoritosRecuperados = JSON.parse(recuperoStorage) || [];

        console.log(favoritosRecuperados);
        

        const repetidos = favoritosRecuperados.filter(favorito => 
                         favorito.id == this.state.id && favorito.tipo == this.state.tipo)
                        
        if (repetidos.length > 0) {
          console.log("entre aca");
          
            this.setState({
                favoritos: true,
                verFavoritos: "Sacar de Favoritos",
            });
        }

        
      })
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
    const nuevoFavorito = {id: this.state.id, tipo: this.state.tipo}
    const repetidos = favoritosRecuperados.filter(favorito => 
                        favorito.id == nuevoFavorito.id && favorito.tipo == nuevoFavorito.tipo)
        
    if (repetidos.length === 0) {
        
        favoritosRecuperados.push(nuevoFavorito);
        localStorage.setItem("Favoritos", JSON.stringify(favoritosRecuperados));
    }
  }

  sacarFavoritos() {
        let recuperoStorage = localStorage.getItem("Favoritos");
        let favoritosRecuperados = recuperoStorage ? JSON.parse(recuperoStorage) : [];
        favoritosRecuperados = favoritosRecuperados.filter(favorito => 
                              !(favorito.id == this.state.id && favorito.tipo == this.state.tipo));
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
                <button className="btn alert-primary" onClick={() => this.botonFavorito()}> 
                  {this.state.verFavoritos == "Agregar a favoritos" ? '🩶' : '❤️'} 
                </button>
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
                <button className="btn alert-primary" onClick={() => this.botonFavorito()}> 
                  {this.state.verFavoritos == "Agregar a favoritos" ? '🩶' : '❤️'} 
                </button>
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