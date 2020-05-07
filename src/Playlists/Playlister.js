import React from 'react'
import { Link } from 'react-router-dom'


export default function Playlister(props) {

    return (
        <div className="list-item">
            <Link to={`/playlist-display/${props.id}`} className="title">
                <h2>{props.name}</h2>

            </Link>
            <span>{props.genre.name}</span>

        </div>
    )
}
