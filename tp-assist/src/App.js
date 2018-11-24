import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import AddForm from './components/AddForm';
import Header from './components/Header';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userList: []
    };
    this.remove = this.remove.bind(this);
    this.add = this.add.bind(this);
  }

  add(key, value) {
    this.setState({ isLoaded: false }, () => {
      fetch('https://brandonassing.lib.id/tp-me@dev/addOneNumber/?name=' + key + '&number=' + value)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              userList: result
            }, () => {
            console.log(this.state);
          });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        );
    });

  }


  remove(key) {
    this.setState({ isLoaded: false }, () => {
      fetch('https://brandonassing.lib.id/tp-me@dev/removeNumbers/?key=' + key)
        .then(res => res.json())
        .then(
          (result) => {
            this.setState({
              isLoaded: true,
              userList: result
            }, () => {
            console.log(this.state);
          });
          },
          (error) => {
            this.setState({
              isLoaded: true,
              error: error
            });
          }
        );
    });

  }

  componentDidMount() {
    fetch("https://brandonassing.lib.id/tp-me@dev/getNumbers/")
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            userList: result
          }, () => {
          console.log(this.state);
        });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error: error
          });
        }
      )
  }


  render() {
    return (
      <div>
        <Header name="Wipe Out"/>
        <div id="app-content">
          <AddForm addCallback={this.add} />
          <UserList userList={this.state.userList} isLoaded={this.state.isLoaded} removeCallback={this.remove} />
        </div>
      </div>
    );
  }
}

export default App;
