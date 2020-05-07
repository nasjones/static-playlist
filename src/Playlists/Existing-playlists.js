import React, { Component } from 'react';
// import NoteList from './NoteHandle/NoteList'
import Nav from '../Nav'
import Playlister from './Playlister'
import { Link } from 'react-router-dom'
import PlaylistContext from '../PlaylistContext'
import './Existing-playlists.css'


export default class ExistingPlaylist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            name: props.name,
        }
    }

    lister = (value) => {
        return value.playlists.map(playlist => {

            if (playlist) {
                let genre = value.genres.find(genre => {
                    return genre.id === playlist.genre_id
                })
                return (
                    <Playlister key={playlist.id} id={playlist.id} name={playlist.name} genre={genre} length={playlist.length} />
                )
            }
            return null

        })
    }

    render() {
        return (
            <PlaylistContext.Consumer>
                {(value) => {
                    let output = this.lister(value)
                    return (
                        <div id="main">
                            {output}
                            <div className="add">
                                <Link to={'/add-note'}  >
                                    <h2 className="addFolder">Add note</h2>
                                </Link>
                            </div>
                        </div>
                    )
                }
                }
            </PlaylistContext.Consumer>


        )
    }
}