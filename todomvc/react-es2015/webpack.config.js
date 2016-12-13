
//uses node path
var path = require ('path');
var webpack = require ('webpack');


module.exports = {
    //all development will be done in app.js
    entry: './js/index.js',

    //once we're done, when we compile using webpack, it converges everything that app.js needs (including jquery and other modules etc.) in one js file  (output file - bundle.js)
    //thus will only need one reference to one file (bundle.js)

    output:  { path: __dirname, filename :'bundle.js'},

    module:{
        loaders: [
            {
                //if it matches js or jsx files then compile using babel-loader
               test: /.jsx?$/,
               loader: 'babel-loader',
               //will exclude node_modules folder as it will make things slower, as babel-loader will try to compile everything in folder
               exclude: /node_modules/,
               //use latest standards of es2015 and react
               query: {
                   presets: ['es2015', 'react'] 
               }
            }
        ]
    }
};