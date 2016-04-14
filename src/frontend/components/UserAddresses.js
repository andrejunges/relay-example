import React from 'react';
import Relay from 'react-relay';
import ComponentName from './ComponentName'
import colors from '../colors'

class UserAddress extends React.Component {
  render() {
    const {address, enableBGComponents} = this.props;
    const userAddressStyle = enableBGComponents ? { 
      marginBottom: '3px',
      padding: '5px',
      background: colors.bgUserAddress, 
      color: '#000',
      position: 'relative'
    } : {
      padding: '0 5px'
    };

    return (
        <div style={userAddressStyle}>
          {address.street} 
          {!!address.number ? 
            <span> - {address.number}</span> 
          : undefined}

          {enableBGComponents ?
            <ComponentName text='UserAddress' />
          : undefined}
        </div>
    );
  }
}

export default Relay.createContainer(UserAddress, {
  fragments: {
    address: () => Relay.QL`
      fragment on Address {
        street,
        number
      }
    `,
  },
});