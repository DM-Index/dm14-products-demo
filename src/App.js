import React, { Component } from "react";
import axios from "axios";
import Product from "./Product";
import SelectedItem from "./SelectedItem";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
      selected: false,
      selectedId: -1
    };
    this.selectItem = this.selectItem.bind(this);
    this.unselectItem = this.unselectItem.bind(this);
  }
  componentDidMount() {
    axios.get("/api/products").then(({ data }) => {
      console.log("data: ", data);
      this.setState({
        products: data
      });
    });
  }

  selectItem(id) {
    this.setState({
      selected: true,
      selectedId: id
    });
  }
  unselectItem() {
    this.setState({
      selected: false,
      selectedId: -1
    });
  }

  render() {
    let selectedItem = this.state.products.find(
      item => item.id === this.state.selectedId
    );
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        {!this.state.selected && <div className="prod-container">{prods}</div>}
        {this.state.selected && (
          <div className="prod-container">
            <SelectedItem unselectItem={this.unselectItem} {...selectedItem} />
          </div>
        )}
      </div>
    );
  }
}

export default App;
