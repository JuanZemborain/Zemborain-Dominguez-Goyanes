import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = { search: '' };
  }

  evitarSubmit(event) {
    event.preventDefault();
    if (this.state.search.trim()) {
            this.props.history.push(`/buscar/${this.state.search}`);
    }
  }

  controlarCambios(event) {
    this.setState({ search: event.target.value });
  }

  render() {
    return (
      <form onSubmit={(event) => this.evitarSubmit(event)} className="search-form my-3">
        <input type="text" placeholder="Buscar películas..." value={this.state.search} onChange={(event) => this.controlarCambios(event)} className="form-control form-control-sm" style={{ display: 'inline-block', width: 260, marginRight: 8 }} />
        <button type="submit" className="btn btn-success btn-sm">Buscar</button>
      </form>
    );
  }
}

export default withRouter(Formulario);