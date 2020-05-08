import React, { Component } from 'react'
import Song from './Song'
import Nav from '../Nav'
import { render } from '@testing-library/react';

export default class playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
        console.log(props)

    }


    render() {
        let songDisplay = this.props.songs.map(song => {
            return <Song track={song} key={song.id} />
        })
        if (!this.state.display) {
            return (
                <div id="playlistDisplay">
                    <img id="ham" src={require('../Ham.png')} onClick={e => {
                        this.setState({
                            display: !this.state.display
                        })
                    }} />
                    <div id="nav">
                        <Nav clicker={this.props.clicker} hidden={window.hide} />
                    </div>
                    <div id="playlistContent">

                        <h2 id="playlist-title">{this.props.playlist.name}</h2>
                        {songDisplay}
                    </div>

                </div>
            )
        }
        else {
            return (
                <div id="playlistDisplay">
                    <img id="ham" src={require('../Ham.png')} onClick={e => {
                        this.setState({
                            display: !this.state.display
                        })
                    }} />
                    <div id="nav">

                    </div>
                    <div id="playlistContent">

                        <h2 id="playlist-title">{this.props.playlist.name}</h2>
                        {songDisplay}
                    </div>

                </div>
            )
        }
    }
}

