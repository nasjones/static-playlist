import React from 'react'
import './Song.css'
import { Link } from 'react-router-dom'
import PlaylistContext from '../PlaylistContext'
import PropTypes from 'prop-types'
import config from '../config'

export default function Song(props) {
    // let date = <Moment format="Do of MMM YYYY">
    //     {props.mod}
    // </Moment>

    // let handleClickDelete = (value) => {
    //     const noteId = props.id
    //     fetch(`${config.note_end}/${noteId}`, {
    //         method: 'DELETE',
    //         headers: {
    //             'content-type': 'application/json'
    //         },
    //     })
    //         .then(res => {
    //             if (!res.ok)
    //                 return res.json().then(e => Promise.reject(e))
    //             // return res.json()
    //         })
    //         .then(() => {
    //             value.deleteNote(noteId)
    //         })
    //         .catch(error => {
    //             console.error({ error })
    //         })

    //     if (props.history)
    //         props.history.push('/')
    // }

    let msConverter = (length) => {
        var min = Math.floor(length / 60000);
        var sec = ((length % 60000) / 1000).toFixed(0);
        return min + ":" + (sec < 10 ? '0' : '') + sec;
    }

    let timeOut = msConverter(props.track.length)
    // let artistOut = props.track.artist.join(', ')
    return (
        // <NoteContext.Consumer>
        // {(value) => {
        // return (
        <a target='_blank' href={props.track.url}>
            <div className="song-item">
                {/* <Link to={} className="title"> */}

                <h3>{props.track.title}</h3>

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
