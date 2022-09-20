import React from 'react'

const Alert = (props) => {
    if(props.alert === null){
        return;
    }
  return (
    <div className={`alert alert-${props.alert.type}`}>
        <i className='fas fa-info-circle'></i> {props.alert.msg}
    </div>
  )
}

export default Alert