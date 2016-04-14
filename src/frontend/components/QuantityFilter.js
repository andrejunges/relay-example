import React from 'react'

const qtdStyle = {
  padding: '15px 20px',
  fontSize: '18px',
  marginRight: '15px',
  color: '#FFF',
  background: '#666',
  display: 'inline-block',
  cursor: 'pointer',
}

export default (props) => {
  return (
    <div style={{display: 'inline-block'}}>
      {props.quantities.map((v, i) => {
        const elemStyle = Object.assign({}, qtdStyle)
        if (v === props.qtdSelected) {
          elemStyle.background = '#333'
        }
        return (
          <div key={i} style={elemStyle} onClick={props.onChangeQtd.bind(null, v)}>{v}</div>
        )
      })}
    </div>
  )
}