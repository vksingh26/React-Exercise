import * as functions from 'firebase-function';
import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './src/app';
import * as express from 'express';

const app = express();
app.get('**', (req, res) => {

})

export let ssrapp = functions.https.onRequest(app);