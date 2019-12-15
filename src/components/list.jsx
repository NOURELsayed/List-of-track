import React, { Component } from 'react';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';

import Track from './track'
import AddTRack from './AddTrack'

const PaperList = styled(Paper)`
padding: theme.spacing(3, 2),
padding:200px
`;

class TracksList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            tracks: [],
            search: '',
        }
    }
    getdata() {
        axios.get(`https://api.myjson.com/bins/hw8lz`)
            .then(res => {
                console.log("tt", res)
                this.setState({
                    tracks: res.data.tracks
                })
            })
            .catch(err => console.log(err))
    }
    componentDidMount() {
        this.getdata()
    }

    deleteTrackHandler = (tracksIndex) => {
        const tracks = [...this.state.tracks]
        tracks.splice(tracksIndex, 1)
        this.setState({ tracks: tracks })
    }

    updateSearch(event) {
        this.setState({ search: event.target.value.substr(0, 20) });
    }
    addTrack =(track)=> {
        track.id =Math.random
        let tracks =this.state.tracks;
        tracks.push(track);
        this.setState({tracks})     
    }
    render() {
        let filteredTracks = this.state.tracks.filter(
            (track) => {
                return track.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
            }
        );
        return (
            <div >
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <PaperList>
                            <div>
                                <h1>SongsList</h1>
                                <form>
                                    <input
                                        type="text"
                                        className="search-box"
                                        placeholder="Search for..."
                                        onChange={this.updateSearch.bind(this)}
                                    />
                                </form>
                                <audio controls >
                                    {/* <source src={this.state.tracks.url[this.state.currentSongIndex]} type="audio/mpeg" /> */}
                                    Your browser does not support the audio element.
                                </audio>
                                {this.state.tracks && filteredTracks.map(track => {
                                    return (
                                        <Track key={track.name}
                                            name={track.name}
                                            length={track.length}
                                            artist={track.artist}
                                            url={track.url}
                                            deleteTrackHandler={this.deleteTrackHandler}
                                            currentSongIndex={this.state.currentSongIndex}
                                        />
                                    )
                                })
                                }
                                <AddTRack addTrack={this.addTrack}/>
                            </div>
                        </PaperList>
                    </Grid>
                </Grid>
            </div>
        );
    }
}
export default TracksList;