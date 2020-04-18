import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import * as serviceWorker from './serviceWorker';

import Mahasiswa from "./container/MahasiswaPost";

ReactDOM.render(<Mahasiswa />, document.getElementById('content'));

serviceWorker.unregister();
