import React from 'react';
import Relay from 'react-relay';
import User from './User'
import ComponentName from './ComponentName'
import QuantityFilter from './QuantityFilter'
import colors from '../colors'

const qtds = [1, 2, 3, 4];

class Group extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      enableBGComponents: false
    }
  }

  toogleBGComponents() {
    this.setState({
      enableBGComponents: !this.state.enableBGComponents
    })
  }

  changeQtd(qtd) {
    this.props.relay.setVariables({
      qtd: qtd
    })
  }

  render() {
    const {qtd} = this.props.relay.variables;
    const groupStyle = this.state.enableBGComponents ? {
      padding: '30px',
      background: colors.bgGroup,
      position: 'relative',
    } : {}
    const bgButtonStyle = {
      padding: '15px 20px',
      fontSize: '18px',
      marginRight: '15px',
      color: '#FFF',
      background: '#666',
      display: 'inline-block',
      cursor: 'pointer',
    }
    if (this.state.enableBGComponents) {
      bgButtonStyle.background = colors.bgGroup
    }
    const bgButtonText = this.state.enableBGComponents ? 'DETAIL MODE ON' : 'DETAIL MODE OFF'

    return (
      <div style={{padding: '20px'}}>
        <div style={{marginBottom: '20px'}}>
          <QuantityFilter qtdSelected={qtd} quantities={qtds} onChangeQtd={this.changeQtd.bind(this)} />
          <div style={bgButtonStyle} onClick={this.toogleBGComponents.bind(this)}>{bgButtonText}</div>
        </div>

        <div style={groupStyle}>
          {this.props.group.users.map((user, i) => {
            return (
                <User key={i} user={user} enableBGComponents={this.state.enableBGComponents} />
            )
          })}

          {this.state.enableBGComponents ?
            <ComponentName text='Group' color='#FFF' />
          : undefined}
        </div>
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