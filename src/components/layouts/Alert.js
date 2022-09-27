import React, { useContext } from 'react'
import AlertContext from '../../contexts/alert/alertContext';

const Alert = () => {
    const alertContext = useContext(AlertContext);
    if(alertContext.alert === null){
        return;
    }
  return (
    <div className={`alert alert-${alertContext.alert.type}`}>
        <i className='fas fa-info-circle'></i> {alertContext.alert.msg}
    </div>
  )
}

export default Alert