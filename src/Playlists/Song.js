import React from 'react'
import './Song.css'
import { Link } from 'react-router-dom'
import PlaylistContext from '../PlaylistContext'
import PropTypes from 'prop-types'
import config from '../config'

export default function Song(props) {


    let msConverter = (length) => {
        var min = Math.floor(length / 60000);
        var sec = ((length % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? '0' : '') + sec;
    }

    let timeOut = msConverter(props.track.length)
    return (

        <a target='_blank' href={props.track.url}>
            <div className="song-item">

                <h3>{props.track.name}</h3>

                {/* <span className="artist">by: {artistOut}</span> */}
                <span id="time">{timeOut}</span>
                {/* </Link> */}
                {/* <p>{"Date modified on "}{date}</p> */}
                {/* <button className="delete" onClick={() => handleClickDelete(value)}>Delete Note</button> */}

                <hr />
            </div>

        </a>
        // )
        // }
        // }
        // </NoteContext.Consumer>
    )
}

// Note.propTypes = {
//     id: PropTypes.number,
//     name: PropTypes.string,
//     content: PropTypes.string,
//     mod: PropTypes.string,
// } 
