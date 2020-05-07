import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'
import PlaylistContext from '../PlaylistContext'
import config from '../config'
import Song from './Song'
import Nav from '../Nav'
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
            songs: [],
            isFlushed: false
        }
        console.log(this.state.songs)
    }

    setPlaylistId = (playlistId) => {
        this.setState({ playlistId })
    }

    setPlaylist = (playlist) => {
        this.setState({ playlist })
    }

    addSongs = (song) => {
        this.setState({
            songs: [...this.state.songs, song]
        })
        console.log(this.state.songs)
    }

    componentDidMount() {
        this._isMounted = true;
        let playlistId = this.props.match.params.playlistId
        console.log(playlistId)

        let playlist = playStore.find(playlist => {
            console.log(playlist)
            return playlist.id == this.props.match.params.playlistId
        })

        this.setPlaylist(playlist)


        let runtime = 0
        let chosen = []
        let i = 0;

        while (runtime < playlist.length) {

            // let trackChoice = Math.floor(Math.random() * 50);

            // if (!chosen.includes(trackChoice)) {
            //     chosen.push(trackChoice)
            // let artists = []
            // for (let i = 0; i < songStore[trackChoice].artists.length; i++)
            //     artists.push(songStore[trackChoice].artists[i].name)

            let song = {
                id: songStore[i].id,
                url: songStore[i].url,
                name: songStore[i].name,
                length: songStore[i].length,
                explicit: songStore[i].explicit,

            }
            i++;
            // console.log(song)
            runtime += song.length
            this.addSongs(song)

            // }
        }











        // if (this._isMounted) {
        //     fetch(config.ENDPOINT + `/playlists/${playlistId}`,
        //         {
        //             method: 'GET',
        //             headers: {
        //                 'content-type': 'application/json'
        //             }
        //         })
        //         .then(res => {
        //             if (!res.ok)
        //                 return res.json().then(e => Promise.reject(e))
        //             return res.json()
        //         })
        //         .then(playlist => {
        //             console.log(playlist)
        //             this.setPlaylist(playlist)

        //             fetch(config.ENDPOINT + `/genres/${playlist.genre_id}`,
        //                 {
        //                     method: 'GET',
        //                     headers: {
        //                         'content-type': 'application/json'
        //                     }
        //                 })
        //                 .then(res2 => {
        //                     if (!res2.ok)
        //                         return res2.json().then(e => Promise.reject(e))
        //                     return res2.json()
        //                 })
        //                 .then(genre => {
        //                     let rand = Math.floor(Math.random() * 1950);
        //                     let queryString = 'genre:%20' + genre.name + '&type=track&limit=50&offset=' + rand

        //                     let fetData = {
        //                         qString: queryString,
        //                     }

        //                     fetch(`${config.ENDPOINT}/data`, {
        //                         method: 'POST',
        //                         headers: {
        //                             'content-type': 'application/json'
        //                         },
        //                         body: JSON.stringify(fetData),
        //                     })
        //                         .then(res3 => {
        //                             if (!res3.ok)
        //                                 return res3.json().then(e => Promise.reject(e))
        //                             return res3.json()
        //                         }).then(response => {
        //                             console.log(response.tracks)
        //                             let runtime = 0
        //                             let chosen = []

        //                             while (runtime < playlist.length) {

        //                                 let trackChoice = Math.floor(Math.random() * 50);

        //                                 if (!chosen.includes(trackChoice)) {
        //                                     chosen.push(trackChoice)
        //                                     let artists = []
        //                                     for (let i = 0; i < response.tracks.items[trackChoice].artists.length; i++)
        //                                         artists.push(response.tracks.items[trackChoice].artists[i].name)

        //                                     let song = {
        //                                         id: response.tracks.items[trackChoice].id,
        //                                         url: response.tracks.items[trackChoice].external_urls.spotify,
        //                                         title: response.tracks.items[trackChoice].name,
        //                                         length: response.tracks.items[trackChoice].duration_ms,
        //                                         explicit: response.tracks.items[trackChoice].explicit,
        //                                         artist: artists
        //                                     }
        //                                     // console.log(song)
        //                                     runtime += song.length
        //                                     this.addSongs(song)

        //                                 }

        //                             }

        //                         }).catch(error3 => {
        //                             console.error({ error3 })
        //                         })

        //                 }).catch(error2 => {
        //                     console.error({ error2 });
        //                 });

        //         })
        //         .catch(error => {
        //             console.error({ error });
        //         });
        // }

    }

    componentWillReceiveProps(nextProps) {
        // console.log(nextProps.match.params)
        // if (this.state.playlist)
        //     if (nextProps.match.params.playlistId === this.state.playlistId) {
        //         return;
        //     } else {
        //         this.setState({ playlistId: nextProps.match.params.playlistId })
        //         // this.componentDidMount()
        //         // this.render()
        //     }

        // else {
        //     this.setState({ playlistId: nextProps.match.params.playlistId })
        //     // this.componentDidMount()
        //     // this.render()
        // }
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
            <Playlist playlist={this.state.playlist} songs={this.state.songs} />
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
