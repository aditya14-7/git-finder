import React, { Fragment } from 'react'
import spinner from '../../1489.gif'

const Loader = () => {
    return (
        <Fragment>
            <center>
                <img src={spinner} alt='Loading...' style={{ width: '5rem', margin: '19rem auto', display: 'block' }} />
            </center>
        </Fragment>
    )
}
export default Loader;