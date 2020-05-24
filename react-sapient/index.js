import * as functions from "firebase-function";
import React from "react";
import { renderToString } from "react-dom/server";
import App from "./src/app";
import getFeed from "./src/getFeeds";
import * as express from "express";
import fs from "fs";

const index = fs.readFileSync(__dirname + "/index.html", "utf8");

const app = express();
app.get("**", (req, res) => {
  const html = renderToString(<App />);
  const finalHtml = index.replace("<!--::APP::-->", html);
  res.send(finalHtml);
});

export let ssrapp = functions.https.onRequest(app);
