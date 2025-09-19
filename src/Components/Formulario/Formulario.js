import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' ,
      tipo: "movie" //por deafult arranca en movie
    };

  }

  evitarSubmit(event) {
    event.preventDefault();
      this.props.history.push(`/buscar/${this.state.tipo}/${this.state.search}`); //le mandamos dos parametros a ne misma ruta
    
  }

  controlarCambios(event) {
    this.setState({ search: event.target.value });
  }
  controlarTipo(event) {
    this.setState({ tipo: event.target.value });
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)} className="search-form my-3">
        <input type="text" placeholder="Buscar películas..." value={this.state.search} onChange={(event) => this.controlarCambios(event)} className="form-control form-control-sm" style={{ display: 'inline-block', width: 260, marginRight: 8 }} />
        < label>Movie </label> <input onChange={(e) => this.controlarTipo(e)} type="radio" name="tipo" value="movie" />
        < label> Series</label><input onChange={(e) => this.controlarTipo(e)} type="radio" name="tipo" value="tv" />
             
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Formulario);