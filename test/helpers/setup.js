//  setting up babel pipeline
require('babel-register')
require('babel-polyfill')

//  to see a cat, type mocha -R nyan ....

//  creating browser-like environment
//  here 'global' is like 'window' of node
//  tests interact with fake DOM
global.document = require('jsdom').jsdom('<body><div id="app"></div></body>')
global.window = document.defaultView
global.navigator = window.navigator
