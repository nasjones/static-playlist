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


  componentWillMount() {
    window.globe = { playStore, genreStore }

    console.log(window.globe)
  }
  render() {
    const contextValue = {
      genres: window.globe.genreStore,
      playlists: window.globe.playStore,
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
