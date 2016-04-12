import React from 'react';
import Relay from 'react-relay';
import User from './User'

class Group extends React.Component {
  render() {
    return (
      <div style={{padding: '20px'}}>
        {this.props.group.users.map((user, i) => {
          return (
              <User key={i} user={user} />
          )
        })}
      </div>
    )
  }
}

export default Relay.createContainer(Group, {
  fragments: {
    group: () => Relay.QL`
      fragment on Group {
        users { ${User.getFragment('user')} },
      }
    `,
  },
});