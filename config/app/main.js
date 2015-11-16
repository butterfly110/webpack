// es6 react
import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './hello.jsx';
ReactDOM.render(<Hello />, document.getElementById('react'));

// commonjs
var Math = require('./Math');
var style = require('./test.css');
var oDiv = document.createElement('div');
oDiv.id = 'box';

//var oImg = document.createElement('img');
//oImg.src = require('./img/test.png');
//document.body.appendChild(oImg);
document.body.appendChild(oDiv);
console.log(Math.sum(1, 2));