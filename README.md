# Gatsby Headers Demo

This is demo repository related to the Stack overflow question
"How to set HTTP headers for WebWorker files in Gatsby dev environment?"

https://stackoverflow.com/questions/71279262/how-to-set-http-headers-for-webworker-files-in-gatsby-dev-environment]

See `gatsby-config.js` for `developMiddleware` usage, and `gatsby-node.js` for `devServer.headers` usage.

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
