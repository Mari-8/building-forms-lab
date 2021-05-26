import React, { Component } from 'react'

const Bands = (props) => {
    return(
        <ul>
            {props.bandNames.map((band, id) => <li key={id}>{band.name}</li>)}
        </ul>
    )
}

export default Bands