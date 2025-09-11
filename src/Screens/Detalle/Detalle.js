import React, { Component } from "react"

const apiKey = "68c410ee39188689628bac0d94261464"

class Detalle extends Component {
  constructor(props) {
    super(props)
    this.state = { 
        item: null 
    }
  }

  componentDidMount() {
    const id = this.props.match.params.id
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=es-ES`)
      .then((response) => response.json())
      .then((data) => {
        this.setState({ item: data })
      })
      .catch((error) => {
            console.log('El error fue: ' + error)
        })
  }

  render() {
    const item = this.state.item
    
    if (!item) {
      return <p>Cargando...</p>
    }

    const poster = item.poster_path ? `https://image.tmdb.org/t/p/w500/${item.poster_path}` : ""
    const genres = item.genres.map((genre) => genre.name).join(", ")

    return (
      <article className="detail container">
        <div className="row">
          <div className="col-md-4">
            {poster && <img src={poster} alt={item.title} className="img-fluid" />}
          </div>
          <div className="col-md-8">
            <h1>{item.title}</h1>
            <p><strong>Calificación:</strong> {item.vote_average}</p>
            <p><strong>Fecha de estreno:</strong> {item.release_date}</p>
            <p><strong>Duración:</strong> {item.runtime}</p>
            <p><strong>Géneros:</strong> {genres}</p>
            <p><strong>Sinopsis:</strong> {item.overview}</p>
          </div>
        </div>
      </article>
    )
  }
}

export default Detalle