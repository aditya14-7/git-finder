import React, { Fragment } from 'react'
import spinner from '../../1489.gif'

const Loader = () => {
    return (
        <Fragment>
            <center>
                <img src={spinner} alt='Loading...' style={{ width: '5rem', margin: '10rem auto', display: 'block' }} />
            </center>
        </Fragment>
    )
}
export default Loader;