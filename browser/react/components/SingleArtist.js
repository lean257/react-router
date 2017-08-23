import React, { Component } from 'react';
import Songs from '../components/Songs';
import AllAlbums from './AllAlbums';
import axios from 'axios'
import {Link, Route} from 'react-router-dom'

export default class SingleArtist extends Component {
  constructor() {
    super()
    this.state = {
      artist: {name:'', albums: [], songs: []}
    }
  }

  componentDidMount() {
    const artistId = this.props.match.params.artistId
    Promise.all([axios.get(`/api/artists/${artistId}`), axios.get(`/api/artists/${artistId}/albums`), axios.get(`/api/artists/${artistId}/songs`)])
        .then(res => {
            console.log('all the res', res)
            this.setState({
            artist: {
                name: res[0].data.name,
                albums: res[1].data,
                songs: res[2].data
            }
        })
    })
  }
  
  render () {
    const artist = this.state.artist;
    const artistId = this.props.match.params.artistId

    return (
        <div>
            <h3>{artist.name}</h3>
            <ul className='nav nav-tabs'>
                <li><Link to={`/artists/${artistId}/albums`}>ALBUMS</Link></li>
                <li><Link to={`/artists/${artistId}/songs`}>SONGS</Link></li>
            </ul>
            <Route 
                path='/artists/:artistId/albums' 
                render={
                    () => <AllAlbums albums={artist.albums} />
                } />
            <Route 
                path='/artists/:artistId/songs' 
                render={
                    () => <Songs songs={artist.songs} />
                } />
        </div>
    );
  }
}
