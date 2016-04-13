import React from 'react';
import Relay from 'react-relay';
import User from './User'

const qtds = [1, 2, 3, 4];
const qtdStyle = {
  padding: '15px 20px',
  fontSize: '18px',
  marginRight: '15px',
  color: '#FFF',
  background: '#666',
  display: 'inline-block',
  cursor: 'pointer',
}

class Group extends React.Component {

  changeQtd(qtd) {
    console.log(this.props.relay.setVariables, qtd)
    this.props.relay.setVariables({
      qtd: qtd
    })
  }

  render() {
    const {qtd} = this.props.relay.variables;

    return (
      <div style={{padding: '20px'}}>
        <div style={{marginBottom: '20px'}}>
          {qtds.map((v, i) => {
            const elemStyle = Object.assign({}, qtdStyle)
            if (v === qtd) {
              elemStyle.background = '#333'
            }
            return (
                <div key={i} style={elemStyle} onClick={this.changeQtd.bind(this, v)}>{v}</div>
            )
          })}
        </div>

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
  initialVariables: {
    qtd: 4
  },
  fragments: {
    group: () => Relay.QL`
      fragment on Group {
        users(qtd: $qtd) { ${User.getFragment('user')} },
      }
    `,
  },
});