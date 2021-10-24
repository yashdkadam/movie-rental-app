import React, { Component } from "react";
import Joi from "joi-browser";
import Form from "./common/form";

class RegisterForm extends Form {
  state = {
    data: {
      title: "",
      genre: "",
      stock: "",
      rate: "",
    },
    errors: {},
  };

  schema = {
    title: Joi.string().required().label("Title"),
    genre: Joi.string().required().label("Genre"),
    stock: Joi.string().required().label("stock"),
    Rate: Joi.string().required().label("rate"),
  };

  doSubmit = () => {
    console.log("Submitted");
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("Title", "title")}
          {this.renderInput("Genre", "genre")}
          {this.renderInput("Stock", "stock")}
          {this.renderInput("Rate", "rate")}

          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default RegisterForm;
