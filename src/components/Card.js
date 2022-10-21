import React from 'react';
import "./css/card.css";

export default function Card(props) {
    return (
        <div className='coding-profile'>
            <div className='card'>
                <div className='card-img'>
                    <h3>{props.text}</h3>
                    <hr></hr>
                    <p>{props.info}</p>
                    <span><a href={props.links} target="_blank">Explore</a></span>
                </div>
            </div>
        </div>
    )
}

