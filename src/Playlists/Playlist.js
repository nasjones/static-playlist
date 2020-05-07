import React from 'react'
// import './playlist.css'
// import Moment from 'react-moment'
import { Link } from 'react-router-dom'
import PlaylistContext from '../PlaylistContext'
import PropTypes from 'prop-types'
import config from '../config'
import Song from './Song'
import Nav from '../Nav'

export default function playlist(props) {
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

    let songDisplay = props.songs.map(song => {
        return <Song track={song} key={song.id} />
    })

    return (
        <div id="playlistDisplay">
            <div id="nav">
                <Nav />
            </div>
            <div id="playlistContent">

                <h2 id="playlist-title">{props.playlist.name}</h2>
                {songDisplay}

                {/* <NoteError> */}
                {/* <Note id={output.id} name={output.name} content={output.content} mod={output.modified} key={output.id} history={this.props.history} /> */}
                {/* <p></p> */}
                {/* </NoteError> */}
                {/* </article> */}
            </div>

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
