import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserList from './components/UserList';
import AddForm from './components/AddForm';
import Footer from './components/Footer';
import gif from './assets/phone.gif';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userList: [],
      error: ""
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
              error: error,
              userList: []
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
              error: error,
              userList: []
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
            error: error,
            userList: []
          });
        }
      )
  }


  render() {
    return (
      <div id="app-background">
        <h1 id="header-text">wipeout</h1>
        <div id="app-body">
          <div id="app-gif">
            <img id="gif" src={gif} />
          </div>
          <div id="app-add">
            <div id="app-slogan">
              <h2 id="slogan">Don't get in touch with your inner self</h2>
            </div>
            <AddForm addCallback={this.add} />
          </div>
        </div>
        <UserList userList={this.state.userList} isLoaded={this.state.isLoaded} removeCallback={this.remove} />
        <Footer />
      </div>
    );
  }
}

export default App;
