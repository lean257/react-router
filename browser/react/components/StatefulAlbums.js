import React, {Component} from 'react';
import AllAlbums from './AllAlbums';
import axios from 'axios'
// import {HashRouter, Route} from 'react-router-dom'


export default class StatefulAlbums extends Component {
    constructor(props) {
        super(props)
        this.state = {
          albums: [],
          selectedAlbum: {}
        }
    }
    componentDidMount () {
        axios.get('/api/albums/')
          .then(res => res.data)
          .then(albums => {
            this.setState({ albums })
          })
    }

    render(){
        return (
            <AllAlbums albums={this.state.albums} />
        )
    }

}