import React, {Component} from 'react';
import ReactDOM from "react-dom";
import SearchForm from "./SearchForm";

import "../css/styles.css";

/*const Layout = props => (
  <div>
    <header>My Header</header>
    <main>{props.children}</main>
    <footer>My Footer</footer>
  </div>
);
*/

/*class Add extends React.Component {
  render() {
    return <div><h1>{this.props.a + this.props.b}</h1></div>;
  }
}*/

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      searchTerm: "",
      jokes: [],
      isFetchingJokes: false
    };

    this.onSearchChange = this.onSearchChange.bind(this);
    this.searchJokes = this.searchJokes.bind(this);
  }

  searchJokes(limit = 20) {
    this.setState({ isFetchingJokes: true });

    fetch(
      `https://icanhazdadjoke.com/search?term=${
        this.state.searchTerm
      }&limit=${limit}`,
      {
        method: "GET",
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(json => {
        const jokes = json.results;

        this.setState({
          jokes,
          isFetchingJokes: false
        });
      });
  }

  onSearchChange(value) {
    //saves the search term in the state of the page
    this.setState({ searchTerm: value });
  }

  renderJokes() {
    return (
      <ul>
        {this.state.jokes.map(item => (
          <li key={item.id}>{item.joke}</li>
        ))}
      </ul>
    );
  }

  render() {
    return (
      <header className="App">
        <SearchForm
          onFormSubmit={this.searchJokes}
          onSearchValueChange={this.onSearchChange}
          isSearching={this.state.isFetchingJokes}
          onSingleSearchClick={() => this.searchJokes(1)}
        />

        {this.state.isFetchingJokes
          ? "Searching for jokes..."
          : this.renderJokes()}
        <p>search term: {this.state.searchTerm}</p>
      </header>
    );
  }
}

const rootElement = document.getElementById("dadJokes");
ReactDOM.render(<App />, rootElement);
