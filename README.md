# How to set HTTP headers for WebWorker files in Gatsby dev environment?

This is a basic demo of the following problem:

I'm using WebWorkers in a Gatsby-based website (by injecting the Webpack worker-loader into the Webpack configuration of Gatsby). I want to use `SharedArrayBuffer`, which requires to set the `Cross-Origin-Embedder-Policy` HTTP header.

Is there a way to add specific HTTP response headers for specific files in the Gatsby development environment?

Regarding the documentation, `developMiddleware` can be added to the `gatsby-config.js` (the file in this repo). Unfortunately, this seems to work only for some file types (the generated html page, the page-data json files and some images), but neither for CSS files, nor for JS files.

I also tried to inject the `devServer.headers` object in the Webpack configuration (see `gatsby-node.js` in this repo), but Gatsby seems to ignore that completely.

## Setup

```sh
npm i
npm run dev
```

Open Google Chrome and open the URL:  
https://localhost:8000/

See browser dev tools console for errors, like:

> GET https://localhost:8000/demo.worker.15e314536ac030283911.worker.js net::ERR_BLOCKED_BY_RESPONSE 200

Or the response of the `demo.worker.XXX.worker.js` in the browser dev tools network panel for a detailed error message.

> NOT-SET cross-origin-embedder-policy  
> **To embed this frame in your document, the response needs to enable the cross-origin embedder policy by specifying the following response header:**  
> `Cross-Origin-Embedder-Policy: require-corp`  

## How to verify that the Worker-communication works in general

To see that the worker communication works in general, remove setting of the headers in the `gatsby-node.js`. This will then result in the error `SharedArrayBuffer is not defined` in `./src/pages/index.tsx`.  

If you now also replace the `new SharedArrayBuffer(1)` there, by for example a string, the output will be

> Worker loaded successfully
