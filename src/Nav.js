import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './Nav.css'
import PropTypes from 'prop-types'
import PlaylistContext from './PlaylistContext'
import PlaylistDisplay from './Playlists/Playlist-Display'

export default function Nav(props) {
    // console.log(props)

    let output = (value) => {
        // console.log(value)



        return value.playlists.slice(value.playlists.length - 11, value.playlists.length - 1).reverse().map(playlist => {
            let genre = value.genres.find(genre => {
                return genre.id === playlist.genre_id
            })

            return genre && (
                <Link exact="true" key={playlist.id} to={`/playlist-display/${playlist.id}`}>
                    <article className="navLink">
                        <h3 id={playlist.id} >{playlist.title}</h3>
                        <span>Genre:{genre.name}</span>
                    </article>
                </Link>
            )
        })
    };


    return (
        <PlaylistContext.Consumer>
            {(value) => {
                let playlistOut = output(value)
                return playlistOut && (
                    <div id="navBar">
                        <h2 id="recent">Most Recent</h2>
                        {playlistOut}
                        <Link to={'/homepage'}  >
                            <h3 className="addFolder">Add folder</h3>
                        </Link>
                    </div>
                )

            }
            }
        </PlaylistContext.Consumer>

    )
}