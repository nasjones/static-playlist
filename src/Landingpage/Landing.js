import React, { Component } from 'react'
import { Link } from 'react-router-dom'
// import PlaylistContext from '../PlaylistContext'
import './Landing.css'


export default class Landing extends Component {

    render() {
        return (
            <div id="user-prompt">
                <h2>Welcome to playlist maker</h2>
                <p>Looking to discover new music? Tired of your old study playlist? Choose the genre and the amount of time you would like the playlist to run and your new playlist will be created!</p>
                <div id="landLinks">
                    <Link to={'/homepage'}>Create a Playlist!</Link><br /><br />
                    <Link to={'/existing-playlists'}>See existing playlists</Link>
                </div>
            </div>
        )
    }
}