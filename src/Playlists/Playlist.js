import React, { Component } from 'react'
import Song from './Song'
import Nav from '../Nav'
import { render } from '@testing-library/react';

export default class playlist extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hidden: true
        }
        console.log(props)

    }

    componentDidMount() {
        window.addEventListener("resize", this.resize.bind(this));
        this.resize();
    }

    resize() {
        let display = (window.innerWidth >= 850);
        if (display) {
            this.setState({ hidden: false });
        }
        else {
            this.setState({ hidden: true });
        }

    }

    clicker = (playlistId) => {
        this.props.clicker(playlistId)
        this.setState({
            hidden: true
        })
    }

    render() {
        if (this.props.playlist == undefined) return <h1>Loading..</h1>;

        let songDisplay = this.props.songs.map(song => {
            return <Song track={song} key={song.id} />
        })
        if (!this.state.hidden) {
            return (
                <div id="playlistDisplay">
                    <img id="ham" src={require('../Ham.png')} alt="ham-icon" onClick={e => {
                        this.setState({
                            hidden: !this.state.hidden
                        })
                    }} />

                    <Nav clicker={this.clicker} hidden={window.hide} />

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
                    <img id="ham" src={require('../Ham.png')} alt="ham-icon" onClick={e => {
                        this.setState({
                            hidden: !this.state.hidden
                        })
                    }} />

                    <div id="playlistContent">

                        <h2 id="playlist-title">{this.props.playlist.name}</h2>
                        {songDisplay}
                    </div>

                </div>
            )
        }
    }
}

