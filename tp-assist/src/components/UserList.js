import React, { Component } from 'react';
import './UserList.css';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userList: []
    };
    this.remove = this.remove.bind(this);
  }

  remove(e) {
    let key = e.target.id;
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
    const { error, isLoaded, userList } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <table className="uk-table uk-table-striped">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Number</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {userList.map(item => (
                  <tr key={item[0]}>
                    <td>{item[0]}</td>
                    <td>{item[1]}</td>
                    <td><button id={item[0]} className="uk-button uk-button-default" type="button" onClick={(e) => { this.setState({ isLoaded: false }, this.remove(e)); }}>Delete</button></td>
                  </tr>
                ))}
            </tbody>
        </table>
      );
    }
  }
}

export default UserList;
