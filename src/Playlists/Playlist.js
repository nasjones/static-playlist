import React from 'react'
import Song from './Song'
import Nav from '../Nav'

export default function playlist(props) {

    console.log(props)

    let songDisplay = props.songs.map(song => {
        return <Song track={song} key={song.id} />
    })

    return (
        <div id="playlistDisplay">
            <div id="nav">
                <Nav clicker={props.clicker} />
            </div>
            <div id="playlistContent">

                <h2 id="playlist-title">{props.playlist.name}</h2>
                {songDisplay}
            </div>

        </div>
    )
}
