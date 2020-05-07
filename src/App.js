import React, { Component } from 'react';
import { Route, Link, Switch } from 'react-router-dom';
import './App.css';
import config from './config';
import PlaylistContext from './PlaylistContext'
import Landing from './Landingpage/Landing'
import Homepage from './Homepage/Homepage'
import PlaylistDisplay from './Playlists/Playlist-Display'
import ExistingPlaylists from './Playlists/Existing-playlists'
import genreStore from './genreStore'
import playStore from './playStore'

class App extends Component {

  state = {
    genres: [],
    playlists: [],
    // records: [],
    user: null,
    error: null,
  }

  setGenres = genres => {
    this.setState({
      genres
    })
  }

  setPlaylists = playlists => {
    this.setState({
      playlists
    })
  }

  fetcher = () => {
    // let endpoint = config.ENDPOINT
    // Promise.all([
    //   fetch(endpoint + '/playlists'),
    //   fetch(endpoint + '/genres'),

    //   fetch(endpoint + '/auth')
    // ],
    //   {
    //     method: 'GET',
    //     headers: {
    //       'content-type': 'application/json',
    //     },
    //   })
    //   .then(([playlistRes, genreRes, authRes]) => {
    //     if (!playlistRes.ok)
    //       return playlistRes.json().then(error => Promise.reject(error))
    //     if (!genreRes.ok)
    //       return genreRes.json().then(error => Promise.reject(error))
    //     if (!authRes.ok)
    //       return authRes.json().then(error => Promise.reject(error))
    //     return Promise.all([playlistRes.json(), genreRes.json(), authRes.json()])
    //   })
    //   .then(([playlist, genres, auth]) => {
    //     this.setPlaylists(playlist)
    //     this.setGenres(genres)
    //     console.log(auth)
    //   })
    //   .catch(error => {
    //     console.error({ error });
    //   });
  }

  componentDidMount() {
    // this.fetcher()
  }

  // pageUpdate = () => {
  //   this.componentDidMount()
  // }

  render() {
    const contextValue = {
      genres: genreStore,
      playlists: playStore,
      pageUpdate: this.fetcher,
    }

    return (
      <div className="App" >
        <header className="App-header">
          <Link to={'/'} id="home-link">
            <h1>ShowTunes</h1>
          </Link>
          <hr />
        </header>
        <PlaylistContext.Provider value={contextValue}>
          <main id="stage">
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/homepage' component={Homepage} />
              <Route path='/existing-playlists' component={ExistingPlaylists} />
              <Route path='/playlist-display/:playlistId' component={PlaylistDisplay} />
            </Switch>
          </main>
        </PlaylistContext.Provider>
      </div>
    );
  }
}

export default App;
