import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios'
import {NavLink} from 'react-router-dom'

export default class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      selectedAlbum: {}
    }
  }
  componentDidMount() {
    const albumId = this.props.match.params.albumId
    axios.get(`/api/albums/${albumId}`)
      .then(res => res.data)
      .then(album => this.setState({
        selectedAlbum: album
      }));
  }
  render () {
    // console.log(this.state.selectedAlbum)
    const album = this.state.selectedAlbum;
    const albumId = this.props.match.params.albumId

    return (
      <NavLink to={`/albums/${albumId}`} className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </NavLink>
    );
  }
}
