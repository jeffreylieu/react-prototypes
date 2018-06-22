import React, {Component} from 'react';
import Movie from './movies';
import axios from 'axios';


class MoviesContainer extends Component {
    constructor(props){
        super(props);

        this.state = {
            movies:[]
        };
    }

    componentWillMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
        axios.get(url).then((resp)=>{
            console.log('RESP:', resp);

            this.setState({
                movies: resp.data.feed.entry //left off here!!
            });
        });
    }

    render(){
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info={movieInfo} key={index}/>
        });
        console.log('This state is:', this.state);
        return(
            <div>
                <Movie/>
            </div>
        )
    }


}
export default MoviesContainer;