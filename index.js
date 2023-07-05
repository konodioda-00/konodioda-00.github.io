// /*!
//  * express
//  * Copyright(c) 2009-2013 TJ Holowaychuk
//  * Copyright(c) 2013 Roman Shtylman
//  * Copyright(c) 2014-2015 Douglas Christopher Wilson
//  * MIT Licensed
//  */

// 'use strict';

// module.exports = require('./lib/express');

// import express from 'express';
// import { Server } from 'http';
const express = require('express');
const app = express;
const port = 3000;
// module.exports = app;


// a.listen (port ,()=> console.log('hey!listening at 3100'));

app.listen(port ,()=> console.log('hey!listening at 3100'));

