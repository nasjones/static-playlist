import React from 'react'
// import './playlist.css'
// import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import PlaylistContext from '../PlaylistContext'
import PropTypes from 'prop-types'
import config from '../config'

export default function Playlister(props) {
    // let date = <Moment format="Do of MMM YYYY">
    //     {props.mod}
    // </Moment>
    console.log(props)
    // let handleClickDelete = (value) => {
    //     const playlistId = props.id
    //     fetch(`${config.playlist_end}/${playlistId}`, {
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
    //             value.deletePlaylist(playlistId)
    //         })
    //         .catch(error => {
    //             console.error({ error })
    //         })

    //     if (props.history)
    //         props.history.push('/')
    // }

    // return (
    //     <PlaylistContext.Consumer>
    //         {(value) => {
    return (
        <div className="list-item">
            <Link to={`/playlist-display/${props.id}`} className="title">
                <h2>{props.name}</h2>

            </Link>
            <span>{props.genre.name}</span>
            {/* <p>{"Date modified on "}{date}</p> */}
            {/* <button className="delete" onClick={() => handleClickDelete(value)}>Delete playlist</button> */}
        </div>
    )
}
    //         }
    //     </PlaylistContext.Consumer>
    // )
// }

// playlist.propTypes = {
//     id: PropTypes.number,
//     name: PropTypes.string,
//     content: PropTypes.string,
//     mod: PropTypes.string,
// } 
