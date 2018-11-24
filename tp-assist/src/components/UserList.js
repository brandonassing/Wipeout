import React, { Component } from 'react';
import './UserList.css';


class UserList extends Component {
  constructor(props) {
    super(props);
    this.remove = this.remove.bind(this);
  }

  remove(e) {
    let key = e.target.id;
    this.props.removeCallback(key);
  }

  render() {
    const { isLoaded, userList } = this.props;
    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      //TODO format number
      return (
        <div id="userlist-body" className="uk-container">
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
                    <td><button id={item[0]} className="uk-button uk-button-default" type="button" onClick={(e) => { this.remove(e); }}>Delete</button></td>
                  </tr>
                ))}
            </tbody>
        </table>
        </div>
      );
    }
  }
}

export default UserList;
