import React from 'react';
import ReactDOM from 'react-dom';
import './styles/base/index.css';
import Index from './routes/index';
import { MuiThemeProvider} from '@material-ui/core/styles';
import {theme} from "./styles/overrideTheme";
import * as serviceWorker from './serviceWorker';

const finalApp = (
    <MuiThemeProvider theme={theme}>
        <Index/>
    </MuiThemeProvider>
);

ReactDOM.render(finalApp, document.getElementById('root'));

serviceWorker.unregister();
