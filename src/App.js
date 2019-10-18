import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import history from './history';
import Search from './Search';
import Films from './components/Films';
import People from './components/People';
import Planets from './components/Planets';
import Species from './components/Species';
import Starships from './components/Starships';
import Vehicles from './components/Vehicles';
import ErrorPage from './ErrorPage.js';
import Loading from './loading';
import starWars from './starwars.svg';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);

    this.BASE_URL = 'https://swapi.co/api/';
    this.state = {
      data: [],
      searching: false
    };
  }

  search = (searchTerm, filter) => {
    history.push('/');
    this.setState({ searching: true });
    fetch(`${this.BASE_URL}${filter}${searchTerm ? '/?search=' + searchTerm : ''}`)
      .then(res => res.json())
      .then(data => {
        if (data.next)
          this.getAll(data).then(results => {
            console.log(results);
            let flatResults = [];
            results.forEach(arr => arr.forEach(item => flatResults.push(item)));
            this.setState({ data: flatResults, searching: false });
            history.push(`/${filter}`);
          });
        else {
          this.setState({ data: data.results, searching: false });
          history.push(`/${filter}`);
        }
      })
      .catch(err => console.log(err));
  };

  getAll(data, results = []) {
    console.log('fetching next page of data');
    console.log(data.next);
    if (!data.next) return results;

    return fetch(`${data.next}`)
      .then(res => res.json())
      .then(newData => {
        results = [...results, newData.results];
        return this.getAll(newData, results);
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <>
        <Route path="/">
          <header>
            <img className="logo" src={starWars} alt="star wars logo" />
            <h1>Search App</h1>
          </header>

          <Search search={this.search} />
        </Route>
        <main className="App">
          <ErrorPage>
            <ul className="searchResults">
              <Route path="/" render={() => (this.state.searching ? <Loading /> : <div></div>)} />
              <Route path="/films" render={() => <Films data={this.state.data} />} />
              <Route path="/people" render={() => <People data={this.state.data} />} />
              <Route path="/planets" render={() => <Planets data={this.state.data} />} />
              <Route path="/species" render={() => <Species data={this.state.data} />} />
              <Route path="/starships" render={() => <Starships data={this.state.data} />} />
              <Route path="/vehicles" render={() => <Vehicles data={this.state.data} />} />
            </ul>
          </ErrorPage>
        </main>
      </>
    );
  }
}
