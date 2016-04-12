import React from 'react';
import Relay from 'react-relay';
import UserAddresses from './UserAddresses'

class User extends React.Component {
  render() {
    var {name, lastName, addresses} = this.props.user;
    return (
        <div style={{padding: '15px', boxShadow: '1px 1px 5px #999', marginBottom: '15px'}}>
          {name} {lastName}
          <div style={{padding: '5px 10px'}}>
            {addresses.map((address, i) => {
              return (
                <UserAddresses key={i} address={address} />
              )
            })}
          </div>
        </div>
    );
  }
}

export default Relay.createContainer(User, {
  fragments: {
    user: () => Relay.QL`
      fragment on User {
        name,
        lastName,
        addresses { ${UserAddresses.getFragment('address')} },
      }
    `,
  },
});