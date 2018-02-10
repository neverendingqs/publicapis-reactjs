import React, { Component } from 'react';
import { connect } from 'react-redux';

import apisByCategorySelector from '../selectors/apisByCategory';

class ApiList extends Component {
  render() {
    return (
      <div>
        {Object.keys(this.props.apisByCategory).map(category =>
          <div>
            <h2 key={category}>{category}</h2>
            <table className='table table-bordered table-striped'>
              <thead>
                <tr>
                  <th scope='col'>Name</th>
                  <th scope='col'>Description</th>
                  <th scope='col'>Auth</th>
                  <th scope='col'>HTTPS</th>
                  <th scope='col'>Cors</th>
                  <th scope='col'>Link</th>
                </tr>
              </thead>
              <tbody>
                {this.props.apisByCategory[category].map(api =>
                  <tr key={api.API}>
                    <td>{api.API}</td>
                    <td>{api.Description}</td>
                    <td>{api.Auth}</td>
                    <td>{api.HTTPS}</td>
                    <td>{api.Cors.toLowerCase() === 'unknown' ? '' : api.Cors}</td>
                    <td><a href={api.Link} target="_blank" rel="noopener">Link</a></td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  apisByCategory: apisByCategorySelector(state)
});

const connector = connect(mapStateToProps);
export default connector(ApiList);
