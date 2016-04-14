import React from 'react';
import Relay from 'react-relay';
import UserAddresses from './UserAddresses'
import ComponentName from './ComponentName'
import colors from '../colors'

class User extends React.Component {
  render() {
    const {name, lastName, addresses} = this.props.user;
    let userStyle = {
      position: 'relative',
      padding: '15px',
      boxShadow: '1px 1px 5px #999',
      marginBottom: '15px'
    };
    if (this.props.enableBGComponents) {
      userStyle.background = colors.bgUser;
      userStyle.color = '#FFF'
    }

    return (
        <div style={userStyle}>
          {name} {lastName}
          <div style={{padding: '5px'}}>
            {addresses.map((address, i) => {
              return (
                <UserAddresses key={i} address={address} enableBGComponents={this.props.enableBGComponents} />
              )
            })}
          </div>

          {this.props.enableBGComponents ?
            <ComponentName text='User' color='#FFF' />
          : undefined}
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