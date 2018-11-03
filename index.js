var express = require('express');
var proxy = require('http-proxy-middleware');


const app = express();

app.use('/3000', proxy({target: 'http://localhost:3000', changeOrigin: true,pathRewrite: {'^/3000' : ''}}));

app.use('/3001', proxy({target: 'http://localhost:3001', changeOrigin: true,pathRewrite: {'^/3001' : ''}}));

app.use('/3002', proxy({target: 'http://localhost:3002', changeOrigin: true,pathRewrite: {'^/3002' : ''}}));


app.listen(5000);
