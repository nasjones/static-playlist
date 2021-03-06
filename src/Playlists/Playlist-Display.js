import React, { Component } from 'react'
import Playlist from './Playlist'
import './Playlist-Display.css'
import songStore from '../songStore'



export default class PlaylistDisplay extends Component {

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

    fetcher = (playlistId) => {

        console.log(playlistId)

        let playlist = window.globe.playStore.find(playlist => {
            return playlist.id == playlistId
        })
        console.log(playlist)

        this.setPlaylist(playlist)
        let runtime = 0
        let songArray = []
        let chosen = []

        if (playlist == undefined) {
            this.setState({
                error: true
            })
            return
        }

        while (runtime < playlist.length) {
            let i = Math.floor(Math.random() * 50);

            if (!chosen.includes(i)) {
                chosen.push(i)

                let song = {
                    id: songStore[i].id,
                    url: songStore[i].url,
                    name: songStore[i].title,
                    length: songStore[i].length,
                    explicit: songStore[i].explicit,
                }
                songArray.push(song)
                runtime += song.length
            }
            else {
            }

        }
        this.addSongs(songArray)

    }

    componentDidMount() {
        let playlistId = this.props.match.params.playlistId
        this.fetcher(playlistId)

    }

    mounter = (value) => {
        let playlistOut = value.playlists.find(playlist => {
            return playlist.id === this.props.match.params.playlistId
        })
        console.log(playlistOut)
        this.setPlaylist(playlistOut)
    }


    render() {
        if (this.state.error === true) return <div><h1>Sorry there was an error processing your request. Try again later.</h1><a href={'/'}>Home.</a></div>

        if (this.state.playlist === null) return <h1>Loading..</h1>;


        return (

            <Playlist playlist={this.state.playlist} songs={this.state.song} clicker={this.fetcher} />

        )

    }
}
