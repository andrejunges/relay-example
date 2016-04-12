import React from 'react';
import Relay from 'react-relay';

class UserAddress extends React.Component {
  render() {
    const {address} = this.props;
    return (
        <div>
          {address.street} 
          {!!address.number ? 
            <span> - {address.number}</span> 
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