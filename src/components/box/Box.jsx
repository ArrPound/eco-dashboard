import React from 'react'
import './box.scss'
const Box = props => {
const className = {
    box: 'box',
    green: props.green && 'box-green',
    fullheight: props.fullheight && 'box-fullheight'
}

return (
  <div className  ={Object.values(className).join(' ')}>
      {props.children}
    </div>
  )
}

export default Box
