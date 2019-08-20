import React, { Component } from 'react';
import UserData from './component/UserData'
import Button from './component/Button';
import axios from 'axios'

import './App.css'


class App extends Component {
  state = {
    users: [],
    ageSort: [],
    citySort: [],
    loading: false,
    hasMore: true,
    dataLength: 10
  }

  componentDidMount() {
    const { dataLength} = this.state
    const url = `https://randomuser.me/api/?results=${dataLength}`
    axios.get(url)
      .then(users => {
        this.setState({
          users: users.data.results
        })
      })
      .catch(error => {
        console.log(error);
      });
  }

  handleLoad = () => {
    let users = this.state.users
    this.setState({
      loading: true,
    });
    if (users.length > 10) {
      this.setState({
        hasMore: false,
        loading: false,
      });
      return;
    }
  }

  fetchMoreData = async () => {
    await this.setState((prev) => {
      return {dataLength: prev.dataLength + 10};
    });
    const {dataLength} = this.state
    const url = `https://randomuser.me/api/?results=${dataLength}`
    await axios.get(url)
      .then(users => {
        this.setState({
          users: users.data.results
        })
      })
      .catch(error => {
        console.log(error);
      });
  };

  sortByAge = () => {
    const {users} = this.state
    this.setState({
      users: users.sort(this.compareAge)
    });
  }

  sortByCity = () => {
    const {users} = this.state
    this.setState({
      users: users.sort(this.compareCity)
    });
  }

  compareAge = (a, b) => {
    const genreA = a.dob.age;
    const genreB = b.dob.age;

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }

  compareCity = (a, b) => {
    const genreA = a.location.city.toUpperCase();
    const genreB = b.location.city.toUpperCase();

    let comparison = 0;
    if (genreA > genreB) {
      comparison = 1;
    } else if (genreA < genreB) {
      comparison = -1;
    }
    return comparison;
  }

  render() {
    const { users, dataLength, hasMore, loading } = this.state
    return (
      <div className="App">
      <div>
        <Button
          sortByAge={this.sortByAge}
          sortByCity={this.sortByCity}/>
      </div>
        <UserData
          users={users}
          loading={loading}
          dataLength={dataLength}
          fetchMoreData={this.fetchMoreData}
          hasMore={hasMore}
        />
      </div>
    );
  }
}

export default App;
