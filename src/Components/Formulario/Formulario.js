import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      search: '',
      tipo: 'movie'
    };

  }

  evitarSubmit(event) {
    event.preventDefault();
      this.props.history.push(`/buscar/${this.state.tipo}/${this.state.search}`);
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

        <input type="text" placeholder="Buscar películas o series..." value={this.state.search} onChange={(event) => this.controlarCambios(event)} className="form-control form-control-sm" style={{ display: 'inline-block', width: 260, marginRight: 8 }} />
         
         <select value={this.state.tipo} onChange={(event) => this.controlarTipo(event)}>
          <option value="movie">Movies</option>
          <option value="tv">Series</option>
        </select>

        <button type="submit" className="btn btn-success btn-sm">Buscar</button>

      </form>
    );
  }
}

export default withRouter(Formulario);