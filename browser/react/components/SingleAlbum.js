import React, { Component } from 'react';
import Songs from '../components/Songs';
import axios from 'axios'
import {Link} from 'react-router-dom'

export default class SingleAlbum extends Component {
  constructor() {
    super()
    this.state = {
      selectedAlbum: {}
    }
  }
  componentDidMount() {
    console.log(this.props)
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
      <Link to={`/albums/${albumId}`} className="album">
        <div>
          <h3>{ album.name }</h3>
          <img src={ album.imageUrl } className="img-thumbnail" />
        </div>
        <Songs songs={album.songs} />
      </Link>
    );
  }
}