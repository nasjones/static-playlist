import React from 'react'
import { Link } from 'react-router-dom'
import './Nav.css'
import PlaylistContext from './PlaylistContext'


export default function Nav(props) {

    let output = (value) => {
        if (window.globe.playStore.length > 10) {
            return window.globe.playStore.slice(window.globe.playStore.length - 11, window.globe.playStore.length - 1).map(playlist => {
                let genre = window.globe.genreStore.find(genre => {
                    return genre.id == playlist.genre_id
                })

                return genre && (
                    <Link exact="true" key={playlist.id} to={`/playlist-display/${playlist.id}`} onClick={e => props.clicker(playlist.id)}>
                        <article className="navLink">
                            <h3 id={playlist.id} >{playlist.name}</h3>
                            <span>Genre:{genre.name}</span>
                        </article>
                    </Link>
                )
            })
        }
        else {
            return window.globe.playStore.map(playlist => {
                let genre = window.globe.genreStore.find(genre => {
                    return genre.id == playlist.genre_id
                })

                return genre && (
                    <Link exact="true" key={playlist.id} to={`/playlist-display/${playlist.id}`} onClick={e => props.clicker(playlist.id)}>
                        <article className="navLink">
                            <h3 id={playlist.id} >{playlist.name}</h3>
                            <span>Genre:{genre.name}</span>
                        </article>
                    </Link>
                )
            })
        }
    };


    return (
        <PlaylistContext.Consumer>
            {(value) => {
                let playlistOut = output(value)
                if (window.hide) {
                    console.log(props.hidden)
                    return playlistOut && (

                        <div id="nav hidden" >
                            <h2 id="recent">Most Recent</h2>
                            {playlistOut}
                            <Link to={'/existing-playlists'}  >
                                <h3 className="navLink">See all playlists!</h3>
                            </Link>
                            <Link to={'/homepage'}  >
                                <h3 className="navLink">Create a playlist</h3>
                            </Link>
                        </div>
                    )
                }
                else {
                    return playlistOut && (

                        <div id="nav" >
                            <h2 id="recent">Most Recent</h2>
                            {playlistOut}
                            <Link to={'/existing-playlists'}  >
                                <h3 className="navLink">See all playlists!</h3>
                            </Link>
                            <Link to={'/homepage'}  >
                                <h3 className="navLink">Create a playlist</h3>
                            </Link>
                        </div>
                    )
                }

            }
            }
        </PlaylistContext.Consumer>

    )
}
