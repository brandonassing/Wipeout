import React, { Component } from 'react';
import './UserList.css';

class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userList: []
    };
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
            error
          });
        }
      )
  }
  render() {
    return (
      <div>
      </div>
    );
  }
}

export default UserList;
