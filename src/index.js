import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyD8useUf94jN0MgXPAWVGUXM36MunsnFtw';
/*
* Create a new component.
* This component should produce some html.
*/

const App = () => {
    return (
        <div>
        <SearchBar />
    </div>
    );
};

/*
* Take this component's generated html and put it on the page (in the DOM)
* */

ReactDOM.render(<App />, document.querySelector('.container'));
