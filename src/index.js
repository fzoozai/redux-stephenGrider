import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';

const API_KEY = 'AIzaSyD8useUf94jN0MgXPAWVGUXM36MunsnFtw';


/*
* Create a new component.
* This component should produce some html.
*/

class App extends Component {

    constructor(props) {
        super(props);

        this.state = { videos: [ ] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (data) => {
            this.setState({ videos: data });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

/*
* Take this component's generated html and put it on the page (in the DOM)
* */

ReactDOM.render(<App />, document.querySelector('.container'));
