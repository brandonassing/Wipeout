import React, { Component } from 'react';
import './UserList.scss';

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
    console.log(userList);
    if (!isLoaded || !Array.isArray(userList) || userList === undefined || userList === null || userList.length === 0) {
      return (
        <div id="userlist-body" className="uk-container">
        <table className="uk-table uk-table-striped uk-table-small">
            <thead>
                <tr>
                    <th><p className="table-header-text table-header-name">Name</p></th>
                    <th><p className="table-header-text table-header-number">Number</p></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
            </tbody>
        </table>
        </div>
      );
    } else {
      return (
        <div id="userlist-body" className="uk-container">
        <table className="uk-table uk-table-striped uk-table-small">
            <thead>
                <tr>
                    <th><p className="table-header-text table-header-name">Name</p></th>
                    <th><p className="table-header-text table-header-number">Number</p></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {userList.map(item => (
                  <tr key={item[0]}>
                    <td><p className="table-content-text table-name">{item[0]}</p></td>
                    <td><p className="table-content-text table-number">{"(" + item[1].slice(1, 4) + ") " + item[1].slice(4, 7) + "-" + item[1].slice(7, 11) }</p></td>
                    <td className="td-table-button"><button id={item[0]} className="uk-button uk-button-default table-button uk-float-right" type="button" onClick={(e) => { this.remove(e); }}>Remove</button></td>
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
