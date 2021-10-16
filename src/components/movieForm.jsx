import React, { Component } from "react";

class MovieForm extends Component {
  handleSave = () => {
    // Navigate to /products
    this.props.history.replace("/movies");
  };

  render() {
    return (
      <div>
        <h1>Movie Form - {this.props.match.params.id}</h1>
        <button onClick={this.handleSave}>Save</button>
      </div>
    );
  }
}

export default MovieForm;
