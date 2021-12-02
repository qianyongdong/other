import React from 'react';
import ReactDOM from 'react-dom';
import Grid from './components/Grid';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Grid />, document.getElementById('root'));
registerServiceWorker();