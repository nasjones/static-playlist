import React, { Component } from 'react'
import Playlist from './Playlist'
import './Playlist-Display.css'
import playStore from '../playStore'
import songStore from '../songStore'
// import './Landing.css'


export default class PlaylistDisplay extends Component {
    _isMounted = false;

    constructor(props) {
        super(props)

        this.state = {
            playlistId: this.props.match.params.playlistId,
            playlist: null,
            song: [],
            isFlushed: false
        }
    }

    setPlaylistId = (playlistId) => {
        this.setState({ playlistId })
    }

    setPlaylist = (playlist) => {
        this.setState({ playlist })
    }

    addSongs = (song) => {
        this.setState({
            song
        })
    }

    componentDidMount() {
        this._isMounted = true;
        let playlistId = this.props.match.params.playlistId
        console.log(playlistId)

        let playlist = window.globe.playStore.find(playlist => {
            console.log(playlist)
            return playlist.id == this.props.match.params.playlistId
        })
        console.log(playlist)
        console.log(songStore)
        this.setPlaylist(playlist)
        let runtime = 0
        let i = 0;
        let songArray = []

        while (runtime < playlist.length) {
            // console.log(i)
            let song = {
                id: songStore[i].id,
                url: songStore[i].url,
                name: songStore[i].title,
                length: songStore[i].length,
                explicit: songStore[i].explicit,
            }
            // console.log(song)
            songArray.push(song)
            runtime += song.length
            i++;
        }
        this.addSongs(songArray)
        console.log(songArray)

    }

    mounter = (value) => {
        let playlistOut = value.playlists.find(playlist => {
            return playlist.id === this.props.match.params.playlistId
        })
        console.log(playlistOut)
        this.setPlaylist(playlistOut)
    }


    render() {
        if (this.state.playlist === null) return <h1>Loading..</h1>;

        // let songDisplay = this.state.songs.map(song => {
        //     return <Song track={song} key={song.id} />
        // })
        return (
            // <PlaylistContext.Consumer>
            //     {(value) => {
            //         let output = this.mounter(value)
            //         console.log(output)
            //         return output && (
            <Playlist playlist={this.state.playlist} songs={this.state.song} />
            //     )
            // }
            // }

            // </PlaylistContext.Consumer>
            // )
            // {/* } */}
            // }
            // {/* </PlaylistContext.Consumer > */}

        )

    }
}
