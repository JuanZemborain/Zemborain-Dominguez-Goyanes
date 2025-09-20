import React, { Component } from "react"

const apiKey = "68c410ee39188689628bac0d94261464"

class Detalle extends Component {
  constructor(props) {
    super(props)
    this.state = {
      item: null,
      loading: true
    }
  }

  componentDidMount() {
    fetch(`https://api.themoviedb.org/3/${this.props.match.params.tipo}/${this.props.match.params.id}?api_key=${apiKey}&language=es-ES`)
      .then((response) => response.json())
      .then((data) => {this.setState({ item: data, loading: false })})
      .catch((error) => {console.log('El error fue: ' + error)})
  }

  render() {
    if (this.state.loading) {
      return <p>Cargando...</p>
    } else {

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
            </div>

          </div>
        </article>
      )
    }
  }
}

export default Detalle